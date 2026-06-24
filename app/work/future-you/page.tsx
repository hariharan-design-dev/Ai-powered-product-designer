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
    'An AI-powered personal growth companion that lets users have conversations with their future self \u2014 built around hope, direction, and clarity.',
  role: 'Product Designer \u2014 End to End',
  year: '2025',
  tools: 'Figma \u00B7 AI-Assisted Design \u00B7 Editorial Photography Direction',
  status: 'Case Study / Portfolio Project',
  prototypeUrl:
    'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=599-306&t=RvPB9QX9vDuUSVHU-1&scaling=scale-down&content-scaling=fixed&page-id=424%3A206&starting-point-node-id=599%3A306',
  nextHref: '/work/corex-ai',
  nextTitle: 'COREX AI',
  screensSectionTitle: 'UI SCREENS',
  screenGrid: 'two-column',
  sections: [
    {
      number: '01',
      title: 'THE PROBLEM',
      content: [
        'I kept noticing the same pattern in conversations with friends and fellow students. People knew what they wanted to become. They had goals. They had apps to track those goals. But they were not moving toward them.',
        'The problem was not a lack of tools or information. It was something harder to design for: the inability to translate knowing into doing \u2014 and staying consistent long enough to matter.',
        'Most productivity apps help people track tasks. Most AI tools answer questions. Neither addresses the deeper question people are actually sitting with.',
        'What people told me before I started designing: I discussed this idea with friends and fellow students before touching Figma. The conversations kept returning to the same themes \u2014 motivation, consistency, and how difficult it is to stay committed to long-term goals when progress is invisible and the future feels abstract.',
        'The clearest insight from those conversations: People do not just need productivity tools. They need encouragement, reflection, and a genuine sense of connection to the future they are working toward.',
      ],
      quote:
        'Am I on the right path? Will I actually get there? Does any of this effort matter?',
    },
    {
      number: '02',
      title: 'RESEARCH & DISCOVERY',
      content: [
        'Before designing, I spoke with friends and students about motivation, goal-setting, and consistency. Those conversations shaped everything.',
        'Three patterns emerged:',
        'PATTERN 1 \u2014 Information Is Not the Problem: Everyone I spoke to had access to more advice, frameworks, and productivity systems than they could use. The problem was not knowing what to do \u2014 it was the emotional friction of actually doing it consistently over months and years.',
        'PATTERN 2 \u2014 Existing Tools Address Tasks, Not Identity: Productivity apps track what you do. AI chatbots answer what you ask. Neither addresses the deeper question: Am I becoming the person I am trying to become? That question has no good product answer yet.',
        'PATTERN 3 \u2014 Emotional Connection Drives Behavioral Change: The tools that create genuine emotional resonance produce stronger and more sustained change than purely functional tools. The most effective growth experiences make people feel something \u2014 not just do something.',
        'The core insight that drove the entire product: People are not looking for predictions about their future. They are looking for hope, direction, and confidence about it. That distinction changed everything about what FutureYou became.',
      ],
    },
    {
      number: '03',
      title: 'DEFINE',
      content: [
        'Instead of designing another chatbot or productivity tracker, I started with one question:',
        'That question became the foundation of FutureYou.',
        'The goal was not prediction. AI cannot predict the future. The goal was motivation, reflection, and clarity \u2014 helping users build a stronger emotional connection to where they are going and why the effort they are putting in today actually matters.',
        'This reframe changed the product\u2019s structure, tone, interaction design, and visual language entirely.',
        'Design Principles:',
        '1. Emotional First \u2014 every screen must make the user feel something real',
        '2. Hope Over Judgment \u2014 no pressure, no failure states, no performance metrics',
        '3. Personal Over Generic \u2014 responses calibrated to the user\u2019s specific path',
        '4. Calm and Premium \u2014 visual language that communicates trust and safety',
        '5. Human Over AI \u2014 photography and tone that feel real, not artificially optimistic',
      ],
      quote:
        'What if people could have a conversation with the version of themselves they are trying to become?',
    },
    {
      number: '04',
      title: 'KEY DESIGN DECISIONS',
      content: [
        'DECISION 1 \u2014 Starting as Letters, Evolving to Conversation: The first version of FutureYou was much simpler. It was focused on one thing: generating letters from a future version of yourself based on your goals. That version was not enough. A one-way experience \u2014 receiving a letter \u2014 created a moment but not a relationship. Users needed to be able to respond, ask questions, and continue the conversation over time. The product evolved from letters into a full conversational platform \u2014 chat with your future self, personalized career guidance, revisit past conversations, unlock deeper experiences as you grow. The letter feature remained \u2014 but as one part of a larger experience, not the entire product.',
        'DECISION 2 \u2014 Goal-Based Journeys Instead of Open Conversations: Open-ended AI conversations feel powerful in demos but overwhelming in practice. FutureYou structures the experience around meaningful life paths: AI Engineer, Product Designer, Personal Growth, Relationships, Education. Each path shapes how the AI responds, what it prioritizes, and how it frames progress. This makes every conversation feel relevant rather than generic \u2014 and gives users a clear starting point instead of a blank prompt bar.',
        'DECISION 3 \u2014 Real Editorial Photography Over AI Aesthetics: AI products default to abstract gradients, glowing orbs, and faceless illustrations. That visual language communicates: this is a technology product. FutureYou uses real editorial photography \u2014 cinematic, human, grounded. The visual direction was a deliberate product decision: users need to feel safe enough to be honest about their fears. An interface that looks like a tech demo does not create that safety. An interface that feels human does.',
        'DECISION 4 \u2014 The Emotion I Designed Toward: Every design decision was tested against one question: Does this make the user feel hopeful, understood, and motivated? Not judged by their unfinished goals. Not pressured by productivity metrics. The experience should feel less like opening an app and more like meeting a version of yourself who already believes in you \u2014 and reminds you why the journey matters.',
        'DECISION 5 \u2014 Reducing Onboarding Friction to Zero: The fastest path to emotional value. Users choose a life path and start a conversation immediately. No long setup. No profile building. No feature tours. The product earns trust through the first interaction \u2014 not through promises made before it.',
      ],
      quote:
        'Designing for emotion is harder than designing for function \u2014 every visual choice either builds or breaks the user\u2019s sense of safety.',
    },
    {
      number: '05',
      title: 'UI SCREENS',
      content: [],
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
    'Emotional products require emotional design decisions. Every color, spacing choice, and interaction pattern either builds or breaks the user\u2019s sense of safety and trust. In FutureYou, visual language was not decoration \u2014 it was function.',
    'The best product idea came from questioning the obvious solution. Every AI product is a chatbot. FutureYou is a conversation with a version of yourself. That distinction sounds small but it changes everything about tone, structure, and what success means.',
    'Reducing friction is not about making things simpler. It is about removing everything that stands between the user and the moment the product becomes valuable to them specifically.',
    'Photography direction is a product design skill. Choosing real cinematic photography over AI-generated illustrations was one of the strongest brand decisions in this project. It changed how the product feels to use \u2014 not just how it looks.',
    'The most powerful products do not solve surface problems. They address the emotional need underneath. FutureYou exists because people do not need another productivity tool \u2014 they need to believe their future is worth working toward.',
  ],
  screens: [
    {
      src: '/images/future-you/screen-1.png',
      alt: 'FutureYou first impression screen',
      label: 'Screen 1 \u2014 first impression sets the emotional tone immediately',
      aspect: '402/951',
      featured: true,
      priority: true,
    },
    {
      src: '/images/future-you/screen-2.png',
      alt: 'FutureYou goal-based journey selection',
      label: 'Screen 2 \u2014 goal-based journey selection, personal from the start',
      aspect: '402/874',
    },
    {
      src: '/images/future-you/screen-3.png',
      alt: 'FutureYou conversation interface',
      label: 'Screen 3 \u2014 conversation interface, calm and human visual language',
      aspect: '402/951',
    },
    {
      src: '/images/future-you/screen-4.png',
      alt: 'FutureYou editorial photography direction',
      label: 'Screen 4 \u2014 editorial photography direction, premium and grounded',
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
