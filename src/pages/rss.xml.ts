import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles');
  const sorted = [...articles].sort(
    (a, b) => new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime()
  );

  const rssItems = sorted
    .map((article) => {
      const pubDate = new Date(article.data.publishedAt).toUTCString();
      const link = `${siteConfig.siteUrl}/${article.data.category}/${article.slug}/`;

      return `
    <item>
      <title><![CDATA[${article.data.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${article.data.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${article.data.category}]]></category>
      <author>${siteConfig.socialLinks.email} (${article.data.author})</author>
    </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.siteName}</title>
    <description>${siteConfig.description}</description>
    <link>${siteConfig.siteUrl}</link>
    <atom:link href="${siteConfig.siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>The House Chapter Custom Engine</generator>
${rssItems}
  </channel>
</rss>`;

  return new Response(rss.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
