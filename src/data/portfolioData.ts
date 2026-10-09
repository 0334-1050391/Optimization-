import { ContactInfo, Project, SkillCategory } from '../types/portfolio';

export const personalInfo: ContactInfo = {
  name: 'Tania Ramzan',
  title: 'Mathematician',
  education: 'BS Mathematics',
  email: 'taniaramzanshujabad@gmail.com',
  phone: '03341050391',
  phoneFormatted: '+92 334 1050391',
  github: 'https://github.com/0334-1050391',
  linkedin: 'https://www.linkedin.com/in/tania-ramzan-75999b434',
};

export const featuredProject: Project = {
  id: 'customer-churn-predictor',
  title: 'Customer Churn Predictor',
  shortDescription:
    'A machine-learning and data project demonstrating practical predictive modeling and data analysis applied to customer retention and churn risk evaluation.',
  fullDescription:
    'Customer churn poses a critical analytical challenge for subscription and service-based organizations. This project demonstrates how structured data exploration, feature analysis, and predictive machine learning models can identify behavioral patterns and signals associated with customer departure, converting raw customer metrics into actionable risk indicators.',
  technologies: [
    'Python',
    'Machine Learning',
    'Data Analytics',
    'Predictive Modeling',
    'Data Analysis',
  ],
  keyFunctionality: [
    'Interactive customer profile input and risk evaluation',
    'Application of trained predictive classification logic',
    'Identification of influential behavioral indicators in churn probability',
    'Clean web interface facilitating intuitive model inference and scenario exploration',
  ],
  githubUrl: 'https://github.com/0334-1050391',
  liveUrl: 'https://customer-churn-predictor-1.ai.studio',
  category: 'Machine Learning',
  featured: true,
  highlights: [
    'Live deployed cloud application with active inference interface',
    'Bridges mathematical probability with applied machine learning',
    'End-to-end data pipeline from input ingestion to probability outcome',
  ],
};

export const selectedProjects: Project[] = [
  {
    id: 'mathematical-modeling-computing',
    title: 'Mathematical Modeling and Computing',
    shortDescription:
      'Algorithmic and computational implementations of mathematical models, focusing on numerical methods, equation formulations, and structured problem solving.',
    fullDescription:
      'Explores the convergence between theoretical mathematics and programmatic computation. Focuses on transforming mathematical equations, iterative numerical techniques, and analytical models into algorithmic Python scripts, reinforcing computational thinking and quantitative verification.',
    technologies: [
      'Python',
      'Mathematical Modeling',
      'Computational Thinking',
      'Algorithm Design',
    ],
    keyFunctionality: [
      'Programmatic translation of theoretical mathematical formulations',
      'Numerical computation and iterative problem solving in Python',
      'Structured algorithms for quantitative verification and analysis',
    ],
    githubUrl: 'https://github.com/0334-1050391/Mathematical-Modeling-and-Computing',
    category: 'Computational Math',
    highlights: [
      'Core intersection of formal mathematics and code execution',
      'Emphasizes systematic analytical problem formulation',
    ],
  },
  {
    id: 'library-management',
    title: 'Library Management System',
    shortDescription:
      'An object-oriented software system architected to manage catalog operations, member records, and transactional workflows with structured data integrity.',
    fullDescription:
      'A software development implementation structured using Object-Oriented Programming (OOP) paradigms in Python. Encapsulates entity relationships between books, members, and transaction logs, implementing robust validation, search routines, and modular class hierarchies.',
    technologies: [
      'Python',
      'Object-Oriented Programming',
      'Data Structures',
      'Software Architecture',
    ],
    keyFunctionality: [
      'Modular class hierarchies organizing library resources and members',
      'Methods for issue, return, search, and availability tracking',
      'State persistence and disciplined boundary validation',
    ],
    githubUrl: 'https://github.com/0334-1050391/Library-Management',
    category: 'Software Engineering',
    highlights: [
      'Rigorous object-oriented principles (encapsulation, abstraction)',
      'Organized control flow for state-dependent operations',
    ],
  },
  {
    id: 'calculator-app',
    title: 'Calculator App',
    shortDescription:
      'Interactive mathematical calculation application built with clean operator evaluation logic, input parsing, and an accessible layout.',
    fullDescription:
      'An accessible calculating application designed to perform arithmetic and multi-step evaluations with reliable operator precedence and state management. Emphasizes clean UI interaction alongside precise mathematical calculation logic.',
    technologies: [
      'HTML',
      'Programming Fundamentals',
      'Mathematical Logic',
      'User Interface',
    ],
    keyFunctionality: [
      'Arithmetic operator evaluation with clear precedence handling',
      'Input sanitization, decimal precision control, and error clearing',
      'Responsive interface layout optimized for cross-device calculations',
    ],
    githubUrl: 'https://github.com/0334-1050391/Calculator-App',
    category: 'Utility',
    highlights: [
      'Clean parsing of multi-step arithmetic expressions',
      'Responsive user interface with instant numerical feedback',
    ],
  },
  {
    id: 'byte-to-bite',
    title: 'Byte-To-Bite',
    shortDescription:
      'A software application built using structured programming fundamentals, item cataloging, and interactive workflow logic.',
    fullDescription:
      'A programming application examining ordered data handling, menu/catalog organization, and sequential user interaction flows. Highlights fundamental software development methodologies, input validation, and clean functional modularity.',
    technologies: [
      'Python',
      'HTML',
      'Programming Fundamentals',
      'Flow Control',
    ],
    keyFunctionality: [
      'Interactive item selection and catalog state tracking',
      'Calculated totals, transaction summaries, and structured outputs',
      'Modular code organization following clean coding conventions',
    ],
    githubUrl: 'https://github.com/0334-1050391/Byte-To-Bite',
    category: 'Software Engineering',
    highlights: [
      'Clear separation of data structures and user interactions',
      'Disciplined input handling and summary generation',
    ],
  },
  {
    id: 'qwerty',
    title: 'Qwerty',
    shortDescription:
      'An algorithmic text and sequence processing tool exploring keyboard layout logic, string evaluation, and computational heuristics.',
    fullDescription:
      'A computational utility investigating character sequences, key-mapping patterns, and algorithmic manipulation of text inputs. Demonstrates how algorithmic rules and sequence evaluation can be systematically executed in code.',
    technologies: [
      'Python',
      'Algorithm Design',
      'Sequence Processing',
      'Computational Thinking',
    ],
    keyFunctionality: [
      'Input string sequence processing and pattern matching',
      'Algorithmic handling of keyboard layout mapping constraints',
      'Lightweight execution and modular logic blocks',
    ],
    githubUrl: 'https://github.com/0334-1050391/Qwerty',
    category: 'Utility',
    highlights: [
      'Algorithmic string handling and condition checking',
      'Logical mapping of systematic user inputs',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Mathematics & Analytical Foundations',
    description:
      'Formal academic training in mathematical reasoning providing the foundational structure for modeling, algorithm design, and quantitative deduction.',
    skills: [
      {
        name: 'Mathematics',
        description:
          'Deep grounding in pure and applied mathematical structures, calculus, algebraic systems, and deductive logic.',
      },
      {
        name: 'Mathematical Modeling',
        description:
          'Formulating real-world scenarios into formal equations, iterative relationships, and quantitative representations.',
      },
      {
        name: 'Problem Solving',
        description:
          'Systematic breakdown of non-trivial challenges into clear, testable, and solvable mathematical and logical steps.',
      },
      {
        name: 'Analytical Thinking',
        description:
          'Critical evaluation of data assumptions, boundary conditions, logical consistency, and systematic patterns.',
      },
      {
        name: 'Computational Thinking',
        description:
          'Translating analytical and mathematical concepts into algorithmic procedures, abstractions, and computational workflows.',
      },
    ],
  },
  {
    title: 'Programming & Development',
    description:
      'Translating mathematical formulations into executable, maintainable, and modular software architectures.',
    skills: [
      {
        name: 'Python',
        description:
          'Primary language for data manipulation, algorithmic computing, mathematical scripts, and machine learning pipelines.',
      },
      {
        name: 'Object-Oriented Programming (OOP)',
        description:
          'Architecting modular software through classes, inheritance, encapsulation, and clean domain abstractions.',
      },
      {
        name: 'HTML',
        description:
          'Semantic markup fundamentals for rendering web-based interfaces and interactive application frontends.',
      },
      {
        name: 'Programming Fundamentals',
        description:
          'Core mastery of data structures, control flow, functions, algorithmic complexity, and debugging hygiene.',
      },
    ],
  },
  {
    title: 'Data & Machine Learning',
    description:
      'Applying statistical insight and predictive learning algorithms to extract intelligence from structured datasets.',
    skills: [
      {
        name: 'Data Analytics',
        description:
          'Exploratory analysis, descriptive statistics, metric synthesis, and identifying underlying distributions in data.',
      },
      {
        name: 'Data Analysis',
        description:
          'Inspecting, cleaning, transforming, and modeling data to discover actionable insights and validate empirical hypotheses.',
      },
      {
        name: 'Machine Learning',
        description:
          'Implementing predictive modeling workflows, classification techniques, and probability estimation algorithms (e.g., customer churn).',
      },
    ],
  },
];

export const educationData = {
  degree: 'BS Mathematics',
  field: 'Mathematical Sciences & Applied Computing',
  focusAreas: [
    'Pure & Applied Mathematics',
    'Mathematical Modeling & Numerical Methods',
    'Analytical Reasoning & Deductive Logic',
    'Probability, Statistics & Computational Problem Solving',
  ],
  description:
    'Comprehensive university degree program emphasizing rigorous mathematical theory, analytical problem solving, abstract reasoning, and quantitative methods. Serves as the intellectual cornerstone for advanced computational programming, data analytics, and machine learning architectures.',
};
