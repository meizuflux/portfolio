#!/usr/bin/python
import pathlib
import subprocess

def fix_stat_time(time_string: str) -> str:
    date, time, _ = time_string.split(" ", maxsplit=2)
    time = time.split(".", maxsplit=1)[0]
    return f"{date.replace('-', '/')} at {time}"

for post in pathlib.Path("./src/pages/posts").rglob("*.md"):
    updated = ""
    with post.open(encoding="utf-8") as f:
        lines = f.readlines()
        created, modified = subprocess.Popen(["stat", "-c %w|%y", str(post)], stdout=subprocess.PIPE).communicate()[0].decode("utf-8").lstrip(" ").rstrip("\n").split("|")
        created = fix_stat_time(created)
        modified = fix_stat_time(modified)
        for line in lines:
            line = line.strip()
            
            if line.startswith("created: "):
                line = f"created: \"{created}\""

            if line.startswith("modified: "):
                line = f"modified: \"{modified}\""

            updated += f"{line}\n"

    with post.open(encoding="utf-8", mode="w") as f:
        f.write(updated)

    print("updated", str(post))