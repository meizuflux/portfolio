import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://meizuflux.com",
  output: "static",
  prefetch: {
    defaultStrategy: "hover"
  },
  
  markdown: {
    shikiConfig: {
        theme: "catppuccin-frappe", // see: https://shiki.style/themes
        /*langs: [
            'js',
            "python",
            "shellscript",
        ]*/
    }
  },
  build: {
    inlineStylesheets: "never"
  },
  experimental: {
    clientPrerender: true,
  },
  integrations: [sitemap(), mdx()]
});