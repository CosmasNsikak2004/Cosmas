// ============================================================
// Portfolio Data — Edit this file to customize all content
// ============================================================

export const personalInfo = {
  name: 'Cosmas Nsikakabasi',
  shortName: 'Cosmas',
  title: 'Full-Stack Developer',
  tagline: 'Crafting refined digital experiences, from pixel-perfect UIs to robust backend systems.',
  location: 'Lagos, Nigeria',
  email: 'cosmasnsikakabasi@gmail.com',         // TODO: replace with real email
  linkedin: 'https://www.linkedin.com/in/nsikakabasi-cosmas-a56134381?utm_source=share_via&utm_content=profile&utm_medium=member_ios', // TODO: replace
  github: 'https://github.com/CosmasNsikak2004',         // TODO: replace
  twitter: 'https://x.com/nsikakx?s=11',                     // TODO: replace
  cvUrl: '/my-resume.pdf',                      // TODO: add CV to /public
  // Portrait: replace with your own photo URL or import from /public
  // Recommended: 600×700px professional headshot
  portrait: '/my-photo.jpeg',
  about: `I'm a frontend-focused full-stack developer with a deep love for building things that feel as good as they look. With expertise spanning React, Next.js, TypeScript, and Tailwind CSS on the front end, and Node.js, PostgreSQL, and REST/GraphQL APIs on the back end, I bridge the gap between elegant design and solid engineering. I care deeply about performance, accessibility, and developer experience and I believe the best products are the ones that feel effortless to use. I am also certified in AI Literacy and Fundamentals by IBM, equipping me with a strong understanding of emerging technologies and how they can be applied to creative strategy, content production, and digital storytelling.`,
};

// ============================================================
// Skills — add/remove as needed
// ============================================================
export const skills = {
  frontend: [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 92 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Framer Motion', level: 80 },
    { name: 'HTML & CSS', level: 98 },
    { name: 'React Query', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 83 },
    { name: 'PostgreSQL', level: 78 },
    { name: 'REST APIs', level: 88 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 92 },
    { name: 'Figma', level: 75 },
    { name: 'Vercel', level: 88 },
    { name: 'Docker', level: 65 },
    { name: 'CI/CD Pipelines', level: 70 },
  ],
};

// ============================================================
// Projects — replace placeholder images with real screenshots
// To add your own image: put it in /public and use "/your-image.jpg"
// ============================================================
export const projects = [
  {
    id: 1,
    title: 'Enimini Co.',
    description: 'A modern web platform focused on performance, responsive design, and scalable frontend architecture for seamless user experiences.',
    image: '/enimini.png',
    tags: ['Next.js', 'TypeScript', 'REST APIs', 'Vercel', 'Tailwind CSS'],
    liveUrl: 'https://enimini-co.vercel.app/',   // TODO: replace with live URL
    githubUrl: '#', // TODO: replace with GitHub URL
    featured: true,
  },
  {
    id: 2,
    title: 'Coslens',
    description: 'A data-driven web application that presents insights through a clean, intuitive interface optimized for performance and usability.',
    image: '/Coslens.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration', 'Vercel'],
    liveUrl: 'https://coslens.vercel.app/',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Real Estate Platform',
    description: 'A responsive property listing platform that allows users to explore homes, apartments, and villas with structured property details.',
    image: '/real-estate.png',
    tags: ['Next.js', 'Node.js', 'Tailwind CSS', 'Dynamic Routing'],
    liveUrl: 'https://real-estate-platform-phi.vercel.app/',
    githubUrl: '#',
    featured: true,
  },
];

// ============================================================
// Experience — update with real roles
// ============================================================
export const experiences = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Springwood Technologies',
    type: 'Full-time',
    period: 'Nov 2023 — Present',
    location: 'Akwa Ibom, Nigeria',
    achievements: [
      'Led the re-architecture of the core product dashboard using Next.js App Router, reducing initial load time by 42%.',
      'Built a reusable component library adopted across 3 product teams, cutting UI development time by 30%.',
      'Mentored 3 junior developers and established frontend code review standards for the team.',
    ],
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'Dynet Technologies',
    type: 'Full-time',
    period: 'Sep 2023 — Aug 2023',
    location: 'Akwa Ibom, Nigeria',
    achievements: [
      'Delivered 12+ end-to-end web applications for clients across fintech, edtech, and e-commerce sectors.',
      'Designed and implemented CI/CD pipelines using GitHub Actions and Vercel for zero-downtime deployments.',
    ],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'Freelance / Contract',
    type: 'Freelance',
    period: 'May 2023 — Jan 2023',
    location: 'Remote',
    achievements: [
      "Rebuilt the company's customer-facing React app, improving Lighthouse performance score from 51 to 94.",
      'Introduced TypeScript to the codebase, eliminating a class of runtime errors and improving DX significantly.',
    ],
  },
];
