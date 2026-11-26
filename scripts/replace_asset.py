"""Replace a registered placeholder with an existing image. No artwork generation."""
import argparse
import json
import os
from pathlib import Path
import shutil

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("placeholder", help="Registered repository-relative asset path")
parser.add_argument("image", type=Path, help="Existing SVG, PNG, JPG, JPEG or WebP")
args = parser.parse_args()
manifest_path = root / "assets/asset-manifest.json"
manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
key = Path(args.placeholder).as_posix()
if key not in manifest:
    parser.error("Unknown asset; see assets/ASSET-MANIFEST.md.")
source = args.image.resolve()
suffix = source.suffix.lower()
mime = {".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp"}
if suffix not in mime or not source.is_file():
    parser.error("Provide an existing SVG, PNG, JPG, JPEG or WebP file.")
old = root / key
new = old.with_suffix(suffix)
if source != new.resolve():
    shutil.copyfile(source, new)
new_key = new.relative_to(root).as_posix()
info = manifest[key]
for name in info["pages"]:
    page = root / name
    before = os.path.relpath(old, page.parent).replace(os.sep, "/")
    after = os.path.relpath(new, page.parent).replace(os.sep, "/")
    html = page.read_text(encoding="utf-8")
    html = html.replace('href="' + before + '" type="' + mime[old.suffix] + '"', 'href="' + after + '" type="' + mime[suffix] + '"')
    html = html.replace('src="' + before + '"', 'src="' + after + '"')
    page.write_text(html, encoding="utf-8")
if key != new_key:
    del manifest[key]
    manifest[new_key] = info
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    guide = root / "assets/ASSET-MANIFEST.md"
    guide.write_text(guide.read_text(encoding="utf-8").replace("`" + key + "`", "`" + new_key + "`"), encoding="utf-8")
print(f"Updated {len(info['pages'])} page(s): {new_key}")
