'use client';

import Image from 'next/image';

const stats = [
  { value: '04', label: 'Projects' },
  { value: '100%', label: 'Shipped' },
  { value: '2024\u2013', label: 'Active' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/hariharan-design-dev',
    text: 'Gh',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hari-haran-m-2a625925a',
    text: 'In',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/harisdesigns.studio',
    text: 'Ig',
  },
];

const marqueeText =
  'UI/UX DESIGN \u00B7 AI PRODUCT DESIGN \u00B7 AI POWERED PRODUCT DESIGNER \u00B7 FULL STACK DEVELOPMENT \u00B7 FIGMA \u00B7 NEXT.JS \u00B7 ';

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen overflow-hidden bg-bg-primary pt-20 text-text-primary">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <p
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 text-center font-display text-[clamp(80px,15vw,200px)] leading-none tracking-display text-white/[0.02]"
      >
        PRODUCT DESIGNER
      </p>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 pb-28 pt-12 md:grid-cols-[minmax(0,3fr)_minmax(280px,2fr)] md:items-center md:px-12 md:pt-6">
        <div className="flex flex-col items-start">
          <p className="section-label">
            AI POWERED PRODUCT DESIGNER
          </p>

          <h1 className="mt-7 font-display text-[clamp(60px,15vw,120px)] leading-[0.85] tracking-[0.02em] md:text-[clamp(80px,12vw,160px)]">
            <span className="block text-text-primary">HARI</span>
            <span className="block text-accent">HARAN</span>
          </h1>

          <p className="mt-7 max-w-[500px] font-sans text-lg leading-8 text-text-secondary">
            I design AI-powered digital products that solve real problems{' '}
            {'\u2014'} from research and systems thinking to interactive
            prototypes and shipped code.
          </p>

          <div className="mt-10 grid w-full max-w-[520px] grid-cols-3 border-y border-border py-5">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex min-h-[76px] flex-col justify-center ${
                  index === 0
                    ? 'pr-4'
                    : index === stats.length - 1
                      ? 'border-l border-border pl-4'
                      : 'border-l border-border px-4'
                }`}
              >
                <span className="font-display text-4xl leading-none tracking-[0.02em] text-text-primary md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 font-sans text-xs uppercase tracking-[0.18em] text-text-secondary">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <button className="btn-primary" type="button" onClick={scrollToWork}>
              View My Work
            </button>
            <button className="btn-outline" type="button" onClick={scrollToWork}>
              View Prototype Demos
            </button>
          </div>

          <div className="mt-8 flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                aria-label={link.label}
                className="flex h-7 w-7 items-center justify-center rounded-none font-mono text-sm font-bold text-text-muted transition-colors duration-200 hover:text-accent"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] md:ml-auto">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,255,136,0.06)_0%,rgba(0,255,136,0)_68%)]"
          />

          <div className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-bg-card">
            <Image
              alt="Hari Haran profile portrait"
              className="object-cover object-top"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              src="/images/profile/hero-photo.png"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
            <span className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-accent" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-accent" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 h-10 w-full overflow-hidden bg-accent">
        <div className="hero-marquee-track flex h-full w-max items-center whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, index) => (
            <span
              key={index}
              className="font-display text-base leading-none tracking-[0.1em] text-black"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
