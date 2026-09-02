import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FadeInUp, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/Animations";
import { projects, getProjectById } from "@/lib/data/projects";
import { ArrowRight, ExternalLink, Github, Calendar, Users, CheckCircle, ArrowLeft } from "lucide-react";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectById(params.id);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      images: [project.images.hero],
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <>
    <div className="min-h-screen">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeInUp>
                <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <ScaleOnHover>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Projects
                      </Link>
                    </Button>
                  </ScaleOnHover>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-foreground font-medium">{project.title}</span>
                </div>

                <div className="space-y-4">
                  <StaggerContainer className="flex items-center gap-2" staggerChildren={0.1}>
                    <StaggerItem>
                      <Badge variant={
                        project.category === 'fullstack' ? 'default' :
                        project.category === 'mobile' ? 'secondary' :
                        project.category === 'saas' ? 'outline' : 'default'
                      } className="hover:shadow-md transition-shadow">
                        {project.category}
                      </Badge>
                    </StaggerItem>
                    <StaggerItem>
                      <Badge variant="outline" className="hover:border-primary/50 transition-colors">
                        {project.year}
                      </Badge>
                    </StaggerItem>
                    <StaggerItem>
                      <Badge variant="outline" className={
                        project.status === 'completed' ? 'border-green-500 text-green-600 hover:bg-green-50' :
                        project.status === 'in-progress' ? 'border-yellow-500 text-yellow-600 hover:bg-yellow-50' :
                        'border-blue-500 text-blue-600 hover:bg-blue-50'
                      }>
                        {project.status}
                      </Badge>
                    </StaggerItem>
                  </StaggerContainer>

                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                    {project.title}
                  </h1>
                  
                  <p className="text-xl text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <StaggerContainer className="grid grid-cols-2 gap-4 text-sm" staggerChildren={0.15}>
                  <StaggerItem>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Duration: {project.duration}</span>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>Team: {project.team ? project.team.length : 1} members</span>
                    </div>
                  </StaggerItem>
                  {project.client && (
                    <StaggerItem>
                      <div className="flex items-center gap-2">
                        <span>Client: {project.client}</span>
                      </div>
                    </StaggerItem>
                  )}
                  {project.industry && (
                    <StaggerItem>
                      <div className="flex items-center gap-2">
                        <span>Industry: {project.industry}</span>
                      </div>
                    </StaggerItem>
                  )}
                </StaggerContainer>

                <StaggerContainer className="flex flex-wrap gap-3" staggerChildren={0.1}>
                  {project.links.live && (
                    <StaggerItem>
                      <ScaleOnHover>
                        <Button asChild className="shadow-lg hover:shadow-xl transition-shadow">
                          <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                            View Live Site
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </ScaleOnHover>
                    </StaggerItem>
                  )}
                  {project.links.github && (
                    <StaggerItem>
                      <ScaleOnHover>
                        <Button asChild variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                            View Code
                            <Github className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </ScaleOnHover>
                    </StaggerItem>
                  )}
                </StaggerContainer>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="relative">
                <div className="aspect-video relative overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src={project.images.hero}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </FadeInUp>
          </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="w-full py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-br from-muted/30 to-muted/70 rounded-3xl px-8 py-16">
              <FadeInUp delay={0.2}>
                <div className="max-w-4xl mx-auto">
                  <div className="prose prose-lg max-w-none">
                    <div 
                      dangerouslySetInnerHTML={{ 
                        __html: project.longDescription.replace(/\n/g, '<br />').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                      }}
                    />
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Key Features & Results */}
        <section className="w-full py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <FadeInUp delay={0.3}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <ScaleOnHover scale={1.02}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <StaggerContainer className="space-y-4" staggerChildren={0.1}>
                      {project.features.map((feature, index) => (
                        <StaggerItem key={index}>
                          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </CardContent>
                </Card>
              </ScaleOnHover>

              {/* Results */}
              <ScaleOnHover scale={1.02}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">Key Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <StaggerContainer className="space-y-4" staggerChildren={0.1}>
                      {project.results.map((result, index) => (
                        <StaggerItem key={index}>
                          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                            <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </div>
          </FadeInUp>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="container py-16 bg-gradient-to-br from-muted/30 to-muted/70 rounded-3xl my-8">
          <FadeInUp delay={0.4}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Challenges */}
              <ScaleOnHover scale={1.02}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl">Challenges Faced</CardTitle>
                    <CardDescription>
                      Complex problems that required innovative solutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <StaggerContainer className="space-y-4" staggerChildren={0.1}>
                      {project.challenges.map((challenge, index) => (
                        <StaggerItem key={index}>
                          <div className="border-l-4 border-orange-500 pl-4 p-3 rounded-r-lg hover:bg-orange-50 transition-colors">
                            <p className="text-muted-foreground">{challenge}</p>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </CardContent>
                </Card>
              </ScaleOnHover>

              {/* Solutions */}
              <ScaleOnHover scale={1.02}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl">Solutions Implemented</CardTitle>
                    <CardDescription>
                      How I tackled each challenge effectively
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <StaggerContainer className="space-y-4" staggerChildren={0.1}>
                      {project.solutions.map((solution, index) => (
                        <StaggerItem key={index}>
                          <div className="border-l-4 border-green-500 pl-4 p-3 rounded-r-lg hover:bg-green-50 transition-colors">
                            <p className="text-muted-foreground">{solution}</p>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </CardContent>
                </Card>
              </ScaleOnHover>
            </div>
          </FadeInUp>
        </section>

        {/* Technology Stack */}
        <section className="container py-16">
          <FadeInUp delay={0.5}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
              <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerChildren={0.05}>
                {project.technologies.map((tech) => (
                  <StaggerItem key={tech}>
                    <Badge variant="secondary" className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                      {tech}
                    </Badge>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeInUp>
        </section>

        {/* Project Gallery */}
        {project.images.gallery && project.images.gallery.length > 0 && (
          <section className="container py-16 bg-gradient-to-br from-muted/30 to-muted/70 rounded-3xl my-8">
            <FadeInUp delay={0.6}>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerChildren={0.1}>
                  {project.images.gallery.map((image, index) => (
                    <StaggerItem key={index}>
                      <ScaleOnHover scale={1.05}>
                        <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg">
                          <Image
                            src={image}
                            alt={`${project.title} - Screenshot ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </ScaleOnHover>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeInUp>
          </section>
        )}

        {/* Team */}
        {project.team && project.team.length > 1 && (
          <section className="container py-16">
            <FadeInUp delay={0.7}>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Project Team</h2>
                <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerChildren={0.1}>
                  {project.team.map((member, index) => (
                    <StaggerItem key={index}>
                      <Badge variant="outline" className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                        {member}
                      </Badge>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeInUp>
          </section>
        )}

        {/* CTA Section */}
        <section className="container py-24">
          <FadeInUp delay={0.8}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" />
              <div className="relative z-10 text-center max-w-3xl mx-auto p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Interested in Similar Work?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  I&apos;d love to help you build something amazing. Let&apos;s discuss your project requirements 
                  and explore how I can contribute to your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ScaleOnHover>
                    <Button asChild size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-shadow">
                      <Link href="/contact">
                        Start Your Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </ScaleOnHover>
                  <ScaleOnHover>
                    <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground hover:text-primary-foreground">
                      <Link href="/projects">
                        View More Projects
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </ScaleOnHover>
                </div>
              </div>
            </div>
          </FadeInUp>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
}
