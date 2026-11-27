"""Refresh the generated Rune lists in Circle skills."""

import argparse
import json
from collections import defaultdict
from pathlib import Path

PROJECT = Path(__file__).resolve().parents[1]
BEGIN = "[//]: # (BEGIN GENERATED RUNES)\n"
END = "[//]: # (END GENERATED RUNES)\n"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Check lists without writing.")
    check = parser.parse_args().check

    runes = defaultdict(list)
    for rune in json.loads((PROJECT / "site/rune-registry.json").read_text())["runes"]:
        runes[rune["owner"]].append(rune)

    skills = {
        path.parent.name.removeprefix("warren-circle-"): path
        for path in (PROJECT / "skills").glob("warren-circle-*/SKILL.md")
    }
    if runes.keys() != skills.keys():
        parser.error(f"Rune owners and Circle skills differ: {sorted(runes.keys() ^ skills.keys())}")

    stale = []
    for circle, path in sorted(skills.items()):
        original = path.read_bytes().decode("utf-8")
        if original.count(BEGIN) != 1 or original.count(END) != 1 or original.index(BEGIN) > original.index(END):
            parser.error(f"{path}: expected one ordered pair of generated Rune markers")

        start = original.index(BEGIN) + len(BEGIN)
        end = original.index(END)
        entries = "".join(
            f"- **{rune['name']}** (`{rune['id']}`). {rune['description']}\n"
            for rune in runes[circle]
        )
        updated = f"{original[:start]}\n{entries}\n{original[end:]}"
        if original != updated:
            if check:
                stale.append(circle)
            else:
                path.write_bytes(updated.encode("utf-8"))
        print(f"{circle}: {len(runes[circle])} Runes")

    if stale:
        parser.error(f"regenerate Rune lists for: {', '.join(stale)}")


if __name__ == "__main__":
    main()
