import CaseStudyLayout, {
  type CaseStudyProject,
} from '../../../components/CaseStudyLayout';

const project: CaseStudyProject = {
  number: '02',
  title: 'VOIDCODE',
  accentWord: 'CODE',
  tags: ['AI Tool', 'Design-to-Code', 'Developer Tool'],
  description:
    'Converting Figma designs to production-ready code through conversation.',
  role: 'Product Designer - End to End',
  year: '2025',
  tools: 'Figma \u00B7 Stitch \u00B7 AI UI Generation \u00B7 Midjourney',
  status: 'Case Study / Portfolio Project',
  prototypeUrl:
    'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=247-206&t=Ud0JLNTWNSXgORKI-1&scaling=min-zoom&content-scaling=fixed&page-id=158%3A178&starting-point-node-id=195%3A245',
  nextHref: '/work/cheezy-crust',
  nextTitle: 'CHEEZY CRUST',
  sections: [
    {
      number: '01',
      title: 'THE PROBLEM',
      content: [
        'The design-to-code handoff still creates interpretation gaps, repeated clarification loops, and inconsistent implementation quality.',
        'Voidcode explores how a chat-first AI tool can turn design intent into production-ready front-end direction.',
      ],
    },
    {
      number: '02',
      title: 'RESEARCH & DISCOVERY',
      content: [
        'I studied the points where designers and developers lose time: missing states, unclear constraints, incomplete specs, and context hidden inside Figma files.',
        'The discovery phase pushed the product toward a guided workflow instead of a simple upload-and-generate tool.',
      ],
    },
    {
      number: '03',
      title: 'DEFINE',
      content: [
        'The product needed to help users upload designs, explain requirements, inspect generated output, and iterate without losing context.',
      ],
    },
    {
      number: '04',
      title: 'IDEATION',
      content: [
        'I explored multiple interaction models before focusing on a conversational interface that keeps generation, review, and refinement in one flow.',
      ],
      quote:
        'The experience had to feel less like a black box and more like a build partner users can direct.',
    },
    {
      number: '05',
      title: 'INFORMATION ARCHITECTURE',
      content: [
        'The architecture separates project input, chat instructions, generated code, preview states, and export actions into a clear workflow.',
        'This made the product easier to scan while preserving the flexibility of AI-assisted generation.',
      ],
    },
    {
      number: '06',
      title: 'DESIGN SYSTEM',
      content: [
        'I built a focused interface system for chat states, upload zones, code previews, action panels, and status feedback.',
      ],
    },
    {
      number: '07',
      title: 'KEY DESIGN DECISIONS',
      content: [
        'I prioritized transparency, editability, and clear generation states so users could understand what the AI was producing and why.',
      ],
    },
    {
      number: '08',
      title: 'THE FINAL PRODUCT',
      content: [
        'The final prototype shows a complete design-to-code flow from Figma input to conversational refinement and generated implementation output.',
      ],
    },
    {
      number: '09',
      title: 'WHAT I LEARNED',
      content: [
        'This project helped me understand how trust, control, and feedback shape AI developer-tool experiences.',
      ],
    },
    {
      number: '10',
      title: 'IMPACT & RESULTS',
      content: [
        'The final flow removes unnecessary screens and turns a scattered handoff process into a more direct conversational workflow.',
      ],
    },
  ],
  metrics: [
    { value: '67%', label: 'CLICK REDUCTION' },
    { value: '13\u21928', label: 'PAGES ELIMINATED' },
    { value: '40+', label: 'COMPONENTS BUILT' },
    { value: '11', label: 'SCREENS DESIGNED' },
  ],
  learnings: [
    'AI tools need visible reasoning and editable outputs to earn user trust.',
    'Design-to-code products depend on structured input as much as model output.',
    'A chat interface works best when paired with clear product states and review surfaces.',
  ],
  screenGrid: 'two-column',
  screens: [
    {
      src: '/images/voidcode/screen-1.jpeg',
      alt: 'VoidCode interface screen 1',
      label: 'Screen 01',
      featured: true,
    },
    {
      src: '/images/voidcode/screen-2.jpeg',
      alt: 'VoidCode interface screen 2',
      label: 'Screen 02',
    },
    {
      src: '/images/voidcode/screen-3.jpeg',
      alt: 'VoidCode interface screen 3',
      label: 'Screen 03',
    },
    {
      src: '/images/voidcode/screen-4.jpeg',
      alt: 'VoidCode interface screen 4',
      label: 'Screen 04',
      featured: true,
    },
  ],
};

export const metadata = {
  title: 'VOIDCODE | Hari Haran',
  description: project.description,
};

export default function VoidcodePage() {
  return <CaseStudyLayout project={project} />;
}
