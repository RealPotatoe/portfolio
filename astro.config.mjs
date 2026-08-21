// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://mbengel.dev",
    integrations: [svelte()],
    i18n: {
        locales: ["en", "de"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: false,
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
