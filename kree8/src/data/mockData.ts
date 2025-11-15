import type {
  TestimonialProps,
  PortfolioItemProps,
  ServiceItemProps,
  FAQItemProps,
  ProblemSolutionProps,
  WorldClockProps,
  ComparisonRowProps,
  PricingPlanProps,
} from '../types';

export const testimonials: TestimonialProps[] = [
  {
    id: '1',
    quote: "We've been using KREE8 for months, and their designs always exceed expectations. Reliable, fast, and creative!",
    author: 'Khushi Soni',
    role: 'Founder',
    company: 'Sound Station',
    avatarUrl: 'https://i.pravatar.cc/150?u=khushi',
    logoUrl: 'https://via.placeholder.com/40x40/10B981/FFFFFF?text=SS',
    response: 'Thank you for the feedback',
  },
  {
    id: '2',
    quote: "Functional design meets beauty. Work with Kree8 if you can. Their designs are always creative and aligned with our brand.",
    author: 'AI Meeting Recorder',
    role: 'Landing Page',
    company: 'tl;dv',
    avatarUrl: 'https://i.pravatar.cc/150?u=tldv',
    logoUrl: 'https://via.placeholder.com/40x40/10B981/FFFFFF?text=AI',
    response: 'Thank you tl;dv',
  },
  {
    id: '3',
    quote: "KREE8's graphic design quality is unmatched. Whether it's branding or marketing materials, their service keeps everything seamless and affordable",
    author: 'Rohan Jhaveri',
    role: 'Founder',
    company: '505 Coffee',
    avatarUrl: 'https://i.pravatar.cc/150?u=rohan',
    logoUrl: 'https://via.placeholder.com/40x40/10B981/FFFFFF?text=505',
    response: "We'll love to work with you ❤️",
  },
];

export const portfolioItems: PortfolioItemProps[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    logoUrl: 'https://via.placeholder.com/60x60/FFFFFF/0A0A0A?text=P1',
    title: 'Project 1',
    link: '#',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    logoUrl: 'https://via.placeholder.com/60x60/FFFFFF/0A0A0A?text=P2',
    title: 'Project 2',
    link: '#',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
    logoUrl: 'https://via.placeholder.com/60x60/FFFFFF/0A0A0A?text=P3',
    title: 'Project 3',
    link: '#',
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    logoUrl: 'https://via.placeholder.com/60x60/FFFFFF/0A0A0A?text=P4',
    title: 'Project 4',
    link: '#',
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
    logoUrl: 'https://via.placeholder.com/60x60/FFFFFF/0A0A0A?text=P5',
    title: 'Project 5',
    link: '#',
  },
];

export const services: ServiceItemProps[] = [
  {
    id: '1',
    title: 'Website Design',
    beforeImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    title: 'Mobile App Design',
    beforeImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    title: 'Framer and Webflow\nDevelopment (No-Code)',
    beforeImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    title: 'Social Media Graphics',
    beforeImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop',
  },
  {
    id: '5',
    title: 'Pitch Decks',
    beforeImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
  },
  {
    id: '6',
    title: 'Branding',
    beforeImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
  },
  {
    id: '7',
    title: 'Business Cards',
    beforeImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=300&fit=crop',
  },
  {
    id: '8',
    title: 'Logos',
    beforeImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=300&fit=crop',
  },
  {
    id: '9',
    title: 'Packaging',
    beforeImage: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=300&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=300&fit=crop',
  },
];

export const faqs: FAQItemProps[] = [
  {
    id: '1',
    question: "Who's behind kree8?",
    answer: "kree8 is led by a passionate team Ved, a brand strategist and creative mind, and Jay, a talented designer and developer. Together, we built KREE8 to deliver innovative design solutions tailored to each client's unique needs.",
    avatarUrl: 'https://i.pravatar.cc/150?u=ved',
    avatarName: 'Ved',
  },
  {
    id: '2',
    question: 'How does the delivery process work?',
    answer: "Once you submit a design request through our platform, our team begins by reviewing your brief to fully understand your needs. You'll receive an initial draft within 48 hours, and from there, we work closely with you.",
    avatarUrl: 'https://i.pravatar.cc/150?u=jay',
    avatarName: 'Jay',
  },
  {
    id: '3',
    question: 'Is there a limit to how many design requests I can have?',
    answer: "No, there's no limit to the number of design requests you can submit. However, we work on one request at a time, ensuring each project receives our full attention and quality.",
    avatarUrl: 'https://i.pravatar.cc/150?u=ved',
    avatarName: 'Ved',
  },
  {
    id: '4',
    question: 'How fast will I receive my designs?',
    answer: 'For most requests, you can expect an initial draft within 48 hours. The turnaround time may vary depending on the complexity of the project.',
    avatarUrl: 'https://i.pravatar.cc/150?u=jay',
    avatarName: 'Jay',
  },
  {
    id: '5',
    question: "What if I don't like the design?",
    answer: "Your satisfaction is our priority. If you're not happy with the initial design, you can request revisions, and we'll make the necessary adjustments based on your feedback.",
    avatarUrl: 'https://i.pravatar.cc/150?u=ved',
    avatarName: 'Ved',
  },
  {
    id: '6',
    question: 'Do you make Shopify websites?',
    answer: "Unfortunately, we don't develop Shopify websites, but we can still help you with Designing the UI for your Shopify website :)",
    avatarUrl: 'https://i.pravatar.cc/150?u=jay',
    avatarName: 'Jay',
  },
];

export const problemSolutions: ProblemSolutionProps[] = [
  {
    id: '1',
    number: '1',
    title: 'Resource Constraints',
    problem: 'Internal design teams may be understaffed or lack the specific skills needed for certain projects.',
    solution: 'KREE8 provides access to a team of experienced designers with diverse skills, allowing clients to scale resources up or down as needed without hiring additional full-time staff.',
  },
  {
    id: '2',
    number: '2',
    title: 'High Costs',
    problem: 'Maintaining an in-house design team can be expensive due to salaries, benefits, and training costs.',
    solution: "KREE8's subscription model offers high-quality design services at a fraction of the cost of hiring an in-house team, making it a cost-effective solution for clients.",
  },
  {
    id: '3',
    number: '3',
    title: 'Managing Workloads',
    problem: 'Internal teams might struggle with managing workloads, especially during peak periods or when handling multiple projects simultaneously.',
    solution: 'KREE8 can handle fluctuating workloads by providing additional support when needed, ensuring that deadlines are met without overburdening the internal team.',
  },
  {
    id: '4',
    number: '4',
    title: 'Design Consistency',
    problem: 'Maintaining design consistency across various platforms and projects can be challenging with an internal team, especially if there are multiple designers involved.',
    solution: 'KREE8 ensures a cohesive design approach and maintains brand consistency across all design work, reducing the risk of inconsistent messaging and visual identity.',
  },
  {
    id: '5',
    number: '5',
    title: 'Expertise and Specialization',
    problem: 'Internal teams might lack specialized knowledge or experience in certain areas of design (e.g., advanced UX/UI, motion graphics).',
    solution: 'KREE8 offers specialized design expertise and the latest design trends, providing high-quality work that might be beyond the capabilities of an internal team.',
  },
  {
    id: '6',
    number: '6',
    title: 'Communication and Coordination',
    problem: 'Coordinating between internal teams and external designers can lead to miscommunications and delays.',
    solution: "KREE8's subscription service provides a streamlined process with clear communication channels, ensuring that projects are executed smoothly and efficiently.",
  },
];

export const worldClocks: WorldClockProps[] = [
  {
    city: 'New York',
    country: 'USA',
    timezone: 'America/New_York',
    message: 'Best time to get your website online',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    timezone: 'Asia/Dubai',
    message: 'Best time to get your brand design',
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    timezone: 'Asia/Tokyo',
    message: 'Best time to get your website online',
  },
  {
    city: 'London',
    country: 'UK',
    timezone: 'Europe/London',
    message: 'Best time to get your brand design',
  },
];

export const comparisonData: ComparisonRowProps[] = [
  {
    feature: 'Cost',
    kree8: '$',
    fullTimeDesigner: '$$$$ (High Overhead)',
    otherAgencies: '$$',
  },
  {
    feature: 'Senior-Level Designer',
    kree8: true,
    fullTimeDesigner: 'Hopefully',
    otherAgencies: 'Maybe',
  },
  {
    feature: 'Turnaround Time',
    kree8: '48 hours for most projects',
    fullTimeDesigner: 'Can take weeks due to other tasks',
    otherAgencies: 'Weeks, depending on workload',
  },
  {
    feature: 'Start Time',
    kree8: 'Today itself',
    fullTimeDesigner: 'Weeks to onboard and train',
    otherAgencies: 'Days to set up agreements',
  },
  {
    feature: 'Unlimited Revisions',
    kree8: true,
    fullTimeDesigner: 'Limited, with extra time constraints',
    otherAgencies: 'Limited revisions per project',
  },
  {
    feature: 'Client Portal',
    kree8: true,
    fullTimeDesigner: 'Internal systems may vary',
    otherAgencies: 'No consistent system',
  },
  {
    feature: 'Scalability',
    kree8: 'Scale up or down with ease',
    fullTimeDesigner: 'Possible',
    otherAgencies: "Limited by freelancer's capacity",
  },
  {
    feature: 'Flexibility',
    kree8: 'Pause or adjust anytime',
    fullTimeDesigner: 'Locked into salaries',
    otherAgencies: 'Inflexible, project-based',
  },
];

export const pricingPlans: PricingPlanProps[] = [
  {
    id: '1',
    name: 'Retainer',
    subtitle: 'Make it Faster',
    description: 'Ideal for those who need an ongoing quick design support.',
    price: '$6199',
    period: 'per month',
    features: [
      '1 Active request at a time',
      '2X Senior designer',
      'Bi-weekly progress meetings',
      'Fast turnaround',
      'Unlimited design requests',
      'Daily 4 hours of work',
      'Expert project management',
      'Communication through Async, Slack, Loom & Meetings',
      'Free Website Development with Framer',
    ],
    ctaText: 'Book a Call',
    ctaSubtext: "We'll be There",
    telegramText: 'Connect on Telegram',
    telegramSubtext: 'This Will be Quick',
  },
  {
    id: '2',
    name: 'Landing Page Design',
    subtitle: '',
    description: 'Bring your dream website to life in just days, not months.',
    price: '$3149',
    period: 'one time',
    features: [
      'Wireframes',
      'Custom Layout',
      'Desktop, Tablet, Mobile Responsive Design',
      'Brand Consistency',
      'Figma File',
      'Updates every 48 hours',
      '2X Revision',
      '+$400 For Each Extra Page',
      'Website development (Framer) +2k',
    ],
    ctaText: 'Book a Call',
    ctaSubtext: "We'll be There",
    telegramText: 'Connect on Telegram',
    telegramSubtext: 'This Will be Quick',
  },
];