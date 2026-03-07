import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

const primarySiteDomain = process.env.NODE_ENV === 'production'
  ? process.env.DOKPLOY_DEPLOY_URL : 'project-board-demo.studiocms.dev';

// https://astro.build/config
export default defineConfig({
  site: `https://${primarySiteDomain}`,
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  security: {
    allowedDomains: process.env.NODE_ENV === 'production' ? [
      {
        hostname: primarySiteDomain,
        protocol: 'https:',
      },
    ] : [
      {
        hostname: 'localhost',
        protocol: 'http:',
      }
    ]
  },
});