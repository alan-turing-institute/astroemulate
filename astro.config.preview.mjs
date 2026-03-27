// @ts-check
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown'
import mdx from '@astrojs/mdx';

// Configuration for PR previews on GitHub Pages
// https://astro.build/config
export default defineConfig({
    site: 'https://alan-turing-institute.github.io',
    base: '/astroemulate',
    markdown: {
        shikiConfig: {
            theme: 'everforest-light',
        },
    },
    integrations: [
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
        }),
        mdx(),
    ],
})
