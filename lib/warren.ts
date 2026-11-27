import data from '@/site/content.json';
import registry from '@/site/rune-registry.json';
import assets from '@/site/assets.json';

export const { circles, principles, stages } = data;
export const { relics } = registry;
const { runes } = registry;
export const runeCount = runes.length;
type Circle = (typeof circles)[number];
const runesById = new Map(runes.map((rune) => [rune.id, rune]));

export function getCircle(id: string) {
  const circle = circles.find((record) => record.id === id);
  if (!circle) throw new Error(`Unknown Circle: ${id}`);
  return circle;
}

export function getArt(id: string): {
  src: string;
  label: string;
  width: number;
  height: number;
  description: string;
  alt?: string;
  caption?: string;
} {
  if (!Object.hasOwn(assets, id)) throw new Error(`Unknown artwork: ${id}`);
  const { path, ...art } = assets[id as keyof typeof assets];
  return { ...art, src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}` };
}

export function getCircleRunes(circle: Circle) {
  return circle.runeIds.map((id) => {
    const rune = runesById.get(id);
    if (!rune || rune.owner !== circle.id) throw new Error(`Invalid Rune ${id} for ${circle.name}`);
    return rune;
  });
}
