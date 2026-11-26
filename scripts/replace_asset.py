"""Install existing artwork and regenerate all shared page references."""
import argparse
import json
from pathlib import Path
import shutil
import subprocess
import sys

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("placeholder", help="Current registered path or asset ID")
parser.add_argument("image", type=Path, help="Existing SVG, PNG, JPG, JPEG or WebP")
args = parser.parse_args()
registry_path = root / "site/assets.json"
registry = json.loads(registry_path.read_text(encoding="utf-8"))
key = next((k for k, v in registry.items() if k == args.placeholder or v["path"] == args.placeholder), None)
if key is None:
    parser.error("Unknown asset; see assets/ASSET-MANIFEST.md.")
source = args.image.resolve()
suffix = source.suffix.lower()
if suffix not in {".svg", ".png", ".jpg", ".jpeg", ".webp"} or not source.is_file():
    parser.error("Provide an existing SVG, PNG, JPG, JPEG or WebP file.")
if not shutil.which("node"):
    parser.error("Node.js is required to regenerate the website.")
old = root / registry[key]["path"]
new = old.with_suffix(suffix)
if source != new.resolve():
    shutil.copyfile(source, new)
registry[key]["path"] = new.relative_to(root).as_posix()
registry_path.write_text(json.dumps(registry, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
subprocess.run(["node", str(root / "site/build.mjs")], cwd=root, check=True)
print(f"Updated {key}: {registry[key]['path']}")
