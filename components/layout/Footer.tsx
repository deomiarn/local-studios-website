import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { label: 'Custom Web Development', href: '#' },
    { label: 'Software Solutions', href: '#' },
    { label: 'Technical Consulting', href: '#' },
  ];

  const companyLinks = [
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Projekte', href: '/projekte' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  const legalLinks = [
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'Impressum', href: '/impressum' },
  ];

  const LinkItem = ({ href, label }: { href: string; label: string }) => (
    <li>
      <Link
        href={href}
        className="text-sm text-muted-text hover:text-ink transition-colors duration-200"
      >
        {label}
      </Link>
    </li>
  );

  return (
    <footer className="w-full bg-mist">
      <div className="container-wide py-16">
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Column 1: Leistungen */}
          <div>
            <h3 className="font-semibold text-ink text-base mb-4">Leistungen</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <LinkItem key={link.href} {...link} />
              ))}
            </ul>
          </div>

          {/* Column 2: Unternehmen */}
          <div>
            <h3 className="font-semibold text-ink text-base mb-4">Unternehmen</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <LinkItem key={link.href} {...link} />
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-semibold text-ink text-base mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <LinkItem key={link.href} {...link} />
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-muted-text text-center">
            © {currentYear} Local Studios. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
