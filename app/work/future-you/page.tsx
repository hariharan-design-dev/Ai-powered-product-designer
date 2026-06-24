import CaseStudyLayout, {
  type CaseStudyProject,
} from '../../../components/CaseStudyLayout';
import Image from 'next/image';

const project: CaseStudyProject = {
  number: '05',
  title: 'FUTURE YOU',
  accentWord: 'YOU',
  tags: ['AI Product', 'Personal Growth', 'Emotional Design', 'Conversational UI'],
  description:
    'An AI-powered personal growth companion designed to help people gain clarity about their future, career, goals, and personal growth.',
  role: 'Product Designer — End to End',
  year: '2025',
  tools: 'Figma · AI-Assisted Design · Editorial Photography Direction',
  status: 'Case Study / Portfolio Project',
  prototypeUrl:
    'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=599-306&t=RvPB9QX9vDuUSVHU-1&scaling=scale-down&content-scaling=fixed&page-id=424%3A206&starting-point-node-id=599%3A306',
  nextHref: '/work/corex-ai',
  nextTitle: 'COREX AI',
  screensSectionTitle: 'DESIGN DECISIONS',
  screenGrid: 'two-column',
  sections: [
    {
      number: '01',
      title: 'THE PROBLEM',
      content: [
        "Many people don't actually need more information. They need direction.",
        'Every day, people carry the weight of unanswered questions: Am I choosing the right career? Will I achieve my goals? Am I making progress? What should I focus on next?',
        'Most productivity apps help people track tasks. Most AI tools answer questions. But very few products help people build genuine confidence about their future.',
      ],
      quote:
        "People weren't looking for predictions. They were looking for hope, direction, and confidence.",
    },
    {
      number: '02',
      title: 'RESEARCH & DISCOVERY',
      content: [
        'After weeks of research, three core findings shaped the entire product direction.',
        'Finding 1 — Information overload is not the problem: Users have access to more career advice, productivity systems, and self-help content than ever before. The problem is not a lack of information — it is the inability to translate information into personal direction.',
        'Finding 2 — Existing tools address tasks, not identity: Productivity apps track what users do. AI chatbots answer what users ask. Neither addresses the deeper question users are actually sitting with: Am I on the right path?',
        'Finding 3 — Emotional connection drives behavioral change: Tools that create emotional resonance produce stronger and more sustained behavioral change than purely functional tools. The most effective growth products make users feel something — not just do something.',
      ],
    },
    {
      number: '03',
      title: 'THE CORE IDEA',
      content: [
        'Instead of designing another chatbot or productivity tracker, I explored a different question entirely:',
        'That question became the foundation of FutureYou.',
        'The goal was not prediction. AI cannot predict the future. The goal was motivation, reflection, and clarity — helping users build a clearer picture of where they are going and why it matters.',
        "This reframe changed everything about the product's structure, tone, and interaction design.",
      ],
      quote: 'What if people could have a conversation with their future self?',
    },
    {
      number: '04',
      title: 'KEY FEATURES',
      content: [
        'Four core features define the FutureYou experience:',
        'FUTURE CONVERSATIONS: Users chat with an AI-generated version of their future self — built from their stated goals, aspirations, and chosen life path. The AI responds as a version of the user who has already achieved what they are working toward.',
        'AI CAREER COACH: Personalized career guidance, learning roadmaps, and growth recommendations tailored to the user\'s specific goals and current situation. Not generic advice — direction calibrated to the individual.',
        'FUTURE LETTERS: Letters written from a future version of the user to their present self. Designed to encourage, guide, and create emotional connection with the person they are working to become.',
        'GOAL-BASED JOURNEYS: Instead of open-ended conversations, users choose meaningful life paths: AI Engineer · Product Designer · Personal Growth · Relationships · Education. Each path shapes how the AI responds, what it prioritizes, and how it frames progress.',
      ],
    },
    {
      number: '05',
      title: 'DESIGN DECISIONS',
      content: [
        'Every design decision in FutureYou was made in service of one goal: making users feel safe enough to be honest about their fears and hopeful enough to take action.',
        'Decision 1 — Reducing onboarding friction: The fastest path to value. Users choose a life path and start a conversation immediately — no long setup, no profile building, no feature tours. The product earns trust through the first interaction, not through promises before it.',
        'Decision 2 — Emotional engagement over functional density: Every screen was designed to feel calm, premium, and personal. No dashboards. No task lists. No progress bars competing for attention. The interaction itself is the product.',
        'Decision 3 — Real editorial photography instead of illustrations: AI products default to abstract illustrations and gradient blobs. FutureYou uses real editorial photography — cinematic, human, grounded. This decision makes the product feel trustworthy and emotionally real rather than artificially optimistic.',
        'Decision 4 — Premium and calm visual language: Dark backgrounds. Generous whitespace. Restrained typography. The visual language communicates: this is a serious product for people who take their growth seriously.',
      ],
      quote:
        'Good product design is not about adding more features. It is about understanding what users are actually looking for.',
    },
    {
      number: '06',
      title: 'WHAT I LEARNED',
      content: [],
    },
    {
      number: '07',
      title: 'IMPACT & RESULTS',
      content: [],
    },
  ],
  metrics: [
    { value: '5', label: 'CORE FEATURES DESIGNED' },
    { value: '4', label: 'LIFE PATH JOURNEYS' },
    { value: '100%', label: 'EDITORIAL PHOTOGRAPHY' },
    { value: '0', label: 'GENERIC AI AESTHETICS' },
  ],
  learnings: [
    'Emotional products require emotional design decisions — every color, spacing, and interaction pattern either builds or breaks the user\'s sense of safety and trust.',
    'The best product idea often comes from questioning the obvious solution. Every AI product is a chatbot. FutureYou is a conversation with yourself.',
    'Reducing friction is not about making things simpler — it is about removing everything that stands between the user and the moment the product becomes valuable.',
    'Photography direction is a product design skill. Choosing real cinematic photography over illustrations was one of the strongest brand decisions in this project.',
    'The most powerful products don\'t solve surface problems. They address the deeper emotional need underneath.',
  ],
  screens: [
    {
      src: '/images/future-you/screen-1.png',
      alt: 'FutureYou — Screen 1',
      label: 'Screen 01',
      aspect: '402/951',
      featured: true,
      priority: true,
    },
    {
      src: '/images/future-you/screen-2.png',
      alt: 'FutureYou — Screen 2',
      label: 'Screen 02',
      aspect: '402/874',
    },
    {
      src: '/images/future-you/screen-3.png',
      alt: 'FutureYou — Screen 3',
      label: 'Screen 03',
      aspect: '402/951',
    },
    {
      src: '/images/future-you/screen-4.png',
      alt: 'FutureYou — Screen 4',
      label: 'Screen 04',
      aspect: '402/951',
      featured: true,
    },
  ],
};

export const metadata = {
  title: 'FUTURE YOU | Hari Haran',
  description: project.description,
};

export default function FutureYouPage() {
  return <CaseStudyLayout project={project} />;
}
