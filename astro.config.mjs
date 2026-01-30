// @ts-check
import {defineConfig} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // TODO: Cambiar por tu dominio real antes de deployar
  site: 'https://tudominio.com',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});