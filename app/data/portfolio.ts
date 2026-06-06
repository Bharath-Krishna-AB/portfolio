export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  type: string;
  role: string;
  timeline?: string;
  stack: string[];
  image: string;
  images?: string[];
  video?: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  impact?: string;
  achievement?: {
    title: string;
    prize?: string;
  };
  links?: {
    live?: string;
    buy?: string;
    github?: string;
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
}

export interface AchievementItem {
  label: string;
  highlight: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    id: "pikkcom",
    name: "PIKKCOM",
    tagline: "Corporate Website & Digital Brand Platform.",
    description: "A responsive business website built with modern UI/UX principles, a scalable frontend architecture, and robust performance optimization.",
    category: "client",
    type: "Corporate Web Development",
    role: "Frontend Engineer",
    timeline: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    image: "/pikkcom.png",
    images: ["/pikkcom.png"],
    problem: "The client needed a highly scalable and interactive digital presence that aligned with their brand identity while maintaining lightning-fast performance.",
    solution: "Architected a custom digital platform using Next.js and TypeScript, integrating fluid GSAP and Framer Motion animations to elevate the user experience.",
    keyFeatures: [
      "Custom GSAP & Framer Motion animations",
      "Scalable Next.js frontend architecture",
      "High-performance asset optimization"
    ],
    links: {
      live: "https://www.pikkcom.in/"
    }
  },
  {
    id: "titan-global",
    name: "Titan Global Ventures",
    tagline: "Corporate Business Website Development.",
    description: "A responsive corporate website for a global business firm, designed to deliver a user-friendly digital experience and optimized for SEO.",
    category: "client",
    type: "Corporate Web Development",
    role: "Web Developer",
    timeline: "2024",
    stack: ["HTML5", "CSS3", "JavaScript"],
    image: "/titanglobalventures.png",
    images: ["/titanglobalventures.png"],
    problem: "A global firm needed a professional digital footprint that loads quickly and ranks well in search engines to attract international clients.",
    solution: "Developed a lightweight, highly optimized corporate website focusing on modern UI/UX and strict adherence to technical SEO best practices.",
    keyFeatures: [
      "SEO-optimized markup structure",
      "Cross-device responsive design",
      "Lightning-fast static performance"
    ],
    links: {
      live: "https://titanglobalventures.com/"
    }
  },
  {
    id: "blog-app",
    name: "Full-Stack Blog",
    tagline: "Dynamic Publishing Platform.",
    description: "A full-stack blog application engineered with Next.js, featuring dynamic routing and reusable UI components.",
    category: "personal",
    type: "Full-Stack Web Application",
    role: "Full-Stack Developer",
    timeline: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/blog-app.png",
    images: ["/blog-app.png"],
    problem: "Content platforms often struggle with sluggish load times and poor developer experience when managing dynamic routes.",
    solution: "Built a robust publishing platform utilizing Next.js Server-Side Rendering (SSR) and dynamic routing for instant content delivery.",
    keyFeatures: [
      "Dynamic Next.js routing",
      "Modular, reusable component architecture",
      "Seamless CI/CD deployment via Vercel"
    ],
    links: {
      live: "https://blog-application-wine-six.vercel.app/"
    }
  },
  {
    id: "splyt-clone",
    name: "SPLYT Design",
    tagline: "Interactive GSAP Animation Experience.",
    description: "An immersive landing page clone leveraging advanced GSAP and scroll-triggered effects for a premium web experience.",
    category: "personal",
    type: "Frontend Motion Design",
    role: "Frontend Engineer",
    timeline: "2024",
    stack: ["Vite", "GSAP", "JavaScript", "Tailwind CSS"],
    image: "/splyt.png",
    images: ["/splyt.png"],
    problem: "Traditional static landing pages fail to captivate users and communicate the dynamic energy of modern brands.",
    solution: "Engineered a highly interactive web experience, mastering scroll-triggered GSAP animations to create a fluid, engaging user journey.",
    keyFeatures: [
      "Advanced scroll-triggered GSAP animations",
      "Vite-powered lightning-fast build",
      "Responsive interactive layout"
    ],
    links: {
      live: "https://splyt-design-gsap-mastering.vercel.app/"
    }
  },
  {
    id: "salon-pos",
    name: "Salon Management POS",
    tagline: "Modern SaaS Dashboard Prototype.",
    description: "A responsive dashboard prototype for salon management, streamlining appointments, billing workflows, and customer records.",
    category: "personal",
    type: "SaaS Dashboard Prototype",
    role: "Frontend Developer",
    timeline: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/saloon.png",
    images: ["/saloon.png"],
    problem: "Local salons lack modern, intuitive point-of-sale (POS) and management systems, relying on clunky legacy software.",
    solution: "Designed and developed a sleek, user-centric SaaS dashboard tailored for salon operations, emphasizing ease of use and rapid data access.",
    keyFeatures: [
      "Appointment & scheduling management",
      "Customer record database",
      "Billing and analytics workflow interface"
    ],
    links: {
      live: "https://saloonmanagement-pos-design.vercel.app/"
    }
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Campus Lead",
    company: "Mulearn",
    type: "Community Leadership",
    period: "Feb 2026 – Present"
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    type: "Freelance",
    period: "Jan 2025 – Present"
  }
];

export const education: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Christ College of Engineering, Irinjalakuda",
    period: "2025 – 2029",
    status: "Pursuing"
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Bharath Vidya Mandir Valapad",
    period: "Jun 2024 – Mar 2025",
    status: "Completed"
  }
];

export const achievements: AchievementItem[] = [
  {
    label: "1st Place – Webathon 2025 (Talrop & Christ College of Engineering) out of 19 teams",
    highlight: true
  },
  {
    label: "First Prize – EVOLVE 2.0 Innovation Challenge with AGRUS (AI-driven agritech platform)",
    highlight: true
  },
  {
    label: "Completed freelance projects worth ₹40,000+ independently managing development and deployment",
    highlight: true
  },
  {
    label: "Organized and led student learning initiatives and workshops as Campus Lead for Mulearn",
    highlight: false
  }
];

export const services: ServiceItem[] = [
  {
    title: "Custom Web Development",
    description: "Delivering responsive websites tailored for businesses, ensuring modern UI/UX and scalable architecture."
  },
  {
    title: "Frontend Engineering",
    description: "Building highly interactive web applications using React.js, Next.js, and complex GSAP animations."
  },
  {
    title: "Freelance Consulting",
    description: "Working directly with clients to translate business requirements into professional web solutions."
  },
  {
    title: "Performance Optimization",
    description: "Enhancing digital platforms for lightning-fast speeds and strict technical SEO adherence."
  }
];

export const faqs: FAQItem[] = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in JavaScript, TypeScript, Next.js, React.js, and Tailwind CSS. I also have experience with Supabase, Firebase, GSAP, and Python."
  },
  {
    question: "Are you available for freelance projects?",
    answer: "Yes, I am actively taking on freelance web development projects. I recently completed projects worth ₹40,000+ for an import-export company and a digital marketing agency."
  },
  {
    question: "What is your approach to building websites?",
    answer: "I focus on a scalable frontend architecture, modern UI/UX, and performance optimization. My goal is to translate business needs into robust, user-friendly digital experiences."
  },
  {
    question: "How can I get in touch with you?",
    answer: "You can email me at bharathkrishna.ab.dev@gmail.com, or reach out by phone at +91 6235311216. You can also visit my personal website at bharathkrishnaab.com."
  }
];

export const skills: SkillCategory[] = [
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"]
  },
  {
    label: "Exploring / AI",
    skills: ["TypeScript", "LangChain", "RAG applications", "AI integration"]
  },
  {
    label: "Backend & DB",
    skills: ["Node.js", "Express.js", "MongoDB", "Supabase"]
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Postman", "REST APIs"]
  }
];
