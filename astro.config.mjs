// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  base: 'https://swumplurd.github.io/swumplurd/',
  output: 'static',
  integrations: [tailwind(), react(), icon(), mdx()]
});