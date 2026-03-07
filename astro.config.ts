import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

const primarySiteDomain = 'project-board-demo.studiocms.dev';

// https://astro.build/config
export default defineConfig({
  site: `https://${primarySiteDomain}`,
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  security: {
    allowedDomains: [
      // Replace this value with your deployment provider's Environment variable for the deployment URL, if available for Preview deployments.
      ...(process.env.DOKPLOY_DEPLOY_URL
        ? [
          {
            hostname: process.env.DOKPLOY_DEPLOY_URL,
            protocol: 'https:',
          },
        ]
        : [
          {
            hostname: primarySiteDomain,
            protocol: 'https:',
          },
          {
            hostname: 'localhost',
            protocol: 'http:',
          },
        ]),
    ]
  },
});