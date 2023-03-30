from datetime import datetime
from sys import argv

def get_filename(date: datetime, title: str) -> str:
    return f"src/pages/posts/{date.strftime("%Y-%m-%d")}-{title.replace(" ", "-").lower()}.md"

def get_formatted_date(date: datetime) -> str:
    return date.strftime("%Y %B %d %H:%M:%S")

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


now = datetime.now()


filename = get_filename(now, title)
content = """---
title: "{title}"
layout: "../../layouts/Post.astro"
created: "{date}"
modified: "{date}"
---
""".format(title=title, date=get_formatted_date(now))


with open(filename, "w") as file:
    file.write(content)

print("Created", filename)

