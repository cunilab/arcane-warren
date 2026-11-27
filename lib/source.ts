import { loader, update } from 'fumadocs-core/source';
import { pageSchema } from 'fumadocs-core/source/schema';
import { defineCollections, defineDocs } from 'fumadocs-mdx/macro';

const docs = defineDocs({ dir: 'content/handbook' });
const skills = defineCollections({
  type: 'doc',
  dir: 'skills',
  files: ['*/SKILL.md'],
  schema: pageSchema.omit({ title: true }).extend({
    name: pageSchema.shape.title,
    description: pageSchema.shape.title.trim().min(1),
  }).transform((data) => ({ ...data, title: data.name })),
});

export const skillEntries = skills.entries.map(({ name, description, info }) => {
  if (info.path !== `${name}/SKILL.md`) {
    throw new Error(`The frontmatter name "${name}" must match the folder name in skills/${info.path}.`);
  }
  return {
    name,
    description,
    audience: name === 'warren-covenant' ? 'Lucerna and workers'
      : name === 'warren' || name === 'warren-lucerna' ? 'Main session' : 'Worker',
  };
}).sort((a, b) => a.audience.localeCompare(b.audience) || a.name.localeCompare(b.name));

export const source = loader({
  baseUrl: '/',
  source: {
    handbook: docs.toFumadocsSource(),
    skills: update(skills.toFumadocsSource())
      .page((file) => ({
        ...file,
        path: `skills/${file.path.replace('/SKILL.md', '.md')}`,
      }))
      .build(),
    skillIndex: {
      files: [
        {
          type: 'page',
          path: 'skills/index.md',
          data: { title: 'Skills', description: 'Read the operating instructions for Lucerna and the Circles.' },
        },
        {
          type: 'meta',
          path: 'skills/meta.json',
          data: { pages: ['warren', 'warren-lucerna', 'warren-quest', '...'] },
        },
      ],
    },
  },
});
