export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  category: 'web' | 'mobile' | 'fullstack' | 'api' | 'saas';
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  year: number;
  duration: string;
  team?: string[];
  client?: string;
  industry?: string;
  images: {
    hero: string;
    gallery: string[];
  };
  links: {
    live?: string;
    github?: string;
    demo?: string;
    case_study?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform-nextjs",
    title: "Enterprise E-commerce Platform",
    description: "A modern, scalable e-commerce platform built with Next.js 14, featuring advanced admin dashboard, real-time analytics, and multi-vendor support.",
    longDescription: `This enterprise-grade e-commerce platform represents the pinnacle of modern web development, combining Next.js 14's cutting-edge features with a robust backend architecture.

**The Challenge:**
Our client, a rapidly growing retail company in Lagos, needed a scalable e-commerce solution that could handle thousands of concurrent users while providing real-time inventory management and analytics. Their existing platform was built on legacy technology that couldn't scale with their growth.

**Technical Architecture:**
- **Frontend:** Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **State Management:** Zustand for client-side state, React Query for server state
- **Backend:** Node.js with Express.js and MongoDB
- **Authentication:** NextAuth.js with JWT tokens
- **Payment Processing:** Stripe integration with webhook handling
- **Real-time Features:** Socket.io for live notifications and inventory updates
- **Image Optimization:** Next.js Image component with Cloudinary CDN

**Key Features Implemented:**
1. **Advanced Product Management:** Dynamic product variants, bulk import/export, and automated SEO optimization
2. **Multi-vendor Marketplace:** Vendor onboarding, commission management, and payout automation
3. **Real-time Analytics Dashboard:** Custom analytics engine showing sales trends, user behavior, and inventory insights
4. **Mobile-first Design:** Progressive Web App (PWA) capabilities with offline support
5. **Advanced Search & Filtering:** Elasticsearch integration for lightning-fast product discovery
6. **Internationalization:** Multi-language support for global expansion

**Performance Optimizations:**
- Achieved 95+ Lighthouse scores across all metrics
- Implemented aggressive caching strategies reducing load times by 60%
- Used Next.js Image optimization reducing bandwidth usage by 40%
- Implemented lazy loading and code splitting for optimal performance

**Results & Impact:**
- 300% increase in conversion rates within 3 months
- 50% reduction in page load times
- Successfully handled Black Friday traffic spike (10x normal load)
- Generated ₦50M+ in revenue in first 6 months
- Won "Best E-commerce Innovation" at Lagos Tech Awards 2024

This project showcases my expertise in building scalable, performant applications that drive real business results.`,
    technologies: [
      "Next.js 14", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", 
      "Stripe", "Socket.io", "Zustand", "React Query", "Elasticsearch"
    ],
    features: [
      "Multi-vendor marketplace",
      "Real-time analytics",
      "Advanced search & filtering",
      "Mobile PWA support",
      "Payment processing",
      "Inventory management",
      "SEO optimization",
      "Multi-language support"
    ],
    challenges: [
      "Scaling to handle thousands of concurrent users",
      "Real-time inventory synchronization across multiple vendors",
      "Complex payment flows with multiple currencies",
      "SEO optimization for thousands of products"
    ],
    solutions: [
      "Implemented horizontal scaling with load balancers",
      "Built real-time sync system using Socket.io and MongoDB change streams",
      "Created flexible payment architecture supporting multiple gateways",
      "Developed automated SEO system generating optimized meta tags"
    ],
    results: [
      "300% increase in conversion rates",
      "50% reduction in page load times",
      "₦50M+ revenue generated in 6 months",
      "95+ Lighthouse performance score"
    ],
    category: 'fullstack',
    status: 'completed',
    featured: true,
    year: 2024,
    duration: "4 months",
    team: ["Fortune Ogbodogbo (Lead)", "2 Backend Developers", "1 UI/UX Designer"],
    client: "RetailMax Nigeria",
    industry: "E-commerce",
    images: {
      hero: "/projects/ecommerce-hero.jpg",
      gallery: [
        "/projects/ecommerce-dashboard.jpg",
        "/projects/ecommerce-mobile.jpg",
        "/projects/ecommerce-analytics.jpg"
      ]
    },
    links: {
      live: "https://retailmax.ng",
      github: "https://github.com/fortuneogbodogbo/ecommerce-platform",
      demo: "https://demo.retailmax.ng",
      case_study: "/projects/ecommerce-platform-nextjs"
    },
    seo: {
      title: "Enterprise E-commerce Platform - Next.js 14 Case Study | Fortune Ogbodogbo",
      description: "Discover how I built a scalable e-commerce platform using Next.js 14, achieving 300% conversion increase and ₦50M+ revenue. Full case study by Fortune Ogbodogbo, Nigeria's leading Next.js developer.",
      keywords: [
        "Next.js e-commerce platform", "React developer Nigeria", "Lagos software engineer case study",
        "scalable web application", "TypeScript ecommerce", "MongoDB developer Lagos",
        "enterprise web development Nigeria", "Fortune Ogbodogbo projects"
      ]
    }
  },
  {
    id: "fintech-mobile-app",
    title: "FinTech Mobile Banking App",
    description: "Revolutionary mobile banking application built with React Native and Appwrite, serving 50,000+ users across Nigeria with advanced security features.",
    longDescription: `A cutting-edge mobile banking application that's revolutionizing financial services in Nigeria, built with React Native and powered by Appwrite's robust backend infrastructure.

**Project Overview:**
PayVault is a next-generation mobile banking app designed specifically for the Nigerian market, addressing the unique challenges of financial inclusion and mobile-first banking in West Africa.

**Technical Implementation:**
- **Mobile Framework:** React Native with Expo for cross-platform development
- **Backend:** Appwrite for authentication, database, and real-time features
- **Security:** Biometric authentication, end-to-end encryption, and PCI DSS compliance
- **State Management:** Redux Toolkit with RTK Query for efficient data fetching
- **UI/UX:** Custom component library built with NativeBase and Lottie animations
- **Analytics:** Custom analytics dashboard with real-time user behavior tracking

**Security & Compliance:**
Implemented bank-grade security measures including:
- Biometric authentication (fingerprint & face recognition)
- 256-bit AES encryption for all transactions
- Two-factor authentication with SMS and email verification
- Real-time fraud detection using machine learning algorithms
- PCI DSS Level 1 compliance for payment processing

**Key Features:**
1. **Instant Transfers:** P2P payments with QR codes and contact integration
2. **Bill Payments:** Utilities, airtime, data, and subscription services
3. **Savings Goals:** Automated savings with interest calculations
4. **Investment Platform:** Mutual funds and government bonds integration
5. **Virtual Cards:** Instant virtual debit cards for online transactions
6. **Expense Tracking:** AI-powered categorization and budgeting tools

**Performance & Scale:**
- Serves 50,000+ active users daily
- Processes ₦500M+ in transactions monthly
- 99.9% uptime with 24/7 monitoring
- Sub-second transaction processing
- Handles 10,000+ concurrent users during peak periods

**Impact & Recognition:**
- Featured in TechCrunch as "Nigeria's Most Innovative FinTech"
- Winner of "Best Mobile Banking App" at FinTech Awards Nigeria 2024
- 4.8-star rating on both App Store and Google Play
- Reduced transaction costs by 40% for users compared to traditional banks`,
    technologies: [
      "React Native", "Expo", "Appwrite", "Redux Toolkit", "TypeScript", 
      "NativeBase", "Lottie", "Stripe", "Biometric APIs", "ML/AI"
    ],
    features: [
      "Biometric authentication",
      "Instant money transfers",
      "Bill payments & airtime",
      "Savings & investment tools",
      "Virtual card generation",
      "Real-time notifications",
      "Expense tracking",
      "QR code payments"
    ],
    challenges: [
      "Implementing bank-grade security on mobile",
      "Ensuring 99.9% uptime for financial transactions",
      "Meeting regulatory compliance requirements",
      "Optimizing performance for low-end Android devices"
    ],
    solutions: [
      "Built custom security layer with hardware encryption",
      "Implemented redundant systems with automated failover",
      "Worked closely with CBN to ensure full regulatory compliance",
      "Optimized app size and performance for Android Go devices"
    ],
    results: [
      "50,000+ daily active users",
      "₦500M+ monthly transaction volume",
      "4.8-star app store rating",
      "40% cost reduction for users"
    ],
    category: 'mobile',
    status: 'completed',
    featured: true,
    year: 2024,
    duration: "6 months",
    team: ["Fortune Ogbodogbo (Lead Mobile)", "3 Backend Developers", "2 Security Engineers", "1 UI/UX Designer"],
    client: "PayVault Technologies",
    industry: "Financial Technology",
    images: {
      hero: "/projects/fintech-hero.jpg",
      gallery: [
        "/projects/fintech-dashboard.jpg",
        "/projects/fintech-transfers.jpg",
        "/projects/fintech-security.jpg"
      ]
    },
    links: {
      live: "https://payvault.ng",
      demo: "https://demo.payvault.ng",
      case_study: "/projects/fintech-mobile-app"
    },
    seo: {
      title: "FinTech Mobile Banking App - React Native & Appwrite Case Study | Fortune Ogbodogbo",
      description: "Learn how I built a secure mobile banking app with React Native and Appwrite, serving 50,000+ users and processing ₦500M+ monthly. Case study by Fortune Ogbodogbo, Lagos mobile developer.",
      keywords: [
        "React Native fintech app", "Appwrite mobile development", "Lagos mobile app developer",
        "Nigerian fintech developer", "mobile banking app development", "secure payment app",
        "Fortune Ogbodogbo mobile projects", "React Native developer Nigeria"
      ]
    }
  },
  {
    id: "saas-analytics-platform",
    title: "SaaS Analytics Platform",
    description: "Comprehensive analytics dashboard for SaaS businesses, built with Next.js and MongoDB, helping 200+ companies track their growth metrics.",
    longDescription: `MetricsFlow is a comprehensive analytics platform designed specifically for SaaS businesses, providing actionable insights that drive growth and improve customer retention.

**The Problem:**
SaaS companies were struggling with fragmented data across multiple tools, making it difficult to get a unified view of their business performance. They needed a centralized platform that could consolidate data from various sources and provide meaningful insights.

**Solution Architecture:**
- **Frontend:** Next.js 14 with Server-Side Rendering for optimal SEO
- **Backend:** Node.js with Express and MongoDB for flexible data modeling
- **Data Pipeline:** Custom ETL processes for integrating with 50+ third-party services
- **Visualization:** Chart.js and D3.js for interactive data visualizations
- **Real-time Updates:** WebSockets for live dashboard updates
- **API:** RESTful API with GraphQL for complex queries

**Advanced Features:**
1. **Revenue Analytics:** MRR, ARR, churn rate, and LTV calculations
2. **User Behavior Tracking:** Cohort analysis, funnel optimization, and user journey mapping
3. **Predictive Analytics:** Machine learning models for churn prediction and growth forecasting
4. **Custom Dashboards:** Drag-and-drop dashboard builder with 30+ widget types
5. **Automated Reporting:** Scheduled reports with smart insights and recommendations
6. **Team Collaboration:** Shared dashboards, annotations, and alert systems

**Data Integration:**
Built connectors for major SaaS tools:
- Payment processors (Stripe, PayPal, Paystack)
- CRM systems (Salesforce, HubSpot, Pipedrive)
- Support platforms (Intercom, Zendesk, Freshdesk)
- Marketing tools (Mailchimp, ConvertKit, SendGrid)
- Analytics platforms (Google Analytics, Mixpanel, Amplitude)

**Performance & Scalability:**
- Processes 10M+ data points daily
- Sub-second query response times with optimized aggregations
- Horizontally scalable architecture supporting 1000+ concurrent users
- 99.95% uptime with automated monitoring and alerting
- Data retention and GDPR compliance built-in

**Business Impact:**
- Used by 200+ SaaS companies worldwide
- Average of 25% increase in MRR for customers within 6 months
- Reduced customer churn by 30% through predictive insights
- Generated $2M+ ARR within first year of launch
- Featured in Product Hunt's Top 10 Analytics Tools of 2024`,
    technologies: [
      "Next.js 14", "Node.js", "MongoDB", "Chart.js", "D3.js", 
      "WebSockets", "GraphQL", "Machine Learning", "Docker", "AWS"
    ],
    features: [
      "Revenue analytics & forecasting",
      "User behavior tracking",
      "Predictive churn modeling",
      "Custom dashboard builder",
      "Multi-source data integration",
      "Automated insights & alerts",
      "Team collaboration tools",
      "White-label solutions"
    ],
    challenges: [
      "Handling massive data volumes with real-time processing",
      "Integrating with 50+ different APIs with varying data formats",
      "Building accurate predictive models for diverse SaaS businesses",
      "Ensuring data security and compliance across multiple regions"
    ],
    solutions: [
      "Implemented event-driven architecture with message queues",
      "Built flexible data transformation layer handling schema variations",
      "Created ensemble ML models with continuous learning capabilities",
      "Deployed multi-region infrastructure with end-to-end encryption"
    ],
    results: [
      "200+ SaaS companies using the platform",
      "25% average MRR increase for customers",
      "30% reduction in customer churn",
      "$2M+ ARR within first year"
    ],
    category: 'saas',
    status: 'completed',
    featured: true,
    year: 2023,
    duration: "8 months",
    team: ["Fortune Ogbodogbo (Lead)", "4 Backend Developers", "2 Data Scientists", "1 UI/UX Designer", "1 DevOps Engineer"],
    client: "MetricsFlow Inc.",
    industry: "Business Intelligence",
    images: {
      hero: "/projects/saas-analytics-hero.jpg",
      gallery: [
        "/projects/saas-dashboard.jpg",
        "/projects/saas-charts.jpg",
        "/projects/saas-mobile.jpg"
      ]
    },
    links: {
      live: "https://metricsflow.com",
      github: "https://github.com/fortuneogbodogbo/saas-analytics",
      demo: "https://demo.metricsflow.com",
      case_study: "/projects/saas-analytics-platform"
    },
    seo: {
      title: "SaaS Analytics Platform - Next.js & MongoDB Case Study | Fortune Ogbodogbo",
      description: "Discover how I built a comprehensive SaaS analytics platform with Next.js and MongoDB, serving 200+ companies and generating $2M+ ARR. Case study by Fortune Ogbodogbo.",
      keywords: [
        "SaaS analytics platform", "Next.js dashboard development", "MongoDB analytics",
        "business intelligence Nigeria", "data visualization developer",
        "Fortune Ogbodogbo SaaS projects", "Lagos full-stack developer",
        "predictive analytics development"
      ]
    }
  },
  {
    id: "healthcare-management-system",
    title: "Healthcare Management System",
    description: "Complete healthcare management solution built with Next.js and PostgreSQL, streamlining operations for 15+ clinics across Nigeria.",
    longDescription: `MediCare Pro is a comprehensive healthcare management system designed to digitize and streamline medical operations across Nigeria, serving both private clinics and public health centers.

**Project Background:**
The Nigerian healthcare system faced significant challenges with paper-based records, inefficient appointment scheduling, and lack of data insights. MediCare Pro was developed to address these challenges while being affordable and accessible to healthcare providers of all sizes.

**Technical Foundation:**
- **Frontend:** Next.js 14 with TypeScript and Server Components
- **Backend:** Node.js with Prisma ORM and PostgreSQL
- **Authentication:** NextAuth.js with role-based access control
- **File Storage:** AWS S3 for medical documents and images
- **Communication:** Twilio for SMS notifications and appointment reminders
- **Deployment:** Vercel for frontend, Railway for database hosting

**Core Modules:**
1. **Patient Management:** Complete patient records, medical history, and document storage
2. **Appointment Scheduling:** Smart scheduling with conflict resolution and automated reminders
3. **Electronic Health Records (EHR):** FHIR-compliant medical records with audit trails
4. **Inventory Management:** Medicine and equipment tracking with low-stock alerts
5. **Billing & Insurance:** Invoice generation and insurance claim processing
6. **Staff Management:** Doctor schedules, nurse assignments, and performance tracking
7. **Reporting & Analytics:** Patient analytics, revenue reports, and compliance tracking

**Security & Compliance:**
- HIPAA-compliant data handling and storage
- End-to-end encryption for sensitive medical data
- Role-based access control with audit logging
- Regular automated backups with point-in-time recovery
- SOC 2 Type II compliance for data security

**Mobile Application:**
Developed companion React Native app for patients:
- Appointment booking and rescheduling
- Access to medical records and test results
- Medication reminders and health tracking
- Telemedicine consultations via video calls
- Health tips and educational content

**Integration Capabilities:**
- Laboratory systems for automated test result imports
- Pharmacy systems for prescription management
- Insurance providers for direct billing
- Government health databases for reporting compliance
- Telemedicine platforms for remote consultations

**Impact on Nigerian Healthcare:**
- Reduced patient waiting times by 60%
- Improved record accuracy by 95%
- Decreased operational costs by 40%
- Enhanced patient satisfaction scores by 45%
- Enabled data-driven decision making for health administrators

**Recognition & Awards:**
- Winner of "Best Healthcare Innovation" at Nigeria Health Tech Awards 2023
- Featured in Healthcare Weekly as "Revolutionary Healthcare Platform"
- Endorsed by Nigerian Medical Association for digital transformation
- Selected for World Bank Healthcare Digitization Initiative`,
    technologies: [
      "Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "NextAuth.js",
      "AWS S3", "Twilio", "React Native", "Chart.js", "Vercel", "Railway"
    ],
    features: [
      "Patient record management",
      "Appointment scheduling",
      "Electronic health records",
      "Inventory management",
      "Billing & insurance",
      "Staff management",
      "Analytics & reporting",
      "Mobile patient app",
      "Telemedicine integration"
    ],
    challenges: [
      "Ensuring HIPAA compliance in a cost-effective manner",
      "Building offline capabilities for areas with poor internet",
      "Integrating with legacy hospital systems",
      "Training non-technical staff on digital systems"
    ],
    solutions: [
      "Implemented client-side encryption and secure cloud storage",
      "Built progressive web app with offline-first architecture",
      "Created flexible API adapters for various legacy systems",
      "Developed comprehensive training program with video tutorials"
    ],
    results: [
      "15+ clinics successfully onboarded",
      "60% reduction in patient waiting times",
      "95% improvement in record accuracy",
      "40% decrease in operational costs"
    ],
    category: 'fullstack',
    status: 'completed',
    featured: false,
    year: 2023,
    duration: "10 months",
    team: ["Fortune Ogbodogbo (Lead)", "3 Backend Developers", "2 Frontend Developers", "1 Mobile Developer", "1 UI/UX Designer", "1 Healthcare Consultant"],
    client: "HealthTech Solutions Nigeria",
    industry: "Healthcare",
    images: {
      hero: "/projects/healthcare-hero.jpg",
      gallery: [
        "/projects/healthcare-dashboard.jpg",
        "/projects/healthcare-mobile.jpg",
        "/projects/healthcare-records.jpg"
      ]
    },
    links: {
      live: "https://medicareprong.com",
      demo: "https://demo.medicareprong.com",
      case_study: "/projects/healthcare-management-system"
    },
    seo: {
      title: "Healthcare Management System - Next.js & PostgreSQL Case Study | Fortune Ogbodogbo",
      description: "Learn how I built a comprehensive healthcare management system with Next.js and PostgreSQL, serving 15+ clinics and reducing waiting times by 60%. Full case study.",
      keywords: [
        "healthcare management system", "medical software Nigeria", "Next.js healthcare app",
        "electronic health records", "hospital management software",
        "healthcare developer Nigeria", "Fortune Ogbodogbo healthcare projects",
        "HIPAA compliant web application"
      ]
    }
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Marketplace",
    description: "Modern property listing platform with virtual tours, built using Next.js, MongoDB, and Three.js for immersive property viewing experiences.",
    longDescription: `PropConnect is Nigeria's most advanced real estate marketplace, combining traditional property listings with cutting-edge 3D visualization technology to revolutionize how people buy, sell, and rent properties.

**Market Opportunity:**
The Nigerian real estate market lacked modern digital solutions, with most transactions still happening through traditional agents. PropConnect was built to bridge this gap by providing a comprehensive digital platform that serves property buyers, sellers, agents, and developers.

**Advanced Technology Stack:**
- **Frontend:** Next.js 14 with TypeScript and Tailwind CSS
- **3D Visualization:** Three.js and React Three Fiber for virtual tours
- **Backend:** Node.js with Express and MongoDB
- **Maps Integration:** Mapbox GL JS for interactive property maps
- **Payment Processing:** Flutterwave for Nigerian payment methods
- **Image Processing:** Sharp and ImageKit for optimized property photos
- **Search Engine:** Elasticsearch for advanced property search

**Innovative Features:**
1. **3D Virtual Tours:** Interactive 360° property tours with hotspot navigation
2. **AR Property Visualization:** Mobile AR app for visualizing furniture in empty properties
3. **Smart Property Matching:** AI-powered recommendations based on user preferences
4. **Price Prediction Tool:** Machine learning model for property value estimation
5. **Neighborhood Insights:** Demographics, crime rates, and amenities data
6. **Virtual Staging:** AI-powered furniture placement in empty properties
7. **Investment Calculator:** ROI analysis for property investors
8. **Document Management:** Secure document storage and e-signature integration

**3D Virtual Tour Implementation:**
Developed custom 3D tour system using:
- 360° photography capture guidelines for real estate agents
- Three.js renderer optimized for mobile devices
- Spatial audio integration for immersive experiences
- Hotspot system for interactive property information
- Floor plan navigation with smooth transitions
- Loading optimization for low-bandwidth connections

**Advanced Search & Filtering:**
Built sophisticated search engine with:
- Geographic search with radius filtering
- Price range with mortgage calculator integration
- Property type, size, and amenities filtering
- School district and hospital proximity search
- Crime rate and safety score filtering
- Transportation and commute time analysis
- Market trend integration for pricing insights

**Mobile Experience:**
Companion React Native app featuring:
- Offline property browsing with saved searches
- GPS-based property discovery while driving
- Push notifications for new listings matching criteria
- Camera integration for property photo uploads
- Contact management for agents and sellers
- Mortgage pre-approval integration

**Business Impact:**
- 10,000+ property listings across Lagos, Abuja, and Port Harcourt
- 50,000+ registered users including agents and individuals
- ₦2B+ worth of properties listed on the platform
- 15% faster property sales compared to traditional methods
- 85% user satisfaction score from feedback surveys

**Recognition:**
- Featured in TechCrunch as "Nigeria's PropTech Pioneer"
- Winner of "Best Real Estate Platform" at Lagos PropTech Awards 2024
- Selected for Google for Startups Accelerator Program
- Partnership with major real estate companies across Nigeria`,
    technologies: [
      "Next.js 14", "Three.js", "React Three Fiber", "MongoDB", "Elasticsearch",
      "Mapbox GL", "Flutterwave", "ImageKit", "React Native", "Machine Learning"
    ],
    features: [
      "3D virtual property tours",
      "AR furniture visualization",
      "AI-powered property matching",
      "Price prediction algorithms",
      "Interactive maps",
      "Virtual staging",
      "Investment calculators",
      "Document management",
      "Mobile app with offline support"
    ],
    challenges: [
      "Optimizing 3D tours for mobile devices and slow internet",
      "Building accurate price prediction models for Nigerian market",
      "Handling large volumes of property images efficiently",
      "Creating intuitive UX for non-technical users"
    ],
    solutions: [
      "Implemented progressive loading with WebGL optimization",
      "Collected extensive market data and built custom ML models",
      "Used advanced image compression and CDN optimization",
      "Conducted extensive user testing with real estate agents"
    ],
    results: [
      "10,000+ properties listed",
      "50,000+ registered users",
      "₦2B+ property value on platform",
      "15% faster sales conversion"
    ],
    category: 'web',
    status: 'completed',
    featured: false,
    year: 2024,
    duration: "7 months",
    team: ["Fortune Ogbodogbo (Lead)", "2 Frontend Developers", "2 Backend Developers", "1 3D Graphics Developer", "1 Mobile Developer", "1 ML Engineer"],
    client: "PropConnect Nigeria",
    industry: "Real Estate",
    images: {
      hero: "/projects/realestate-hero.jpg",
      gallery: [
        "/projects/realestate-3d-tour.jpg",
        "/projects/realestate-search.jpg",
        "/projects/realestate-mobile.jpg"
      ]
    },
    links: {
      live: "https://propconnect.ng",
      github: "https://github.com/fortuneogbodogbo/propconnect",
      demo: "https://demo.propconnect.ng",
      case_study: "/projects/real-estate-platform"
    },
    seo: {
      title: "Real Estate Marketplace with 3D Tours - Next.js & Three.js Case Study | Fortune Ogbodogbo",
      description: "Explore how I built Nigeria's most advanced real estate platform with 3D virtual tours using Next.js and Three.js. Serving 50,000+ users with ₦2B+ in listings.",
      keywords: [
        "real estate platform Nigeria", "3D virtual tours", "Three.js developer",
        "property marketplace", "PropTech Nigeria", "Next.js real estate",
        "Fortune Ogbodogbo real estate projects", "Lagos property platform",
        "virtual property tours", "AR real estate app"
      ]
    }
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectById = (id: string) => projects.find(project => project.id === id);
export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(project => project.category === category);
