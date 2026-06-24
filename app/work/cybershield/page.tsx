import CaseStudyLayout, {
  type CaseStudyProject,
} from '../../../components/CaseStudyLayout';

const project: CaseStudyProject = {
  number: '04',
  title: 'CYBERSHIELD & PRO',
  accentWord: 'PRO',
  tags: ['Security Dashboard', 'AI Anomaly Detection', 'SaaS', 'Live Product'],
  description:
    'An AI-powered network security platform \u2014 rule-based detection for CyberShield, behavioral AI anomaly analysis for CyberShield Pro.',
  role: 'UI/UX Designer \u00B7 Product Designer',
  year: '2024',
  tools: 'Figma \u00B7 AI-Assisted Design Workflows',
  status: 'Case Study + Live Deployed Product',
  prototypeUrl:
    'https://www.figma.com/proto/4EP68lwl1n3F8lhaPb8nAr/hari-projects?node-id=518-109&t=e4rMm78x3AF1VIfL-1&scaling=min-zoom&content-scaling=fixed&page-id=345%3A107',
  liveSiteUrl: 'https://cyber-shield-ai-six.vercel.app/',
  nextHref: '/work/future-you',
  nextTitle: 'FUTURE YOU',
  screensSectionTitle: 'UI SCREENS',
  screenGrid: 'two-column',
  sections: [
    {
      number: '01',
      title: 'THE PROBLEM',
      content: [
        'Almost everything we do today depends on the internet. Most people have no idea how much activity happens behind the scenes in a network \u2014 port scans, suspicious connections, malicious traffic patterns that appear long before they cause damage.',
        'While learning cybersecurity concepts, I became deeply interested in intrusion detection systems. How do you catch an attack before it causes damage? What does that monitoring experience actually look like for the person watching the network?',
        'What I found was a design problem as much as a technical one.',
        'Core Problems I Identified:',
        '\u2014 Alert overload with no prioritization \u2014 everything looks equally urgent',
        '\u2014 Data-heavy interfaces that require training just to read',
        '\u2014 No visual distinction between rule-based and AI-detected anomalies',
        '\u2014 False positive rates that erode trust in the system over time',
        '\u2014 No clear separation between monitoring and response workflows',
        'The key insight that drove every design decision: A security dashboard is not a data display tool. It is a decision support tool. Every element must support faster, more confident decision-making \u2014 not more comprehensive data presentation.',
      ],
      quote:
        'Security dashboards are built by engineers for engineers. The people who use them every day are drowning in data with no clear path to what actually matters.',
    },
    {
      number: '02',
      title: 'RESEARCH & DISCOVERY',
      content: [
        'I did not directly interview professional security analysts for this project. Instead I invested significant time studying how security dashboards are designed in existing cybersecurity tools \u2014 watching demonstrations, product walkthroughs, and real-world security monitoring videos to understand what information matters and how it needs to be presented.',
        'That research shaped three core findings:',
        'FINDING 1 \u2014 Alert Fatigue is the #1 Usability Failure: When every alert looks the same, analysts develop alert blindness. They start ignoring notifications not because they are careless \u2014 but because the system flagged everything with equal urgency and was wrong too many times. The solution is not fewer alerts. It is better alert hierarchy.',
        'FINDING 2 \u2014 Rule-Based vs AI Detection Are Two Different Workflows: Existing tools mix rule-based intrusion detection with AI anomaly detection in the same interface with no visual distinction. These two detection types require different analyst responses and different levels of urgency. Treating them identically is a fundamental UX failure.',
        'FINDING 3 \u2014 Non-Technical Users Are Underserved: SMB owners and IT generalists make up a massive segment of security dashboard users. They are not specialists. They need a tool that communicates clearly, prioritizes automatically, and reduces the expertise required to act on a threat.',
      ],
    },
    {
      number: '03',
      title: 'DEFINE',
      content: [
        'The research led to a clear product architecture: not one tool, but two \u2014 serving different users with different needs, built on a shared design language.',
        'CYBERSHIELD \u2014 Rule-Based Detection: "CyberShield tells you what happened." For network administrators and IT generalists who need clear, structured monitoring with reliable rule-based intrusion detection. Prioritizes clarity, status visibility, and simple alert management.',
        'CYBERSHIELD PRO \u2014 AI Anomaly Detection: "CyberShield Pro helps explain why it happened and whether it could become a bigger threat." For security analysts dealing with sophisticated threats including encrypted traffic. Layers AI behavioral analysis on top of rule-based detection \u2014 adding anomaly visualization, pattern recognition, and predictive threat intelligence.',
        'Why two tiers matter as a design decision: Mixing advanced AI analysis with basic monitoring in a single interface creates cognitive overload for standard users and undersells the AI capability to advanced ones. Separate tiers let each product be exactly what its user needs \u2014 nothing more, nothing less.',
      ],
      quote:
        'The interface needed to convert complex network behavior into a clear decision surface.',
    },
    {
      number: '04',
      title: 'KEY DESIGN DECISIONS',
      content: [
        'DECISION 1 \u2014 Three-Level Alert Hierarchy: The hardest screen to design was the Live Threat Monitoring screen. The first version was cluttered \u2014 too many alerts and details competing for attention at the same priority level. I spent significant time reorganizing the layout around one rule: severity must be readable before the analyst reads a single word. The three-level system I established: CRITICAL \u2192 Requires immediate action (red, prominent, top of view). WARNING \u2192 Requires investigation (amber, secondary prominence). INFORMATIONAL \u2192 Logged but not urgent (subdued, accessible but quiet). This eliminated alert fatigue by making priority visually instant.',
        'DECISION 2 \u2014 Visual Differentiation Between Rule-Based and AI Detections: One of the most important decisions in the entire product. Rule-based alerts and AI anomaly detections use different visual treatments throughout \u2014 because they require completely different analyst responses. Rule-based alerts use structured badge-style indicators with defined severity colors. AI anomalies use softer gradient treatments with confidence percentage indicators. This distinction helps analysts immediately understand whether they are responding to a known pattern or an AI-flagged behavioral deviation.',
        'DECISION 3 \u2014 Confidence Scoring on Every AI Detection: False positives are the biggest trust-killer in security tools. Instead of just "anomaly detected," CyberShield Pro shows: "87% confidence \u2014 unusual outbound traffic pattern on port 443." This transforms the analyst\u2019s relationship with AI alerts from skepticism to calibrated trust.',
        'DECISION 4 \u2014 Dark Theme as a Functional Requirement: Security dashboards are used in dim server rooms and NOC environments. Dark theme here is not an aesthetic choice \u2014 it reduces eye strain during extended monitoring sessions and improves contrast for critical data visualization. It also communicates: this is a serious, professional tool.',
        'DECISION 5 \u2014 Incident Response Integrated, Not Separate: Most security tools separate monitoring from response. CyberShield integrates response workflows directly into the alert detail panel \u2014 acknowledge, investigate, escalate, or resolve \u2014 all without leaving the context of the alert.',
      ],
      quote:
        'Designing for trust under pressure \u2014 every visual decision either builds or erodes an analyst\u2019s confidence in the system.',
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
    { value: '2', label: 'PRODUCTS DESIGNED' },
    { value: '14', label: 'SCREENS DESIGNED' },
    { value: '35+', label: 'COMPONENTS BUILT' },
    { value: 'LIVE', label: 'DEPLOYED & SHIPPED' },
  ],
  learnings: [
    'Domain knowledge changes design decisions completely. Designing for security required understanding how analysts actually think about threats \u2014 not just how to display data. The user\u2019s mental model under pressure determines the information architecture.',
    'Trust is a design material. In security tools, users must trust what the system tells them before they act on it. Every decision \u2014 confidence scores, visual differentiation, alert hierarchy \u2014 was in service of building that trust deliberately.',
    'Hierarchy is more important than completeness. Security dashboards fail when they try to show everything. The hardest design work was deciding what to hide, what to deprioritize, and what to surface immediately.',
    'Building and deploying the product added a dimension to the design. Seeing CyberShield as a live, working product \u2014 not just a prototype \u2014 changed how I thought about edge cases, loading states, and error handling. Shipping is a design tool.',
    'The two-tier product architecture was the strongest decision in this project. Not because it is more complex \u2014 but because it lets each product be exactly what its user needs.',
  ],
  screens: [
    {
      src: '/images/cybershield/screen-1.jpeg',
      alt: 'CyberShield dashboard overview',
      label: 'Dashboard \u2014 system health score, three-column command center layout',
      featured: true,
      badge: 'LIVE PRODUCT',
    },
    {
      src: '/images/cybershield/screen-2.jpeg',
      alt: 'CyberShield login screen',
      label: 'Login \u2014 clean authentication, professional security tool aesthetic',
    },
    {
      src: '/images/cybershield/screen-3.jpeg',
      alt: 'CyberShield network monitor',
      label: 'Network Monitor \u2014 live traffic visualization with severity color coding',
    },
    {
      src: '/images/cybershield/screen-4.jpeg',
      alt: 'CyberShield trap system',
      label: 'Trap System \u2014 advanced threat detection and response workflow',
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
