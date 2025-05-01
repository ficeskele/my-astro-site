// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const repoName = '/my-astro-site/';

export default defineConfig({
  // Only use the repo-name base when in a production build
  base: import.meta.env.PROD ? repoName : '/',
  site: 'https://ficeskele.github.io/my-astro-site/',
  integrations: [mdx(), sitemap()],
  outDir: 'docs',
});