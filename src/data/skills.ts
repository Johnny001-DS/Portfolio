const imgRoot = "/app/images/extracirriculars"

export const relevantCourses = [
  {
    title: "Computer Systems (Graduate)",
    description: "Studies the structure, components, design, implementation, and internal operation of computer systems, focusing mainly on the operating system level. Reviews computer hardware and architecture including the arithmetic and logic unit, and the control unit. Covers current operating system components and construction techniques including the memory and memory controller, I/O device management, device drivers, memory management, file system structures, and the user interface. Introduces distributed operating systems. Discusses issues arising from concurrency and distribution, such as scheduling of concurrent processes, interprocess communication and synchronization, resource sharing and allocation, and deadlock management and resolution. Includes examples from real operating systems. Exposes students to the system concepts through programming exercises.",
    skillsLearned: ["Operating System Design", "Memory Management", "Process Scheduling", "Concurrency", "Distributed Systems"]
  },
  {
    title: "Fundamentals of Computer Networks (Graduate)",
    description: "Studies network protocols, focusing on modeling and analysis, and architectures. Introduces modeling concepts, emphasizing queuing theory, including Little's theorem, M/M/1, M/M/m, M/D/1, and M/G/1 queuing systems. Discusses performance evaluation of computer networks including performance metrics, evaluation tools and methodology, simulation techniques, and limitations. Presents the different harmonizing functions needed for communication and efficient operation of computer networks and discusses examples of Ethernet, FDDI, and wireless networks. Covers link layer protocols including HDLC, PPP, and SLIP; packet framing; spanning tree and learning bridges, error detection techniques, and automatic repeat request algorithms; sliding window and reliable/ordered services; and queuing disciplines including FQ and WFQ. Introduces flow control schemes, such as window flow control and leaky bucket rate control schemes, and discusses congestion control and fairness. Requires knowledge of probability theory.",
    skillsLearned: ["Network Protocols", "Queuing Theory", "Congestion Control", "Routing Algorithms", "Network Performance Analysis"]
  },
  {
    title: "Introduction to Databases",
    description: "Studies the design of a database for use in a relational database management system. The entity-relationship model and normalization are used in problems. Relational algebra and then the SQL (structured query language) are presented. Advanced topics include triggers, stored procedures, indexing, elementary query optimization, and fundamentals of concurrency and recovery. Students implement a database schema and short application programs on one or more commercial relational database management systems.",
    skillsLearned: ["SQL", "Database Design", "ER Modeling", "Normalization", "Query Optimization"]
  },
  {
    title: "Programming in C++",
    description: "Examines how to program in C++ in a robust and safe manner. Reviews basics, including scoping, typing, and primitive data structures. Discusses data types (primitive, array, structure, class, string); addressing/parameter mechanisms (value, pointer, reference); stacks; queues; linked lists; binary trees; hash tables; and the design of classes and class inheritance, emphasizing single inheritance. Considers the instantiation of objects, the trade-offs of stack vs. heap allocation, and the design of constructors and destructors. Emphasizes the need for a strategy for dynamic memory management. Addresses function and operator overloading; templates, the Standard Template Library (STL), and the STL components (containers, generic algorithms, iterators, adaptors, allocators, function objects); streams; exception handling; and system calls for processes and threads.",
    skillsLearned: ["C++", "Object-Oriented Programming", "Data Structures", "Memory Management", "Templates"]
  },
  {
    title: "Discrete Structures",
    description: "Introduces the mathematical structures and methods that form the foundation of computer science. Studies structures such as sets, tuples, sequences, lists, trees, and graphs. Discusses functions, relations, ordering, and equivalence relations. Examines inductive and recursive definitions of structures and functions. Discusses principles of proof such as truth tables, inductive proof, and basic logic. Also covers the counting techniques and arguments needed to estimate the size of sets, the growth of functions, and the space-time complexity of algorithms.",
    skillsLearned: ["Set Theory", "Graph Theory", "Combinatorics", "Mathematical Proofs", "Algorithm Complexity"]
  },
  {
    title: "Mathematics of Data Models",
    description: "Studies the methods and ideas in linear algebra, multivariable calculus, and statistics that are most relevant for the practicing computer scientist doing machine learning, modeling, or hypothesis testing with data. Covers least squares regression, finding eigenvalues to predict a linear system's behavior, performing gradient descent to fit a model to data, and performing t-tests and chi-square tests to determine whether differences between populations are significant. Includes applications to popular machine-learning methods, including Bayesian models and neural networks.",
    skillsLearned: ["Linear Algebra", "Multivariable Calculus", "Statistical Analysis", "Optimization", "Machine Learning Foundations"]
  },
  {
    title: "Object-Oriented Design",
    description: "Presents a comparative approach to object-oriented programming and design. Discusses the concepts of object, class, meta-class, message, method, inheritance, and genericity. Reviews forms of polymorphism in object-oriented languages. Contrasts the use of inheritance and composition as dual techniques for software reuse: forwarding vs. delegation and subclassing vs. subtyping. Fosters a deeper understanding of the principles of object-oriented programming and design including software components, object-oriented design patterns, and the use of graphical design notations such as UML (unified modeling language). Basic concepts in object-oriented design are illustrated with case studies in application frameworks and by writing programs in one or more object-oriented languages.",
    skillsLearned: ["OOP Principles", "Design Patterns", "UML", "Code Refactoring", "Software Architecture"]
  },
  {
    title: "Projects in Cloud Computing",
    description: "This course is an introduction to the principles and practice of cloud computing, with an emphasis on real-world use of Amazon Web Services. The course combines material aimed at understanding general provider-independent concepts related to cloud computing and hands-on exercises with AWS. A portion of this course will also be dedicated to direct training with AWS Skills trainers on the Amazon campus. The course will culminate with a significant cloud application project.",
    skillsLearned: ["AWS", "Cloud Architecture", "Serverless Computing", "IaaS", "PaaS", "SaaS"]
  },
  {
    title: "Game Programming",
    description: "Introduces the different subsystems used to create a 3D game, including rendering, animation, collision, physics, audio, trigger systems, game logic, behavior trees, and simple artificial intelligence. Offers students an opportunity to learn the inner workings of game engines and how to use multiple libraries such as physics and graphics libraries to develop a game. Discusses graphics pipeline, scene graph, level design, behavior scripting, object-oriented game design, world editors, and game scripting languages.",
    skillsLearned: ["Unity", "Game Architecture", "Physics Engines", "Game AI", "User Input Handling"]
  },
  {
    title: "Foundations of Cybersecurity",
    description: "Presents an overview of basic principles and security concepts related to information systems, including workstation security, system security, and communications security. Discusses legal, ethical, and human factors and professional issues associated with cybersecurity, including the ability to differentiate between laws and ethics. Offers students an opportunity to use a substantial variety of existing software tools to probe both computer systems and networks in order to learn how these systems function, how data moves within these systems, and how these systems might be vulnerable. Covers security methods, controls, procedures, economics of cybercrime, criminal procedure, and forensics.",
    skillsLearned: ["Cryptography", "Linux", "Network Security"]
  },
  {
    title: "Theory of Computation",
    description: "Introduces the theory behind computers and computing aimed at answering the question, “What are the capabilities and limitations of computers?” Covers automata theory, computability, and complexity. The automata theory portion includes finite automata, regular expressions, nondeterminism, nonregular languages, context-free languages, pushdown automata, and noncontext-free languages. The computability portion includes Turing machines, the Church-Turing thesis, decidable languages, and the Halting theorem. The complexity portion includes big-O and small-o notation, the classes P and NP, the P vs. NP question, and NP-completeness.",
    skillsLearned: ["Formal Languages", "Automata Theory", "Turing Machines", "Complexity Analysis", "P vs NP"]
  }
];


export const clubs = [
  {
    name: "Oasis",
    role: "Team Member & Mentor/Instructor",
    period: "September 2024 - Present",
    location: "Boston, MA",
    description: "Collaborated with 4 software engineers to develop a website that consolidates reviews and information on the over 200+ global opportunities a part of Northeastern's Global Campus Network. Mentoring new members on the team and helping them learn the ropes of full-stack development.",
    image: `${imgRoot}/oasis/oasis_banner.png`,
    details: {
      activities: [
        "Collaborated on developing the website architecture",
        "Designed and implemented the user interface",
        "Created database schemas for storing global opportunity and user data",
        "Teaching new members about full-stack development",
      ],
      skills: [
        "Web Development",
        "Team Collaboration",
        "UI/UX Design",
        "Database Design",
        "API Development",
        "Project Management"
      ],
      achievements: [
        "Successfully launched a comprehensive resource for students",
        "Implemented a user-friendly interface for accessing information on 200+ global opportunities",
        "Developed effective teamwork and communication skills"
      ],
      gallery: [
        `${imgRoot}/oasis/oasis_headshot.JPEG`
      ]
    }
  },
  {
    name: "ColorStack",
    role: "Team Member",
    period: "September 2024 - Present",
    location: "Boston, MA",
    description: "Engaging with over 1500+ other computer science students from underrepresented backgrounds across the ColorStack network to gain a better understanding of how a diverse and inclusive professional environment operates.",
    image: `${imgRoot}/colorstack/colorstack_banner.jpg`,
    details: {
      activities: [
        "Participating in diversity and inclusion initiatives",
        "Attending networking events and workshops",
        "Participating in mentorship programs",
        "Engaging in professional development activities",
      ],
      skills: [
        "Diversity & Inclusion",
        "Networking",
        "Professional Development",
        "Community Building",
      ],
      achievements: [
        "Built connections with computer science students from diverse backgrounds",
        "Enhanced understanding of inclusive professional environments",
        "Contributed to creating a more diverse tech community"
      ],
      gallery: [
        `${imgRoot}/colorstack/colorstack_gallery_1.jpeg`,
      ]
    }
  }
];