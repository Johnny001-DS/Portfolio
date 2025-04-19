import { Project } from '@/types/index';

export const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with advanced features including user authentication, product search, shopping cart, and secure payment processing.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "MongoDB", "Redux", "Stripe API"],
      link: "#",
      details: {
        challenge: "Creating a scalable e-commerce platform with real-time inventory updates and personalized user experiences.",
        solution: "Implemented a microservices architecture with React frontend and Node.js backend. Used MongoDB for flexible product catalog management and Redis for caching.",
        features: ["User authentication and profiles", "Product search and filtering", "Cart and wishlist functionality", "Payment processing with Stripe", "Order tracking", "Admin dashboard"],
        results: "The platform handles 1000+ concurrent users with optimized performance and has a 30% higher conversion rate compared to the previous system.",
        gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
      }
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application that helps users organize tasks with features like drag-and-drop, priority levels, and deadline notifications.",
      image: "/api/placeholder/600/400",
      tags: ["TypeScript", "React", "Firebase", "TailwindCSS"],
      link: "#",
      details: {
        challenge: "Building an intuitive task management system that adapts to different workflows and integrates with existing calendar systems.",
        solution: "Created a flexible React application with TypeScript and Firebase backend for real-time updates. Implemented a custom drag-and-drop system for intuitive task organization.",
        features: ["Customizable workspaces", "Task prioritization", "Deadline management", "Collaborative features", "Calendar integration", "Mobile responsiveness"],
        results: "The app has been adopted by multiple teams, resulting in a reported 25% increase in productivity and improved deadline adherence.",
        gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
      }
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current conditions and forecasts using data from a public API, with location search and favorites.",
      image: "/api/placeholder/600/400",
      tags: ["JavaScript", "API Integration", "CSS", "Chart.js"],
      link: "#",
      details: {
        challenge: "Creating a reliable and visually appealing weather application that provides accurate, location-based forecasts with minimal loading time.",
        solution: "Leveraged the OpenWeatherMap API with smart caching strategies. Implemented visualization using Chart.js for temperature and precipitation trends.",
        features: ["5-day weather forecast", "Interactive maps", "Location saving", "Weather alerts", "Historical data comparison", "Responsive design"],
        results: "The dashboard provides accurate forecasts for over 200,000 locations worldwide with a clean, intuitive interface that adapts to all device sizes.",
        gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
      }
    }
];

export const allProjects: Project[] = [
    ...projects,
    {
      id: 4,
      title: "Portfolio Website Template",
      description: "A customizable portfolio template for developers and designers with modular components and a dark/light mode toggle.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
      category: "Web Design",
      link: "#",
      details: {
        challenge: "Creating a highly customizable yet visually cohesive portfolio template that serves the needs of both developers and designers.",
        solution: "Built a modular React component system with Next.js for performance. Used TailwindCSS for styling flexibility and Framer Motion for smooth animations.",
        features: ["Modular component structure", "Dark/light mode", "Customizable sections", "Project showcases", "Contact form", "SEO optimization"],
        results: "The template has been used by dozens of professionals to create unique, performant portfolio sites with minimal configuration needed.",
        gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
      }
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "A mobile-first web application for tracking workouts, nutrition, and fitness goals with visualization tools and progress metrics.",
      image: "/api/placeholder/600/400",
      tags: ["React Native", "Firebase", "Chart.js", "Health API"],
      category: "Mobile App",
      link: "#",
      details: {
        challenge: "Developing a comprehensive fitness tracking solution that syncs with health data and provides meaningful insights for users.",
        solution: "Created a React Native application with Firebase backend for cross-platform compatibility. Integrated with health APIs for data collection and visualization.",
        features: ["Workout logging", "Nutrition tracking", "Goal setting", "Progress charts", "Social sharing", "Personalized recommendations"],
        results: "Users report a 40% increase in workout consistency after using the app for 30 days, with high engagement rates across all features.",
        gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
      }
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "A full-featured blogging platform with markdown support, comment system, and admin dashboard for content management.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "MongoDB", "Markdown", "Authentication"],
      category: "Web Application",
      link: "#",
      details: {
        challenge: "Building a modern, performant blogging platform with rich content editing capabilities and robust user management.",
        solution: "Leveraged Next.js for SSR/SSG capabilities, MongoDB for content storage, and custom markdown parser for rich content editing.",
        features: ["Markdown editor", "Comment system", "User authentication", "Admin dashboard", "SEO optimization", "Analytics integration"],
        results: "The platform achieved a 95+ Lighthouse score and supports blogs with 10k+ monthly visitors without performance degradation.",
        gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
      }
    },
    {
      id: 7,
      title: "Real-time Chat Application",
      description: "A secure messaging platform with real-time updates, file sharing, and end-to-end encryption for private communications.",
      image: "/api/placeholder/600/400",
      tags: ["Socket.io", "React", "Node.js", "MongoDB", "WebRTC"],
      category: "Web Application",
      link: "#",
      details: {
        challenge: "Developing a secure, scalable messaging platform with minimal latency and support for various media types.",
        solution: "Implemented Socket.io for real-time communication, WebRTC for peer-to-peer connections, and end-to-end encryption for message security.",
        features: ["Real-time messaging", "File sharing", "End-to-end encryption", "User presence indicators", "Message search", "Multi-device sync"],
        results: "The application handles thousands of concurrent connections with sub-500ms message delivery times and strong encryption protocols.",
        gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
      }
    },
    {
      id: 8,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets with customizable charts, filters, and export capabilities.",
      image: "/api/placeholder/600/400",
      tags: ["D3.js", "React", "Redux", "CSV/JSON API", "Responsive Design"],
      category: "Data Visualization",
      link: "#",
      details: {
        challenge: "Creating an intuitive interface for exploring and visualizing complex datasets while maintaining performance with large data volumes.",
        solution: "Built a React application with D3.js for custom visualizations, implemented data processing on the client-side for rapid interactions.",
        features: ["Multiple chart types", "Data filtering", "Custom time ranges", "CSV/PDF export", "Responsive layout", "Data comparison tools"],
        results: "The dashboard successfully handles datasets with 100k+ data points while maintaining smooth interactions and clear visual representations.",
        gallery: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
      }
    }
];