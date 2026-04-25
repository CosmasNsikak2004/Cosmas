import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../data';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-start">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-48 flex-shrink-0"
          >
            <span className="section-label">About</span>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-8 leading-snug"
            >
              Building at the intersection of
              <span className="text-accent"> design and engineering</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-secondary text-lg leading-[1.8] mb-10 max-w-2xl"
            >
              {personalInfo.about}
            </motion.p>

            {/* Tech highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              {highlights.map(tech => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-surface border border-border text-sm font-medium text-secondary hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-border"
            >
              {[
                { value: '4+', label: 'Years of Experience' },
                { value: '30+', label: 'Projects Shipped' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm text-muted leading-snug">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
