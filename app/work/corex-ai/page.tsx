import CaseStudyLayout, {
  type CaseStudyProject,
} from '../../../components/CaseStudyLayout';

const project: CaseStudyProject = {
  number: '01',
  title: 'COREX AI',
  accentWord: 'AI',
  tags: ['AI Product', 'Conversation Management', 'SaaS'],
  description: 'Redesigning how people organize and retrieve AI conversations.',
  role: 'Product Designer - End to End',
  year: '2026',
  tools: 'Figma \u00B7 Stitch \u00B7 AI UI Generation',
  status: 'Case Study / Portfolio Project',
  prototypeUrl:
    'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=396-178&t=8HaeDCFf9UO5U4nF-1&scaling=min-zoom&content-scaling=fixed&page-id=295%3A231',
  nextHref: '/work/voidcode',
  nextTitle: 'VOIDCODE',
  sections: [
    {
      number: '01',
      title: 'THE PROBLEM',
      content: [
        'AI conversations are becoming long-term work assets, but most chat tools still treat them like isolated threads. Users lose context, repeat prompts, and struggle to retrieve useful past work.',
        'Corex AI focuses on making AI conversations easier to organize, revisit, and reuse through workspace-based structure.',
      ],
    },
    {
      number: '02',
      title: 'RESEARCH & DISCOVERY',
      content: [
        'I studied how AI power users manage prompts, outputs, project context, and repeated research threads across tools.',
        'The biggest pattern was fragmentation: conversations were useful in the moment, but difficult to turn into a durable knowledge system.',
      ],
    },
    {
      number: '03',
      title: 'DEFINE',
      content: [
        'The core product goal became clear: reduce retrieval friction and give users a workspace model that makes AI conversations feel organized, searchable, and actionable.',
      ],
      quote:
        'The product was not just a better chat UI. It was a way to turn AI conversations into structured product memory.',
    },
    {
      number: '04',
      title: 'IDEATION & ARCHITECTURE',
      content: [
        'I mapped the product around workspaces, conversation groups, saved outputs, and context-aware retrieval.',
        'The architecture prioritized speed and clarity so users could move between projects without rebuilding context each time.',
      ],
    },
    {
      number: '05',
      title: 'KEY DESIGN DECISIONS',
      content: [
        'The interface uses strong hierarchy, persistent workspace navigation, and focused conversation surfaces to reduce cognitive load.',
        'Every screen was designed around the question: how fast can a user find the right AI conversation and continue working?',
      ],
    },
    {
      number: '06',
      title: 'DESIGN SYSTEM',
      content: [
        'I created a dark, productivity-focused UI system with reusable tokens, navigation patterns, cards, tags, and workspace states.',
        'The system supports both dense information and high-contrast action areas without making the product feel noisy.',
      ],
    },
    {
      number: '07',
      title: 'THE FINAL PRODUCT',
      content: [
        'The final prototype presents Corex AI as a focused workspace for organizing AI conversations, retrieving past outputs, and continuing project work with less friction.',
      ],
    },
    {
      number: '08',
      title: 'WHAT I LEARNED',
      content: [
        'This project sharpened how I think about AI products as information systems, not only conversation interfaces.',
      ],
    },
    {
      number: '09',
      title: 'IMPACT & RESULTS',
      content: [
        'The redesigned flow reduced repeated navigation steps and condensed the product into a clearer, more scalable structure.',
      ],
    },
  ],
  metrics: [
    { value: '67%', label: 'CLICK REDUCTION' },
    { value: '7\u21925', label: 'PAGES REDUCED' },
    { value: '50+', label: 'DESIGN TOKENS' },
    { value: '10', label: 'SCREENS DESIGNED' },
  ],
  learnings: [
    'AI products need strong information architecture before they need more features.',
    'Retrieval is a core UX problem in conversation-heavy products.',
    'A workspace model can make AI output feel reusable instead of disposable.',
  ],
  screenGrid: 'two-column',
  screens: [
    {
      src: '/images/corex-ai/screen-1.jpeg',
      alt: 'CoreX AI interface screen 1',
      label: 'Screen 01',
      featured: true,
    },
    {
      src: '/images/corex-ai/screen-2.jpeg',
      alt: 'CoreX AI interface screen 2',
      label: 'Screen 02',
    },
    {
      src: '/images/corex-ai/screen-3.jpeg',
      alt: 'CoreX AI interface screen 3',
      label: 'Screen 03',
    },
    {
      src: '/images/corex-ai/screen-4.jpeg',
      alt: 'CoreX AI interface screen 4',
      label: 'Screen 04',
      featured: true,
    },
  ],
};

export const metadata = {
  title: 'COREX AI | Hari Haran',
  description: project.description,
};

export default function CorexAiPage() {
  return <CaseStudyLayout project={project} />;
}
