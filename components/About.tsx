'use client';

const skillGroups = [
  {
    title: 'DESIGN',
    skills: [
      'User Research',
      'Information Architecture',
      'Wireframing',
      'Interactive Prototyping',
      'Design Systems',
      'Visual Hierarchy',
      'Mobile-First Design',
      'Brand Identity',
    ],
  },
  {
    title: 'AI & PRODUCT',
    skills: [
      'Prompt Engineering',
      'AI Product Strategy',
      'Context Engineering',
      'AI-Assisted Design Workflows',
      'Lovable',
      'v0',
      'Cursor',
      'Claude',
      'ChatGPT',
    ],
  },
  {
    title: 'DEVELOPMENT',
    skills: [
      'React',
      'Next.js',
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
      'Vercel Deployment',
      'Full Stack Development',
    ],
  },
  {
    title: 'TOOLS',
    skills: [
      'Figma',
      'Stitch',
      'Midjourney',
      'AI UI Generation',
      'GitHub',
      'Notion',
    ],
  },
];

const processPhases = [
  { number: '01', label: 'Research' },
  { number: '02', label: 'Define' },
  { number: '03', label: 'Design' },
  { number: '04', label: 'Ship' },
];

export default function About() {
  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="bg-bg-secondary px-6 py-24 text-text-primary md:px-12 md:py-32"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-label">ABOUT</p>

            <h2 className="mt-5 font-display text-[clamp(40px,6vw,80px)] leading-[0.9] tracking-display text-text-primary">
              <span className="block">THE</span>
              <span className="block text-accent">DESIGNER</span>
              <span className="block">BEHIND</span>
              <span className="block">THE WORK.</span>
            </h2>

            <div className="mt-8 max-w-[620px] space-y-6 font-sans text-base leading-[1.8] text-text-secondary">
              <p>
                I am Hari Haran - a UI/UX Designer and AI Product Designer from
                Sivakasi, Tamil Nadu. I build digital products that live at the
                intersection of design thinking, AI workflows, and product
                strategy.
              </p>
              <p>
                My work started with curiosity - taking on freelance design
                projects during college and building real products from scratch.
                From security dashboards to AI workspace platforms, pizza
                ordering apps to design-to-code tools - every project I take on
                starts with a problem worth solving.
              </p>
              <p>
                I work across the full product lifecycle: research, information
                architecture, visual design, design systems, and prototyping. I
                also use AI tools - Claude, ChatGPT, Cursor, Lovable - not as
                shortcuts, but as a core part of how I think, iterate, and ship.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <button className="btn-outline" type="button" onClick={scrollToWork}>
                View All Projects
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <article className="card border-l-[3px] border-l-accent p-6" key={group.title}>
                <h3 className="section-label">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 border-y border-border py-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:flex md:items-center md:justify-between md:gap-6">
            {processPhases.map((phase, index) => (
              <div className="flex items-center gap-6" key={phase.number}>
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl leading-none tracking-[0.02em] text-accent">
                    {phase.number}
                  </span>
                  <span className="font-sans text-sm uppercase tracking-[0.18em] text-text-secondary">
                    {phase.label}
                  </span>
                </div>
                {index < processPhases.length - 1 ? (
                  <span className="hidden font-display text-4xl leading-none text-[#333333] md:block">
                    {'\u2192'}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
