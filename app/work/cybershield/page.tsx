import CaseStudyLayout, {
  type CaseStudyProject,
} from '../../../components/CaseStudyLayout';

const project: CaseStudyProject = {
  number: '04',
  title: 'CYBERSHIELD & PRO',
  accentWord: 'PRO',
  tags: ['Security Dashboard', 'AI Anomaly Detection', 'SaaS'],
  description:
    'AI-powered network security \u2014 from rule-based detection to behavioral AI analysis.',
  role: 'UI/UX Designer \u00B7 Product Designer',
  year: '2024',
  tools: 'Figma \u00B7 AI-Assisted Design Workflows',
  status: 'Case Study + Live Deployed Product',
  prototypeUrl:
    'https://www.figma.com/proto/4EP68lwl1n3F8lhaPb8nAr/hari-projects?node-id=518-109&t=e4rMm78x3AF1VIfL-1&scaling=min-zoom&content-scaling=fixed&page-id=345%3A107',
  liveSiteUrl: 'https://cyber-shield-ai-six.vercel.app/',
  nextHref: '/work/future-you',
  nextTitle: 'FUTURE YOU',
  sections: [
    {
      number: '01',
      title: 'THE PROBLEM',
      content: [
        'Network security tools must surface serious threats without burying users under noise. CyberShield needed to make rule-based detection and AI anomaly analysis clear enough to act on.',
      ],
    },
    {
      number: '02',
      title: 'RESEARCH & DISCOVERY',
      content: [
        'I explored how dashboards communicate severity, evidence, trends, and incident priority for users who need to scan quickly and respond with confidence.',
      ],
    },
    {
      number: '03',
      title: 'DEFINE',
      content: [
        'The product direction split into two layers: CyberShield for rule-based detection and CyberShield Pro for behavioral AI anomaly analysis.',
      ],
      quote:
        'The interface needed to convert complex network behavior into a clear decision surface.',
    },
    {
      number: '04',
      title: 'INFORMATION ARCHITECTURE',
      content: [
        'I organized the product around dashboards, alert states, anomaly summaries, plan differences, and investigation pathways.',
      ],
    },
    {
      number: '05',
      title: 'KEY DESIGN DECISIONS',
      content: [
        'The UI uses strong contrast, severity cues, dense but scannable cards, and clear upgrade separation between the standard and Pro experiences.',
      ],
    },
    {
      number: '06',
      title: 'DESIGN SYSTEM',
      content: [
        'I built reusable dashboard components for alerts, metrics, anomaly states, tables, status indicators, and product-tier messaging.',
      ],
    },
    {
      number: '07',
      title: 'THE FINAL PRODUCT',
      content: [
        'The final project includes both a case-study prototype and a live deployed product, connecting design decisions to a working front-end experience.',
      ],
    },
    {
      number: '08',
      title: 'WHAT I LEARNED',
      content: [
        'CyberShield pushed me to design for urgency, evidence, and trust in a domain where unclear UI can slow down decisions.',
      ],
    },
    {
      number: '09',
      title: 'IMPACT & RESULTS',
      content: [
        'The project resulted in two product directions, a full dashboard system, and a shipped live site for the security platform.',
      ],
    },
  ],
  metrics: [
    { value: '2', label: 'PRODUCTS DESIGNED' },
    { value: '14', label: 'SCREENS DESIGNED' },
    { value: '35+', label: 'COMPONENTS BUILT' },
    { value: 'LIVE', label: 'DEPLOYED & SHIPPED' },
  ],
  learnings: [
    'Security products need hierarchy and evidence before visual intensity.',
    'AI anomaly features are easier to trust when paired with clear behavioral context.',
    'Shipping the product exposed practical layout, copy, and responsiveness decisions.',
  ],
  screenGrid: 'two-column',
  screens: [
    {
      src: '/images/cybershield/screen-1.jpeg',
      alt: 'CyberShield interface screen 1',
      label: 'Screen 01',
      featured: true,
      badge: 'LIVE PRODUCT',
    },
    {
      src: '/images/cybershield/screen-2.jpeg',
      alt: 'CyberShield interface screen 2',
      label: 'Screen 02',
    },
    {
      src: '/images/cybershield/screen-3.jpeg',
      alt: 'CyberShield interface screen 3',
      label: 'Screen 03',
    },
    {
      src: '/images/cybershield/screen-4.jpeg',
      alt: 'CyberShield interface screen 4',
      label: 'Screen 04',
      featured: true,
    },
  ],
};

export const metadata = {
  title: 'CYBERSHIELD & PRO | Hari Haran',
  description: project.description,
};

export default function CyberShieldPage() {
  return <CaseStudyLayout project={project} />;
}
