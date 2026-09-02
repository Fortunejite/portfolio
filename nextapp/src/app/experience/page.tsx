import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { experiences } from "@/lib/data/experience";
import { personalInfo } from "@/lib/data/personal";
import { Calendar, MapPin, Building, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Experience",
  description: `Explore ${personalInfo.name}'s professional journey as a full-stack developer. From startups to enterprise companies, see how I've contributed to building innovative software solutions.`,
  alternates: {
    canonical: "/experience",
  },
};

export default function Experience() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Professional Experience
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Over 5 years of building innovative software solutions across fintech, e-commerce, 
              and SaaS industries. From startups to established companies, I&apos;ve consistently 
              delivered high-quality applications that drive business growth.
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="text-sm">
                <Briefcase className="w-4 h-4 mr-2" />
                5+ Years Experience
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Building className="w-4 h-4 mr-2" />
                Multiple Industries
              </Badge>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="container py-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              <div className="space-y-12">
                {experiences.map((job) => (
                  <div key={job.id} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />
                    
                    <Card className="md:ml-16 hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-2xl mb-2">{job.position}</CardTitle>
                            <CardDescription className="text-lg font-semibold text-primary mb-3">
                              {job.company}
                            </CardDescription>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {job.duration}
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <Badge variant={
                                job.type === 'Full-time' ? 'default' :
                                job.type === 'Contract' ? 'secondary' :
                                job.type === 'Freelance' ? 'outline' : 'default'
                              } className="text-xs">
                                {job.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {job.description}
                        </p>

                        {/* Key Responsibilities */}
                        <div>
                          <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {job.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        {job.achievements.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-3">Key Achievements</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {job.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Summary */}
        <section className="container py-24 bg-muted/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set built through years of hands-on experience
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Frontend Technologies</CardTitle>
                  <CardDescription>Creating beautiful, responsive interfaces</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", 
                      "Tailwind CSS", "Sass", "Responsive Design", "PWAs"
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Backend Technologies</CardTitle>
                  <CardDescription>Building scalable server-side solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", 
                      "Appwrite", "REST APIs", "GraphQL", "WebSockets", "Microservices"
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Tools & Platforms</CardTitle>
                  <CardDescription>Development and deployment workflow</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Git", "GitHub", "VS Code", "Docker", "AWS", "Vercel", 
                      "Heroku", "Railway", "Figma", "Postman"
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Career Highlights */}
        <section className="container py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Highlights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Significant milestones and achievements throughout my career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <CardTitle className="text-lg">Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Building web applications and delivering business value
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <CardTitle className="text-lg">Projects Delivered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Successful projects across various industries and technologies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">50k+</div>
                <CardTitle className="text-lg">Users Served</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Applications serving thousands of users worldwide
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">₦2B+</div>
                <CardTitle className="text-lg">Transaction Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Processed through fintech platforms I&apos;ve built
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
