import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  site: 'https://raisilhamn.github.io',
  base: '/astro-tailwind'
});