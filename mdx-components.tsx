import type { MDXComponents } from 'mdx/types';
import defaultComponents from 'fumadocs-ui/mdx';
import {
  CircleDirectory, CircleProfile, ExpeditionTimeline, PlaceholderImage, PracticePrinciples, RelicCatalog, RoleHero, RuneCatalog, SceneHero,
} from '@/components/handbook';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    CircleDirectory, CircleProfile, ExpeditionTimeline, PlaceholderImage, PracticePrinciples, RelicCatalog, RoleHero, RuneCatalog, SceneHero,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;
