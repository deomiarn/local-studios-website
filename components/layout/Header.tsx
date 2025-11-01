'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Leistungen', href: '/leistungen' },
    { label: 'Projekte', href: '/projekte' },
    { label: 'Über uns', href: '/ueber-uns' },
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const mobileMenuContentVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: { y: -20, opacity: 0, transition: { staggerChildren: 0.05, reverseOrder: true } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 h-[60px]">
      <div className="container-wide h-full">
        <nav className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="/"
            className="font-medium text-ink text-xl tracking-tight font-display whitespace-nowrap"
            aria-label="Local Studios home"
          >
            LOCAL STUDIOS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-ink underline decoration-1 underline-offset-4'
                    : 'text-ink hover:underline decoration-1 underline-offset-4'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="brand-primary" size="default">
              <Link href="/kontakt">Kontakt</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <motion.div
              className="flex flex-col gap-1.5 w-6"
              animate={isMenuOpen ? 'open' : 'closed'}
            >
              <motion.span
                className="h-0.5 w-full bg-ink"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 10 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="h-0.5 w-full bg-ink"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="h-0.5 w-full bg-ink"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -10 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[60px] z-40 md:hidden bg-mist"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="container-wide flex flex-col items-center justify-start py-12 gap-8"
              variants={mobileMenuContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-ink hover:opacity-70 transition-opacity"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              {navItems.map((item) => (
                <motion.div key={item.href} variants={linkVariants}>
                  <Link
                    href={item.href}
                    className={`block text-center text-2xl font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-ink underline decoration-2 underline-offset-4'
                        : 'text-ink'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA Button */}
              <motion.div variants={linkVariants} className="mt-8">
                <Button
                  asChild
                  variant="brand-primary"
                  size="lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/kontakt">Kontakt</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
