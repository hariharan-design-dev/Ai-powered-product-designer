const socialLinks = [
  {
    mark: 'Gh',
    label: 'GITHUB',
    href: 'https://github.com/hariharan-design-dev',
  },
  {
    mark: 'In',
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/hari-haran-m-2a625925a',
  },
  {
    mark: 'Ig',
    label: 'INSTAGRAM',
    href: 'https://www.instagram.com/harisdesigns.studio',
  },
];

export default function Contact() {
  return (
    <>
      <section
        className="relative flex min-h-[60vh] items-center overflow-hidden bg-bg-primary px-6 py-24 text-text-primary md:px-12 md:py-32"
        id="contact"
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,255,136,0.04)_0%,rgba(0,255,136,0)_70%)]"
        />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="section-label">CONTACT</p>

          <h2 className="mt-5 font-display text-[clamp(60px,10vw,140px)] leading-[0.85] tracking-display">
            <span className="block text-text-primary">LET&apos;S BUILD</span>
            <span className="block text-accent">SOMETHING.</span>
          </h2>

          <p className="mt-8 max-w-[500px] font-sans text-lg leading-8 text-text-secondary">
            Open to UI/UX roles, AI product design positions, and teams building
            meaningful products with AI. Let&apos;s talk.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="group inline-flex items-center gap-3 font-sans text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="flex h-7 w-7 items-center justify-center border border-border font-mono text-xs font-bold text-text-muted transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                  {link.mark}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1A1A1A] bg-bg-primary px-6 py-8 text-center md:px-12 md:text-left">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <p className="font-display text-xl leading-none tracking-display text-text-primary">
              HARI HARAN
            </p>
            <p className="mt-2 font-sans text-xs text-text-muted">
              UI/UX Designer {'\u00B7'} AI Product Designer
            </p>
          </div>

          <p className="font-sans text-xs text-text-muted">
            Designed &amp; built by Hari Haran {'\u00B7'} 2025
          </p>
        </div>
      </footer>
    </>
  );
}
