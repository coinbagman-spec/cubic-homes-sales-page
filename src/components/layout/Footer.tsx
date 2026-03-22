import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Our Homes', href: '#homes' },
    { name: 'The Shou Sugi Ban Difference', href: '#shou-sugi-ban' },
    { name: 'How It Works', href: '#process' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Book a Consultation', href: '#consultation' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center font-serif font-bold text-lg text-accent-foreground">
              C
            </div>
            <span className="font-serif font-bold text-2xl tracking-tight">Cubic Homes</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs font-light">
            Architectural tiny homes crafted for the unique Australian landscape. 
            Blending Japanese-inspired craftsmanship with modern sustainable design.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Explore</h4>
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm font-light"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Get in Touch</h4>
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-3 group">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="text-primary-foreground/70 text-sm font-light leading-relaxed group-hover:text-accent transition-colors">
                123 Architectural Way,<br /> Byron Bay, NSW 2481 Australia
              </span>
            </li>
            <li className="flex items-center gap-3 group">
              <Phone size={18} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
              <a href="tel:1300CUBICHOMES" className="text-primary-foreground/70 text-sm font-light group-hover:text-accent transition-colors">
                1300 CUBIC HOMES
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <Mail size={18} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
              <a href="mailto:hello@cubichomes.com.au" className="text-primary-foreground/70 text-sm font-light group-hover:text-accent transition-colors">
                hello@cubichomes.com.au
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Certs */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Industry Recognition</h4>
          <div className="flex flex-wrap gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Logo placeholders with Lucide representations */}
             <div className="flex flex-col items-center gap-2 group cursor-default">
               <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center font-bold text-xs border border-white/10 group-hover:border-accent/50 transition-colors">MBA</div>
               <span className="text-[10px] text-white/50 group-hover:text-accent transition-colors">Master Builders</span>
             </div>
             <div className="flex flex-col items-center gap-2 group cursor-default">
               <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center font-bold text-xs border border-white/10 group-hover:border-accent/50 transition-colors">HIA</div>
               <span className="text-[10px] text-white/50 group-hover:text-accent transition-colors">Housing Industry</span>
             </div>
             <div className="flex flex-col items-center gap-2 group cursor-default">
               <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center font-bold text-xs border border-white/10 group-hover:border-accent/50 transition-colors">TQ</div>
               <span className="text-[10px] text-white/50 group-hover:text-accent transition-colors">Timber QLD</span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40 font-light">
        <p>© {currentYear} Cubic Homes Australia. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-accent transition-colors">Building Licenses</a>
        </div>
      </div>
    </footer>
  );
}
