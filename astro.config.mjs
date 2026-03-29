import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const site = process.env.PUBLIC_SITE_URL || 'https://netcom.cl';

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
    // Sessions deshabilitadas: no necesarias para un sitio corporativo.
    // Habilitar cuando se integre autenticación/CRM con KV binding.
    sessions: false,
  }),
  integrations: [tailwind(), sitemap()],
});