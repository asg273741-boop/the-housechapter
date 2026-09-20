export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 220;
  const clean = content.replace(/<\/?[^>]+(>|$)/g, '').replace(/#|\*|_|`|\[|\]|\(|\)/g, '');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${Math.max(1, minutes)} min read`;
}
