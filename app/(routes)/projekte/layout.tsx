import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata.projects;

export default function ProjekteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
