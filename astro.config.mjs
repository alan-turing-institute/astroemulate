// @ts-check
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown'
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://autoemulate.com',
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
