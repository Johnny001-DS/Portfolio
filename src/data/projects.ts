import { Project } from '@/types/index';

export const projects: Project[] = [
    {
      id: 1,
      title: "CodeCoach",
      description: "A code tutoring website with AI coaching features that provides personalized learning experiences for programming students.",
      image: "/api/placeholder/600/400",
      tags: ["C#", "ASP.NET", "React", "TypeScript", "PostgreSQL", "Docker", "OpenAI API"],
      link: "#",
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
      id: 2,
      title: "School Bot",
      description: "An interactive chat bot that helps students navigate school block schedules, providing automated reminders and schedule information.",
      image: "/api/placeholder/600/400",
      tags: ["Python", "PyTorch", "NLP", "Chatbot", "Machine Learning"],
      link: "#",
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
        gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
      }
    }
];

export const allProjects: Project[] = [
    ...projects,
    {
      id: 3,
      title: "Lastgateway Enterprise Platform",
      description: "A platform providing computing resources and software services to organizations at significantly reduced costs compared to traditional cloud providers.",
      image: "/api/placeholder/600/400",
      tags: ["Linux", "Docker", "Cloud", "Networking", "SaaS", "PaaS"],
      category: "Web Application",
      link: "#",
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
        gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
      }
    },
    {
      id: 4,
      title: "Music Recommendation System",
      description: "A neural network-based approach to modeling desired music based on listening history for targeted advertisement suggestions.",
      image: "/api/placeholder/600/400",
      tags: ["Python", "PyTorch", "Neural Networks", "Data Analysis", "Machine Learning"],
      category: "Data Science",
      link: "#",
      details: {
        challenge: "Developing an effective model for recommending new music based on user listening preferences for targeted advertising.",
        solution: "Implemented a neural network using PyTorch Lightning to analyze listening patterns and predict music preferences from extensive user data.",
        features: [
          "Advanced neural network architecture",
          "Large-scale data processing",
          "Pattern recognition algorithms",
          "User preference modeling",
          "Advertisement targeting system"
        ],
        results: "Successfully processed over 1 million songs for model training, created effective data preparation pipelines, and contributed to research on suggestion-based advertisement alongside a Stanford University Masters Student.",
        gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
      }
    },
    {
      id: 5,
      title: "Northeastern Global Campus Explorer",
      description: "A comprehensive web platform aggregating reviews and information about Northeastern University's global campus opportunities.",
      image: "/api/placeholder/600/400",
      tags: ["Web Development", "Database Design", "UI/UX", "Content Management"],
      category: "Web Design",
      link: "#",
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
    }
];