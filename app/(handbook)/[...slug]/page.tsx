import { notFound } from 'next/navigation';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
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
        <DocsBody>
          <section className="not-prose warren-panel warren-skill mb-4" aria-labelledby="skills-install">
            <h2 id="skills-install" className="text-xl">Install</h2>
            <CodeBlock className="my-2 bg-fd-background">
              <Pre className="w-full whitespace-pre-wrap ps-3 pe-10"><code>npx skills add cunilab/arcane-warren</code></Pre>
            </CodeBlock>
            <p>Install all {skillEntries.length} skills together. Lucerna pastes the Quest, Covenant, and Circle skills into each worker brief.</p>
            <p>Lucerna uses Cairn Memory for the remembered model list and the Chronicle. If Cairn is unavailable, Lucerna tells the Keeper once and continues without those records.</p>
          </section>
          <SkillDirectory skills={skillEntries} />
        </DocsBody>
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
