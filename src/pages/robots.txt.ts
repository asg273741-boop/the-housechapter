import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = () => {
  const robots = `User-agent: *
Allow: /

# Exclude internal search query URLs from crawler bloat
Disallow: /search?*
Disallow: /api/*

Sitemap: ${siteConfig.siteUrl}/sitemap-index.xml
`;

  return new Response(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
