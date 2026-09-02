import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { projects, getProjectsByCategory } from "@/lib/data/projects";
import { personalInfo } from "@/lib/data/personal";
import { ArrowRight, ExternalLink, Github, Calendar, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description: `Explore ${personalInfo.name}'s portfolio of web development projects. From fintech platforms to e-commerce solutions, see how I build scalable applications that drive business results.`,
  alternates: {
    canonical: "/projects",
  },
};

export default function Projects() {
  const fullstackProjects = getProjectsByCategory('fullstack');
  const mobileProjects = getProjectsByCategory('mobile');
  const saasProjects = getProjectsByCategory('saas');
  const webProjects = getProjectsByCategory('web');

  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              My Projects & Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A showcase of my work in web development, from fintech platforms to e-commerce solutions. 
              Each project demonstrates my commitment to quality, performance, and user experience.
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="text-sm">
                {projects.length} Projects Completed
              </Badge>
              <Badge variant="outline" className="text-sm">
                5+ Years Experience
              </Badge>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              My most impactful and technically challenging projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(p => p.featured).map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.images.hero}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-2">
                      <Badge variant={
                        project.category === 'fullstack' ? 'default' :
                        project.category === 'mobile' ? 'secondary' :
                        project.category === 'saas' ? 'outline' : 'default'
                      }>
                        {project.category}
                      </Badge>
                      <Badge variant="outline">{project.year}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {project.duration}
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Results:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.results.slice(0, 2).map((result, index) => (
                        <li key={index}>• {result}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button asChild className="flex-1">
                      <Link href={project.links.case_study || `/projects/${project.id}`}>
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    {project.links.live && (
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Full-Stack Projects */}
        {fullstackProjects.length > 0 && (
          <section className="container py-16 bg-muted/50">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Full-Stack Applications</h2>
              <p className="text-lg text-muted-foreground">
                Complete web applications with both frontend and backend development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fullstackProjects.filter(p => !p.featured).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Mobile Projects */}
        {mobileProjects.length > 0 && (
          <section className="container py-16">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Mobile Applications</h2>
              <p className="text-lg text-muted-foreground">
                Cross-platform mobile apps built with React Native and Flutter
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mobileProjects.filter(p => !p.featured).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* SaaS Projects */}
        {saasProjects.length > 0 && (
          <section className="container py-16 bg-muted/50">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">SaaS Platforms</h2>
              <p className="text-lg text-muted-foreground">
                Software-as-a-Service solutions for business automation and analytics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {saasProjects.filter(p => !p.featured).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Web Projects */}
        {webProjects.length > 0 && (
          <section className="container py-16">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Web Applications</h2>
              <p className="text-lg text-muted-foreground">
                Frontend-focused projects and interactive web experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webProjects.filter(p => !p.featured).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="container py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              I&apos;m available for new projects and would love to help bring your ideas to life. 
              Let&apos;s discuss how I can contribute to your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/experience">
                  View Experience
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Project Card Component
interface ProjectCardProps {
  project: (typeof projects)[0];
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 h-full">
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <Image
          src={project.images.hero}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant={
            project.category === 'fullstack' ? 'default' :
            project.category === 'mobile' ? 'secondary' :
            project.category === 'saas' ? 'outline' : 'default'
          }>
            {project.category}
          </Badge>
          <Badge variant="outline">{project.year}</Badge>
          {project.team && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="w-3 h-3" />
              {project.team.length} team
            </div>
          )}
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex gap-2">
          <Button asChild variant="outline" className="flex-1">
            <Link href={project.links.case_study || `/projects/${project.id}`}>
              View Details
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          {project.links.live && (
            <Button asChild variant="outline" size="sm">
              <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>
          )}
          {project.links.github && (
            <Button asChild variant="outline" size="sm">
              <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
