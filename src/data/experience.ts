import { Experience } from "@/types/index";

export const experiences: Experience[] = [
  {
      "id": 1,
      "company": "MFS Investment Management",
      "logo": "/mfs_logo.png",
      "position": "Full-Stack Software Engineer",
      "period": "January 2025 - Present",
      "location": "Boston, MA",
      "description": "Building internal tools and full-stack applications to support global compliance, reporting, and operational workflows at scale.",
      "details": {
        "responsibilities": [
          "Developing full-stack web applications and internal tools to streamline global compliance, reporting processes, and improve operational efficiency.",
          "Integrating and deploying internal Large Language Models (LLMs) to enhance employee productivity through natural language interfaces.",
          "Creating and managing CI/CD pipelines with Red Hat OpenShift to enable scalable deployment environments.",
          "Automating regulatory data parsing, report generation, and email dissemination, significantly reducing manual compliance tasks.",
          "Implementing secure certificate management systems across international server infrastructure, utilizing encryption standards like Fernet.",
          "Conducting technical interviews and mentoring incoming DevSecOps co-op team members."
        ],
        "technologies": [
          "Python",
          "TypeScript",
          "React",
          "Red Hat OpenShift",
          "Kubernetes",
          "Ansible",
          "SonarQube",
          "Azure DevOps",
          "Google Gemma 3 (LLM)",
          "PostgreSQL",
          "Prometheus",
          "Coralogix",
          "Atlassian Suite (Jira, Bitbucket)",
          "Auth.js",
          "CyberArk"
        ],
        "achievements": [
          "Saving over 100+ hours monthly for the compliance team by developing a high-visibility web portal—originally scoped for 6 engineers over 6 months with a $500K budget—now actively used and gaining adoption and recognition from CTO, CEO, and Chief Compliance Officer",
          "Reduced resource onboarding time from days to seconds company-wide by developing an online portal, significantly enhancing operational efficiency.",
          "Designed and deployed a telemetry-based reporting portal that improved metric visibility and traceability across departments.",
          "Implemented automated regulatory compliance tools that eliminated monthly manual outreach efforts, enhancing accuracy and timeliness of compliance processes.",
          "Successfully deployed internal lightweight LLM assistant leveraging Google's Gemma 3 on Kubernetes pods (CPU-only), facilitating efficient natural language queries across internal data sources.",
          "Facilitated scalable and reliable deployment pipelines on Red Hat OpenShift, establishing best practices for broader internal software adoption.",
          "Mentoring and training incoming co-op, enhancing team productivity and knowledge sharing",
        ]
      }
    },
    {
      id: 2,
      company: "Sponsor for Educational Opportunity Program",
      logo: "/seo_logo.png",
      position: "Tech Developer",
      period: "June 2025 - August 2025",
      location: "Online",
      description: "Technical and interpersonal skills, training, and mentoring to build a strong foundation for a career in software development.",
      details: {
        responsibilities: [
          "Will work with other fellow developers to learn more about full-stack development and the latest technologies.",
          "Will recieve mentorship from experienced developers and recruiters to help with job search and interview preparation.",
        ],
        technologies: ["TBD"],
        achievements: [
          "TBD"
        ]
      }
    },
    {
      id: 3,
      company: "Lastgateway Enterprise",
      logo: "/lastgateway_logo.png",
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
      id: 4,
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
      id: 5,
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