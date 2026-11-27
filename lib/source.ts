import { loader } from 'fumadocs-core/source';
import { defineDocs } from 'fumadocs-mdx/macro';

const docs = defineDocs({ dir: 'content/handbook' });

export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
});
