import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { certificates } from "@/lib/data/certificates";
import { personalInfo } from "@/lib/data/personal";
import { Award, Calendar, ExternalLink, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications & Achievements",
  description: `View ${personalInfo.name}'s professional certifications, courses, and achievements in web development, software engineering, and technology.`,
  alternates: {
    canonical: "/certificates",
  },
};

export default function Certificates() {
  const certifications = certificates.filter(cert => cert.type === 'certification');
  const courses = certificates.filter(cert => cert.type === 'course');
  const achievements = certificates.filter(cert => cert.type === 'achievement');

  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Certifications & Achievements
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A showcase of my continuous learning journey, professional certifications, 
              and achievements in web development and software engineering. I believe in 
              staying current with the latest technologies and best practices.
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="text-sm">
                <Award className="w-4 h-4 mr-2" />
                {certificates.length} Total Credentials
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Star className="w-4 h-4 mr-2" />
                Continuous Learning
              </Badge>
            </div>
          </div>
        </section>

        {/* Professional Certifications */}
        <section className="container py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Certifications</h2>
            <p className="text-lg text-muted-foreground">
              Industry-recognized certifications demonstrating expertise and knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <Card key={cert.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="default" className="bg-blue-600">
                      <Award className="w-3 h-3 mr-1" />
                      Certification
                    </Badge>
                    <Badge variant="outline">{cert.year}</Badge>
                    {cert.featured && <Badge variant="outline" className="bg-yellow-50 border-yellow-200 text-yellow-700">Featured</Badge>}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Skills Validated:</div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Completed in {cert.year}</span>
                  </div>

                  {cert.credentialUrl && (
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        View Credential
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Online Courses */}
        <section className="container py-16 bg-muted/50">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Online Courses & Learning</h2>
            <p className="text-lg text-muted-foreground">
              Completed courses and specialized training programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Course
                    </Badge>
                    <Badge variant="outline">{course.year}</Badge>
                    {course.featured && <Badge variant="outline" className="bg-yellow-50 border-yellow-200 text-yellow-700">Featured</Badge>}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {course.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {course.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Skills Learned:</div>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Completed in {course.year}</span>
                  </div>

                  {course.credentialUrl && (
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={course.credentialUrl} target="_blank" rel="noopener noreferrer">
                        View Certificate
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="container py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Recognition, awards, and notable accomplishments in my career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                      <Star className="w-3 h-3 mr-1" />
                      Achievement
                    </Badge>
                    <Badge variant="outline">{achievement.year}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {achievement.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Related Skills:</div>
                    <div className="flex flex-wrap gap-2">
                      {achievement.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Achieved in {achievement.year}</span>
                  </div>

                  {achievement.credentialUrl && (
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={achievement.credentialUrl} target="_blank" rel="noopener noreferrer">
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Summary */}
        <section className="container py-16 bg-muted/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive skill set validated through certifications and practical experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Frontend Development</CardTitle>
                  <CardDescription>User interface and experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[...new Set(certificates.flatMap(cert => cert.skills).filter(skill => 
                      ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive Design'].includes(skill)
                    ))].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Backend Development</CardTitle>
                  <CardDescription>Server-side and database systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[...new Set(certificates.flatMap(cert => cert.skills).filter(skill => 
                      ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'API Development', 'Microservices', 'Database Design'].includes(skill)
                    ))].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Tools & Methodologies</CardTitle>
                  <CardDescription>Development practices and tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[...new Set(certificates.flatMap(cert => cert.skills).filter(skill => 
                      ['Git', 'Agile', 'DevOps', 'Testing', 'Docker', 'AWS', 'CI/CD', 'Code Review'].includes(skill)
                    ))].map((skill) => (
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

        {/* CTA Section */}
        <section className="container py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with a Certified Developer?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              My certifications and continuous learning ensure I bring the latest 
              knowledge and best practices to your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your Project
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  View My Work
                  <ExternalLink className="w-4 h-4 ml-2" />
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
