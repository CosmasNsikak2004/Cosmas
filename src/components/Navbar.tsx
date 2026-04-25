import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'nav-scrolled py-3'
            : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-display text-xl font-semibold tracking-tight text-primary transition-opacity hover:opacity-70"
          >
            {personalInfo.shortName}
            <span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-secondary hover:text-primary transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-surface transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href={personalInfo.cvUrl}
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border text-secondary hover:text-primary hover:border-accent/40 transition-all duration-200"
            >
              <Download size={14} />
              CV
            </a>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-secondary hover:text-primary transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="p-2 rounded-lg text-secondary hover:text-primary transition-all duration-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-8 bg-background md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-display font-semibold text-primary text-left hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-auto">
              <a
                href={personalInfo.cvUrl}
                download
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-lg border border-border text-secondary hover:text-primary w-fit transition-all"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
