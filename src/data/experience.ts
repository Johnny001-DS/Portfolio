import { Experience } from "@/types/index";

export const experiences: Experience[] = [
    {
      id: 1,
      company: "Sponsor for Educational Opportunity Program",
      logo: "/seo_logo.png",
      position: "Tech Developer",
      period: "June 2025 - August 2025",
      location: "Boston, MA",
      description: "Developing software to streamline Jira tickets, onboarding workflows, and CI/CD pipelines to increase efficiency for company's backend processes.",
      details: {
        responsibilities: [
          "Developing software to streamline Jira tickets and workflow automation",
          "Implementing CI/CD pipelines for improved development efficiency",
          "Creating onboarding workflows to streamline employee integration",
          "Collaborating with DevOps and Security teams to maintain best practices",
          "Building internal tools and automations for enterprise-level applications"
        ],
        technologies: ["Python", "React", "TypeScript", "Ansible", "OpenShift", "Azure", "Jenkins", "CI/CD"],
        achievements: [
          "Increased efficiency in backend processes through automation",
          "Streamlined ticket management and workflow systems",
          "Improved developer productivity through optimized CI/CD pipelines"
        ]
      }
    },
    {
      id: 2,
      company: "MFS Investment Management",
      logo: "/mfs_logo.png",
      position: "Full-Stack Software Engineer",
      period: "January 2025 - Present",
      location: "Boston, MA",
      description: "Developing software to streamline Jira tickets, onboarding workflows, and CI/CD pipelines to increase efficiency for company's backend processes.",
      details: {
        responsibilities: [
          "Developing software to streamline Jira tickets and workflow automation",
          "Implementing CI/CD pipelines for improved development efficiency",
          "Creating onboarding workflows to streamline employee integration",
          "Collaborating with DevOps and Security teams to maintain best practices",
          "Building internal tools and automations for enterprise-level applications"
        ],
        technologies: ["Python", "React", "TypeScript", "Ansible", "OpenShift", "Azure", "Jenkins", "CI/CD"],
        achievements: [
          "Increased efficiency in backend processes through automation",
          "Streamlined ticket management and workflow systems",
          "Improved developer productivity through optimized CI/CD pipelines"
        ]
      }
    },
    {
      id: 3,
      company: "Lastgateway Enterprise",
      logo: "/api/placeholder/80/80",
      position: "Founder",
      period: "January 2015 - Present",
      location: "Howell, NJ",
      description: "Founded a Platform/Software as a Service business providing computing resources to organizations within the community.",
      details: {
        responsibilities: [
          "Founded a Platform/Software as a Service business providing computing resources",
          "Designing, implementing and servicing over 30+ software resources simultaneously",
          "Maintaining a consistent 99.9% uptime for customer resources",
          "Managing infrastructure and cloud services for multiple organizations",
          "Implementing cost-effective solutions as alternatives to traditional cloud providers"
        ],
        technologies: ["Linux", "Docker", "Cloud Infrastructure", "Networking", "Server Management"],
        achievements: [
          "Reduced server and compute costs by more than half compared to traditional cloud providers",
          "Significantly increased customer's operational efficiency and reduced IT workload",
          "Maintained 99.9% uptime ensuring continuous availability of services",
          "Serviced over 5 organizations within the community with reliable computing resources"
        ]
      }
    },
    {
      id: 3,
      company: "AWS Skills Center",
      logo: "/aws_logo.jpg",
      position: "AWS Academy Student",
      period: "May 2024 - June 2024",
      location: "Seattle, WA",
      description: "Design and develop websites for small businesses and organizations. Focus on responsive design and accessibility.",
      details: {
        responsibilities: [
          "Designed and developed custom websites for diverse clients",
          "Implemented responsive designs that work across all device sizes",
          "Ensured accessibility compliance for all web projects",
          "Managed client relationships and project timelines",
          "Provided ongoing maintenance and support for completed sites"
        ],
        technologies: ["AWS", "Networking", "TCP", "Next.js", "WordPress"],
        achievements: [
          "Set up a highly scalable EC2 instance and Amazon RDS database, optimizing application performance by separating its components.",
          "Developed an EC2 Auto Scaling group that boosted application capacity by 50% during load tests, automatically adjusting to traffic surges with up to 150 concurrent users, ensuring uninterrupted service during peak loads.",
          "Created a Virtual Private Cloud with 4 subnets distributed across 2 availability zones, configuring Elastic Load Balancing to manage up to 3 EC2 instances."
        ],
        projects: [
          "Student Data Management System: Developed a web application using and AWS services to manage mock student data, including registration, attendance, and grades.",
        ]
      } 
    },
    {
      id: 4,
      company: "Polygence",
      logo: "/polygence_logo.png",
      position: "AI Research Assistant",
      period: "April 2021 - August 2021",
      location: "Remote",
      description: "Researched suggestion-based advertisement alongside a Stanford University Masters Student to determine an effective model for suggesting new music.",
      details: {
        responsibilities: [
          "Researched suggestion-based advertisement for music recommendations",
          "Tested neural network approaches using PyTorch Lightning",
          "Assisted with data cleaning, preparation, and loading for model training",
          "Collaborated with Stanford University Masters Student on research project",
          "Analyzed model performance and suggestion accuracy"
        ],
        technologies: ["Python", "PyTorch", "Neural Networks", "Data Analysis", "Machine Learning"],
        achievements: [
          "Successfully processed and prepared over 1 million songs for training the model",
          "Implemented effective data cleaning pipelines for large datasets",
          "Contributed to a neural network approach for modeling music preferences"
        ]
      }
    }
];