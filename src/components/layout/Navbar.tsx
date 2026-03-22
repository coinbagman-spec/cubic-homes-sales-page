import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Work', href: '#models' },
    { name: 'The Material', href: '#material' },
    { name: 'Process', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Investment', href: '#pricing' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b py-3 shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex flex-col group">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-accent-foreground font-serif font-bold text-lg">
              C
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-white">Cubic Homes</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent ml-10">Rockhampton, QLD</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="accent" className="rounded-none px-8 py-2 text-[10px] uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all active:scale-95 border border-accent/20 bg-transparent text-accent hover:bg-accent hover:text-white">
            Touch the Timber
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="accent" className="w-full rounded-full py-6 text-lg">
            Get a Quote
          </Button>
        </div>
      )}
    </nav>
  );
}
