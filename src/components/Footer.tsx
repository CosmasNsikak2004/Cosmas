import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* Logo + tagline */}
          <div className="text-center sm:text-left">
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="font-display text-lg font-semibold text-primary hover:opacity-70 transition-opacity"
            >
              Cosmas<span className="text-accent">.</span>
            </a>
            <p className="text-xs text-muted mt-1">Frontend & Full-Stack Developer</p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { href: personalInfo.github, icon: <Github size={16} />, label: 'GitHub' },
              { href: personalInfo.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn' },
              { href: personalInfo.twitter, icon: <Twitter size={16} />, label: 'Twitter' },
              { href: `mailto:${personalInfo.email}`, icon: <Mail size={16} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted hover:text-accent transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted flex items-center gap-1">
            Built with <Heart size={11} className="text-accent mx-0.5" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
