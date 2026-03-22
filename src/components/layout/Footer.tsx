import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Our Work', href: '#models' },
    { name: 'The Material', href: '#material' },
    { name: 'Process', href: '#features' },
    { name: 'Investment', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-background text-foreground pt-24 pb-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center font-serif font-bold text-xl text-accent-foreground">
              C
            </div>
            <span className="font-serif font-bold text-3xl tracking-tight text-white">Cubic Homes</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">Rockhampton, QLD</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground hover:text-accent transition-colors"
          >
            Privacy
          </a>
        </nav>

        <div className="w-full pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            © {currentYear} Cubic Homes · Rockhampton, QLD
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">焼き杉 · Shou Sugi Ban Specialists</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
