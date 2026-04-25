import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  };
}

export default function Hero() {
  const handleScrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated gradient + grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="hero-gradient" />
        <div className="hero-grid" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 py-24 lg:py-32">

          {/* Left: Text content */}
          <div className="flex-1 max-w-2xl">

            {/* Availability badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs text-secondary mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available for opportunities · {personalInfo.location}
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-[1.05] tracking-tight mb-6"
            >
              <span>{personalInfo.name.split(' ')[0]} </span>
              <span className="text-accent">{personalInfo.name.split(' ')[1]}</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              {...fadeUp(0.2)}
              className="font-display text-xl sm:text-2xl font-medium text-secondary mb-5 tracking-tight"
            >
              {personalInfo.title}
            </motion.p>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-base sm:text-lg text-muted leading-relaxed mb-10 max-w-xl"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={handleScrollToWork}
                className="px-6 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-accent-glow"
              >
                Explore My Work
              </button>
              <button
                onClick={handleScrollToContact}
                className="px-6 py-3 rounded-xl border border-border text-primary text-sm font-semibold hover:border-accent hover:bg-surface transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Let's Connect
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.5)} className="flex items-center gap-5">
              <span className="text-xs text-muted tracking-widest uppercase">Find me on</span>
              <div className="flex gap-4">
                {[
                  { href: personalInfo.github, icon: <Github size={18} />, label: 'GitHub' },
                  { href: personalInfo.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
                  { href: personalInfo.twitter, icon: <Twitter size={18} />, label: 'Twitter' },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-muted hover:text-accent transition-colors duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className="portrait-container">
              <img
                src={personalInfo.portrait}
                alt={personalInfo.name}
                className="portrait-image"
              />
              <div className="portrait-ring" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="floating-badge"
              >
                <span className="text-xs font-semibold text-primary font-display">4+ Years</span>
                <span className="text-xs text-muted">Experience</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={16} className="text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
