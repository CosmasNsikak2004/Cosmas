import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(s => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: wire up to your preferred email service (Resend, EmailJS, Formspree, etc.)
    await new Promise(r => setTimeout(r, 1200));
    setStatus('sent');
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const socials = [
    { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: <Mail size={18} /> },
    { label: 'GitHub', value: 'github.com/cosmas-nsikakabasi', href: personalInfo.github, icon: <Github size={18} /> },
    { label: 'LinkedIn', value: 'linkedin.com/in/cosmas-nsikakabasi', href: personalInfo.linkedin, icon: <Linkedin size={18} /> },
    { label: 'Twitter / X', value: '@nsikakx', href: personalInfo.twitter, icon: <Twitter size={18} /> },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-48 flex-shrink-0"
          >
            <span className="section-label">Contact</span>
          </motion.div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight leading-snug mb-4"
            >
              Let's build something
              <span className="text-accent"> remarkable together</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-secondary text-base leading-relaxed max-w-xl"
            >
              Whether you have a project in mind, an opportunity to discuss, or just want to connect, my inbox is always open.
            </motion.p>
          </div>
        </div>

        <div className="lg:ml-64 xl:ml-76 grid lg:grid-cols-5 gap-10">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="contact-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="contact-input"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  className="contact-input resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="flex items-center gap-2 px-7 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed shadow-accent-glow"
              >
                {status === 'idle' && <><Send size={15} /> Send Message</>}
                {status === 'sending' && <>Sending...</>}
                {status === 'sent' && <>Message sent! I'll be in touch.</>}
              </button>
            </form>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-2 space-y-4"
          >
            <p className="text-xs font-medium text-muted uppercase tracking-widest mb-6">Other ways to reach me</p>
            {socials.map(social => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/30 hover:bg-surface-hover transition-all duration-200 group"
              >
                <span className="text-muted group-hover:text-accent transition-colors">{social.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted mb-0.5 font-medium">{social.label}</p>
                  <p className="text-sm text-secondary group-hover:text-primary transition-colors truncate">{social.value}</p>
                </div>
                <ArrowUpRight size={14} className="text-muted group-hover:text-accent flex-shrink-0 transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 pt-14 border-t border-border text-center"
        >
          <p className="font-display text-2xl sm:text-3xl font-semibold text-primary max-w-2xl mx-auto leading-snug">
            Ready to turn your vision into a<br />
            <span className="text-accent">world-class digital experience?</span>
          </p>
          <p className="text-muted text-base mt-4">Let's make it happen.</p>
        </motion.div>
      </div>
    </section>
  );
}
