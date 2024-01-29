import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
    site: "https://meizuflux.com",
    //output: "static",
    markdown: {
        syntaxHighlight: "prism"
    },
    //build: {
        //format: "file"
    //},
    integrations: [sitemap()],
    //prefetch: true
});
