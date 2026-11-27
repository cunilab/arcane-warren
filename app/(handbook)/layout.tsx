import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { getArt } from '@/lib/warren';

export default function HandbookLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={{
        title: (
          <>
            <img className="warren-mark" src={getArt('brand/mark').src} alt="" width={28} height={28} />
            <span className="warren-wordmark">Arcane Warren</span>
          </>
        ),
        url: '/',
      }}
      themeSwitch={{ enabled: false }}
    >
      {children}
    </DocsLayout>
  );
}
