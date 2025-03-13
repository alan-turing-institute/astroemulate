// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://alan-turing-institute.github.io',
    base: '/astroemulate',
    markdown: {
        shikiConfig: {
            theme: 'everforest-light',
        },
    },
})
