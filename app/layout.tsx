import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './warren.css';

const description = 'A field guide to human-directed AI collaboration by Cunilab.';

function brandFile(name: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/images/brand/${name}`;
}

const shareImage = {
  url: '/assets/images/brand/share.png',
  width: 1200,
  height: 630,
  alt: 'Arcane Warren. Many paths. Shared discoveries.',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cunilab.github.io/arcane-warren'),
  title: { default: 'Arcane Warren', template: '%s | Arcane Warren' },
  description,
  icons: {
    icon: [
      // With a base path, Next drops the app/favicon.ico link once icons are set here.
      ...(process.env.NEXT_PUBLIC_BASE_PATH
        ? [{ url: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`, sizes: 'any', type: 'image/x-icon' }]
        : []),
      { url: brandFile('mark-32.png'), sizes: '32x32', type: 'image/png' },
      { url: brandFile('mark.png'), sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: brandFile('apple-touch-icon.png'), sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: 'Arcane Warren',
    description,
    siteName: 'Arcane Warren',
    images: [shareImage],
  },
  twitter: {
    card: 'summary_large_image',
    images: [shareImage],
  },
};

export const viewport: Viewport = { themeColor: '#100d17' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider theme={{ enabled: false }} search={{ enabled: false }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
