import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata.privacy;

export default function Datenschutz() {
  const lastUpdated = 'November 2025';

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header */}
        <SectionContainer className="py-16 md:py-24 bg-white">
          <PageHeader
            title="Datenschutzerklärung"
            subtitle="Informationen zum Umgang mit Ihren Daten"
          />
        </SectionContainer>

        {/* Main Content */}
        <SectionContainer className="max-w-4xl bg-white prose prose-slate">
          <article className="space-y-8">
            {/* Last Updated */}
            <div className="text-sm text-muted-text border-l-4 border-ink pl-4">
              Stand: {lastUpdated}
            </div>

            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                1. Einleitung
              </h2>
              <p className="text-muted-text leading-relaxed">
                Local Studios nimmt den Datenschutz ernst und schützt Ihre
                persönlichen Daten gewissenhaft. Diese Datenschutzerklärung
                informiert Sie darüber, wie wir Daten erfassen, verarbeiten und
                schützen.
              </p>
              <p className="text-muted-text leading-relaxed">
                Diese Datenschutzerklärung gilt für alle Services von Local
                Studios und erfüllt die Anforderungen des Schweizer
                Datenschutzgesetzes (DSG) und der Europäischen Datenschutz-Grundverordnung
                (GDPR), soweit anwendbar.
              </p>
            </section>

            {/* 2. Datenverantwortliche Stelle */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                2. Datenverantwortliche Stelle
              </h2>
              <div className="bg-mist p-6 rounded-lg space-y-2 text-sm">
                <p>
                  <strong>Local Studios</strong>
                </p>
                <p>
                  E-Mail: <a href="mailto:info@localstudios.ch" className="text-ink hover:text-ink/80 transition-colors">info@localstudios.ch</a>
                </p>
                <p>
                  Adresse: {/* TODO: Add company address */}
                  <span className="italic text-muted-text">[Adresse wird noch eingefügt]</span>
                </p>
                <p className="text-xs text-muted-text mt-4">
                  Für Fragen zum Datenschutz können Sie jederzeit Kontakt mit uns
                  aufnehmen.
                </p>
              </div>
            </section>

            {/* 3. Datenerfassung und Zweck */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                3. Datenerfassung und Verarbeitungszwecke
              </h2>

              <div className="space-y-6">
                {/* 3.1 Contact Form Data */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-ink">
                    3.1 Kontaktformular
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    Wenn Sie unser Kontaktformular ausfüllen, erfassen wir folgende
                    Daten:
                  </p>
                  <ul className="list-disc pl-5 text-muted-text space-y-2">
                    <li>Name</li>
                    <li>E-Mail-Adresse</li>
                    <li>Unternehmensname (optional)</li>
                    <li>Projektart</li>
                    <li>Ihre Nachricht</li>
                  </ul>
                  <p className="text-muted-text leading-relaxed">
                    <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage und
                    Kontaktaufnahme
                  </p>
                  <p className="text-muted-text leading-relaxed">
                    <strong>Rechtsgrundlage:</strong> Erfüllung Ihres Anfragezwecks
                    (DSG Art. 6 Abs. 1 lit. a, GDPR Art. 6 Abs. 1 lit. a)
                  </p>
                  <p className="text-muted-text leading-relaxed">
                    <strong>Speicherdauer:</strong> Die Daten werden 12 Monate nach
                    dem letzten Kontakt gespeichert und dann gelöscht.
                  </p>
                </div>

                {/* 3.2 Analytics */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-ink">
                    3.2 Analytics
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    {/* TODO: Confirm which analytics service is used */}
                    Wir nutzen Web-Analyse-Tools, um die Nutzung unserer Website zu
                    verstehen und zu optimieren.
                  </p>
                  <p className="text-muted-text leading-relaxed">
                    <strong>Erfasste Daten:</strong> IP-Adresse (anonymisiert),
                    Browser-Typ, Seiten-Aufrufe, Verweildauer
                  </p>
                  <p className="text-muted-text leading-relaxed">
                    <strong>Zweck:</strong> Website-Optimierung und Nutzungsanalyse
                  </p>
                  <p className="text-muted-text leading-relaxed">
                    <strong>Speicherdauer:</strong> Keine IP-Adressen werden
                    permanent gespeichert; Analyse-Daten werden nach 14 Monaten
                    automatisch gelöscht.
                  </p>
                </div>

                {/* 3.3 Server Logs */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-ink">
                    3.3 Server-Protokolle
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    Unser Hosting-Anbieter protokolliert automatisch Zugriffsdaten
                    (Timestamp, IP-Adresse, angeforderte Seite).
                  </p>
                  <p className="text-muted-text leading-relaxed">
                    <strong>Zweck:</strong> Sicherheit und Fehlerdiagnose
                  </p>
                  <p className="text-muted-text leading-relaxed">
                    <strong>Speicherdauer:</strong> 30 Tage
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                4. Cookies und Tracking
              </h2>

              <div className="space-y-3">
                <p className="text-muted-text leading-relaxed">
                  Cookies sind kleine Dateien, die auf Ihrem Gerät gespeichert
                  werden. Sie ermöglichen es uns, Sie wiederzuerkennen und Ihre
                  Präferenzen zu speichern.
                </p>

                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-ink">
                      Notwendige Cookies (ohne Zustimmung)
                    </h3>
                    <p className="text-muted-text leading-relaxed">
                      Diese Cookies sind für die Funktionalität unserer Website
                      erforderlich und können nicht deaktiviert werden.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-ink">
                      Analyse-Cookies (mit Zustimmung)
                    </h3>
                    <p className="text-muted-text leading-relaxed">
                      {/* TODO: Specify which analytics service */}
                      Wir verwenden Analytics-Cookies nur mit Ihrer ausdrücklichen
                      Zustimmung. Sie können diese jederzeit in Ihren
                      Browser-Einstellungen deaktivieren.
                    </p>
                  </div>
                </div>

                <p className="text-muted-text leading-relaxed text-sm italic mt-4">
                  Hinweis: Detaillierte Cookie-Informationen werden über unser
                  Cookie-Management-System bereitgestellt.
                </p>
              </div>
            </section>

            {/* 5. Third-Party Services */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                5. Externe Dienstleistungen und Datenübermittlungen
              </h2>

              <p className="text-muted-text leading-relaxed">
                Wir vertrauen auf externe Dienstleistungen, die möglicherweise
                Ihre Daten verarbeiten:
              </p>

              <div className="space-y-3">
                <div className="border-l-4 border-ink pl-4 space-y-2">
                  <h3 className="font-semibold text-ink">Hosting</h3>
                  <p className="text-muted-text leading-relaxed">
                    {/* TODO: Add hosting provider name */}
                    <span className="italic">[Hosting-Anbieter wird eingefügt]</span>
                  </p>
                  <p className="text-sm text-muted-text">
                    Standort: Schweiz / EU
                  </p>
                </div>

                <div className="border-l-4 border-ink pl-4 space-y-2">
                  <h3 className="font-semibold text-ink">E-Mail-Service</h3>
                  <p className="text-muted-text leading-relaxed">
                    {/* TODO: Add email service provider */}
                    <span className="italic">[E-Mail-Dienst wird eingefügt]</span>
                  </p>
                  <p className="text-sm text-muted-text">
                    Kontaktformular-Eingaben werden zur Bearbeitung übermittelt
                  </p>
                </div>

                <div className="border-l-4 border-ink pl-4 space-y-2">
                  <h3 className="font-semibold text-ink">Analytics</h3>
                  <p className="text-muted-text leading-relaxed">
                    {/* TODO: Specify analytics service */}
                    <span className="italic">[Analyse-Dienst wird eingefügt]</span>
                  </p>
                  <p className="text-sm text-muted-text">
                    Anonymisierte Nutzungsdaten
                  </p>
                </div>
              </div>

              <p className="text-muted-text leading-relaxed text-sm italic mt-4">
                Mit allen Dienstleistern haben wir Datenverarbeitungsvereinbarungen
                (DPA) abgeschlossen, die den Anforderungen der DSG und GDPR
                entsprechen.
              </p>
            </section>

            {/* 6. Data Protection & Security */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                6. Datenschutz und Sicherheit
              </h2>

              <p className="text-muted-text leading-relaxed">
                Wir implementieren angemessene technische und organisatorische
                Massnahmen zum Schutz Ihrer Daten:
              </p>

              <ul className="list-disc pl-5 text-muted-text space-y-2">
                <li>SSL/TLS-Verschlüsselung für alle Datenübertragungen</li>
                <li>Sichere Server-Infrastruktur</li>
                <li>Beschränkter Zugriff auf persönliche Daten</li>
                <li>Regelmässige Sicherheitsüberprüfungen</li>
                <li>Mitarbeiterschulung zu Datenschutz</li>
              </ul>

              <p className="text-muted-text leading-relaxed text-sm italic mt-4">
                Trotz aller Bemühungen können wir absolute Sicherheit nicht
                garantieren. Bitte informieren Sie uns sofort, falls Sie einen
                Verdacht auf Datenmissbrauch haben.
              </p>
            </section>

            {/* 7. User Rights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                7. Ihre Datenschutzrechte
              </h2>

              <p className="text-muted-text leading-relaxed">
                Gemäss DSG und GDPR haben Sie folgende Rechte:
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-ink">Recht auf Zugang</h3>
                  <p className="text-muted-text leading-relaxed">
                    Sie können jederzeit einsehen, welche personenbezogenen Daten
                    wir über Sie speichern.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-ink">Recht auf Berichtigung</h3>
                  <p className="text-muted-text leading-relaxed">
                    Sie können falsche oder unvollständige Daten korrigieren
                    lassen.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-ink">Recht auf Löschung</h3>
                  <p className="text-muted-text leading-relaxed">
                    Sie können die Löschung Ihrer Daten verlangen, sofern keine
                    gesetzlichen Aufbewahrungspflichten bestehen.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-ink">
                    Recht auf Einschränkung der Verarbeitung
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    Sie können verlangen, dass wir Ihre Daten einschränken.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-ink">Recht auf Datenportabilität</h3>
                  <p className="text-muted-text leading-relaxed">
                    Sie können Ihre Daten in einem strukturierten Format
                    erhalten.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-ink">
                    Recht auf Widerspruch
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    Sie können der Verarbeitung Ihrer Daten widersprechen.
                  </p>
                </div>
              </div>

              <p className="text-muted-text leading-relaxed text-sm mt-4">
                Um diese Rechte auszuüben, kontaktieren Sie uns unter:{' '}
                <a
                  href="mailto:info@localstudios.ch"
                  className="text-ink hover:text-ink/80 transition-colors"
                >
                  info@localstudios.ch
                </a>
              </p>
            </section>

            {/* 8. Data Retention */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                8. Speicherdauer
              </h2>

              <div className="space-y-3">
                <p className="text-muted-text leading-relaxed">
                  Wir speichern Ihre Daten nur so lange, wie es für den
                  angegebenen Zweck erforderlich ist oder wie es das Gesetz
                  vorsieht:
                </p>

                <ul className="list-disc pl-5 text-muted-text space-y-2">
                  <li>
                    <strong>Kontaktanfragen:</strong> 12 Monate nach letztem
                    Kontakt
                  </li>
                  <li>
                    <strong>E-Mails:</strong> 6 Monate nach Beantwortung
                  </li>
                  <li>
                    <strong>Analytics-Daten:</strong> 14 Monate
                  </li>
                  <li>
                    <strong>Server-Logs:</strong> 30 Tage
                  </li>
                  <li>
                    <strong>Geschäftsdaten:</strong> Gemäss Schweizer
                    Rechnungslegungsgesetze (mind. 7 Jahre)
                  </li>
                </ul>
              </div>
            </section>

            {/* 9. Changes to Privacy Policy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                9. Änderungen dieser Datenschutzerklärung
              </h2>

              <p className="text-muted-text leading-relaxed">
                Wir können diese Datenschutzerklärung jederzeit aktualisieren.
                Material-Änderungen werden Ihnen per E-Mail mitgeteilt oder auf
                dieser Seite deutlich gekennzeichnet. Bitte überprüfen Sie diese
                Seite regelmässig auf Aktualisierungen.
              </p>
            </section>

            {/* 10. Contact */}
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-ink">
                10. Kontakt
              </h2>

              <p className="text-muted-text leading-relaxed">
                Falls Sie Fragen zu dieser Datenschutzerklärung oder zum
                Datenschutz bei Local Studios haben, kontaktieren Sie uns bitte:
              </p>

              <div className="bg-mist p-6 rounded-lg space-y-2 text-sm">
                <p>
                  <strong>E-Mail:</strong>{' '}
                  <a
                    href="mailto:info@localstudios.ch"
                    className="text-ink hover:text-ink/80 transition-colors"
                  >
                    info@localstudios.ch
                  </a>
                </p>
                <p>
                  <strong>Betreff:</strong> Datenschutzanfrage
                </p>
                <p className="text-xs text-muted-text mt-4">
                  Ihre Anfrage wird vertraulich behandelt und von unserer
                  Datenschutzverantwortlichen Stelle bearbeitet.
                </p>
              </div>
            </section>

            {/* Legal Reference */}
            <section className="space-y-4 border-t pt-8 mt-8">
              <h2 className="text-lg font-semibold text-ink">
                Rechtliche Grundlagen
              </h2>
              <ul className="list-disc pl-5 text-muted-text space-y-2 text-sm">
                <li>
                  Bundesgesetz über den Datenschutz (DSG), SR 235.1
                </li>
                <li>
                  Verordnung (EU) 2016/679 – Datenschutz-Grundverordnung (GDPR)
                </li>
                <li>
                  Bundesgesetz gegen den unlauteren Wettbewerb (UWG)
                </li>
                <li>
                  Bundesgesetz betreffend die Überwachung des Post- und
                  Fernmeldeverkehrs (BÜPF)
                </li>
              </ul>
            </section>
          </article>
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
}
