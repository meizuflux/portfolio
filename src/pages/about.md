---
layout: "../layouts/Base.astro"
title: "about"
description: "some things about me"
---
<h1 style="text-align: center">about</h1>
### beginnings and bots
I started programming in early 2021 with Python.
When I started, I built a variety of Discord bots with the excellent [discord.py](https://github.com/rapptz/discord.py) library.
I invested signifigant time into building these bots with many features, including a working Todo List, many fun commands, and a full featured economy system.
I stopped developing bots for Discord when development on discord.py stopped. The way that Discord was treating its community developers was bad, and I didn't want to migrate my large bot (5k+ lines of code) over to a completely different system.

### web development
After I stopped building bots, I decided to learn a bit more about web development.
I experimented a lot, and I didn't really build much, but I did learn a lot about how websites work.
At some point in late September 2021, I decided I wanted a domain name, so I bought [meizuflux.com](https://meizuflux.com) and started work on a site.
For the backend of any experiments or projects, I primarily used Python with ASGI frameworks like Starlette.
When I needed to develop a frontend, I started using [Next.js](https://nextjs.org/) + [ChakraUI](https://chakra-ui.com/) as it was very beginner friendly.

### web development: continued
I continued on learning web development, focusing slightly more on frontend.
I discovered this amazing web framework called [Astro](https://astro.build) that I used to rebuild this website.
I really like the framework due to its intuitive style (similar to Next.js) but with zero JavaScript (like Hugo).
One other benefit of building this site is that I migrated from Git based Markdown to [GraphCMS](https://graphcms.com) which was another useful skill to learn.

### web development: even more continued
I began migrating things away from a JS/TS focused frontend to a Jinja2 based frontend with aiohttp on the backend.
I also like to use esbuild to bundle and package the minimal TS that I write to add basic functionality to my site.
I really like the idea of a regular MPA with TS sprinkled in to provide interactivity, and as I never really enjoyed my time with any of the JS frameworks I used, I think I'll be sticking with aiohttp + jinja for sites and astro for static sites.
