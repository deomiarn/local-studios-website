import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata.home;

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="container-wide py-20">
          <h1 className="mb-6">Welcome to Local Studios</h1>
          <p className="text-body-large text-muted-text max-w-2xl">
            Creative studio for digital design and development. We craft
            beautiful, functional digital experiences.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
