import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import mdsvexUrlToImport from './mdsvexplugins/mdsvex-url-to-import.js';

const config = defineConfig({
    extensions: ['.svelte.md', '.md', '.svx'],
    smartypants: {
        dashes: 'oldschool',
    },

    remarkPlugins: [
        mdsvexUrlToImport,
    ],
    rehypePlugins: [],
});

export default config;
