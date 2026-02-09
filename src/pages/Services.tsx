// src/pages/Services.tsx
import React, { useState } from 'react';
import {
  Briefcase,
  Code,
  Cpu,
  Globe,
  Smartphone,
  Layout,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

type ServicesProps = {
  darkMode?: boolean;
};

const servicesData = [
  {
    id: 'web-development',
    icon: <Code size={20} />,
    title: 'Web Development',
    description:
      'Build responsive, performant websites and SPAs using modern React tooling, accessible markup, and SEO-friendly patterns.',
    bullets: ['React / Vite / CRA', 'Component-driven UI', 'SSR / SSG options'],
  },
  {
    id: 'mobile-apps',
    icon: <Smartphone size={20} />,
    title: 'Mobile & PWAs',
    description:
      'Progressive Web Apps and cross-platform mobile UI patterns that feel native on mobile devices.',
    bullets: ['PWA setup', 'Responsive UIs', 'Offline-first strategies'],
  },
  {
    id: 'ui-ux',
    icon: <Layout size={20} />,
    title: 'UI / UX & Design Systems',
    description:
      'Design systems, pixel-perfect UI, and component libraries to scale your product design consistently.',
    bullets: ['Design tokens', 'Accessible components', 'Storybook-ready'],
  },
  {
    id: 'infra',
    icon: <Cpu size={20} />,
    title: 'Infrastructure & DevOps',
    description:
      'Deploy pipelines, monitoring, and cloud optimizations to keep your product resilient and fast.',
    bullets: ['CI/CD', 'Hosting & scaling', 'Monitoring & alerts'],
  },
  {
    id: 'ecommerce',
    icon: <Briefcase size={20} />,
    title: 'E-commerce & Payments',
    description:
      'Full checkout flows, payment gateway integration, and inventory + order management.',
    bullets: ['Razorpay / Stripe', 'Order management', 'Secure checkout'],
  },
  {
    id: 'seo',
    icon: <Globe size={20} />,
    title: 'SEO & Performance',
    description:
      'Speed audits, structured data, and on-page SEO to increase visibility and conversion.',
    bullets: ['Lighthouse optimizations', 'Meta & OG', 'Schema markup'],
  },
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Small projects (landing pages, small sites) can take 1–3 weeks; medium projects (multi-page sites, ecommerce) typically 4–12 weeks depending on complexity.',
  },
  {
    q: 'Do you provide design and prototyping?',
    a: 'Yes — we provide UX wireframes and high-fidelity prototypes. We can also work with your existing Figma/Sketch files.',
  },
  {
    q: 'What does the process look like?',
    a: 'Discovery → Design → Development → QA → Launch → Support. Each phase includes reviews and iterations.',
  },
];

const Services: React.FC<ServicesProps> = ({ darkMode = true }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div id="services" className="scroll-mt-24">
      {/* Hero */}
      <section className={`py-20 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
            Our Services
          </h1>
          <p className={`max-w-3xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            We build modern web products — from landing pages and marketing sites to complex e-commerce platforms and
            performant SPAs. Below are the core services we provide.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-red-500 hover:bg-red-600 text-white font-medium shadow"
            >
              Get a Quote
            </a>
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-md border ${darkMode ? 'border-zinc-700 text-gray-200' : 'border-gray-200 text-gray-700'}`}
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className={`py-16 ${darkMode ? 'bg-zinc-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((s) => (
              <div
                key={s.id}
                className={`p-6 rounded-2xl border ${darkMode ? 'bg-zinc-950/60 border-zinc-800' : 'bg-white border-gray-200'} shadow-sm`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
                    {s.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{s.title}</h3>
                </div>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{s.description}</p>

                <ul className={`mb-4 space-y-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {s.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-sm font-medium underline-offset-2 hover:underline"
                  >
                    Start this service
                  </a>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-gray-400"
                    onClick={(e) => {
                      // if you plan anchor details, prevent default only if needed
                      // e.preventDefault();
                    }}
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className={`py-16 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Why choose us?</h2>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              We combine product thinking with technical craft — shipping solutions that customers enjoy using and
              that are maintainable long-term.
            </p>

            <ul className={`space-y-4`}>
              <li className={`flex items-start gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="p-2 rounded bg-red-500/10 text-red-500">
                  <Globe size={18} />
                </div>
                <div>
                  <div className="font-semibold">Global best practices</div>
                  <div className="text-sm">Accessibility, performance, and secure defaults baked in.</div>
                </div>
              </li>

              <li className={`flex items-start gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="p-2 rounded bg-red-500/10 text-red-500">
                  <Code size={18} />
                </div>
                <div>
                  <div className="font-semibold">Clean, testable code</div>
                  <div className="text-sm">Component-driven development, unit tests, and CI pipelines.</div>
                </div>
              </li>

              <li className={`flex items-start gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="p-2 rounded bg-red-500/10 text-red-500">
                  <Briefcase size={18} />
                </div>
                <div>
                  <div className="font-semibold">Business-focused</div>
                  <div className="text-sm">We measure impact and prioritize features that move metrics.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl p-6 shadow-md border hidden md:block" aria-hidden>
            {/* simple visual card */}
            <div className={`h-64 rounded-lg ${darkMode ? 'bg-zinc-900/60 border border-zinc-800' : 'bg-gray-50 border border-gray-200'}`} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-16 ${darkMode ? 'bg-zinc-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Frequently asked questions</h3>

          <div className="space-y-4">
            {faqs.map((f, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={f.q}
                  className={`border rounded-lg overflow-hidden ${darkMode ? 'border-zinc-800 bg-zinc-950/50' : 'border-gray-200 bg-white'}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${idx}`}
                  >
                    <span className={`${darkMode ? 'text-gray-200' : 'text-gray-900'} font-medium`}>{f.q}</span>
                    <span className="ml-4">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`faq-${idx}`} className={`px-4 pb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-12 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Ready to start?</h4>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tell us about your project — we’ll propose the next steps.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-red-500 hover:bg-red-600 text-white font-medium shadow"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
