import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data';

const categories = [
  { key: 'frontend' as const, label: 'Frontend', color: '#14b8a6' },
  { key: 'backend' as const, label: 'Backend & APIs', color: '#22d3ee' },
  { key: 'tools' as const, label: 'Tools & Platforms', color: '#8b9cf4' },
];

function SkillBar({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">{name}</span>
        <span className="text-xs text-muted">{level}%</span>
      </div>
      <div className="h-0.5 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-48 flex-shrink-0"
          >
            <span className="section-label">Skills</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight leading-snug">
              A well-rounded stack,<br />
              <span className="text-accent">sharpened through practice</span>.
            </h2>
          </motion.div>
        </div>

        {/* Skill categories grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + catIdx * 0.1 }}
              className="bg-surface rounded-2xl border border-border p-7 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.color }}
                />
                <h3 className="font-display text-sm font-semibold text-primary tracking-wide uppercase">
                  {cat.label}
                </h3>
              </div>
              <div className="space-y-5">
                {skills[cat.key].map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.3 + catIdx * 0.1 + i * 0.05}
                    color={cat.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pill row — technology mentions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-3 justify-center"
        >
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Supabase', 'Framer Motion', 'GraphQL', 'Figma', 'Vercel', 'Git'].map(tech => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-medium text-muted hover:text-accent hover:border-accent/40 transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
