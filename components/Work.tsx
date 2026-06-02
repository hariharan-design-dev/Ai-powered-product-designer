import Image from 'next/image';

const projects = [
  {
    number: '01',
    title: 'COREX AI',
    tags: ['AI Product', 'Conversation Management', 'SaaS'],
    description:
      'Redesigning how people organize and retrieve AI conversations - workspace-based organization for the next generation of AI power users.',
    caseStudyLink: '/work/corex-ai',
    prototypeButton: 'View Prototype',
    prototypeLink:
      'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=396-178&t=8HaeDCFf9UO5U4nF-1&scaling=min-zoom&content-scaling=fixed&page-id=295%3A231',
    coverImage: '/images/corex-ai/thumbnail.jpeg',
    featured: true,
  },
  {
    number: '02',
    title: 'VOIDCODE',
    tags: ['AI Tool', 'Design-to-Code', 'Developer Tool'],
    description:
      'A chat-first platform that converts Figma designs to production-ready code - eliminating the handoff gap between designers and developers.',
    caseStudyLink: '/work/voidcode',
    prototypeButton: 'View Prototype',
    prototypeLink:
      'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=247-206&t=Ud0JLNTWNSXgORKI-1&scaling=min-zoom&content-scaling=fixed&page-id=158%3A178&starting-point-node-id=195%3A245',
    coverImage: '/images/voidcode/thumbnail.jpeg',
  },
  {
    number: '03',
    title: 'CHEEZY CRUST',
    tags: ['Mobile App', 'Food & Delivery', 'Brand Identity'],
    description:
      'A pizza ordering app built from zero - brand identity, appetite psychology, mobile-first UX, and a design system built to scale.',
    caseStudyLink: '/work/cheezy-crust',
    prototypeButton: 'View Prototype',
    prototypeLink:
      'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=135-1841&t=gp4JBbZGXIzwGB7d-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=135%3A1841&show-proto-sidebar=1',
    coverImage: '/images/cheezy-crust/thumbnail.jpeg',
  },
  {
    number: '04',
    title: 'CYBERSHIELD & PRO',
    tags: ['Security Dashboard', 'AI Anomaly Detection', 'SaaS'],
    description:
      'An AI-powered network security platform - rule-based detection for CyberShield, behavioral AI anomaly analysis for CyberShield Pro.',
    caseStudyLink: '/work/cybershield',
    prototypeButton: 'View Prototype',
    prototypeLink:
      'https://www.figma.com/proto/4EP68lwl1n3F8lhaPb8nAr/hari-projects?node-id=518-109&t=e4rMm78x3AF1VIfL-1&scaling=min-zoom&content-scaling=fixed&page-id=345%3A107',
    liveSiteButton: 'View Live Site',
    liveSiteLink: 'https://cyber-shield-ai-six.vercel.app/',
    coverImage: '/images/cybershield/thumbnail.jpeg',
  },
];

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const isFeatured = project.featured;

  return (
    <article
      className={`card group relative flex overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-accent ${
        isFeatured
          ? 'min-h-[500px] flex-col lg:grid lg:grid-cols-[1.35fr_0.65fr]'
          : 'min-h-[520px] flex-col'
      }`}
    >
      <span className="absolute left-0 top-0 z-20 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-in-out group-hover:scale-x-100" />

      <div
        className={`relative overflow-hidden bg-gradient-to-br from-bg-secondary to-[#1A1A1A] ${
          isFeatured ? 'aspect-[21/9] lg:aspect-auto' : 'aspect-video'
        }`}
      >
        <Image
          alt={`${project.title} project cover screenshot`}
          className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
          fill
          sizes={isFeatured ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
          src={project.coverImage}
        />
        <span className="absolute right-5 top-4 font-display text-[80px] leading-none tracking-[0.02em] text-white/[0.04]">
          {project.number}
        </span>
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <span
            className={`font-display leading-none tracking-display text-white/[0.04] ${
              isFeatured ? 'text-[clamp(58px,10vw,140px)]' : 'text-6xl'
            }`}
          >
            {project.title}
          </span>
        </div>
      </div>

      <div
        className={`flex flex-1 flex-col p-6 ${
          isFeatured ? 'lg:justify-center lg:p-8' : ''
        }`}
      >
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <h3
          className={`mt-6 font-display leading-none tracking-[0.04em] text-text-primary ${
            isFeatured ? 'text-5xl' : 'text-4xl'
          }`}
        >
          {project.title}
        </h3>

        <p className="mt-4 font-sans text-sm leading-6 text-text-secondary">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <a className="btn-primary" href={project.caseStudyLink}>
            View Case Study
          </a>
          <a
            className="btn-outline"
            href={project.prototypeLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {project.prototypeButton}
          </a>
          {project.liveSiteButton && project.liveSiteLink ? (
            <a
              className="btn-outline"
              href={project.liveSiteLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {project.liveSiteButton}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const [featuredProject, ...gridProjects] = projects;

  return (
    <section
      className="bg-bg-primary px-6 py-24 text-text-primary md:px-12 md:py-32"
      id="work"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="section-label">SELECTED WORK</p>
          <h2 className="mt-5 font-display text-[clamp(48px,8vw,100px)] leading-[0.9] tracking-display text-text-primary">
            <span className="block">PROJECTS THAT</span>
            <span className="block text-accent">SHIP.</span>
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base leading-7 text-text-secondary">
            End-to-end product design - from research to prototype to deployed
            product.
          </p>
        </div>

        <div className="space-y-6">
          <ProjectCard project={featuredProject} />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {gridProjects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
