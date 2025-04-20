import { Experience } from "@/types/index";

export const experiences: Experience[] = [
    {
      id: 1,
      company: "Massachusetts Financial Services",
      logo: "/mfs_logo.png",
      position: "Full-Stack Software Engineer Co-op",
      period: "January 2025 - Present",
      location: "Boston, MA",
      description: "Developed and maintained React components for the company's main product. Collaborated with senior developers to implement new features and fix bugs.",
      details: {
        responsibilities: [
          "Collaborated with the front-end team to develop and maintain React components",
          "Implemented responsive designs using Tailwind CSS",
          "Participated in code reviews and agile development processes",
          "Assisted in refactoring legacy code to modern standards",
          "Created unit tests using Jest and React Testing Library"
        ],
        technologies: ["Python", "TypeScript", "React", "Tailwind CSS", "Redhat OpenShift", "Rest API's", "Jira", "Git", "Next.js"],
        achievements: [
          "Reduced component rendering time by 30% through optimization",
          "Implemented a key feature that improved user engagement metrics",
          "Received recognition for attention to detail and code quality"
        ],
        testimonial: {
          text: "Alex quickly became an integral part of our development team, showing exceptional skill in frontend development and an impressive ability to learn new technologies.",
          author: "Sarah Chen, Senior Developer"
        }
      }
    },
    {
      id: 2,
      company: "Polygence",
      logo: "/polygence_logo.png",
      position: "AI Research Assistant",
      period: "2023 - Present",
      location: "AI Researcher",
      description: "Assist in maintaining university web applications. Create documentation and provide technical support for campus digital services.",
      details: {
        responsibilities: [
          "Maintained and updated university web applications and internal tools",
          "Created comprehensive documentation for student and faculty users",
          "Provided technical support for digital services across campus",
          "Collaborated with IT staff to implement new features and improvements",
          "Participated in user testing and feedback collection"
        ],
        technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap", "WordPress"],
        achievements: [
          "Streamlined the documentation process, making it more accessible to users",
          "Implemented a feedback system that improved service quality metrics",
          "Recognized for excellence in student support and problem-solving"
        ],
        testimonial: {
          text: "Alex has shown exceptional initiative and technical ability in modernizing our systems. Their work has significantly improved our digital services.",
          author: "Dr. Michael Reynolds, IT Director"
        }
      }
    },
    {
      id: 3,
      company: "Lastgateway Enterprises",
      logo: "/api/placeholder/80/80",
      position: "Founder",
      period: "2015 - Present",
      location: "Farmingdale, NJ",
      description: "Design and develop websites for small businesses and organizations. Focus on responsive design and accessibility.",
      details: {
        responsibilities: [
          "Designed and developed custom websites for diverse clients",
          "Implemented responsive designs that work across all device sizes",
          "Ensured accessibility compliance for all web projects",
          "Managed client relationships and project timelines",
          "Provided ongoing maintenance and support for completed sites"
        ],
        technologies: ["HTML/CSS", "JavaScript", "React", "Next.js", "WordPress"],
        achievements: [
          "Delivered over 10 successful projects with 100% client satisfaction",
          "Improved site performance scores by an average of 40%",
          "Developed a streamlined workflow for rapid prototyping and deployment"
        ],
        projects: [
          "Local Restaurant Chain - E-commerce and online ordering system",
          "Non-profit Organization - Donation platform with event management",
          "Photography Studio - Portfolio showcase with booking functionality"
        ]
      }
    },
    {
      id: 4,
      company: "AWS Skills Center",
      logo: "/api/placeholder/80/80",
      position: "Student",
      period: "2015 - Present",
      location: "Farmingdale, NJ",
      description: "Design and develop websites for small businesses and organizations. Focus on responsive design and accessibility.",
      details: {
        responsibilities: [
          "Designed and developed custom websites for diverse clients",
          "Implemented responsive designs that work across all device sizes",
          "Ensured accessibility compliance for all web projects",
          "Managed client relationships and project timelines",
          "Provided ongoing maintenance and support for completed sites"
        ],
        technologies: ["HTML/CSS", "JavaScript", "React", "Next.js", "WordPress"],
        achievements: [
          "Delivered over 10 successful projects with 100% client satisfaction",
          "Improved site performance scores by an average of 40%",
          "Developed a streamlined workflow for rapid prototyping and deployment"
        ],
        projects: [
          "Local Restaurant Chain - E-commerce and online ordering system",
          "Non-profit Organization - Donation platform with event management",
          "Photography Studio - Portfolio showcase with booking functionality"
        ]
      }
    }
];