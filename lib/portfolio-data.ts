export type TimelineEntry = {
  id: string;
  date: string;
  year: string;
  title: string;
  role: string;
  shortSummary: string;
  fullDescription: string;
  motivation: string;
  outcome: string;
  imageLabel: string;
  tags: string[];
  link?: {
    label: string;
    href: string;
  };
  accent?: "default" | "brand" | "research";
};

export const presentSnapshot = {
  name: "Adam Chen",
  identity: "Systems Engineering student at UIUC",
  summary:
    "Builder, researcher, founder, and investor-minded operator exploring how technical depth and business judgment reinforce each other.",
  detail:
    "Currently a UIUC sophomore pursuing Systems Engineering with a Business minor, with interests spanning engineering, startups, investing, and product-building."
};

export const timelineEntries: TimelineEntry[] = [
  {
    id: "present",
    date: "AUG 24 - PRESENT",
    year: "2026",
    title: "Student at UIUC",
    role: "SYSTEMS ENGINEERING MAJOR | BUSINESS MINOR | EXPECTED 2028",
    shortSummary:
      "Developing a foundation in CAD, theoretical and applied mechanics, and systems thinking at UIUC, with plans to pursue a track in rehabilitation robotics.",
    fullDescription:
      "This opening chapter sets the tone for the rest of the site: a student and operator moving across technical work, research environments, entrepreneurial projects, and early investing exposure.",
    motivation:
      "Through the rigorous engineering program at UIUC, I wanted to grow my technical foundation as much as possible. At the same time, college is the ideal environment for networking, doing research, meeting highly driven people, and creating meaningful experiences.",
    outcome:
      "3.82 GPA, participated in 2 research projects, founded a flower shop, and actively involved in multiple student organizations. More importantly, I built lasting friendships and strong, trustworthy partners for the long term.",
    imageLabel: "Now",
    tags: ["UIUC", "Systems Engineering", "Rehabilitation robotics", "Systems thinking"]
  },
  {
    id: "n1ac",
    date: "Feb 2026 - Present",
    year: "2026",
    title: "N1AC",
    role: "Angel Investor / Venture Scout",
    shortSummary:
      "Sourcing early-stage startups and learning how teams, markets, and ideas are evaluated in real investment conversations.",
    fullDescription:
      "An investing chapter that adds a different lens to my technical and founder experience: pattern recognition, market judgment, and disciplined evaluation.",
    motivation:
      "After early success in day trading, I became interested in investing at the intersection of technology and business. Guided by my mentor, Kehan Dong (former co-founder of YC China), I wanted to understand how investors evaluate startups-focusing on risk, perspective, and signals of future potential.",
    outcome:
      "Review 30-50 startups monthly, write structured investment reports, and support founders directly. Now a shareholder in Semivalley, with a growing network of builders and operators.",
    imageLabel: "N1",
    tags: ["Venture", "Tech Evaluation", "Risk Analysis", "Investment discussions"]
  },
  {
    id: "azura",
    date: "Sep 2025 - Present",
    year: "2025",
    title: "Azura de Maison",
    role: "Founder / Co-Founder",
    shortSummary:
      "Azura de Maison is an online bouquet flower store designed to bring a sense of romance back to the UIUC campus, where supply is limited. Built as a light luxury brand tailored for students, it emphasizes product taste, customer experience, and thoughtful execution.",
    fullDescription:
      "A more personal founder chapter rooted in aesthetics, service, branding, and business ownership. This is where technical discipline meets taste and execution in a highly visible way.",
    motivation:
      "I wanted to build a real business from scratch. With no prior experience, I used this as a way to design and test a full system-from sourcing flowers and managing production to shaping the customer experience-with the goal of building something transferable to future ventures.",
    outcome:
      "Launched during Valentine's 2026, generating ~$2.7K in revenue within the same month. Collaborated with a campus fashion brand and built a growing social presence. More importantly, I learned how to optimize time and energy as a student-run business-handling problems quickly while maintaining efficiency and quality.",
    imageLabel: "AM",
    tags: ["Founder", "Marketing & Brand Strategy", "Workflow Optimization"],
    accent: "brand"
  },
  {
    id: "hennecke",
    date: "Jul 2025 - Aug 2025",
    year: "2025",
    title: "Hennecke GmbH",
    role: "Rotational Intern",
    shortSummary:
      "Moved across engineering, production, quality control, R&D, sales, and ESG to understand how industrial systems operate end to end.",
    fullDescription:
      "A cross-functional internship that exposed me to both the technical and organizational machinery behind industrial operations.",
    motivation:
      "Hennecke is known for its high-precision German engineering, particularly in mixhead technology, which made it an exciting system to explore. Through a rotational structure, I wanted to gain a full view of how a complex industrial business operates across technical, operational, and commercial functions.",
    outcome:
      "Developed hands-on experience with manufacturing processes, including CNC machining and quality control, while strengthening my understanding of how engineering operates in real production environments. I also gained exposure to business operations and developed an early understanding of ESG practices within European industrial companies.",
    imageLabel: "HG",
    tags: ["Business Systems", "Industrial Engineering", "Operations Insight", "Engineering"]
  },
  {
    id: "cas",
    date: "Jun 2025 - Jul 2025",
    year: "2025",
    title: "Chinese Academy of Sciences",
    role: "Research Intern",
    shortSummary:
      "Built SQL and Python-based automation tools to streamline reporting, comparison workflows, and large-scale institutional data tasks, while participating in client meetings for project milestones and product validation.",
    fullDescription:
      "A technical research environment where careful automation and data handling mattered just as much as raw coding ability.",
    motivation:
      "The Chinese Academy of Sciences is one of the leading research institutions in China, known for its large-scale, data-intensive environment. I was fortunate to work alongside leading researchers, contributing to research infrastructure through automation and data workflows.",
    outcome:
      "Developed Python and SQL tools to automate reporting across 100+ institutes, streamline data processing, and build comparison workflows for institutional use. Strengthened my ability to work with large datasets and reinforced how well-designed internal tools can drive efficiency at scale in complex organizations.",
    imageLabel: "CAS",
    tags: ["Python", "SQL", "Automation", "Research systems"],
    accent: "research"
  },
  {
    id: "gazzola",
    date: "Sep 2024 - May 2025",
    year: "2024",
    title: "Gazzola Lab at UIUC",
    role: "Research Assistant",
    shortSummary:
      "Designed 3D-printed molds for soft robotic actuators to improve motion and control. Worked with air-powered systems using silicone-based materials, and led the development of a new manufacturing approach using pure silicone with ingrained internal patterns for improved structural performance.",
    fullDescription:
      "A research-heavy engineering chapter grounded in building, iteration, and physical design work.",
    motivation:
      "I was drawn to soft robotics for its versatility and potential in future robotic systems. With a background in nanotechnology and experience in 3D printing, I saw this as a strong fit. After joining the lab, I noticed limitations in the existing hands-on manufacturing process, which lacked consistency and precision, and took on the challenge of improving it through mold-based techniques.",
    outcome:
      "After a year of research, we successfully developed a fully silicone-based soft robotic structure with ingrained internal textures, improving consistency and control. The process involved extensive trial and error-working through challenges like air bubbles and material adhesion-to achieve reliable and repeatable results.",
    imageLabel: "GL",
    tags: ["Soft Robotics", "Prototyping", "Fabrication", "Research"]
  },
  {
    id: "autism-research",
    date: "Oct 2024 - May 2025",
    year: "2024",
    title: "AI Research in Autism Detection",
    role: "Data Analyst",
    shortSummary:
      "Analyzed 10,000+ video frames of children's gaze patterns to support AI models for ASD severity classification, working with large-scale datasets and structured annotation workflows.",
    fullDescription:
      "A detail-oriented research role that emphasized consistency, pattern analysis, and data rigor.",
    motivation:
      "Coming into college, this was my first research experience. As vertical AI began gaining traction, I saw it as an opportunity to gain hands-on exposure while working alongside PhD students and learning how real research and data-driven systems are built.",
    outcome:
      "Processed and labeled large-scale video datasets using CVAT, contributing to AI model training for early ASD detection. The work strengthened my ability to handle high-volume data with consistency, built a foundational understanding of how AI inference and data pipelines work, and reinforced how small errors in data processing can significantly affect downstream model performance.",
    imageLabel: "ASD",
    tags: ["Data analysis", "Video processing", "AI research", "Discipline"],
    accent: "research"
  },
  {
    id: "pressure-sensor",
    date: "Aug 2023 - Dec 2023",
    year: "2023",
    title: "Flexible Pressure Sensor Project",
    role: "Student Builder",
    shortSummary:
      "Designed and built a flexible pressure sensor system from scratch, combining hardware prototyping, real-time data acquisition with Python, and Unity-based visualization.",
    fullDescription:
      "The earliest chapter in the timeline and a clear origin point for hands-on technical curiosity.",
    motivation:
      "I began this project with the goal of creating a sticker-like wearable sensor that could attach to the elbow and translate tendon movements into finger motion within a 3D simulation. Due to time constraints, I pivoted toward developing a simplified pressure-sensing soft material prototype.",
    outcome:
      "Built a functional pressure sensor system with real-time data acquisition and visualization. Engineered piezoelectric crystals to achieve ~200% higher conductivity than the base material, improving sensitivity and performance. Gained hands-on experience in core engineering skills, including soldering, Arduino circuit design, and Unity-based 3D simulation.",
    imageLabel: "FPS",
    tags: ["Hardware", "Python", "Unity", "Early builder origin"]
  }
];

export const principles = [
  {
    title: "Builder mindset",
    description:
      "I love bringing structure to chaos, building stable systems and optimizing details that others overlook. Small improvements compound into meaningful results. Inspired by The Toyota Way."
  },
  {
    title: "Research discipline",
    description:
      "I enjoy diving into unfamiliar fields, nothing feels out of reach with the help of AI. When knowledge is accessible, creativity becomes the real differentiator."
  },
  {
    title: "Founder intuition",
    description:
      "I'm a strong listener who focuses on bringing out the best in people. I enjoy organizing teams, combining different strengths, and encouraging others to go beyond their defined roles."
  },
  {
    title: "Investor perspective",
    description:
      "Good ideas are everywhere-but execution comes down to people. I focus on the individuals behind the idea and their ability to build and follow through."
  }
];

export const skillGroups = [
  {
    title: "Engineering & Design",
    items: [
      "SolidWorks / Fusion 360",
      "Circuits & Soldering",
      "Product Prototyping",
      "Hardware Systems"
    ]
  },
  {
    title: "Programming & Data",
    items: ["Java", "Python", "C", "C++", "SQL", "AI Inference", "Data Processing"]
  },
  {
    title: "Business & Strategy",
    items: ["Market Analysis", "Brand Strategy", "Workflow Optimization", "Lean Manufacturing"]
  },
  {
    title: "Research & Analysis",
    items: ["Experimental design", "Large dataset analysis", "Technical reporting", "Cross-functional synthesis"]
  }
];

export const contactLinks = [
  {
    label: "Email",
    value: "adamchen1023@outlook.com",
    href: "mailto:adamchen1023@outlook.com"
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/ayvhc",
    href: "https://www.linkedin.com/in/ayvhc"
  },
  {
    label: "Resume",
    value: "View resume",
    href: "/resume"
  }
];
