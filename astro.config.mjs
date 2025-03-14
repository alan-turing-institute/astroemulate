// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://autoemulate.com',
    base: '/astroemulate',
    markdown: {
        shikiConfig: {
            theme: 'everforest-light',
        },
    },
})
