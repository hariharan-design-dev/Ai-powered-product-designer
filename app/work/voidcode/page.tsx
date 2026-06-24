import CaseStudyLayout, {
  type CaseStudyProject,
} from '../../../components/CaseStudyLayout';

const project: CaseStudyProject = {
  number: '02',
  title: 'VOIDCODE',
  accentWord: 'CODE',
  tags: ['AI Tool', 'Design-to-Code', 'Developer Tool', 'Conversational UI'],
  description:
    'A chat-first platform that converts Figma designs to production-ready code — eliminating the handoff gap between designers and developers.',
  role: 'Product Designer — End to End',
  year: '2025',
  tools: 'Figma · Stitch · AI UI Generation · Midjourney',
  status: 'Case Study / Portfolio Project',
  prototypeUrl:
    'https://www.figma.com/proto/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=247-206&t=Ud0JLNTWNSXgORKI-1&scaling=min-zoom&content-scaling=fixed&page-id=158%3A178&starting-point-node-id=195%3A245',
  nextHref: '/work/cheezy-crust',
  nextTitle: 'CHEEZY CRUST',
  screensSectionTitle: 'UI SCREENS',
  screenGrid: 'two-column',
  sections: [
    {
      number: '01',
      title: 'THE PROBLEM',
      content: [
        'As a UI/UX designer, I finish a design in Figma and then I hit a wall.',
        'Either I hand it off to a developer and wait days — or I try to manually write code that never quite matches what I designed. Colors are off. Spacing is wrong. The design intent I spent hours building gets interpreted differently by someone who never saw my thinking.',
        'The handoff process is broken. And I experienced this firsthand on every project I worked on.',
        'Competitor Gap Table:',
        'TOOL | WHAT IT DOES | WHY IT FAILS DESIGNERS',
        'GitHub Copilot | Code completion | Built for developers, not designers',
        'Cursor | AI code editor | Requires coding knowledge to operate',
        'v0 by Vercel | Text to UI | No Figma import, no design intent preserved',
        'Bolt | App builder | Too complex, too many steps before value',
        "The gap nobody was filling: a tool that starts FROM the designer's Figma file and produces clean, production-ready code — with an AI that speaks designer language, not developer jargon.",
        'Honest note on research:\nVoidCode was designed based on my own direct experience with the Figma-to-code handoff problem. I did not conduct formal user interviews for this project. Every decision was grounded in my personal frustration with this workflow and a thorough analysis of what existing tools were and were not doing. If I rebuilt this project, the first thing I would do is have 3 to 4 real conversations with other designers to validate whether they would want the same chat-based solution — or something completely different.',
      ],
      quote:
        'Designers finish in Figma. Developers build in code. The gap between them costs time, money, and design quality every single day.',
    },
    {
      number: '02',
      title: 'RESEARCH & DISCOVERY',
      content: [
        'Since VoidCode was built from my own experience, my research focused on competitive analysis — understanding exactly where every existing tool falls short for designers.',
        'I analyzed GitHub Copilot, Cursor, v0 by Vercel, and Bolt in depth. The pattern that emerged was consistent across all of them:',
        'Every single code generation tool starts with text or code as the entry point. Not one starts from a Figma design.',
        'Designers think visually. Their entry point should be visual too. That single observation became the core product insight behind VoidCode.',
        'Pain Points I Identified From My Own Workflow:',
        '1. Design-to-code handoff quality — highest pain',
        '2. Time waiting for developer builds after handoff',
        '3. Explaining design intent that gets lost in translation',
        '4. Making small code edits after something is already built',
        '5. Exporting assets consistently across different environments',
      ],
    },
    {
      number: '03',
      title: 'DEFINE',
      content: [
        'Surface Problem: "Designers can\'t write code"',
        'Real Problem: "The design-to-code pipeline has no tool that understands design intent and speaks designer language"',
        'Solving the surface problem gives you a coding tutorial. Solving the real problem gives you VoidCode.',
        'Design Principles I Set:',
        '1. Figma First — always start from what the designer already has',
        '2. Designer Language — no code jargon anywhere in the interface',
        '3. Conversational — AI should feel like a helpful developer colleague',
        '4. Zero Learning Curve — valuable on day one, no onboarding required',
        '5. Export Anywhere — code goes exactly where the designer needs it',
      ],
    },
    {
      number: '04',
      title: 'KEY DESIGN DECISIONS',
      content: [
        'DECISION 1 — Chat as the Interface (The Big Shift): My first version had a traditional multi-step flow: Input Screen → Processing Screen → Output Screen → Saved Prompts → History. That was 12 to 13 separate pages.',
        'The shift came when I thought about how Claude and ChatGPT work. The entire multi-step flow could collapse into one chat interface with different states — instead of separate pages for every step.',
        'Old Mental Model: Tool → Upload → Wait → Output → Edit',
        'New Mental Model: Chat → Import Figma → AI generates → Refine → Export',
        'This collapsed 6 steps into 2. More importantly, it made the tool feel immediately familiar. Designers already use chat interfaces every day. The learning curve collapsed to zero.',
        'DECISION 2 — Removing the Output Page: Early designs had a dedicated output page with three panels. One test reaction changed everything:',
        'Code output moved into the chat bubble itself. Users stay in flow. Navigation disappears entirely.',
        'DECISION 3 — Export as Slide-in Panel, Not Modal: Export options initially lived in a modal that blocked the entire screen. Redesigned as a slide-in panel from the right — users can see their code AND their export options simultaneously. Context never lost.',
        'DECISION 4 — The Three Zone Rule: One rule that eliminated every redundant page:',
        'SIDEBAR      → Where you navigate',
        'CENTER       → Where you work',
        'RIGHT PANEL  → Where you manage',
        'If a feature did not fit cleanly into one of these three zones, it did not belong in the product.',
        'DECISION 5 — Dark Theme for a Code Tool: Light themes are comfortable for reading. Dark themes reduce eye strain for code-heavy, extended sessions. VS Code, Cursor, and Linear all confirm this pattern. For a tool where users stare at code blocks for hours, dark was the only right answer.',
      ],
      quote:
        "I don't want to go to another page just to see my code. Just show it to me in the conversation.",
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
    { value: '13\u21928', label: 'PAGES ELIMINATED' },
    { value: '40+', label: 'COMPONENTS BUILT' },
    { value: '11', label: 'SCREENS DESIGNED' },
  ],
  learnings: [
    'The best UX decision I made was removing pages, not adding features. Every page I eliminated made the product faster and cleaner.',
    'Chat interfaces work because users already know them. Familiarity is a feature — not a shortcut.',
    'Design systems should be built before screens, not after. Every screen was faster to design because the system existed first.',
    "Starting from the user's existing workflow — their Figma file — instead of asking them to start fresh is the strongest product decision in this project.",
    'If I rebuilt VoidCode, the first thing I would do differently is talk to 3 to 4 real designers before touching Figma. Every decision here is based on my own experience — which is a real pain point, but it is one perspective. I do not know if other designers would want the same chat-based solution or something entirely different. That question should have come first.',
  ],
  screens: [
    {
      src: '/images/voidcode/screen-1.jpeg',
      alt: 'VoidCode interface screen 1',
      label: 'Landing Page — split view shows Figma design converting to code',
      featured: true,
    },
    {
      src: '/images/voidcode/screen-2.jpeg',
      alt: 'VoidCode interface screen 2',
      label: 'Login — clean authentication with zero distraction',
    },
    {
      src: '/images/voidcode/screen-3.jpeg',
      alt: 'VoidCode interface screen 3',
      label: 'Welcome State — centered prompt bar, four action chips, zero learning curve',
    },
    {
      src: '/images/voidcode/screen-4.jpeg',
      alt: 'VoidCode interface screen 4',
      label: 'Initial Page — full chat interface, sidebar history, inline code output',
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
