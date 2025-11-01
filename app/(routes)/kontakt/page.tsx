'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Mail, Linkedin } from 'lucide-react';

// Zod validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z
    .string()
    .email('Ungültige E-Mail-Adresse'),
  company: z
    .string()
    .optional()
    .or(z.literal('')),
  projectType: z
    .enum(['Web Development', 'Software Solution', 'Technical Consulting', 'Anderes']),
  message: z
    .string()
    .min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
});

type FormValues = z.infer<typeof formSchema>;

export default function Kontakt() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      projectType: undefined,
      message: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      // Log form data to console (Phase 1 - no backend yet)
      console.log('Form submitted:', values);

      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success state
      setSubmitSuccess(true);

      // Reset form
      form.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Section 1: Page Header */}
        <SectionContainer className="py-16 md:py-24 bg-white">
          <PageHeader
            title="Kontakt"
            subtitle="Lassen Sie uns über Ihr Projekt sprechen"
          />
        </SectionContainer>

        {/* Section 2: Contact Form */}
        <SectionContainer className="py-20 bg-white max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column: Form (60%) */}
            <div className="md:col-span-2">
              {submitSuccess ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-900">
                        Danke für Ihre Nachricht!
                      </h3>
                      <p className="text-sm text-green-800">
                        Wir melden uns innerhalb von 24 Stunden.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Name Field */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-ink">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Max Mustermann"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email Field */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-ink">
                            E-Mail
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="max@beispiel.ch"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Company Field */}
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-ink">
                            Unternehmen (optional)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ihre Firma AG"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Project Type Field */}
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-ink">
                            Projektart
                          </FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              disabled={isSubmitting}
                              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            >
                              <option value="">
                                Bitte wählen Sie eine Option
                              </option>
                              <option value="Web Development">
                                Web Development
                              </option>
                              <option value="Software Solution">
                                Software Solution
                              </option>
                              <option value="Technical Consulting">
                                Technical Consulting
                              </option>
                              <option value="Anderes">Anderes</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message Field */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-ink">
                            Nachricht
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Beschreiben Sie kurz Ihr Projekt..."
                              rows={6}
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="brand-primary"
                      size="lg"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                    </Button>
                  </form>
                </Form>
              )}
            </div>

            {/* Right Column: Contact Info (40%) */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-ink">
                  Direkter Kontakt
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-text mb-1">E-Mail</p>
                    <a
                      href="mailto:info@localstudios.ch"
                      className="text-ink font-medium hover:text-ink/80 transition-colors"
                    >
                      info@localstudios.ch
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-text mb-1">Telefon</p>
                    <p className="text-ink font-medium">+41 XX XXX XX XX</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-ink">
                  Antwortzeit
                </h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  Wir antworten in der Regel innerhalb von 24 Stunden.
                </p>
              </div>

              {/* Office Location */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-ink">
                  Standort
                </h3>
                <div className="space-y-2 text-sm text-muted-text">
                  <p>Schweiz, Zürich Region</p>
                  <p>CET Timezone (GMT+1)</p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Section 3: Alternative Contact Methods */}
        <SectionContainer className="py-16 bg-mist max-w-4xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-display font-bold text-ink">
                Weitere Kontaktmöglichkeiten
              </h2>
              <p className="text-muted-text leading-relaxed max-w-2xl mx-auto">
                Sie können uns auch direkt per E-Mail erreichen oder über
                LinkedIn kontaktieren.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Card */}
              <a
                href="mailto:info@localstudios.ch"
                className="group"
              >
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-ink flex items-center justify-center group-hover:bg-ink/90 transition-colors">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ink group-hover:text-ink/80 transition-colors">
                          E-Mail
                        </h3>
                        <p className="text-sm text-muted-text">
                          info@localstudios.ch
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* LinkedIn Card */}
              <a
                href="#"
                className="group"
              >
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full opacity-60">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-ink flex items-center justify-center group-hover:bg-ink/90 transition-colors">
                        <Linkedin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ink group-hover:text-ink/80 transition-colors">
                          LinkedIn
                        </h3>
                        <p className="text-sm text-muted-text">
                          Folgen Sie uns
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
}
