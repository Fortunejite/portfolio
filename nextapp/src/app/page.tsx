import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FadeInUp, StaggerContainer, StaggerItem, ScaleOnHover, FloatingElement } from "@/components/Animations";
import { personalInfo } from "@/lib/data/personal";
import { getFeaturedProjects } from "@/lib/data/projects";
import { experiences } from "@/lib/data/experience";
import { Github, Linkedin, Twitter, Mail, ArrowRight, Download, MapPin, Calendar, Code } from "lucide-react";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const recentExperience = experiences.slice(0, 2);

  // Helper function to format duration
  const formatDuration = (startDate: string, endDate: string | null, current: boolean) => {
    const start = new Date(startDate);
    const end = current ? new Date() : new Date(endDate!);
    
    const yearDiff = end.getFullYear() - start.getFullYear();
    const monthDiff = end.getMonth() - start.getMonth();
    
    let totalMonths = yearDiff * 12 + monthDiff;
    if (totalMonths < 1) totalMonths = 1;
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    if (years === 0) {
      return `${months} month${months !== 1 ? 's' : ''}`;
    } else if (months === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`;
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit hover:bg-primary hover:text-primary-foreground transition-colors">
                    <MapPin className="w-3 h-3 mr-1" />
                    {personalInfo.location.city}, {personalInfo.location.country}
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Hi, I&apos;m{" "}
                    <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {personalInfo.firstName}
                    </span>
                  </h1>
                  <h2 className="text-xl md:text-2xl text-muted-foreground">
                    {personalInfo.title}
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                    {personalInfo.subtitle}. I build scalable, high-performance web applications 
                    that drive real business results. From fintech platforms to e-commerce solutions, 
                    I transform ideas into exceptional digital experiences.
                  </p>
                </div>

                <StaggerContainer className="flex flex-wrap gap-3" staggerChildren={0.1}>
                  {personalInfo.skills.primary.map((skill) => (
                    <StaggerItem key={skill}>
                      <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                        {skill}
                      </Badge>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="flex flex-col sm:flex-row gap-4">
                  <ScaleOnHover>
                    <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                      <Link href="/projects">
                        <Code className="w-4 h-4 mr-2" />
                        View My Work
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </ScaleOnHover>
                  <ScaleOnHover>
                    <Button variant="outline" size="lg" asChild className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Link href="/contact">
                        Get In Touch
                        <Mail className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </ScaleOnHover>
                </div>

                <StaggerContainer className="flex gap-6" staggerChildren={0.15}>
                  {[
                    { href: personalInfo.social.github, icon: Github, label: "GitHub" },
                    { href: personalInfo.social.linkedin, icon: Linkedin, label: "LinkedIn" },
                    { href: personalInfo.social.twitter, icon: Twitter, label: "Twitter" },
                  ].map(({ href, icon: Icon, label }) => (
                    <StaggerItem key={label}>
                      <ScaleOnHover scale={1.2}>
                        <Link
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-all duration-300"
                        >
                          <Icon className="w-6 h-6" />
                          <span className="sr-only">{label}</span>
                        </Link>
                      </ScaleOnHover>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="relative">
                <FloatingElement duration={4} yOffset={15}>
                  <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl animate-pulse" />
                    <div className="relative bg-gradient-to-br from-background to-muted rounded-full p-8 border shadow-2xl">
                      <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-full flex items-center justify-center">
                        <Code className="w-24 h-24 md:w-32 md:h-32 text-primary" />
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="w-full py-24">
          <div className="container max-w-7xl mx-auto bg-gradient-to-br from-muted/30 to-muted/70 rounded-3xl my-8 px-8 py-16">
            <FadeInUp delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  A selection of my most impactful work, showcasing expertise in modern web technologies 
                  and delivering measurable business results.
                </p>
              </div>
            </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.1}>
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ScaleOnHover scale={1.03}>
                  <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-background/80 backdrop-blur-sm">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.images.hero}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={
                          project.category === 'fullstack' ? 'default' :
                          project.category === 'mobile' ? 'secondary' :
                          project.category === 'saas' ? 'outline' : 'default'
                        } className="group-hover:shadow-md transition-shadow">
                          {project.category}
                        </Badge>
                        <Badge variant="outline" className="group-hover:border-primary/50 transition-colors">
                          {project.year}
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <Button asChild variant="outline" className="w-full group-hover:border-primary/50 group-hover:text-primary transition-colors">
                        <Link href={project.links.case_study || `/projects/${project.id}`}>
                          View Case Study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

            <FadeInUp delay={0.5}>
              <div className="text-center mt-12">
                <ScaleOnHover>
                  <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                    <Link href="/projects">
                      View All Projects
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </ScaleOnHover>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Experience Preview Section */}
        <section className="w-full py-24">
          <div className="container max-w-7xl mx-auto px-4">
            <FadeInUp delay={0.3}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Building innovative solutions across fintech, e-commerce, and SaaS industries
                </p>
              </div>
            </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerChildren={0.2}>
            {recentExperience.map((job) => (
              <StaggerItem key={job.id}>
                <ScaleOnHover scale={1.02}>
                  <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10">
                    <CardHeader className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex items-start justify-between relative z-10">
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">{job.position}</CardTitle>
                          <CardDescription className="text-base font-medium text-primary">
                            {job.company}
                          </CardDescription>
                          <div className="flex items-center gap-2 mt-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm text-muted-foreground">
                              {formatDuration(job.startDate, job.endDate, job.current)}
                            </span>
                            <MapPin className="w-4 h-4 ml-2" />
                            <span className="text-sm text-muted-foreground">
                              {job.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

            <FadeInUp delay={0.6}>
              <div className="text-center mt-12">
                <ScaleOnHover>
                  <Button asChild variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Link href="/experience">
                      View Full Experience
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </ScaleOnHover>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24">
          <div className="container max-w-7xl mx-auto px-4">
            <FadeInUp delay={0.4}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" />
                <div className="relative z-10 text-center max-w-3xl mx-auto p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Build Something Amazing?
                  </h2>
                  <p className="text-xl mb-8 opacity-90">
                    I&apos;m available for freelance projects and full-time opportunities. 
                    Let&apos;s discuss how I can help bring your ideas to life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <ScaleOnHover>
                      <Button asChild size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-shadow">
                        <Link href="/contact">
                          Start a Project
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </ScaleOnHover>
                    <ScaleOnHover>
                      <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground hover:text-primary-foreground">
                        <Link href="/resume.pdf" target="_blank">
                          Download Resume
                          <Download className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </ScaleOnHover>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
