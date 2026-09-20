import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://thehousechapter.com',
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

