export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  category: 'technical' | 'cloud' | 'framework' | 'general' | 'security' | 'design';
  featured: boolean;
  verified: boolean;
}

export const certificates: Certificate[] = [
  {
    id: "next-js-professional-certification",
    title: "Next.js Professional Certification",
    issuer: "Vercel",
    issueDate: "2024-03",
    credentialId: "NEXTJS-PRO-2024-001",
    credentialUrl: "https://vercel.com/certificates/nextjs-pro-fortune",
    description: "Advanced certification covering Next.js 14 App Router, Server Components, Server Actions, and performance optimization. Demonstrates expertise in building production-ready applications with modern Next.js features.",
    skills: ["Next.js 14", "App Router", "Server Components", "Server Actions", "Performance Optimization", "SEO"],
    category: 'framework',
    featured: true,
    verified: true
  },
  {
    id: "aws-solutions-architect",
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    issueDate: "2023-11",
    expiryDate: "2026-11",
    credentialId: "AWS-SAA-C03-2023-1157",
    credentialUrl: "https://aws.amazon.com/verification",
    description: "Validates expertise in designing distributed systems on AWS. Covers compute, networking, storage, and database AWS services, along with AWS deployment and management services.",
    skills: ["AWS", "Cloud Architecture", "EC2", "S3", "RDS", "Lambda", "CloudFormation", "Security"],
    category: 'cloud',
    featured: true,
    verified: true
  },
  {
    id: "mongodb-developer-associate",
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB University",
    issueDate: "2023-08",
    credentialId: "MONGO-DEV-2023-847",
    credentialUrl: "https://university.mongodb.com/certification",
    description: "Demonstrates proficiency in MongoDB development including data modeling, indexing, aggregation framework, and performance tuning. Covers MongoDB Atlas cloud deployment and management.",
    skills: ["MongoDB", "Database Design", "Aggregation", "Indexing", "Performance Tuning", "Atlas"],
    category: 'technical',
    featured: true,
    verified: true
  },
  {
    id: "react-advanced-patterns",
    title: "Advanced React Patterns and Performance",
    issuer: "React Training",
    issueDate: "2023-06",
    credentialId: "REACT-ADV-2023-512",
    credentialUrl: "https://reacttraining.com/certificates",
    description: "Advanced React certification covering complex state management, performance optimization, custom hooks, and advanced patterns like render props and compound components.",
    skills: ["React", "Advanced Patterns", "Performance", "Custom Hooks", "State Management", "Optimization"],
    category: 'framework',
    featured: true,
    verified: true
  },
  {
    id: "typescript-expert",
    title: "TypeScript Expert Certification",
    issuer: "TypeScript Academy",
    issueDate: "2023-04",
    credentialId: "TS-EXPERT-2023-289",
    credentialUrl: "https://typescript-academy.com/certificates",
    description: "Expert-level TypeScript certification covering advanced types, generics, decorators, and compiler configuration. Includes real-world application patterns and best practices.",
    skills: ["TypeScript", "Advanced Types", "Generics", "Decorators", "Compiler Configuration", "Type Safety"],
    category: 'technical',
    featured: false,
    verified: true
  },
  {
    id: "appwrite-certified-developer",
    title: "Appwrite Certified Backend Developer",
    issuer: "Appwrite",
    issueDate: "2023-02",
    credentialId: "APPWRITE-DEV-2023-156",
    credentialUrl: "https://appwrite.io/certificates",
    description: "Certification in Appwrite backend-as-a-service platform covering authentication, databases, storage, functions, and real-time capabilities for web and mobile applications.",
    skills: ["Appwrite", "BaaS", "Authentication", "Database", "Cloud Functions", "Real-time", "Mobile Backend"],
    category: 'cloud',
    featured: false,
    verified: true
  },
  {
    id: "google-cloud-professional",
    title: "Google Cloud Professional Cloud Developer",
    issuer: "Google Cloud",
    issueDate: "2022-12",
    expiryDate: "2025-12",
    credentialId: "GCP-PCD-2022-934",
    credentialUrl: "https://cloud.google.com/certification/verify",
    description: "Professional-level certification for designing, building, and deploying applications on Google Cloud Platform. Covers App Engine, Cloud Functions, Kubernetes, and cloud-native development.",
    skills: ["Google Cloud Platform", "App Engine", "Cloud Functions", "Kubernetes", "Cloud Storage", "BigQuery"],
    category: 'cloud',
    featured: false,
    verified: true
  },
  {
    id: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    issuer: "CompTIA",
    issueDate: "2022-09",
    expiryDate: "2025-09",
    credentialId: "COMPTIA-SEC-2022-678",
    credentialUrl: "https://comptia.org/certifications/security",
    description: "Foundation-level cybersecurity certification covering network security, compliance, operational security, threats and vulnerabilities, application security, and cryptography.",
    skills: ["Cybersecurity", "Network Security", "Encryption", "Threat Analysis", "Risk Management", "Compliance"],
    category: 'security',
    featured: false,
    verified: true
  },
  {
    id: "figma-ui-ux-design",
    title: "Figma UI/UX Design Professional",
    issuer: "Figma Academy",
    issueDate: "2022-07",
    credentialId: "FIGMA-UIUX-2022-445",
    credentialUrl: "https://figma.com/academy/certificates",
    description: "Professional UI/UX design certification using Figma. Covers design systems, prototyping, collaboration, and design handoff processes for web and mobile applications.",
    skills: ["Figma", "UI/UX Design", "Design Systems", "Prototyping", "User Research", "Design Handoff"],
    category: 'design',
    featured: false,
    verified: true
  },
  {
    id: "stripe-payments-certification",
    title: "Stripe Payments Integration Specialist",
    issuer: "Stripe",
    issueDate: "2022-05",
    credentialId: "STRIPE-PAY-2022-789",
    credentialUrl: "https://stripe.com/certificates",
    description: "Specialized certification in Stripe payment processing integration, covering payment intents, webhooks, subscriptions, and marketplace implementations with strong focus on security and compliance.",
    skills: ["Stripe", "Payment Processing", "Webhooks", "Subscriptions", "PCI Compliance", "Financial APIs"],
    category: 'technical',
    featured: false,
    verified: true
  },
  {
    id: "docker-kubernetes-fundamentals",
    title: "Docker and Kubernetes Fundamentals",
    issuer: "Docker Inc.",
    issueDate: "2022-03",
    credentialId: "DOCKER-K8S-2022-234",
    credentialUrl: "https://docker.com/certificates",
    description: "Fundamentals of containerization with Docker and orchestration with Kubernetes. Covers container building, deployment, scaling, and management in production environments.",
    skills: ["Docker", "Kubernetes", "Containerization", "Orchestration", "DevOps", "Microservices"],
    category: 'cloud',
    featured: false,
    verified: true
  },
  {
    id: "agile-scrum-master",
    title: "Certified Scrum Master (CSM)",
    issuer: "Scrum Alliance",
    issueDate: "2021-11",
    expiryDate: "2024-11",
    credentialId: "CSM-2021-567",
    credentialUrl: "https://scrumalliance.org/community/profile/fortune-ogbodogbo",
    description: "Scrum Master certification covering agile principles, sprint planning, daily standups, retrospectives, and team facilitation. Demonstrates ability to lead agile development teams effectively.",
    skills: ["Agile", "Scrum", "Project Management", "Team Leadership", "Sprint Planning", "Retrospectives"],
    category: 'general',
    featured: false,
    verified: true
  }
];

export const getFeaturedCertificates = () => certificates.filter(cert => cert.featured);
export const getCertificatesByCategory = (category: Certificate['category']) => 
  certificates.filter(cert => cert.category === category);
export const getVerifiedCertificates = () => certificates.filter(cert => cert.verified);
