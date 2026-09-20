import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles');

  const searchData = articles.map((article) => ({
    title: article.data.title,
    description: article.data.description,
    slug: article.slug,
    category: article.data.category,
    subcategory: article.data.subcategory,
    readingTime: article.data.readingTime,
    heroImage: article.data.heroImage,
    specialty: article.data.specialty,
    keywords: article.data.keywords,
    tags: article.data.tags,
  }));

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
