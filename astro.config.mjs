// @ts-check
import { defineConfig } from 'astro/config';
import { astroFont } from 'astro-font/integration';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/Apollo-Org-Homepage/',
  site: 'https://the-a-p-o-l-l-o-organization.github.io/Apollo-Org-Homepage/',
  integrations: [astroFont()],
});
