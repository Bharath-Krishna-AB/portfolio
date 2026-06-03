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
    tagline: "Blending Data, Media & Tech for Enhanced Storytelling.",
    description: "Data-driven product campaign and analytics platform for high-volume catalogs.",
    category: "client",
    type: "Data Storytelling & Web Development",
    role: "Full-Stack Web Developer",
    timeline: "Feb 2024 - Present",
    stack: ["React", "Next.js", "GSAP", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1504868584819-f8e905b6dc79?auto=format&fit=crop&q=80&w=1600"
    ],
    problem: "Brands with large product catalogs struggle to identify customer intent in real-time, resulting in generic campaigns that fail to engage and convert catalog viewers.",
    solution: "Developed PIKKCOM, a platform combining intent analysis with dynamic media generation to turn raw analytics into high-performing, catalog-specific product campaigns.",
    keyFeatures: [
      "Real-time intent analysis dashboard.",
      "Dynamic media generation for product campaigns.",
      "High-performance Next.js architecture."
    ],
    impact: "Blended data-driven catalog insights with studio-grade storytelling to boost client user conversion rates.",
    links: {
      live: "https://www.pikkcom.in"
    }
  },
  {
    id: "iedc-cce",
    name: "IEDC CCE Portal",
    tagline: "Empowering Innovation & Entrepreneurship.",
    description: "Official incubation and startup management platform for Christ College of Engineering.",
    category: "client",
    type: "Full-Stack Portal",
    role: "Full-Stack Developer",
    timeline: "Ongoing",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
    images: ["https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600"],
    problem: "Fostering entrepreneurship and managing student startup ideas manually at CCE was inefficient, lacking event schedules and verified mentor networks.",
    solution: "Built the official CCE IEDC incubation portal to manage events, register student startups, and connect student founders with a mentor network.",
    keyFeatures: [
      "Incubation portal for student startups",
      "Comprehensive event management system",
      "Mentor network directory"
    ],
    impact: "Established a unified innovation hub for CCE students to submit startup ideas and coordinate weekly entrepreneurship meetups.",
    links: {
      live: "https://iedc-cce.vercel.app"
    }
  },
  {
    id: "resume-iq",
    name: "Resume IQ",
    tagline: "AI-Powered Career Optimization.",
    description: "AI platform analyzing resumes against job descriptions to pass ATS checks.",
    category: "hackathon",
    type: "AI Product Engineering",
    role: "Lead Developer",
    timeline: "Dec 2023",
    stack: ["Next.js", "OpenAI API", "Shadcn UI", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1454165833767-02654d578203?auto=format&fit=crop&q=80&w=1600"
    ],
    problem: "Job seekers struggle to optimize their resumes for Applicant Tracking Systems (ATS), leading to automatic rejections due to formatting and keyword mismatch.",
    solution: "Engineered Resume IQ, an AI career optimization tool that analyzes resumes against job descriptions, suggesting real-time fixes and improving ATS scores.",
    keyFeatures: [
      "Intelligent ATS matching score calculation",
      "Real-time suggestion engine for keyword alignment",
      "Export to PDF/DOCX format"
    ],
    links: {
      live: "https://resume-iq.vercel.app"
    }
  },
  {
    id: "studyhive",
    name: "StudyHive",
    tagline: "The Study Room Where AI Joins the Squad.",
    description: "Collaborative student workspace featuring Bob, an AI study companion.",
    category: "hackathon",
    type: "AI & Collaboration Experiment",
    role: "AI Developer / Co-Founder",
    timeline: "Nov 2023",
    stack: ["Next.js", "AI Integration", "Tailwind CSS", "Socket.IO"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    images: ["https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600"],
    problem: "Solo online study sessions can feel isolating for students, and traditional group study platforms lack interactive AI guidance to unblock difficult topics.",
    solution: "Built StudyHive, a collaborative shared study room integrating Bob, an AI study assistant, directly into active work sessions.",
    keyFeatures: [
      "AI study assistant integration (Bob)",
      "Live shared workspaces with socket connection",
      "Resource sharing cloud drives"
    ],
    links: {
      live: "https://studyhive.vercel.app"
    }
  },
  {
    id: "splyt",
    name: "SPYLT",
    tagline: "High-Velocity Energy. Clean Design.",
    description: "Liquid-motion web experience for a premium energy beverage brand.",
    category: "frontend",
    type: "Brand Identity & Motion Design",
    role: "Frontend Engineer / Motion Designer",
    timeline: "Jan 2024",
    stack: ["React", "GSAP", "Framer Motion", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1622416011230-0196720516bd?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&q=80&w=1600"
    ],
    problem: "Nutritional energy beverage brands often rely on static websites that fail to express the physical kick and high-velocity nature of their products.",
    solution: "Designed a liquid-motion web experience using GSAP and SVG animations to bring the energy product showcase to life.",
    keyFeatures: [
      "Custom SVG liquid animations on scroll",
      "Parallax product showcase layout",
      "Mobile-first performance optimization"
    ],
    links: {
      live: "https://splyt-design.vercel.app"
    }
  },
  {
    id: "farmquest",
    name: "FarmQuest",
    tagline: "Smart Farming for Future Generations.",
    description: "Gamified farming experience design where users grow crops and earn rewards.",
    category: "hackathon",
    type: "Brand Design & UI/UX",
    role: "UI/UX & Frontend Developer",
    timeline: "Oct 2023",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS", "Lucide React"],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200",
    images: ["https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1600"],
    problem: "Smart farming concepts are often complex for youth to learn, leading to low engagement in sustainable agricultural education.",
    solution: "Created FarmQuest, a gamified farming experience tracking crop cycles, direct-to-consumer mock pricing, and missions.",
    keyFeatures: [
      "Gamified farming mechanics and missions",
      "Real-time price tracking visualizers",
      "Direct-to-consumer mock marketplace"
    ],
    links: {
      live: "https://farmquest.vercel.app"
    }
  },
  {
    id: "bennyfit",
    name: "BennyFit",
    tagline: "Shatter the Limit, Own the Growth.",
    description: "Performance fitness coaching platform utilizing custom macro trackers.",
    category: "client",
    type: "Elite Fitness Product Design",
    role: "Frontend Developer / UI Designer",
    timeline: "Sep 2023",
    stack: ["Next.js", "GSAP", "Framer Motion", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    images: ["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1600"],
    problem: "Elite performance athletes require macro tracking and coaching protocols that traditional flat fitness blogs cannot visually represent.",
    solution: "Designed BennyFit, a boundaries-free coaching interface featuring visual macro calculators and dynamic progression visualizers.",
    keyFeatures: [
      "Custom training program engine",
      "Progress tracking visualizer panels",
      "Nutrition macro calculator"
    ],
    links: {
      live: "https://bennyfit.vercel.app"
    }
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Co-Founder & Web Developer",
    company: "Aevon Digital Studio",
    type: "Freelance Studio",
    period: "Feb 2024 – Present"
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    type: "",
    period: "2021 – Present"
  }
];

export const education: EducationItem[] = [
  {
    degree: "BTech in Computer Science and Engineering",
    institution: "Christ College of Engineering, Irinjalakuda",
    period: "2024 – 2028",
    status: "Pursuing"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Kerala State Board",
    period: "2022 – 2024",
    status: "Completed"
  }
];

export const achievements: AchievementItem[] = [
  {
    label: "Co-Founded Aevon, an elite Digital Craftsmanship Studio in Thrissur, Kerala",
    highlight: true
  },
  {
    label: "Designed and deployed custom platforms for CCE Innovation Hub (IEDC)",
    highlight: true
  },
  {
    label: "Built multiple AI and open-source applications (Resume IQ, StudyHive)",
    highlight: true
  },
  {
    label: "Active member of Christ College Tech & Innovation clusters",
    highlight: false
  }
];

export const services: ServiceItem[] = [
  {
    title: "Full-Stack Web Development",
    description: "Designing end-to-end web applications with modern tech stacks like MERN and Next.js."
  },
  {
    title: "Frontend Engineering",
    description: "Developing pixel-perfect React & Next.js interfaces with rich micro-animations using GSAP."
  },
  {
    title: "AI Integration & RAG",
    description: "Implementing generative AI capabilities and RAG applications using LangChain."
  },
  {
    title: "Rapid Prototyping",
    description: "Creating quick iterations and proof-of-concept builds for startups and hackathons."
  }
];

export const faqs: FAQItem[] = [
  {
    question: "What kind of roles are you open to?",
    answer: "I'm open to full-stack web development, frontend engineering, or building AI-integrated products (RAG/LangChain) for freelance, contract, or startups."
  },
  {
    question: "What tech stack do you prefer?",
    answer: "I primarily work with JavaScript, React.js, Next.js, Node.js, and Tailwind CSS. I'm also actively building AI integrations and RAG applications using LangChain."
  },
  {
    question: "Do you work remotely?",
    answer: "Yes, I work remotely and have experience running a freelance studio. I'm flexible with async workflows and communication tools."
  },
  {
    question: "How can someone contact you?",
    answer: "You can reach out directly via email at bharathkrishna.ab.dev@gmail.com or call me at +91 88487 49033. You can also connect with me on LinkedIn or GitHub."
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
