// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// 1. Set your GitHub Pages project repo name here:
	base: '/my-astro-site/',
	// 2. (Optional but recommended) the full URL of the published site:
	site: 'https://ficeskele.github.io/my-astro-site/',
	integrations: [mdx(), sitemap()],
	outDir: 'docs',
});
