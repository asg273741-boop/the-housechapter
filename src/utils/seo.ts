import { siteConfig } from '../config/site';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
}

export function formatTitle(pageTitle?: string): string {
  if (!pageTitle) {
    return `${siteConfig.siteName} — ${siteConfig.tagline}`;
  }
  return `${pageTitle} | ${siteConfig.siteName}`;
}

export function getCanonicalUrl(pathname: string): string {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  return cleanPath ? `${siteConfig.siteUrl}/${cleanPath}/` : `${siteConfig.siteUrl}/`;
}
