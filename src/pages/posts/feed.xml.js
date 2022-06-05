import rss from '@astrojs/rss';

const postImportResult = import.meta.globEager('./*.md');
const posts = Object.values(postImportResult);

export const get = () => rss({
    title: "meizuflux's blog",
    description: 'me writing whatever i want pretty much',
    site: "https://meizuflux.com",
    stylesheet: "/pretty-feed-v3.xsl",
    items: posts.map((post) => ({
      link: post.url,
      site: "test",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.created,
    }))
  });