import { Project } from '@/types/index';

const imgRoot = "/app/images/projects/"

export const projects: Project[] = [
  {
    id: 1,
    title: "Lastgateway Enterprise Platform",
    description: "A platform providing computing resources and software services to organizations at significantly reduced costs compared to traditional cloud providers.",
    image: "/api/placeholder/600/400",
    tags: ["Linux", "Docker", "Cloud", "Networking", "SaaS", "PaaS"],
    icons: ["Linux", "Docker", "Cloud", "Networking"],
    category: "IT",
    link: "#experience",
    details: {
      challenge: "Creating a cost-effective alternative to traditional cloud providers while maintaining reliability and performance for small organizations.",
      solution: "Built a comprehensive Platform/Software as a Service business leveraging optimized Linux servers and Docker containers to reduce overhead and provide reliable computing resources.",
      features: [
        "High-performance computing resources",
        "99.9% uptime guarantee",
        "Cost-effective infrastructure",
        "Multiple software services",
        "Scalable architecture",
        "24/7 monitoring and support"
      ],
      results: "Successfully reduced server and compute costs by more than half compared to traditional cloud providers while servicing over 5 organizations and maintaining over 30 software resources simultaneously with 99.9% uptime.",
      gallery: [imgRoot + "Lastgateway Enterprise/server.jpg", imgRoot + "Lastgateway Enterprise/unraid.png", imgRoot + "Lastgateway Enterprise//proxmox.png", imgRoot + "Lastgateway Enterprise/truenas.png"]
    }
  },
  {
    id: 2,
    title: "CodeCoach",
    description: "A code tutoring website with AI coaching features that provides personalized learning experiences for programming students.",
    image: "/api/placeholder/600/400",
    tags: ["C#", "ASP.NET", "React", "TypeScript", "PostgreSQL", "Docker", "OpenAI API"],
    icons: ["C#", "ASP.NET", "React", "TypeScript", "PostgreSQL", "Docker"],
    category: "Web Application",
    link: "https://github.com/seth-linares/Senior_Project",
    details: {
      challenge: "Creating an effective learning platform for programmers with personalized AI-powered guidance and a diverse range of programming problems.",
      solution: "Developed a comprehensive tutoring platform with custom AI Coach integration, supporting multiple programming languages and providing detailed feedback on user code.",
      features: [
        "Personal A.I. Coach for tailored user guidance",
        "Over 20 coding problems across 4 topic areas",
        "Support for 3 programming languages",
        "Secure authentication system",
        "Real-time code feedback and suggestions",
        "Progress tracking and performance analytics"
      ],
      results: "The platform successfully supports multiple programming languages, encompassing over 80% of programmer workflows, and provides personalized guidance to increase engagement and learning effectiveness.",
      gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
    }
  },
  {
    id: 3,
    title: "School Bot 2.0",
    description: "An interactive chat bot that helps students navigate school block schedules, providing automated reminders and schedule information.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "PyTorch", "NLP", "Chatbot", "Machine Learning"],
    icons: ["Python", "PyTorch", "Discord"],
    category: "Web Application",
    link: "https://github.com/jkhadan/school-bot-2.0",
    details: {
      challenge: "Creating an intuitive system to help students navigate complicated block scheduling in high school, reducing confusion and tardiness.",
      solution: "Developed an NLP-powered chat bot that understands natural language queries about schedules and provides automated reminders about upcoming classes.",
      features: [
        "Natural language processing capabilities",
        "Automated class reminders",
        "Schedule checking system",
        "User-friendly interface",
        "High query handling capacity",
        "Real-time schedule updates"
      ],
      results: "The bot successfully assisted over 2,000 students, handled more than 10,000 queries per day with an 80% accuracy rate, and increased student punctuality by over 30% through its automated reminder system.",
      gallery: [imgRoot + "School Bot 2/messages_1.png", imgRoot + "School Bot 2/messages_2.png", imgRoot + "School Bot 2/messages_3.png", imgRoot + "School Bot 2/messages_4.png"]
    }
  }
];

export const allProjects: Project[] = [
  ...projects,
  {
    id: 4,
    title: "Northeastern Global Campus Explorer",
    description: "A comprehensive web platform aggregating reviews and information about Northeastern University's global campus opportunities.",
    image: "/api/placeholder/600/400",
    tags: ["Web Development", "Database Design", "UI/UX", "Content Management"],
    icons: ["React", "TypeScript", "Next.js", "Supabase", "Selenium", "Beautiful Soup"],
    category: "Web Application",
    link: "https://github.com/Oasis-NEU/f24-group25",
    details: {
      challenge: "Creating a centralized resource for students to explore and evaluate the 200+ global opportunities available through Northeastern's Global Campus Network.",
      solution: "Developed a collaborative web platform that consolidates reviews, information, and resources related to Northeastern's global campuses and programs.",
      features: [
        "Comprehensive information on 200+ global opportunities",
        "User reviews and ratings system",
        "Search and filtering capabilities",
        "Interactive campus maps",
        "Program comparison tools"
      ],
      results: "Successfully delivered a valuable resource for Northeastern students considering global opportunities, improving information accessibility and program transparency.",
      gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
    }
  },
  {
    id: 5,
    title: "John Guy Saves the Galaxy",
    description: "A 3D space shooter game created in Unity3D, featuring custom shaders and C# scripting.",
    image: "/api/placeholder/600/400",
    tags: ["Unity", "Game Development", "C#"],
    icons: ["Unity", "C#"],
    category: "Game Development",
    link: "https://github.com/willkbl/John-Guy-Saves-the-Galaxy-1",
    details: {
      challenge: "Design and implement a fully functional space shooter game, integrating graphics programming and gameplay mechanics.",
      solution: "Utilized Unity as the development platform, leveraging C# for scripting game logic and crafted custom visual and audio effects. Collaborated to build engaging gameplay and responsive controls.",
      features: [
        "Custom skeletal-rigged models using mixamo with unique visual and audio effects",
        "C#-driven gameplay mechanics and enemy AI using NavMesh",
        "Multiple levels with increasing difficulty",
        "Spacecraft controls and shooting mechanics",
        "Course project collaboration and documentation"
      ],
      results: "Successfully delivered a polished, playable game demonstrating understanding of graphics programming, Unity engine, and collaborative development.",
      gallery: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ]
    }
  },
  {
    id: 6,
    title: "Dodge Fall",
    description: "A simple 2D Unity game demonstration designed to teach the fundamentals of Unity and collaborative development to the game design club. Players must avoid incoming objects while teams learn about Unity, GitHub, and working together.",
    image: "/api/placeholder/600/400",
    tags: ["Unity", "C#", "Game Development", "2D", "Agile"],
    icons: ["Unity", "C#", "Git"],
    category: "Game Development",
    link: "https://github.com/jkhadan/Video-Game-Design-Dodge-Fall-Demonstration",
    details: {
      challenge: "Introduce fundamental Unity concepts to new developers and demonstrate how collaborative workflows and team divisions can be managed in a practical game project.",
      solution: "Developed a simple, approachable 2D dodge game as a hands-on learning project, with explicit roles for development, design, and art teams. Included conventions and guidelines to streamline teamwork and coding standards.",
      features: [
        "2D gameplay focused on dodging falling objects",
        "Unity and C# codebase with commented, educational structure",
        "Team roles: development, design, and art, each with clear responsibilities",
        "Practical demonstration of collaborative tools (GitHub, Slack, Trello)",
        "Guidelines for coding conventions and art integration"
      ],
      results: "Helped team members learn Unity basics, experience collaborative development, and understand project organization within a small game project.",
      gallery: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ]
    }
  },
  {
    id: 7,
    title: "School Bot 1.0",
    description: "School Bot 1.0 is a custom Discord bot designed to help students stay organized with their academic responsibilities, especially during remote learning. Built using Python and discord.py, it offers automatic user registration, calendar integration, and persistent user data management. The bot was created for Howell High School during the pandemic to help educational communities and study groups manage schedules and homework.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "Discord Bot", "Academic", "Automation", "Calendar", "CSV"],
    icons: ["Python", "Discord", "CSV", "Calendar"],
    category: "Web Application",
    link: "https://github.com/jkhadan/school-bot-1.0",
    details: {
      challenge: "During remote learning, students struggled to keep track of schedules, events, and assignments. There was a lack of automated tools tailored for academic organization within Discord communities.",
      solution: "Developed a Discord bot that automatically registers users, integrates with academic calendar files (.ics), and manages user data through CSV files. The bot sends daily schedules, reminders, and supports homework tracking (with planned improvements for more features).",
      features: [
        "Automatic user registration and tracking via CSV",
        "iCalendar (.ics) file integration for event management",
        "Persistent user data with regular background updates",
        "Daily schedule notifications and reminders",
        "Commands for students to track and manage homework",
        "Planned features: homework reminders, event listing, scheduled reminders, and a web dashboard"
      ],
      results: "Adopted by a high school community to improve student organization and information flow during the pandemic. Provided a foundation for School Bot 2.0 with feedback-driven improvements.",
      gallery: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ]
    }
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "A personal portfolio website built to showcase my projects, skills, and experiences as a developer.",
    image: "/api/placeholder/600/400",
    tags: ["TypeScript", "React", "Next.js", "UI/UX", "Web Development"],
    icons: ["TypeScript", "React", "Next.js", "Tailwind"],
    category: "Web Application",
    link: "https://github.com/jkhadan/newportfolio",
    details: {
      challenge: "Creating a centralized and visually engaging platform to present my projects, technical skills, and background to potential employers, collaborators, and the tech community.",
      solution: "Developed a modern, responsive portfolio website using TypeScript, React, and Next.js, featuring dedicated sections for projects, skills, experience, and about me. Implemented dynamic project galleries and interactive UI/UX components to enhance user experience.",
      features: [
        "Project showcase with image gallery and detailed descriptions",
        "Interactive and responsive UI/UX",
        "Skills and experience sections",
        "Dark/light mode support",
        "SEO-friendly architecture",
        "Downloadable resume",
        "Mobile-friendly design"
      ],
      results: "Successfully launched a comprehensive and visually appealing portfolio website, improving my professional web presence and making it easier for recruiters and collaborators to explore my work.",
      gallery: [
        
      ]
    }
  },
  {
    id: 9,
    title: "Fortnite Detector",
    description: "A Python script that alerts a Discord channel when your health in Fortnite decreases by monitoring the game screen.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "Discord Bot", "Computer Vision", "Fortnite", "Automation"],
    icons: ["Python", "Discord", "OpenCV"],
    category: "Automation",
    link: "https://github.com/jkhadan/fortnite-detector",
    details: {
      challenge: "Notifying friends in real-time when my health decreases in Fortnite, without manual updates.",
      solution: "Used Python with OpenCV and Tesseract OCR to monitor a specific part of the screen for health value changes, and a Discord bot to send alerts automatically when health drops.",
      features: [
        "Live health monitoring in Fortnite using screen capture and OCR",
        "Automated Discord notifications when health decreases",
        "Async event loop for efficient background checks"
      ],
      results: "Enabled real-time alerts for teammates, improving awareness and teamwork during gameplay.",
      gallery: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ]
    }
  }
];