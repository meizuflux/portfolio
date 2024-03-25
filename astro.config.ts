import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://meizuflux.com",
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
  integrations: [sitemap(), mdx()]
});