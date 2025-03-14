// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://autoemulate.co.uk',
    base: '/astroemulate',
    markdown: {
        shikiConfig: {
            theme: 'everforest-light',
        },
    },
})
