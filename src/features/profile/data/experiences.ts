import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance",
    companyName: "Freelance",
    companyLogo: "",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "06.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Building an e-commerce management website with integrated payment system.
 - Developing landing pages for customers.
 - Creating my own brand and portfolio website.`,
        skills: [
          "TypeScript",
          "Next.js",
          "React",
          "PostgreSQL",
          "APIs",
          "Node.js",
          "Docker",
          "NGINX",
          "Tailwind CSS",
          "Stripe",
          "Figma",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "keepins",
    companyName: "Keepins",
    companyLogo: "/keepins-logo.webp",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "07.2024",
          end: "05.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Built full-stack applications using **Next.js** and **Node.js** for the front-end and back-end, delivering responsive, high-performance user interfaces and RESTful APIs.
- Designed and maintained server-side logic using **Node.js**, **C#**, and **Java**, integrating with message brokers like **RabbitMQ** for asynchronous processing.
- Designed and optimized relational database schemas using **PostgreSQL**, ensuring data integrity and performance through well-structured queries and indexing strategies.
- Built custom automation workflows with **n8n** to streamline internal processes and integrate with third-party services and APIs.
- Contributed to continuous integration and deployment pipelines using tools like **GitHub Actions**, managing build, test, and deployment processes to ensure smooth releases across environments.`,
        skills: [
          "C#",
          "Node.js",
          "Java",
          "RabbitMQ",
          "PostgreSQL",
          "n8n",
          "GitHub Actions",
          "Docker",
          "NGINX",
          "C#",
          "Infrastructure",
          "DNS",
          "CI/CD",
          "API",
          "REST",
          "Web Services",
          "Webhooks",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "´mercadolibre",
    companyName: "Mercado Libre",
    companyLogo: "/mercado-libre-logo.webp",
    positions: [
      {
        id: "3e831244-8d8c-41e2-b2ce-7f3946956afd",
        title: "Fraud Prevention Specialist",
        employmentPeriod: {
          start: "2020",
          end: "2022",
        },
        employmentType: "Full-time",
        description: `- Analyzed transaction patterns and user behavior to detect suspicious activity, leveraging **fraud detection tools** and internal alerting systems.
- Utilized tools like **SQL**, **Excel**, and **Python** to extract, analyze, and visualize large datasets for fraud trend identification and case prioritization.
- Wrote advanced **SQL queries** to investigate anomalies, identify fraud patterns, and support ongoing investigations with accurate, data-driven insights.
- Worked closely with **risk, compliance, engineering**, and **customer support** teams to address fraud cases and improve detection strategies.
- Contributed to the design and optimization of **rule-based and automated detection systems** by providing analytical feedback and suggesting improvements based on investigation outcomes.
`,
        icon: "code",
        skills: [
          "Data Analysis",
          "Python",
          "PostgreSQL",
          "Excel",
          "SQL",
          "Data Visualization",
          "Data Modeling",
          "Critical Thinking",
          "Problem Solving",
          "Communication",
          "Teamwork",
          "Adaptability",
          "Time Management",
          "Attention to Detail",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Universidade Nove de Julho — UNINOVE",
        employmentPeriod: {
          start: "06.2024",
          end: "2026",
        },
        icon: "education",
        description: `- Currently studying for a Bachelor's degree in Information Systems.
- Language Proficiency: B2 English Level.`,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
    ],
  },
];
