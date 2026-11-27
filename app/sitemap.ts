import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const root = 'https://cunilab.github.io/arcane-warren';
  return [{ url: `${root}/` }, ...source.getPages().map(({ url }) => ({ url: `${root}${url}/` }))];
}
