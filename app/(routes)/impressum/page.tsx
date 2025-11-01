import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { AlertCircle, ExternalLink } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata.imprint;

export default function Impressum() {
  const lastUpdated = 'November 2025';

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header */}
        <SectionContainer className="py-16 md:py-24 bg-white">
          <PageHeader
            title="Impressum"
            subtitle="Rechtliche Angaben"
          />
        </SectionContainer>

        {/* Main Content */}
        <SectionContainer className="max-w-4xl bg-white prose prose-slate">
          <article className="space-y-8">
            {/* Last Updated */}
            <div className="text-sm text-muted-text border-l-4 border-ink pl-4">
              Stand: {lastUpdated}
            </div>

            {/* 1. Company Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                1. Unternehmensangaben
              </h2>

              <div className="bg-mist p-6 rounded-lg space-y-4 text-sm">
                <div>
                  <p className="text-xs text-muted-text uppercase tracking-wide mb-1">
                    Unternehmensname
                  </p>
                  <p className="font-semibold text-ink text-lg">Local Studios</p>
                </div>

                <div>
                  <p className="text-xs text-muted-text uppercase tracking-wide mb-1">
                    Geschäftssitz / Adresse
                  </p>
                  <p className="text-muted-text">
                    {/* TODO: Add company address */}
                    <span className="italic">[Adresse wird noch eingefügt]</span>
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-text uppercase tracking-wide mb-1">
                    UID-Nummer / CHE-Nummer
                  </p>
                  <p className="text-muted-text">
                    {/* TODO: Add company VAT/CHE number */}
                    <span className="italic">[CHE-Nummer wird noch eingefügt]</span>
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-text uppercase tracking-wide mb-1">
                    E-Mail
                  </p>
                  <p>
                    <a
                      href="mailto:info@localstudios.ch"
                      className="text-ink hover:text-ink/80 transition-colors font-medium"
                    >
                      info@localstudios.ch
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-text uppercase tracking-wide mb-1">
                    Telefon
                  </p>
                  <p className="text-muted-text">
                    <span className="italic">[Telefonnummer wird noch eingefügt]</span>
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-text uppercase tracking-wide mb-1">
                    Geschäftszeiten
                  </p>
                  <p className="text-muted-text">
                    Montag – Freitag: 09:00 – 17:00 Uhr (CET)
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Responsible Party */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                2. Vertretungsberechtigte Person
              </h2>

              <div className="bg-white border border-mist rounded-lg p-6 space-y-2 text-sm">
                <p className="text-muted-text">
                  <strong>Name:</strong>{' '}
                  <span className="italic">[Name wird noch eingefügt]</span>
                </p>
                <p className="text-muted-text">
                  <strong>Funktion:</strong>{' '}
                  <span className="italic">[Funktion wird noch eingefügt]</span>
                </p>
                <p className="text-xs text-muted-text mt-4">
                  {/* TODO: Add responsible party info */}
                  Geschäftsführer oder Vertreter mit Vertretungsbefugnis.
                </p>
              </div>
            </section>

            {/* 3. Rechtliche Struktur */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                3. Rechtliche Struktur
              </h2>

              <div className="space-y-3">
                <p className="text-muted-text leading-relaxed">
                  Local Studios ist ein Schweizer Unternehmen und unterliegt dem
                  Schweizerischen Recht, insbesondere:
                </p>

                <ul className="list-disc pl-5 text-muted-text space-y-2 text-sm">
                  <li>Schweizer Obligationenrecht (OR)</li>
                  <li>Schweizer Datenschutzgesetz (DSG)</li>
                  <li>
                    Bundesgesetz gegen unlauteren Wettbewerb (UWG)
                  </li>
                  <li>Handelsgesetzbuch der Kantone</li>
                </ul>
              </div>
            </section>

            {/* 4. Regulatory Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                4. Haftungsausschluss
              </h2>

              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-4">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                  <p className="text-sm text-yellow-800">
                    Die Inhalte dieser Website werden nach bestem Wissen erstellt.
                    Wir übernehmen jedoch keine Gewähr für die Aktualität,
                    Korrektheit und Vollständigkeit der Inhalte.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-ink">
                    4.1 Haftung für Inhalte
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    Die auf dieser Website bereitgestellten Inhalte (Texte, Grafiken,
                    Code, etc.) wurden sorgfältig erstellt. Wir haften jedoch nicht
                    für:
                  </p>
                  <ul className="list-disc pl-5 text-muted-text space-y-2 text-sm">
                    <li>Unvollständigkeit oder Unrichtigkeit der Inhalte</li>
                    <li>Verlust oder Beschädigung von Daten</li>
                    <li>
                      Ausfälle, Verzögerungen oder andere Leistungsmängel
                    </li>
                    <li>
                      Direkte oder indirekte Schäden aus der Nutzung dieser
                      Website
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-ink">
                    4.2 Haftung für Links
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    Diese Website enthält Links zu Websites Dritter. Wir sind nicht
                    verantwortlich für:
                  </p>
                  <ul className="list-disc pl-5 text-muted-text space-y-2 text-sm">
                    <li>
                      Verfügbarkeit oder Funktionalität von Drittseiten-Websites
                    </li>
                    <li>Inhalte von Drittseiten-Websites</li>
                    <li>
                      Datenschutzpraktiken oder rechtliche Compliance von
                      Drittanbietern
                    </li>
                  </ul>
                  <p className="text-muted-text leading-relaxed text-sm italic mt-3">
                    Bitte überprüfen Sie die Datenschutzerklärung und Nutzungsbedingungen
                    von Drittseiten-Websites vor deren Nutzung.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-ink">
                    4.3 Haftung für urheberrechtliche Inhalte
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    Alle Inhalte (Texte, Grafiken, Logos, Bilder, Audio-, Video-Dateien,
                    etc.) sind geschützt durch Urheberrecht und andere
                    Schutzgesetze. Sie dürfen nur mit ausdrücklicher Genehmigung
                    verwendet werden.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Copyright and Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                5. Urheberrecht und geistiges Eigentum
              </h2>

              <div className="space-y-4">
                <p className="text-muted-text leading-relaxed">
                  Sofern nicht anders angegeben, gehören alle Inhalte dieser
                  Website (einschliesslich Design, Grafiken, Bilder, Code und Text)
                  Local Studios oder lizenzierten Inhaltsanbietern.
                </p>

                <div className="space-y-2">
                  <h3 className="font-semibold text-ink">Erlaubte Nutzung</h3>
                  <p className="text-muted-text leading-relaxed">
                    Sie dürfen diese Website für persönliche, nicht-kommerzielle
                    Zwecke nutzen. Jede andere Nutzung – insbesondere Kopieren,
                    Verbreitung, Modifizierung oder kommerzielle Nutzung – ist ohne
                    vorherige schriftliche Genehmigung untersagt.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-ink">Marken</h3>
                  <p className="text-muted-text leading-relaxed">
                    "Local Studios" und andere Marken dieser Website sind Marken
                    oder eingetragene Marken von Local Studios. Ihre Verwendung ohne
                    Genehmigung ist nicht gestattet.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-ink">Verstösse melden</h3>
                  <p className="text-muted-text leading-relaxed">
                    Falls Sie urheberrechtliche Verstösse oder Markenrechtsverletzungen
                    feststellen, kontaktieren Sie uns sofort unter:
                  </p>
                  <p className="text-ink font-medium">
                    <a
                      href="mailto:info@localstudios.ch"
                      className="hover:text-ink/80 transition-colors"
                    >
                      info@localstudios.ch
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Data Protection & GDPR */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                6. Datenschutz
              </h2>

              <p className="text-muted-text leading-relaxed">
                Local Studios nimmt Datenschutz ernst. Für detaillierte Informationen
                über die Erfassung, Verarbeitung und den Schutz Ihrer persönlichen
                Daten lesen Sie bitte unsere{' '}
                <a
                  href="/datenschutz"
                  className="text-ink hover:text-ink/80 transition-colors font-medium"
                >
                  Datenschutzerklärung
                </a>
                .
              </p>

              <div className="bg-mist p-4 rounded-lg text-sm">
                <p className="text-muted-text">
                  <strong>Compliance:</strong> Diese Website ist konform mit:
                </p>
                <ul className="list-disc pl-5 text-muted-text space-y-1 mt-2 text-sm">
                  <li>
                    Schweizer Datenschutzgesetz (DSG)
                  </li>
                  <li>
                    Datenschutz-Grundverordnung (GDPR) der EU
                  </li>
                  <li>
                    Bundesgesetz gegen unlauteren Wettbewerb (UWG)
                  </li>
                </ul>
              </div>
            </section>

            {/* 7. Online Dispute Resolution */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                7. Online-Streitbeilegung
              </h2>

              <div className="space-y-4">
                <p className="text-muted-text leading-relaxed">
                  Die EU stellt eine Plattform zur Online-Streitbeilegung (OS-Plattform)
                  bereit:
                </p>

                <div className="bg-white border border-mist rounded-lg p-4">
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-ink/80 transition-colors font-medium flex items-center gap-2"
                  >
                    <span>ec.europa.eu/consumers/odr</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-muted-text leading-relaxed text-sm">
                  In der Schweiz können Verbraucher auch die Ombudsstelle des
                  Schweizer Handels (SHV) oder andere lokale Schlichtstellen
                  kontaktieren.
                </p>
              </div>
            </section>

            {/* 8. Dispute Resolution & Legal Jurisdiction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                8. Anwendbares Recht und Gerichtsbarkeit
              </h2>

              <div className="space-y-4">
                <p className="text-muted-text leading-relaxed">
                  Diese Website und alle Inhalte unterliegen Schweizer Recht.
                </p>

                <div className="space-y-3">
                  <h3 className="font-semibold text-ink">Anwendbares Recht</h3>
                  <p className="text-muted-text leading-relaxed">
                    Alle Ansprüche und Streitigkeiten werden nach Schweizer Recht
                    beurteilt, insbesondere nach:
                  </p>
                  <ul className="list-disc pl-5 text-muted-text space-y-2 text-sm">
                    <li>
                      Schweizerisches Zivilgesetzbuch (ZGB)
                    </li>
                    <li>
                      Obligationenrecht (OR)
                    </li>
                    <li>
                      Bundesgesetz gegen unlauteren Wettbewerb (UWG)
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-ink">Gerichtsstand</h3>
                  <p className="text-muted-text leading-relaxed">
                    Alle Streitigkeiten unterliegen der ausschliesslichen Gerichtsbarkeit
                    der zuständigen Schweizer Gerichte, insbesondere dem Kanton
                    Zürich, sofern nicht zwingende gesetzliche Vorschriften etwas
                    anderes vorsehen.
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Disclaimer for Professional Services */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                9. Haftungsausschluss für professionelle Dienstleistungen
              </h2>

              <p className="text-muted-text leading-relaxed">
                Sollte Local Studios professionelle Beratung oder Dienstleistungen
                erbringen, wird diese auf Basis einer separaten Vereinbarung erbracht.
                Diese Haftungsausschlüsse gelten nicht für:
              </p>

              <ul className="list-disc pl-5 text-muted-text space-y-2">
                <li>Vereinbarte Dienstleistungen gemäss Vertrag</li>
                <li>Garantien, die in separaten Dienstleistungsvereinbarungen festgehalten sind</li>
                <li>Verletzungen von Gesetzen oder Verordnungen</li>
              </ul>

              <p className="text-muted-text leading-relaxed text-sm italic mt-4">
                Bitte kontaktieren Sie uns für detaillierte Servicevereinbarungen
                und spezifische Haftungsregelungen.
              </p>
            </section>

            {/* 10. Modification of Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                10. Änderungen dieser Angaben
              </h2>

              <p className="text-muted-text leading-relaxed">
                Wir behalten uns das Recht vor, dieses Impressum jederzeit
                aktualisieren zu dürfen. Änderungen werden auf dieser Seite
                veröffentlicht. Bitte überprüfen Sie diese Seite regelmässig auf
                Aktualisierungen.
              </p>
            </section>

            {/* 11. Contact for Legal Matters */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                11. Kontakt für rechtliche Angelegenheiten
              </h2>

              <p className="text-muted-text leading-relaxed">
                Falls Sie Fragen zu diesem Impressum oder rechtliche Bedenken haben,
                kontaktieren Sie uns bitte:
              </p>

              <div className="bg-mist p-6 rounded-lg space-y-3 text-sm">
                <div>
                  <p className="text-xs text-muted-text uppercase tracking-wide mb-1">
                    E-Mail
                  </p>
                  <p>
                    <a
                      href="mailto:info@localstudios.ch"
                      className="text-ink hover:text-ink/80 transition-colors font-medium"
                    >
                      info@localstudios.ch
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-text uppercase tracking-wide mb-1">
                    Betreff
                  </p>
                  <p className="text-muted-text">Rechtliche Angelegenheiten</p>
                </div>

                <p className="text-xs text-muted-text mt-4">
                  Bitte geben Sie an, um welches Anliegen es sich handelt, damit wir
                  Ihre Anfrage schnell weiterleiten können.
                </p>
              </div>
            </section>

            {/* 12. Additional Information */}
            <section className="space-y-4 border-t pt-8 mt-8">
              <h2 className="text-lg font-semibold text-ink">
                Weitere Informationen
              </h2>

              <div className="space-y-3 text-sm">
                <p>
                  <strong>Datenschutzerklärung:</strong>{' '}
                  <a
                    href="/datenschutz"
                    className="text-ink hover:text-ink/80 transition-colors"
                  >
                    /datenschutz
                  </a>
                </p>
                <p>
                  <strong>Kontakt:</strong>{' '}
                  <a
                    href="/kontakt"
                    className="text-ink hover:text-ink/80 transition-colors"
                  >
                    /kontakt
                  </a>
                </p>
                <p>
                  <strong>Über uns:</strong>{' '}
                  <a
                    href="/ueber-uns"
                    className="text-ink hover:text-ink/80 transition-colors"
                  >
                    /ueber-uns
                  </a>
                </p>
              </div>
            </section>
          </article>
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
}
