import CaseStudyLayout, {
  type CaseStudyProject,
} from '../../../components/CaseStudyLayout';

const project: CaseStudyProject = {
  number: '01',
  title: 'COREX AI',
  accentWord: 'AI',
  tags: ['AI Product', 'Conversation Management', 'SaaS', 'PRD Collaboration'],
  description:
    'Redesigning how people organize and retrieve AI conversations — workspace-based organization for the next generation of AI power users.',
  role: 'Product Designer — End to End',
  year: '2026',
  tools: 'Figma · Stitch · AI UI Generation',
  status: 'Case Study / Portfolio Project',
  prototypeUrl:
    'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=396-178&t=8HaeDCFf9UO5U4nF-1&scaling=min-zoom&content-scaling=fixed&page-id=295%3A231',
  nextHref: '/work/voidcode',
  nextTitle: 'VOIDCODE',
  screensSectionTitle: 'UI SCREENS',
  screenGrid: 'two-column',
  sections: [
    {
      number: '01',
      title: 'THE PROBLEM',
      content: [
        'I use Claude and ChatGPT every single day. And every single day I lose conversations I needed.',
        'I scroll for minutes looking for a chat I had last week. I remember the idea but not the exact words I typed. I find myself repeating the same conversation with the AI twice because I cannot find the first one.',
        'This is not a personal problem. This is a product problem.',
        'ChatGPT has 100 million+ daily users. Every single one faces the same broken sidebar. Claude, Gemini, Perplexity — all have the same flat list. Nobody has solved this. That gap became the foundation of CoreX AI.',
      ],
      quote:
        'AI tools have fundamentally changed how people think and work. But they all share the same flaw — conversations are stored in a flat, unstructured list with zero meaningful organization.',
    },
    {
      number: '02',
      title: 'RESEARCH & DISCOVERY',
      content: [
        'I ran a lightweight validation survey with 5 people who use AI chat tools daily — mostly students and developers in my own network. I want to be upfront: this was a directional check, not a statistically significant study.',
        'What made it useful was not the sample size. It was that all 5 responses converged on the exact same problem independently, without me prompting them toward it.',
        'Every single respondent uses AI tools daily.',
        'Every single one identified disorganization as their top frustration — "no proper organization," "poor naming," "too many chats in one place."',
        'When 100% of even a small sample agrees unprompted, that is a strong enough signal to design around.',
        'Three patterns emerged from the responses:',
        'PATTERN 1 — The Retrieval Problem is Severe: Manual scrolling is the primary method of finding old chats. There is no system — users just hope they can find it.',
        'PATTERN 2 — Users Want Category-Based Organization: Search helps when you remember words. Organization helps when you remember context. Users need both. Current tools only offer one.',
        'PATTERN 3 — Team Use is Completely Unsupported: Teams share AI research through screenshots and copy-pasting. A 2026 product sending people back to 2005 workflows.',
        'Three User Personas (built from response patterns):',
        'ARJUN — THE DAILY LEARNER: Built from a respondent who uses AI for "Learning / Studying" and cited "no proper organization" as their main problem. Needs subject-wise organization that mirrors how he thinks about coursework.',
        'RAHUL — THE PROJECT BUILDER: Built from two respondents who cited "Coding / Development" as primary use and wanted "Better search" or "Date-based grouping." Needs project-based workspaces with clear boundaries between contexts.',
        'MEENA — THE CREATIVE EXPLORER: The one persona built more from assumption than data. No respondent in this survey matched a designer/creative profile — that is a real gap I would fix with a follow-up survey targeting creative AI users specifically.',
      ],
    },
    {
      number: '03',
      title: 'DEFINE',
      content: [
        'Surface Problem: "I can\'t find my old chats"',
        'Real Problem: "AI tools were designed for single conversations — not for people who have thousands of conversations over months and years"',
        'This reframe changed everything about the solution. The answer was not better search. The answer was a workspace — a structural layer on top of AI conversations that organizes, retrieves, and enables collaboration the way users actually think.',
        'How Might We:',
        '— How might we organize AI conversations by project and topic, not by date?',
        '— How might we make retrieval instant without requiring perfect memory?',
        '— How might we bring team collaboration to AI conversations for the first time?',
        'Design Principles:',
        '1. Sidebar First — everything navigable without leaving current context',
        '2. Zero Extra Pages — if the sidebar can handle it, no new page needed',
        '3. Familiar Patterns — respect what users already know from Claude and ChatGPT',
        '4. Overlay, Not Interrupt — power features available but never in the way',
      ],
    },
    {
      number: '04',
      title: 'KEY DESIGN DECISIONS',
      content: [
        'DECISION 1 — Removing 4 Pages From the PRD: The initial PRD had 7 separate pages. My first sitemap followed it exactly. That was my biggest mistake.',
        'I had survey data showing people get lost navigating disorganized lists — but my first design added MORE navigation. More pages to move between. I was solving the categorization problem while making the click-path problem worse at the same time, without noticing the contradiction.',
        "It took deliberately comparing my flow against how Claude's sidebar works to catch that I had solved one problem while creating another.",
        'Old flow: Login → Dashboard → Chats Page → Search → Workspaces → Find → Open = 6 clicks to open something the user already created.',
        'New flow: Login → Chat Interface → Click sidebar → Open = 2 clicks. Same outcome. 67% reduction.',
        'DECISION 2 — Light Theme in a Sea of Dark: Every AI tool uses dark mode. Claude. ChatGPT. Gemini. Perplexity. CoreX AI uses a premium light theme.',
        'Why:',
        '— Differentiates immediately in a dark market',
        '— Better for long reading sessions — reading conversations, not writing code',
        '— Feels organizational and workspace-like rather than tool-like',
        '— References premium SaaS users already trust: Notion, Linear, Craft, Loom',
        'DECISION 3 — Workspaces Live in Sidebar, Not a Page: Moving workspaces to expandable sidebar items meant organization is always one click away — without ever leaving the current chat. No context lost. No navigation tax.',
        'DECISION 4 — Right Panel as Overlay Only: The right panel — Info, Bookmarks, Export — is never visible by default. Honest note: this pattern was not backed by my survey data. The survey told me people struggle to find chats. It told me nothing about whether they would want bookmarking or how they would expect to access it. I designed this based on what felt clean and what I had seen in Notion — not evidence. If I rebuilt this, I would add specific questions about bookmarking behavior before assuming a UI pattern for it.',
        'DECISION 5 — Glassmorphism at Exactly the Right Opacity: rgba(255,255,255,0.70) with backdrop-filter: blur(12px). Glassmorphism done subtly is premium. Glassmorphism done heavily is cheap. The difference is opacity and blur values — not the technique.',
      ],
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
    { value: '67%', label: 'CLICK REDUCTION' },
    { value: '7\u21925', label: 'PAGES REDUCED' },
    { value: '50+', label: 'DESIGN TOKENS' },
    { value: '10', label: 'SCREENS DESIGNED' },
  ],
  learnings: [
    'Having data and actually following it are two different things. I had survey evidence pointing toward a navigation problem and still designed a solution that made navigation worse in V1. The data only helped when I stopped and compared my decisions against it.',
    "Following proven patterns is not copying — it is respecting the user's existing mental model. The innovation is what you add on top, not reinventing what already works.",
    'The best product decisions in this project were removals, not additions. Every page I removed made the product better.',
    'Light theme in a dark world is a strong differentiation move. Design trends are not laws.',
    "A PRD is a starting point, not a specification. The designer's job is to question every assumption in it — especially the ones that silently add clicks.",
    'Knowing the difference between data-backed decisions and assumption-based ones — and being honest about which is which — is what separates designers who can be trusted from designers who just present work confidently.',
  ],
  screens: [
    {
      src: '/images/corex-ai/screen-1.jpeg',
      alt: 'CoreX AI interface screen 1',
      label: 'Landing Page — hero answers what CoreX AI does in under 3 seconds',
      featured: true,
    },
    {
      src: '/images/corex-ai/screen-2.jpeg',
      alt: 'CoreX AI interface screen 2',
      label: 'Login — two column layout, social proof left, authentication right',
    },
    {
      src: '/images/corex-ai/screen-3.jpeg',
      alt: 'CoreX AI interface screen 3',
      label: 'Welcome State — familiar pattern borrowed from Claude and ChatGPT',
    },
    {
      src: '/images/corex-ai/screen-4.jpeg',
      alt: 'CoreX AI interface screen 4',
      label: 'Active Chat — nothing in center except messages, full sidebar history',
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
