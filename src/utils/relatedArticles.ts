import type { CollectionEntry } from 'astro:content';

type ArticleEntry = CollectionEntry<'articles'>;

export function getRelatedArticles(
  currentArticle: ArticleEntry,
  allArticles: ArticleEntry[],
  limit: number = 4
): ArticleEntry[] {
  // Exclude current article
  const pool = allArticles.filter((article) => article.slug !== currentArticle.slug);

  // Score articles by editorial relevance
  const scored = pool.map((article) => {
    let score = 0;

    // 1. Same subcategory (highest affinity, e.g. "Small Entryways" to "Small Entryways")
    if (
      article.data.subcategory &&
      currentArticle.data.subcategory &&
      article.data.subcategory.toLowerCase() === currentArticle.data.subcategory.toLowerCase()
    ) {
      score += 40;
    }

    // 2. Same primary category (e.g. "entryways-hallways")
    if (article.data.category === currentArticle.data.category) {
      score += 25;
    }

    // 3. Shared tags
    if (article.data.tags && currentArticle.data.tags) {
      const sharedTags = article.data.tags.filter((t) =>
        currentArticle.data.tags.includes(t)
      );
      score += sharedTags.length * 5;
    }

    // 4. Specialty editorial pillar connection
    // If current article is entryway or related, slightly favor specialty articles
    if (currentArticle.data.specialty && article.data.specialty) {
      score += 10;
    }

    return { article, score };
  });

  // Sort by score descending, then by publication date descending
  scored.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return new Date(b.article.data.publishedAt).getTime() - new Date(a.article.data.publishedAt).getTime();
  });

  return scored.slice(0, limit).map((s) => s.article);
}
