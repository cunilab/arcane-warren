import { notFound } from 'next/navigation';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { SkillDirectory } from '@/components/handbook';
import { skillEntries, source } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';

export const dynamicParams = false;

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: PageProps<'/[...slug]'>) {
  const page = source.getPage((await params).slug);
  if (!page) notFound();
  return { title: page.data.title, description: page.data.description };
}

export default async function HandbookPage({ params }: PageProps<'/[...slug]'>) {
  const slug = (await params).slug;
  const page = source.getPage(slug);
  if (!page) notFound();
  if (page.type === 'skillIndex') {
    return (
      <DocsPage>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody><SkillDirectory skills={skillEntries} /></DocsBody>
      </DocsPage>
    );
  }

  const Content = page.data.body;
  const hideHeading = (slug.length === 2 && slug[0] === 'circles')
    || (slug.length === 1 && (slug[0] === 'keeper' || slug[0] === 'lucerna' || slug[0] === 'memory'));

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} className={page.type === 'skills' ? 'warren-skill' : undefined}>
      {hideHeading ? null : <DocsTitle>{page.data.title}</DocsTitle>}
      {hideHeading ? null : <DocsDescription>{page.data.description}</DocsDescription>}
      <DocsBody>
        <Content components={getMDXComponents({ a: createRelativeLink(source, page) })} />
      </DocsBody>
    </DocsPage>
  );
}
