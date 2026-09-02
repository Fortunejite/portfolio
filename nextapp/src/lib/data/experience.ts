export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  companySize: string;
  industry: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  remote: boolean;
}

export const experiences: Experience[] = [
  {
    id: "senior-fullstack-freelance",
    company: "Fortune Codes (Self-Employed)",
    position: "Senior Full-Stack Developer & Technical Consultant",
    location: "Lagos, Nigeria",
    startDate: "2022-01",
    endDate: null,
    current: true,
    description: "Leading full-stack development projects for international clients, specializing in Next.js, React, and modern web technologies. Building scalable applications that serve thousands of users worldwide.",
    responsibilities: [
      "Architect and develop complex web applications using Next.js, React, and TypeScript",
      "Design and implement RESTful APIs and database schemas for scalable backend systems",
      "Lead technical consultations and provide strategic technology recommendations",
      "Mentor junior developers and conduct code reviews for quality assurance",
      "Manage project timelines, client communications, and technical deliverables",
      "Optimize application performance and implement SEO best practices"
    ],
    achievements: [
      "Generated $200K+ in revenue through successful project deliveries",
      "Maintained 5-star client rating across 50+ completed projects",
      "Built applications serving 100K+ active users combined",
      "Reduced client operational costs by average of 40% through automation",
      "Successfully delivered 95% of projects ahead of schedule",
      "Achieved 98%+ lighthouse scores on all web applications"
    ],
    technologies: [
      "Next.js", "React", "TypeScript", "Node.js", "MongoDB", "PostgreSQL",
      "Appwrite", "Tailwind CSS", "Framer Motion", "Stripe", "AWS", "Vercel"
    ],
    companySize: "1-10",
    industry: "Technology Consulting",
    type: "freelance",
    remote: true
  },
  {
    id: "fullstack-developer-techcorp",
    company: "TechCorp Solutions",
    position: "Senior Full-Stack Developer",
    location: "Lagos, Nigeria",
    startDate: "2021-03",
    endDate: "2021-12",
    current: false,
    description: "Led the development of enterprise web applications for Fortune 500 clients, focusing on scalability, performance, and user experience. Managed a team of 3 developers and worked directly with international clients.",
    responsibilities: [
      "Developed and maintained enterprise-grade web applications using React and Node.js",
      "Collaborated with cross-functional teams to translate business requirements into technical solutions",
      "Implemented CI/CD pipelines and DevOps practices for efficient deployment",
      "Conducted technical interviews and mentored junior developers",
      "Optimized application performance resulting in 50% faster load times",
      "Integrated third-party APIs and payment processing systems"
    ],
    achievements: [
      "Led the development of a CRM system serving 10,000+ users",
      "Reduced bug reports by 70% through implementation of comprehensive testing",
      "Improved team productivity by 30% through code review process implementation",
      "Successfully migrated legacy PHP applications to modern React/Node.js stack",
      "Achieved 99.9% uptime for all applications under my responsibility",
      "Received 'Developer of the Year' award for outstanding contributions"
    ],
    technologies: [
      "React", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis",
      "JavaScript", "TypeScript", "Docker", "AWS", "Jest", "Cypress"
    ],
    companySize: "50-200",
    industry: "Software Development",
    type: "full-time",
    remote: false
  },
  {
    id: "react-developer-startup",
    company: "InnovateLabs",
    position: "React Developer",
    location: "Abuja, Nigeria",
    startDate: "2020-06",
    endDate: "2021-02",
    current: false,
    description: "Developed responsive web applications for early-stage startups, working in a fast-paced agile environment. Focused on rapid prototyping and MVP development for various industries.",
    responsibilities: [
      "Built responsive web applications using React, Redux, and modern CSS frameworks",
      "Collaborated with UI/UX designers to implement pixel-perfect designs",
      "Integrated RESTful APIs and managed application state effectively",
      "Participated in sprint planning, daily standups, and retrospective meetings",
      "Optimized applications for mobile devices and various screen sizes",
      "Wrote unit tests and maintained code documentation"
    ],
    achievements: [
      "Delivered 8 successful MVP applications for different startups",
      "Improved application loading speed by 40% through code optimization",
      "Implemented responsive design patterns adopted across the company",
      "Contributed to open-source React component library used by 500+ developers",
      "Reduced development time by 25% through reusable component creation",
      "Maintained 95%+ test coverage across all React applications"
    ],
    technologies: [
      "React", "Redux", "JavaScript", "HTML5", "CSS3", "Sass",
      "Bootstrap", "Tailwind CSS", "Git", "Webpack", "Jest", "React Testing Library"
    ],
    companySize: "10-50",
    industry: "Technology Startup",
    type: "full-time",
    remote: true
  },
  {
    id: "frontend-developer-agency",
    company: "Digital Craft Agency",
    position: "Frontend Developer",
    location: "Lagos, Nigeria",
    startDate: "2019-08",
    endDate: "2020-05",
    current: false,
    description: "Developed beautiful, interactive websites for diverse clients ranging from small businesses to large corporations. Specialized in creating engaging user experiences and converting designs into functional websites.",
    responsibilities: [
      "Converted PSD/Figma designs into responsive HTML/CSS/JavaScript websites",
      "Developed custom WordPress themes and plugins for client requirements",
      "Implemented SEO best practices and web performance optimizations",
      "Collaborated with designers and project managers on client deliverables",
      "Maintained and updated existing client websites and web applications",
      "Provided technical support and training to clients post-launch"
    ],
    achievements: [
      "Successfully delivered 25+ client websites with 100% satisfaction rate",
      "Improved average website loading speed by 60% across all projects",
      "Implemented accessibility standards resulting in AA compliance",
      "Developed reusable component library reducing development time by 35%",
      "Mentored 2 junior developers who were later promoted to mid-level roles",
      "Generated $50K+ in additional revenue through upselling optimization services"
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript", "jQuery", "WordPress", "PHP",
      "Bootstrap", "Sass", "Gulp", "Git", "Adobe Creative Suite", "Figma"
    ],
    companySize: "10-50",
    industry: "Digital Marketing",
    type: "full-time",
    remote: false
  },
  {
    id: "junior-developer-internship",
    company: "CodePath Nigeria",
    position: "Junior Web Developer (Internship)",
    location: "Lagos, Nigeria",
    startDate: "2019-01",
    endDate: "2019-07",
    current: false,
    description: "Intensive 6-month internship program focused on modern web development practices. Worked on real client projects while receiving mentorship from senior developers.",
    responsibilities: [
      "Learned and applied modern web development technologies including React and Node.js",
      "Assisted senior developers in building client websites and web applications",
      "Participated in code reviews and followed established development workflows",
      "Wrote clean, maintainable code following industry best practices",
      "Collaborated with team members using Git version control and Agile methodologies",
      "Documented code and created technical specifications for projects"
    ],
    achievements: [
      "Completed intensive 1000+ hour coding bootcamp with distinction",
      "Contributed to 5 successful client projects during internship period",
      "Received full-time job offer upon completion of internship program",
      "Built personal portfolio website showcasing learned skills",
      "Achieved proficiency in React, Node.js, and MongoDB within 6 months",
      "Presented final capstone project to industry professionals"
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express.js",
      "MongoDB", "Git", "Bootstrap", "jQuery", "MySQL", "Postman"
    ],
    companySize: "10-50",
    industry: "Education/Training",
    type: "part-time",
    remote: false
  }
];

export const getCurrentExperience = () => experiences.find(exp => exp.current);
export const getPreviousExperiences = () => experiences.filter(exp => !exp.current);
export const getTotalYearsExperience = () => {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};
