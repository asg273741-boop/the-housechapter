import { siteConfig } from '../config/site';

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.siteUrl}/search/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/brand/the-house-chapter-logo.svg`,
    sameAs: [
      siteConfig.socialLinks.pinterest,
      siteConfig.socialLinks.instagram,
    ],
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item.startsWith('http') ? crumb.item : `${siteConfig.siteUrl}${crumb.item}`,
    })),
  };
}

export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  heroImage: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
}

export function generateArticleSchema({
  title,
  description,
  url,
  heroImage,
  publishedAt,
  updatedAt,
  authorName,
}: ArticleSchemaProps) {
  const imageUrl = heroImage.startsWith('http')
    ? heroImage
    : `${siteConfig.siteUrl}${heroImage}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    description: description,
    image: [imageUrl],
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: {
      '@type': 'Person',
      name: authorName,
      url: `${siteConfig.siteUrl}/about/`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/brand/the-house-chapter-logo.svg`,
      },
    },
  };
}

export function generateFaqSchema(faqList: { question: string; answer: string }[]) {
  if (!faqList || faqList.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
