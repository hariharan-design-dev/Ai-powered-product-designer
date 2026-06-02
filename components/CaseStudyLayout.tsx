'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

export type CaseStudyProject = {
  number: string;
  title: string;
  accentWord: string;
  tags: string[];
  description: string;
  role: string;
  year: string;
  tools: string;
  status: string;
  prototypeUrl: string;
  liveSiteUrl?: string;
  nextHref: string;
  nextTitle: string;
  sections: {
    number: string;
    title: string;
    content: string[];
    quote?: string;
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
  learnings: string[];
  screenGrid?: 'two-column' | 'cheezy';
  screens: {
    src: string;
    alt: string;
    label: string;
    featured?: boolean;
    badge?: string;
  }[];
};

function highlightTitle(title: string, accentWord: string) {
  const index = title.lastIndexOf(accentWord);

  if (index === -1) {
    return title;
  }

  return (
    <>
      {title.slice(0, index)}
      <span className="text-accent">{accentWord}</span>
      {title.slice(index + accentWord.length)}
    </>
  );
}

function SectionBlock({
  number,
  title,
  content,
  quote,
  children,
}: CaseStudyProject['sections'][number] & {
  children?: ReactNode;
}) {
  return (
    <section className="mt-20">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-accent">{number}</span>
        <h2 className="font-display text-3xl leading-none tracking-display text-text-primary">
          {title}
        </h2>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="mt-8 space-y-6 font-sans text-base leading-[1.8] text-text-secondary">
        {content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {quote ? (
        <blockquote className="mt-8 border-l-[3px] border-accent bg-bg-secondary px-8 py-6 font-sans text-xl italic leading-8 text-text-primary">
          {quote}
        </blockquote>
      ) : null}

      {children}
    </section>
  );
}

export default function CaseStudyLayout({
  project,
}: {
  project: CaseStudyProject;
}) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-bg-primary text-text-primary">
      <section className="relative flex min-h-[70vh] overflow-hidden bg-bg-primary px-6 py-28 md:px-12">
        <span
          aria-hidden="true"
          className="absolute right-4 top-1/2 -translate-y-1/2 font-display text-[30vw] leading-none text-white/[0.02]"
        >
          {project.number}
        </span>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
            WORK / {project.title}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-8 max-w-5xl font-display text-[clamp(60px,10vw,140px)] leading-[0.85] tracking-display text-text-primary">
            {highlightTitle(project.title, project.accentWord)}
          </h1>

          <p className="mt-7 max-w-[600px] font-sans text-lg leading-8 text-text-secondary">
            {project.description}
          </p>

          <div className="mt-10 grid grid-cols-2 border border-border bg-bg-secondary md:grid-cols-4">
            {[
              ['ROLE', project.role],
              ['YEAR', project.year],
              ['TOOLS', project.tools],
              ['STATUS', project.status],
            ].map(([label, value]) => (
              <div className="border-border p-5 odd:border-r md:border-r md:last:border-r-0" key={label}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                  {label}
                </p>
                <p className="mt-3 font-sans text-sm text-text-primary">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              className="btn-primary"
              href={project.prototypeUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Prototype
            </a>
            {project.liveSiteUrl ? (
              <a
                className="btn-outline"
                href={project.liveSiteUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Live Site
              </a>
            ) : null}
            <Link
              className="font-sans text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
              href="/#work"
            >
              {'\u2190'} Back to work
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[800px] px-6 py-20">
        {project.sections.map((section) => {
          const isFinalProduct =
            section.title === 'THE FINAL PRODUCT' ||
            section.title === 'FINAL OUTCOME';
          const isImpact =
            section.title === 'IMPACT & RESULTS' ||
            section.title === 'FINAL OUTCOME';
          const isLearning = section.title === 'WHAT I LEARNED';

          return (
            <SectionBlock key={section.number} {...section}>
              {isFinalProduct ? (
                <div className="mt-10">
                  <h3 className="font-display text-3xl leading-none tracking-display text-text-primary">
                    UI SCREENS
                  </h3>
                  <div
                    className={`mt-6 grid grid-cols-1 gap-5 ${
                      project.screenGrid === 'cheezy'
                        ? 'md:grid-cols-3'
                        : 'md:grid-cols-2'
                    }`}
                  >
                    {project.screens.map((screen) => (
                      <div
                        className={`group relative aspect-[16/10] overflow-hidden border border-border bg-bg-secondary transition-all duration-300 hover:scale-[1.01] hover:border-accent ${
                          screen.featured
                            ? project.screenGrid === 'cheezy'
                              ? 'md:col-span-3'
                              : 'md:col-span-2'
                            : ''
                        }`}
                        key={screen.src}
                      >
                        <Image
                          alt={screen.alt}
                          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                          fill
                          sizes={
                            screen.featured
                              ? '(max-width: 768px) 100vw, 800px'
                              : '(max-width: 768px) 100vw, 400px'
                          }
                          src={screen.src}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-primary">
                            {screen.label}
                          </p>
                        </div>
                        {screen.badge ? (
                          <span className="absolute left-4 top-4 bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-black">
                            {screen.badge}
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  <a
                    className="mt-6 inline-flex font-sans text-sm text-accent transition-colors duration-200 hover:text-accent-hover"
                    href={project.prototypeUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View all screens in the prototype {'\u2192'}
                  </a>
                </div>
              ) : null}

              {isImpact ? (
                <div className="mt-10 border border-border bg-bg-secondary p-8">
                  <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="font-display text-6xl leading-none tracking-[0.02em] text-accent">
                          {metric.value}
                        </p>
                        <p className="mt-3 font-sans text-xs uppercase tracking-[0.18em] text-text-secondary">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {isLearning ? (
                <ol className="mt-8 space-y-5">
                  {project.learnings.map((learning, index) => (
                    <li
                      className="flex gap-5 font-sans text-base leading-[1.8] text-text-secondary"
                      key={learning}
                    >
                      <span className="font-mono text-sm text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ol>
              ) : null}
            </SectionBlock>
          );
        })}
      </div>

      <section className="border-y border-border bg-bg-secondary px-6 py-12 text-center md:px-12">
        <Link
          className="font-display text-5xl leading-none tracking-display text-text-primary transition-colors duration-200 hover:text-accent"
          href={project.nextHref}
        >
          NEXT PROJECT {'\u2192'}
        </Link>
        <p className="mt-4 font-sans text-sm text-text-secondary">
          {project.nextTitle}
        </p>
      </section>

      <button
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-[80] flex h-12 w-12 items-center justify-center bg-accent font-sans text-xl font-bold text-black transition-all duration-300 hover:bg-accent-hover ${
          showBackToTop
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {'\u2191'}
      </button>
    </main>
  );
}
