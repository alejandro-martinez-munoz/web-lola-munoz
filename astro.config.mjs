// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.centrodeesteticalolamunoz.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/v1'), // Exclude legacy V1 page from sitemap
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
