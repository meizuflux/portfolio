import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const posts = await getCollection("posts");
	return rss({
		title: "meizuflux",
		description: "post when i feel like it (never)",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.created,
			description: post.data.description,
			link: `/posts/${post.slug}/`,
		})),
		customData: `<language>en-us</language>`,
	});
}
