import CaseStudyLayout, {
  type CaseStudyProject,
} from '../../../components/CaseStudyLayout';

const project: CaseStudyProject = {
  number: '03',
  title: 'CHEEZY CRUST',
  accentWord: 'CRUST',
  tags: ['Mobile App', 'Food & Delivery', 'Brand Identity'],
  description:
    'A pizza ordering app built from zero \u2014 brand, UX, and design system.',
  role: 'Brand Designer \u00B7 UI/UX Designer \u00B7 Product Thinker',
  year: '2024',
  tools: 'Figma \u00B7 AI-Assisted Ideation \u00B7 Mockup & Visualization Tools',
  status: 'Case Study / Portfolio Project',
  prototypeUrl:
    'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=135-1841&t=gp4JBbZGXIzwGB7d-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=135%3A1841&show-proto-sidebar=1',
  nextHref: '/work/cybershield',
  nextTitle: 'CYBERSHIELD & PRO',
  sections: [
    {
      number: '01',
      title: 'THE PROBLEM',
      content: [
        'Many food ordering apps feel generic, crowded, and detached from appetite. Cheezy Crust needed to feel fast, flavorful, and brand-led from the first screen.',
      ],
    },
    {
      number: '02',
      title: 'RESEARCH & DISCOVERY',
      content: [
        'I looked at mobile ordering behavior, visual appetite triggers, offer patterns, and how users compare menu items quickly on small screens.',
      ],
    },
    {
      number: '03',
      title: 'BRAND STRATEGY',
      content: [
        'The brand direction focused on warmth, energy, and immediate product recognition while staying flexible enough for menus, offers, and delivery flows.',
      ],
    },
    {
      number: '04',
      title: 'UX DESIGN APPROACH',
      content: [
        'I designed the flow around fast discovery, clear item details, simple customization, and a checkout path with minimal hesitation.',
      ],
      quote:
        'The goal was to make the user hungry first, then make the ordering path obvious.',
    },
    {
      number: '05',
      title: 'AI-DRIVEN WORKFLOW',
      content: [
        'AI-assisted ideation supported brand exploration, visual references, and faster iteration while the core UX decisions stayed grounded in user behavior.',
      ],
    },
    {
      number: '06',
      title: 'CHALLENGES & SOLUTIONS',
      content: [
        'The biggest challenge was balancing bold brand visuals with readable mobile UI. I solved this through tighter hierarchy, reusable cards, and clearer action states.',
      ],
    },
    {
      number: '07',
      title: 'WHAT I LEARNED',
      content: [
        'Cheezy Crust taught me how brand, appetite psychology, and mobile usability can work together instead of competing for attention.',
      ],
    },
    {
      number: '08',
      title: 'FINAL OUTCOME',
      content: [
        'The final result is a compact, brand-forward mobile ordering experience with a unified system for product browsing, offers, and checkout.',
      ],
    },
  ],
  metrics: [
    { value: '13', label: 'SCREENS DESIGNED' },
    { value: '3', label: 'BRAND CHALLENGES SOLVED' },
    { value: '1', label: 'UNIFIED DESIGN SYSTEM' },
    { value: '100%', label: 'AI-ASSISTED WORKFLOW' },
  ],
  learnings: [
    'Mobile food UX needs emotional pull and fast decision paths.',
    'Brand systems are strongest when they guide interface components too.',
    'AI can accelerate visual exploration without replacing product thinking.',
  ],
  screenGrid: 'cheezy',
  screens: [
    {
      src: '/images/cheezy-crust/screen-1.jpeg',
      alt: 'Cheezy Crust app mockup screen 1',
      label: 'Screen 01',
      featured: true,
    },
    {
      src: '/images/cheezy-crust/screen-2.jpeg',
      alt: 'Cheezy Crust app mockup screen 2',
      label: 'Screen 02',
    },
    {
      src: '/images/cheezy-crust/screen-3.jpeg',
      alt: 'Cheezy Crust app mockup screen 3',
      label: 'Screen 03',
    },
    {
      src: '/images/cheezy-crust/screen-4.jpeg',
      alt: 'Cheezy Crust app mockup screen 4',
      label: 'Screen 04',
    },
  ],
};

export const metadata = {
  title: 'CHEEZY CRUST | Hari Haran',
  description: project.description,
};

export default function CheezyCrustPage() {
  return <CaseStudyLayout project={project} />;
}
