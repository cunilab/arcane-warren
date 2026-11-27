"""Audit generated site paths, fragment targets, images, titles and asset inventory."""
import json
import os
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

PROJECT = Path(__file__).resolve().parents[1]
ROOT = PROJECT / "out"
BASE_PATH = os.environ.get("NEXT_PUBLIC_BASE_PATH", "").rstrip("/")
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
pages = {p: parse(p) for p in ROOT.rglob("*.html")}
errors = []
count = 0
registry = json.loads((PROJECT / "site/assets.json").read_text())
content = json.loads((PROJECT / "site/content.json").read_text())
registered = {v["path"] for v in registry.values()}
routes = [
    "", "guide/", "architecture/", "keeper/", "lucerna/", "quests/",
    "circles/", "runes/", "grimoire/", "covenants/", "memory/",
]
routes += [f"circles/{circle['id']}/" for circle in content["circles"]]
for route in routes:
    if ROOT / f"{route}index.html" not in pages: errors.append(f"Missing page: /{route}")
for path, p in pages.items():
    name = path.relative_to(ROOT).as_posix()
    if p.h1 != 1 or p.title != 1 or not p.description: errors.append(f"{name}: missing or duplicate page metadata/headings")
    for id_, n in Counter(p.ids).items():
        if n > 1: errors.append(f"{name}: duplicate ID {id_}")
    for link in p.links:
        u = urlsplit(link)
        if u.scheme or u.netloc: continue
        raw = unquote(u.path)
        if raw.startswith("/"):
            if BASE_PATH and raw != BASE_PATH and not raw.startswith(f"{BASE_PATH}/"):
                errors.append(f"{name}: missing base path in {link}")
                continue
            target = ROOT / raw.removeprefix(BASE_PATH).lstrip("/")
        else:
            target = path.parent / raw if raw else path
        target = target.resolve()
        if not target.is_relative_to(ROOT):
            errors.append(f"{name}: reference leaves root")
            continue
        if target.is_dir(): target = target / "index.html"
        count += 1
        if not target.is_file(): errors.append(f"{name}: missing {link}"); continue
        if u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids: errors.append(f"{name}: missing fragment {link}")
    for im in p.images:
        if "alt" not in im or not im.get("width") or not im.get("height"): errors.append(f"{name}: image lacks alt or dimensions")
for key in registered:
    if not (PROJECT / key).is_file(): errors.append(f"Missing source artwork: {key}")
    if not (ROOT / key).is_file(): errors.append(f"Missing exported artwork: {key}")
print(f"Checked {len(pages)} HTML pages, {count} internal references and {len(registered)} registered assets.")
if errors:
    print("\n".join(errors))
    raise SystemExit(1)
print("PASS: static audit.")
