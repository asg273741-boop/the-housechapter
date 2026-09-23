import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles');
  const now = new Date().toISOString();

  // Core static pages
  const staticPages = [
    { loc: `${siteConfig.siteUrl}/`, changefreq: 'daily', priority: '1.0', lastmod: now },
    { loc: `${siteConfig.siteUrl}/about/`, changefreq: 'monthly', priority: '0.7', lastmod: now },
    { loc: `${siteConfig.siteUrl}/contact/`, changefreq: 'monthly', priority: '0.6', lastmod: now },
    { loc: `${siteConfig.siteUrl}/privacy/`, changefreq: 'yearly', priority: '0.3', lastmod: now },
    { loc: `${siteConfig.siteUrl}/terms/`, changefreq: 'yearly', priority: '0.3', lastmod: now },
    { loc: `${siteConfig.siteUrl}/search/`, changefreq: 'weekly', priority: '0.5', lastmod: now },
  ];

  // Pillar & category landing pages
  const categoryPages = Object.values(siteConfig.categories).map((cat) => ({
    loc: `${siteConfig.siteUrl}/${cat.slug}/`,
    changefreq: 'weekly',
    priority: cat.isSpecialty ? '0.9' : '0.8',
    lastmod: now,
  }));

  // Article detail pages
  const articlePages = articles.map((article) => ({
    loc: `${siteConfig.siteUrl}/${article.data.category}/${article.slug}/`,
    changefreq: 'weekly',
    priority: article.data.featured ? '0.9' : '0.8',
    lastmod: new Date(article.data.updatedAt || article.data.publishedAt).toISOString(),
  }));

  const allUrls = [...staticPages, ...categoryPages, ...articlePages];

  const urlEntries = allUrls
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
};
