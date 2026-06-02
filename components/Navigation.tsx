'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(scrollTop > 0);
      setScrollProgress(
        scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0,
      );
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[100] h-0.5 bg-accent transition-[width] duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed left-0 top-0 z-[90] w-full border-b transition-colors duration-300 ${
          isScrolled
            ? 'border-border bg-bg-primary'
            : 'border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
          <button
            aria-label="Scroll to top"
            className="group flex items-center gap-3 rounded-none border-0 bg-transparent p-0"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-display text-[28px] leading-none tracking-display text-text-primary">
              HARI
            </span>
            <span className="h-1.5 w-1.5 bg-accent transition-transform duration-200 group-hover:scale-150" />
            <span className="font-display text-[28px] leading-none tracking-display text-accent">
              HARAN
            </span>
          </button>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="group relative rounded-none border-0 bg-transparent p-0 font-sans text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                type="button"
                onClick={() => scrollToSection(link.href)}
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100" />
              </button>
            ))}
          </div>

          <button
            className="btn-primary hidden md:inline-flex"
            type="button"
            onClick={() => scrollToSection('#contact')}
          >
            Let&apos;s Talk
          </button>

          <button
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-none border-0 bg-transparent text-text-primary md:hidden"
            type="button"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu aria-hidden="true" size={28} strokeWidth={2} />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[95] bg-bg-primary transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button
          aria-label="Close navigation menu"
          className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-none border-0 bg-transparent text-text-primary"
          type="button"
          onClick={() => setIsMenuOpen(false)}
        >
          <X aria-hidden="true" size={32} strokeWidth={2} />
        </button>

        <div className="flex min-h-screen flex-col justify-center px-8">
          <div className="mb-14 flex items-center gap-3">
            <span className="font-display text-[28px] leading-none tracking-display text-text-primary">
              HARI
            </span>
            <span className="h-1.5 w-1.5 bg-accent" />
            <span className="font-display text-[28px] leading-none tracking-display text-accent">
              HARAN
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="border-l-4 border-transparent bg-transparent py-1 pl-6 text-left font-display text-5xl leading-none tracking-display text-text-primary transition-colors duration-200 hover:border-accent"
                type="button"
                onClick={() => scrollToSection(link.href)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
