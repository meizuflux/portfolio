import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://meizuflux.com",
    output: "static",
    prefetch: {
        prefetchAll: true,
        defaultStrategy: "viewport"
    },
    build: {
        format: "preserve",
    },
    experimental: {
        clientPrerender: true,
        fonts: [{
            provider: fontProviders.google(),
            name: "Chivo",
            cssVariable: "--font-chivo",
            subsets: ["latin"],
            weights: [400],
        }]
    },
    integrations: [sitemap()]
});
