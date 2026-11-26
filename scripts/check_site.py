"""Audit generated site paths, fragment targets, images, titles and asset inventory."""
import json
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]
PREFIX = "/arcane-warren/"
class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []
        self.images = []
        self.ids = []
        self.h1 = 0
        self.title = 0
        self.description = False
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a: self.ids.append(a["id"])
        if tag == "h1": self.h1 += 1
        if tag == "title": self.title += 1
        if tag == "meta" and a.get("name") == "description": self.description = True
        for key in ("href", "src"):
            if key in a: self.links.append(a[key])
        if tag == "img": self.images.append(a)
def parse(path):
    p = Page()
    p.feed(path.read_text(encoding="utf-8"))
    return p
pages = {p.resolve():parse(p) for p in ROOT.rglob("*.html") if ".git" not in p.parts and "node_modules" not in p.parts}
errors = []
count = 0
actual = {}
registry = json.loads((ROOT / "site/assets.json").read_text())
manifest = json.loads((ROOT / "assets/asset-manifest.json").read_text())
registered = {v["path"] for v in registry.values()}
for path, p in pages.items():
    name = path.relative_to(ROOT).as_posix()
    if p.h1 != 1 or p.title != 1 or not p.description: errors.append(f"{name}: missing or duplicate page metadata/headings")
    for id_, n in Counter(p.ids).items():
        if n > 1: errors.append(f"{name}: duplicate ID {id_}")
    for link in p.links:
        u = urlsplit(link)
        if u.scheme or u.netloc: continue
        raw = unquote(u.path)
        if raw.startswith(PREFIX): target = ROOT / raw[len(PREFIX):]
        elif raw.startswith("/"): errors.append(f"{name}: invalid root URL {link}"); continue
        else: target = path.parent / raw if raw else path
        target = target.resolve()
        if target.is_dir(): target = target / "index.html"
        count += 1
        if not target.is_file(): errors.append(f"{name}: missing {link}"); continue
        if u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids: errors.append(f"{name}: missing fragment {link}")
        try: relative = target.relative_to(ROOT).as_posix()
        except ValueError: errors.append(f"{name}: reference leaves root"); continue
        if relative in registered: actual.setdefault(relative,set()).add(name)
    for im in p.images:
        if "alt" not in im or not im.get("width") or not im.get("height"): errors.append(f"{name}: image lacks alt or dimensions")
for key in registered:
    if not (ROOT / key).is_file(): errors.append(f"Missing registered artwork: {key}")
    if set(manifest.get(key,{}).get("pages",[])) != actual.get(key,set()): errors.append(f"Manifest mismatch: {key}")
print(f"Checked {len(pages)} HTML pages, {count} internal references and {len(registered)} registered assets.")
if errors:
    print("\n".join(errors))
    raise SystemExit(1)
print("PASS: static audit.")
