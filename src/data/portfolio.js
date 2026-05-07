export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "Featured Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Why Hire Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Asad-Chowdhury",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/asadchowdhury/",
    icon: "linkedin",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~0104b3b0e36cd4ac49",
    icon: "briefcase",
  },
  {
    label: "Email",
    href: "mailto:asad.ami@gmail.com",
    icon: "mail",
  },
];

export const proofPoints = [
  {
    label: "Experience",
    value: "5+ Years",
    description:
      "Conversion tracking, analytics, and marketing infrastructure.",
  },
  {
    label: "Freelance Proof",
    value: "100% Job Success",
    description: "Strong delivery record on Upwork.",
  },
  {
    label: "Business Types",
    value: "SaaS + eCommerce",
    description:
      "Experience across SaaS, Shopify, agencies, and lead generation.",
  },
  {
    label: "Core Tracking Stack",
    value: "DataLayer injection | GTM | CAPI | Marketing/Analytics End-points",
    description:
      "Client-side, server-side, and CRM-connected tracking systems.",
  },
  {
    label: "Core Development Stack",
    value: "Next.js | React | JS | Node.js | Express | MongoDB",
    description:
      "Client-side, server-side, and CRM-connected tracking systems.",
  },
];

export const testimonials = [
  {
    title: "Client Testimonial: Ricky Hayes, CEO, Debutify",
    label: "Client Testimonial:",
    name: "Ricky Hayes",
    role: "CEO, Debutify",
    videoId: "jcyPcIBRzkw",
  },
  {
    title: "Client Testimonial: Cory Roland, CEO, Optimal Media",
    label: "Client Testimonial:",
    name: "Cory Roland",
    role: "CEO, Optimal Media",
    videoId: "aDUQC3GbuWw",
  },
  {
    title:
      "Client Testimonial: Alexandra di Guglielmo, Agency Owner, Bytes to insights",
    label: "Client Testimonial:",
    name: "Alexandra di Guglielmo",
    role: "Agency Owner, Bytes to insights",
    videoId: "iDv1GzV6Xts",
  },
];

export const positioningCards = [
  {
    icon: "code",
    title: "Full-Stack Development",
    description:
      "Modern web interfaces, backend workflows, API integrations, dashboards, and automation systems using Next.js, React, Node.js, databases, and webhooks.",
  },
  {
    icon: "workflow",
    title: "Tracking & Attribution Infrastructure",
    description:
      "Event tracking systems across GA4, GTM, server-side tracking, Meta CAPI, Google Ads, UTMs, click IDs, consent mode, CRM stages, and checkout flows.",
  },
  {
    icon: "target",
    title: "Growth & Revenue Context",
    description:
      "Technical implementation connected to business questions: lead quality, funnel breaks, event priority, and revenue feedback into marketing systems.",
  },
];

export const problems = [
  {
    icon: "activity",
    title: "Broken Tracking & Attribution",
    description:
      "Diagnose and fix missing conversions, unreliable analytics events, cross-domain issues, checkout tracking gaps, consent-related data loss, and ad platform attribution problems.",
    items: [
      "GA4 debugging",
      "GTM audits",
      "Server-side tracking",
      "Meta CAPI",
      "Google Ads conversions",
      "Cross-domain tracking",
    ],
  },
  {
    icon: "database",
    title: "Marketing Data Infrastructure",
    description:
      "Build data flows that connect websites, product events, CRMs, ad platforms, spreadsheets, dashboards, and reporting systems.",
    items: [
      "CRM webhooks",
      "Offline conversions",
      "Lead lifecycle tracking",
      "Google Sheets pipelines",
      "Looker Studio dashboards",
      "BigQuery reporting",
    ],
  },
  {
    icon: "barChart",
    title: "SaaS & eCommerce Analytics",
    description:
      "Help teams understand acquisition, activation, checkout behavior, lead quality, funnel drop-offs, revenue contribution, and campaign performance.",
    items: [
      "Funnel analysis",
      "Shopify analytics",
      "Lead quality reporting",
      "Product analytics",
      "Revenue attribution",
      "Campaign reporting",
    ],
  },
  {
    icon: "server",
    title: "Full-Stack Implementation",
    description:
      "Build landing pages, dashboards, internal tools, tracking utilities, data capture systems, webhook workflows, and SaaS-style prototypes.",
    items: ["Next.js", "React", "Node.js", "MongoDB", "APIs", "Automation tools"],
  },
];

export const projects = [
  {
    title: "Conversion Tracking Audit System",
    category: "SaaS / Internal Tool Concept",
    problem:
      "Businesses often do not know when GTM, GA4, ad pixels, or conversion events stop working.",
    solution:
      "A monitoring system that checks whether key tracking events fire across important flows and reports issues in a dashboard.",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "GTM",
      "GA4",
      "Server-side tracking",
      "Webhooks",
    ],
    outcome:
      "Shows full-stack implementation against a real marketing infrastructure problem.",
    visual: "audit",
  },
  {
    title: "Shopify Tracking & Analytics Infrastructure",
    category: "eCommerce Tracking System",
    problem:
      "Shopify stores lose attribution because of checkout changes, app conflicts, consent banners, ad blockers, and incomplete dataLayer implementation.",
    solution:
      "Implemented GA4 ecommerce events, GTM tracking, Meta CAPI, Google Ads conversions, server-side tracking, and checkout-compatible event flows.",
    stack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "GTM",
      "GA4",
      "Meta CAPI",
      "Google Ads",
    ],
    outcome:
      "Improved ecommerce tracking reliability and campaign reporting quality.",
    visual: "shopify",
  },
  {
    title: "CRM to Ad Platform Offline Conversion Pipeline",
    category: "Marketing Data Pipeline",
    problem:
      "Lead-generation businesses qualify or close leads later inside a CRM, but ad platforms do not automatically receive those downstream signals.",
    solution:
      "Built a pipeline to send qualified and converted lead events to Meta CAPI and Google Ads using click IDs, hashed user data, timestamps, and deduplication logic.",
    stack: [
      "CRM webhooks",
      "Zapier",
      "JavaScript",
      "Meta CAPI",
      "Google Ads",
      "Looker Studio",
    ],
    outcome:
      "Connected lead quality and downstream revenue signals back to advertising platforms.",
    visual: "pipeline",
  },
  {
    title: "Attribution & Funnel Reporting Dashboard",
    category: "Analytics Dashboard",
    problem:
      "Marketing teams see form submissions or purchases, but not which sources, campaigns, pages, and funnel stages drive quality outcomes.",
    solution:
      "Created a reporting structure combining conversion data, click IDs, UTMs, CRM stages, lead quality, and revenue outcomes.",
    stack: ["Looker Studio", "BigQuery", "SQL", "GA4", "CRM exports", "UTMs"],
    outcome:
      "Helped teams move from raw conversion counts to better campaign and funnel decisions.",
    visual: "dashboard",
  },
  {
    title: "Personal Portfolio Website",
    category: "Next.js Portfolio",
    problem:
      "Needed a portfolio that positions Asad as a Full Stack Marketing Engineer instead of a generic developer or tracking freelancer.",
    solution:
      "Built a modern portfolio with positioning, project storytelling, technical stack, professional proof, and SaaS-focused messaging.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    outcome:
      "Designed to attract SaaS, analytics, growth, and marketing engineering opportunities.",
    visual: "portfolio",
  },
];

export const skillGroups = [
  {
    title: "Frontend Development",
    icon: "code",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive UI",
      "Component-based development",
    ],
  },
  {
    title: "Backend & Full Stack",
    icon: "server",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Webhooks",
      "MongoDB",
      "Authentication flows",
      "Server-side logic",
      "Automation workflows",
    ],
  },
  {
    title: "Marketing Engineering",
    icon: "target",
    skills: [
      "Google Tag Manager",
      "Server-side GTM",
      "GA4",
      "Meta Pixel",
      "Meta Conversions API",
      "Google Ads",
      "Enhanced Conversions",
      "Consent Mode",
      "Shopify tracking",
      "Offline conversions",
    ],
  },
  {
    title: "Data & Analytics",
    icon: "barChart",
    skills: [
      "BigQuery",
      "SQL",
      "Looker Studio",
      "Funnel analysis",
      "CRM data mapping",
      "Attribution analysis",
      "Event schema design",
      "Data cleaning",
      "Reporting dashboards",
    ],
  },
  {
    title: "Platforms & Tools",
    icon: "briefcase",
    skills: [
      "Shopify",
      "WordPress",
      "HubSpot",
      "Lead Docket",
      "Zapier",
      "Make",
      "Stape",
      "Google Cloud",
      "GitHub",
      "Vercel",
      "Postman",
      "Chrome DevTools",
    ],
  },
];

export const experiences = [
  {
    role: "Conversion Tracking Expert",
    company: "Digital Recipe",
    achievement:
      "Built reliable campaign measurement systems across GA4, GTM, Meta CAPI, Google Ads, CRM events, and offline conversion workflows.",
    summary:
      "Worked as a Conversion Tracking Expert delivering advanced analytics, attribution, and server-side tracking solutions for marketing and lead-generation campaigns.",
    responsibilities: [
      "Implemented GA4, Google Tag Manager, and server-side tracking solutions.",
      "Configured Meta Pixel, Meta Conversions API, Google Ads conversions, and enhanced conversions.",
      "Built and debugged cross-domain and iframe tracking implementations.",
      "Created custom dataLayer events and JavaScript-based tracking solutions.",
      "Integrated CRM and offline conversion workflows with advertising platforms.",
      "Supported analytics reporting and attribution troubleshooting for marketing teams.",
    ],
  },
  {
    role: "Conversion Tracking & Data Analysis Specialist",
    company: "Conversio",
    achievement:
      "Improved marketing data quality by pairing tracking implementation with reporting QA, funnel analysis, and dashboard-ready event structures.",
    summary:
      "Provided conversion tracking, analytics implementation, and reporting support for eCommerce and performance marketing clients.",
    responsibilities: [
      "Configured and maintained GA4 and GTM tracking implementations.",
      "Built attribution and event tracking systems across marketing funnels.",
      "Created custom reports and dashboards using Looker Studio.",
      "Performed data validation, QA, and analytics debugging.",
      "Analyzed conversion and user behavior data to support optimization efforts.",
      "Collaborated with developers and marketers to improve measurement accuracy.",
    ],
  },
  {
    role: "Team Lead - Conversion Tracking",
    company: "Debutify",
    achievement:
      "Led Shopify-focused analytics and attribution work for a growth-driven eCommerce SaaS environment, connecting checkout behavior to ad platform optimization.",
    summary:
      "Led conversion tracking and analytics initiatives focused on Shopify eCommerce tracking, attribution, and marketing performance optimization.",
    responsibilities: [
      "Managed Shopify-focused tracking implementations and troubleshooting.",
      "Configured GA4 ecommerce tracking and checkout event measurement.",
      "Implemented Meta CAPI and Google Ads tracking for performance campaigns.",
      "Worked with server-side tracking and consent mode implementations.",
      "Guided tracking strategy and technical implementation processes.",
      "Collaborated with internal and external stakeholders on analytics solutions.",
    ],
  },
  {
    role: "Conversion Tracking Specialist",
    company: "Quick Evolve",
    achievement:
      "Helped agency clients turn fragmented lead-generation tracking into cleaner conversion signals, reporting flows, and campaign measurement systems.",
    summary:
      "Delivered tracking and analytics solutions for agency clients focused on lead generation, attribution, and campaign measurement.",
    responsibilities: [
      "Implemented conversion tracking across Google Ads, Meta Ads, and GA4.",
      "Configured GTM-based event tracking and custom triggers.",
      "Diagnosed attribution and reporting inconsistencies.",
      "Integrated offline conversion tracking workflows.",
      "Built reporting systems and analytics dashboards.",
      "Provided technical consultation for campaign measurement and optimization.",
    ],
  },
  {
    role: "Marketing & Automation Engineer",
    company: "Bytes 2 Insights",
    achievement:
      "Designed automation and analytics pipelines that connected CRM activity, ad platforms, reporting dashboards, and technical QA into scalable growth operations.",
    summary:
      "Responsible for designing marketing data collection systems, automation workflows, and reporting pipelines for major clients, ensuring accurate attribution, reliable analytics, and scalable data operations.",
    responsibilities: [
      "Built automation workflows using Zapier, webhooks, and API integrations.",
      "Designed and maintained marketing data pipelines for analytics and reporting.",
      "Implemented GA4, GTM, server-side tracking, and conversion attribution systems.",
      "Monitored tracking health, event accuracy, and data consistency across platforms.",
      "Created Looker Studio dashboards for marketing performance and executive reporting.",
      "Integrated CRM, ad platforms, and analytics tools into centralized reporting systems.",
      "Developed automated lead tracking and offline conversion workflows.",
      "Performed data validation, QA, and troubleshooting for analytics implementations.",
      "Collaborated with marketing, operations, and technical teams to improve reporting reliability.",
      "Worked on scalable analytics and automation solutions aligned with SaaS and performance marketing workflows.",
    ],
  },
];

export const thinkingCards = [
  {
    title: "Attribution breaks when systems are disconnected",
    copy:
      "A visitor may come from an ad, browse the site, submit a form, enter a CRM, and convert days later. If the tracking architecture does not preserve IDs, UTMs, user data, and lifecycle stages, the business loses visibility.",
  },
  {
    title: "Event architecture should match business decisions",
    copy:
      "Not every event deserves the same priority. I focus on events that help teams understand acquisition, activation, qualification, conversion, revenue, and retention.",
  },
  {
    title: "Growth teams need reliable data flows",
    copy:
      "Dashboards are only useful when the data pipeline is clean. I care about how data is captured, stored, enriched, sent, and reported across tools.",
  },
];

export const targetRoles = [
  "Full Stack Marketing Engineer",
  "Marketing Engineer",
  "Analytics Engineer",
  "Tracking Engineer",
  "Growth Engineer",
  "Technical Implementation Specialist",
  "Solutions Engineer",
  "MarTech Engineer",
  "Product Analytics Engineer",
];
