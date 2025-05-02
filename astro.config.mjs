// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const repoName = '/my-astro-site';

export default defineConfig({
	site: 'https://ficeskele.github.io/',
	integrations: [mdx(), sitemap()],
	outDir: 'docs',
});