from datetime import datetime
from sys import argv

def get_filename(date: str, title: str) -> str:
    return f"src/content/posts/{date}-{title.replace(" ", "-").lower()}.md"

title = " ".join(argv[1:])
print("Using title: ", title)
confirmation = input("Confirm [y/n] (y): ")
if confirmation.lower() in ("y", "yes", ""):
    pass
elif confirmation.lower() in ("n", "no"):
    print("Exiting")
    quit()
else:
    print("Unknown Input")
    quit(1)


now = datetime.now().strftime("%Y-%m-%d")


filename = get_filename(now, title)
content = """---
title: "{title}"
description: ""
readingTime: 0
created: {date}
modified: {date}
---
""".format(title=title, date=now)


with open(filename, "w") as file:
    file.write(content)

print("Created", filename)

