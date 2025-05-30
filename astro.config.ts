import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://meizuflux.com",
    output: "static",
    prefetch: true,
    
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
        format: "preserve",
        inlineStylesheets: "never"
    },
    experimental: {
        clientPrerender: true,
        fonts: [{
            provider: fontProviders.google(),
            name: "Chivo",
            cssVariable: "--font-chivo",
        }]
    },
    integrations: [sitemap()]
});
