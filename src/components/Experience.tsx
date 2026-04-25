import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data';

function TimelineEntry({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className="relative flex gap-8 group"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.12 + 0.2, type: 'spring', stiffness: 200 }}
          className="w-3 h-3 rounded-full border-2 border-accent bg-background flex-shrink-0 ring-4 ring-background"
        />
        {index < experiences.length - 1 && (
          <div className="flex-1 w-px bg-border mt-3 min-h-[60px]" />
        )}
      </div>

      {/* Content card */}
      <div className="flex-1 pb-12 group-last:pb-0">
        <div className="bg-surface rounded-2xl border border-border p-7 hover:border-accent/20 transition-all duration-300 hover:shadow-card">
          {/* Role & Company */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
            <div>
              <h3 className="font-display text-lg font-semibold text-primary mb-1">{exp.role}</h3>
              <div className="flex items-center gap-2">
                <span className="text-accent font-medium text-sm">{exp.company}</span>
                <span className="w-1 h-1 rounded-full bg-muted" />
                <span className="text-xs px-2 py-0.5 rounded-full bg-background border border-border text-muted font-medium">{exp.type}</span>
              </div>
            </div>
            <div className="flex flex-col sm:items-end gap-1.5 flex-shrink-0">
              <div className="flex items-center gap-1.5 text-xs text-muted">
                <Calendar size={12} />
                {exp.period}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted">
                <MapPin size={12} />
                {exp.location}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <ul className="space-y-3">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-0.5" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-48 flex-shrink-0"
          >
            <span className="section-label">Experience</span>
          </motion.div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight leading-snug mb-4"
            >
              A track record of
              <span className="text-accent"> shipping great software</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-secondary text-base leading-relaxed"
            >
              4+ years building products that users love — at startups and as an independent consultant.
            </motion.p>
          </div>
        </div>

        {/* Timeline */}
        <div className="lg:ml-64 xl:ml-76">
          {experiences.map((exp, i) => (
            <TimelineEntry key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
