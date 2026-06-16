const projects = [
  {
    id: 1,
    title: 'SmartQR Dine',
    subtitle: 'Multi-Tenant Restaurant SaaS Platform',
    image: '/project/smartqr.png',
    badge: 'featured',
    badgeText: 'Featured',
    description:
      'A multi-tenant restaurant SaaS platform featuring dynamic QR code ordering, real-time kitchen Kanban terminals, menu builder customization, and interactive business analytics.',
    problem:
      'Inefficient order handling, manual errors, and high operational friction in restaurants.',
    features: [
      'Built multi-tenant setup with restaurant website builder & themes',
      'Implemented real-time kitchen Kanban dashboard with Socket.io',
      'Created dynamic QR code menu constructor & print-ready generator',
      'Integrated interactive weekly sales analytics with glassmorphic tooltips',
    ],
    stack: [
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Socket.io',
      'MongoDB',
    ],
    demoUrl: 'https://smartqr-dine.vercel.app',
    githubUrl: 'https://github.com/ananyadarna/smartqr-dine',
  },

  {
    id: 2,
    title: 'NEXUS',
    subtitle: 'AI-Powered Supply Chain Intelligence Platform',
    image: '/project/nexus.png',
    badge: 'new',
    badgeText: 'Live',
    description:
      'Real-time logistics platform built to improve shipment visibility, disruption response, and supply chain coordination. Contributed backend systems, APIs, and live data workflows as part of a team project.',
    problem:
      'Delays, poor visibility, and inefficient coordination in supply chain operations.',
    features: [
      'Built backend APIs for shipment tracking and disruption alerts',
      'Integrated Socket.io for real-time logistics updates',
      'Connected Gemini AI APIs for rerouting suggestions',
      'Deployed backend on Render with production configuration',
    ],
    stack: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'Socket.io',
      'Firebase',
    ],
    demoUrl: 'https://nexus-yjtf.vercel.app/',
    githubUrl: 'https://github.com/raziabegum705/nexus',
  },

  {
    id: 3,
    title: 'TrashMorph',
    subtitle: 'Smart Upcycling Web Application',
    image: '/project/trashmorph.png',
    badge: 'new',
    badgeText: 'Live',
    description:
      'Responsive web app that converts waste item inputs into creative reuse ideas using JavaScript-based mapping logic. Designed to encourage sustainability through practical upcycling ideas.',
    problem:
      'Most household waste is discarded without exploring reuse opportunities.',
    features: [
      'Input-based waste item suggestion engine',
      'Creative reuse and DIY craft recommendations',
      'Responsive UI for desktop and mobile',
      'Fast client-side search interactions',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://trashmorph.netlify.app/',
    githubUrl: 'https://github.com/ananyadarna/trashmorph',
  },

  {
    id: 4,
    title: 'Laundry App',
    subtitle: 'Order Management System',
    image: '/project/laundry.png',
    badge: 'stack',
    badgeText: 'Full Stack',
    description:
      'Lightweight full-stack laundry management system that helps dry cleaning stores manage orders, billing, tracking, and customer workflows.',
    problem:
      'Manual order handling causes delays and billing mistakes in local laundry businesses.',
    features: [
      'Create and manage laundry orders',
      'Track order status in real time',
      'Billing and invoice generation',
      'Simple admin dashboard',
    ],
    stack: ['Node.js', 'Express', 'HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://laundry-app-eta-eight.vercel.app/',
    githubUrl: 'https://github.com/ananyadarna/laundry-app',
  },
]

export default projects