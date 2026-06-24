import CaseStudyLayout, {
  type CaseStudyProject,
} from '../../../components/CaseStudyLayout';

const project: CaseStudyProject = {
  number: '03',
  title: 'CHEEZY CRUST',
  accentWord: 'CRUST',
  tags: ['Mobile App', 'Food & Delivery', 'Brand Identity', 'Mobile-First UX'],
  description:
    'A pizza ordering app built from zero — brand identity, appetite psychology, mobile-first UX, and a design system built to scale.',
  role: 'Brand Designer · UI/UX Designer · Product Thinker',
  year: '2024',
  tools: 'Figma · AI-Assisted Ideation · Mockup & Visualization Tools',
  status: 'Case Study / Portfolio Project',
  prototypeUrl:
    'https://www.figma.com/design/pqjAglGSKWfoeJV9iwnvgP/Untitled?node-id=135-1841&t=CY0jNVFo0eUqyEZw-1',
  nextHref: '/work/cybershield',
  nextTitle: 'CYBERSHIELD & PRO',
  screensSectionTitle: 'UI SCREENS',
  screenGrid: 'cheezy',
  sections: [
    {
      number: '01',
      title: 'THE PROBLEM',
      content: [
        'I opened Swiggy, Zomato, and Domino\u2019s back to back. They all worked fine. None of them felt exciting.',
        'The layouts were cluttered \u2014 every screen competing for attention in every direction. Food images were treated as thumbnails rather than the hero of the experience. The branding was interchangeable. I could swap logos between apps and barely notice the difference.',
        'Pizza especially should feel visually tempting. Hot. Melting. Something you want immediately. Instead it was one small card among fifty other cards.',
        'Key Problems I Identified:',
        '\u2014 Overcrowded layouts with no clear visual hierarchy',
        '\u2014 Food images given less space than promotional banners',
        '\u2014 Repetitive card systems that reduce engagement over time',
        '\u2014 Brand identity that feels secondary to functionality',
        '\u2014 Navigation flows that are transactional but not engaging',
        'The opportunity: design a pizza ordering experience where the brand and the product are inseparable \u2014 where every screen belongs to the same visual world.',
      ],
      quote:
        'The food delivery industry is full of apps that function correctly but fail to make you feel anything.',
    },
    {
      number: '02',
      title: 'RESEARCH & DISCOVERY',
      content: [
        'I analyzed the three most commonly used food delivery platforms in India to understand how they structure ordering flows, handle visuals, and guide users from browsing to checkout.',
        'What I found across all three:',
        'VISUAL HIERARCHY: Product images lack dominance \u2014 promotional content gets more real estate than the food itself, which is the only thing users actually came for.',
        'LAYOUT DENSITY: Information-heavy screens try to show everything at once. The result is that nothing stands out, so nothing gets remembered.',
        'BRAND IDENTITY: All three apps feel functionally similar. Remove the logo from any screen and it becomes difficult to identify which app you are looking at. Memorability was completely absent.',
        'ENGAGEMENT PATTERN: Repetitive card layouts reduce visual interest over time. The experience feels like a catalog, not a product.',
        'Design Opportunity: Instead of building another feature-parity food app, I focused on one question: what would a pizza-first visual experience actually feel like?',
      ],
    },
    {
      number: '03',
      title: 'DEFINE',
      content: [
        'Most app projects start with wireframes. I started with the brand.',
        'The reasoning was simple: if the brand is weak, the interface will feel generic regardless of how well it is designed. The brand had to be strong enough that users could recognize CheezyCrust from a single screen \u2014 without needing to see the logo.',
        'Brand Name: CheezyCrust \u2014 Selected to communicate three things instantly \u2014 cheese richness, pizza identity, and startup-friendly personality. Memorable, pronounceable, and immediately visual.',
        'Brand Tagline: "Hot. Fresh. Fast." \u2014 Three words. Three core values. Nothing wasted.',
        'Design Principles:',
        '1. Food First \u2014 every screen gives food the most visual real estate',
        '2. Appetite Psychology \u2014 color and imagery choices must trigger hunger',
        '3. Brand Consistency \u2014 every component must feel like it belongs together',
        '4. Reduce Friction \u2014 the path from seeing a pizza to ordering it must be fast',
      ],
    },
    {
      number: '04',
      title: 'KEY DESIGN DECISIONS',
      content: [
        'DECISION 1 \u2014 Color System Built From Appetite Psychology: The color palette was not chosen for aesthetics. It was built from how colors affect hunger and engagement in food contexts. Cheese Yellow for warmth and hunger stimulation. Tomato Red for energy, urgency, and appetite. Soft Cream for UI cleanliness and breathing room. Charcoal Black for readability without visual harshness. Warm tones in food apps are not just aesthetic choices \u2014 they are functionally connected to how users respond to food visually. This color system was a product decision before it was a visual one.',
        'DECISION 2 \u2014 Large Food Visuals as the Primary UI Element: In every competitor app, promotional banners got the hero position. Food images were secondary \u2014 small, uniform, interchangeable. I inverted this completely. Large pizza visuals were given the most screen real estate on every key screen. The food is the hero. Everything else supports it.',
        'DECISION 3 \u2014 Intentional Whitespace to Prevent Overload: The risk of large food imagery is visual overcrowding. I used whitespace aggressively \u2014 not as empty space, but as a tool to make the food visuals land harder. Restraint in the chrome makes the content more powerful, not less.',
        'DECISION 4 \u2014 Single Prominent CTA on Product Detail: The product detail screen originally had multiple competing actions. I reduced it to one prominent Add to Cart CTA. Every other element on the screen exists to help the user decide \u2014 not to distract them from deciding.',
        'DECISION 5 \u2014 What I Would Push Further: If I had more time, I would develop the AI personalization layer \u2014 suggesting pizzas based on mood, time of day, or previous orders. Right now the design focuses on visuals and flow, which is strong. But making the app smarter would push it from a great UI to a genuinely product-driven experience.',
      ],
      quote:
        'Every decision with a reason \u2014 not a single aesthetic choice was made without a product rationale behind it.',
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
    { value: '8-10', label: 'SCREENS DESIGNED' },
    { value: '4', label: 'BRAND CHALLENGES SOLVED' },
    { value: '1', label: 'UNIFIED DESIGN SYSTEM' },
    { value: '3', label: 'COMPETITOR APPS ANALYZED' },
  ],
  learnings: [
    'Brand identity is a product feature. In a saturated market, memorability is a competitive advantage. CheezyCrust was designed to be remembered, not just used.',
    'Appetite psychology is a design tool, not just a theory. Color and spacing decisions in food apps have measurable behavioral effects \u2014 not just aesthetic ones. Every warm tone was a product decision.',
    'Starting with brand before wireframes changed the entire project. Every UI decision had a clear reference point \u2014 does this feel like CheezyCrust? That question alone eliminated dozens of bad directions early.',
    'Whitespace is not empty space \u2014 it is the tool that makes everything else more powerful. The restraint in the UI makes the food imagery land harder.',
    'The AI personalization angle I did not build is the most interesting part of where this product could go. That is what I would focus on in a V2 \u2014 making the experience smarter, not just more visually polished.',
  ],
  screens: [
    {
      src: '/images/cheezy-crust/screen-1.jpeg',
      alt: 'Cheezy Crust splash screen',
      label: 'Splash Screen \u2014 brand identity lands in the first second',
      featured: true,
    },
    {
      src: '/images/cheezy-crust/screen-2.jpeg',
      alt: 'Cheezy Crust onboarding screen',
      label: 'Onboarding \u2014 sets visual tone before the user reaches the app',
    },
    {
      src: '/images/cheezy-crust/screen-3.jpeg',
      alt: 'Cheezy Crust onboarding step 2',
      label: 'Onboarding Step 2 \u2014 reduced friction, clear value communication',
    },
    {
      src: '/images/cheezy-crust/screen-4.jpeg',
      alt: 'Cheezy Crust login screen',
      label: 'Login Screen \u2014 minimal, brand-consistent, fast path to the product',
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
