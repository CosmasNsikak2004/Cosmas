import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="group relative bg-surface rounded-2xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors"
            onClick={e => e.stopPropagation()}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors border border-white/20"
            onClick={e => e.stopPropagation()}
          >
            <Github size={14} />
            Code
          </a>
        </div>
        {/* Number badge */}
        <div className="absolute top-4 left-4 w-7 h-7 rounded-lg bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <span className="text-xs font-semibold text-white font-display">0{index + 1}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display text-lg font-semibold text-primary group-hover:text-accent transition-colors leading-snug">
            {project.title}
          </h3>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-muted group-hover:text-accent transition-colors mt-0.5"
            aria-label={`Open ${project.title}`}
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
        <p className="text-sm text-muted leading-relaxed mb-5">
          {project.description}
        </p>
        {/* Tech pills */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-background border border-border text-xs font-medium text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="work" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-48 flex-shrink-0"
          >
            <span className="section-label">Work</span>
          </motion.div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight leading-snug mb-4"
            >
              Selected projects that
              <span className="text-accent"> made an impact</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-secondary text-base leading-relaxed"
            >
              A curated selection of projects that reflect my approach to problem-solving and craft.
            </motion.p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.slice(0, 4).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          {/* Wide card for last project */}
          {projects[4] && (
            <div className="sm:col-span-2 xl:col-span-1">
              <ProjectCard project={projects[4]} index={4} />
            </div>
          )}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent transition-colors group"
          >
            View all projects on GitHub
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
