import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata.services;

export default function LeistungenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
