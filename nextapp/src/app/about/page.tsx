import { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { personalInfo } from "@/lib/data/personal";
import { certificates } from "@/lib/data/certificates";
import { Calendar, MapPin, Award, Users, Code, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About Me",
  description: `Learn more about ${personalInfo.name}, a passionate full-stack developer from ${personalInfo.location.city}, ${personalInfo.location.country}. Discover my journey, skills, and what drives my passion for web development.`,
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  const recentCertificates = certificates.slice(0, 6);

  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  About Me
                </h1>
                <p className="text-xl text-muted-foreground">
                  Passionate about creating digital solutions that make a real difference
                </p>
              </div>

              <div className="space-y-4 text-lg">
                <p>
                  Hi, I&apos;m <strong>{personalInfo.displayName}</strong> ({personalInfo.name}), 
                  a passionate full-stack developer based in {personalInfo.location.city}, {personalInfo.location.country}. 
                  With over 5 years of experience in web development, I specialize in building scalable, 
                  high-performance applications using modern technologies like Next.js, React, and Node.js.
                </p>
                
                <p>
                  My journey in tech began during my Computer Science studies at Delta State University, 
                  where I discovered my love for problem-solving through code. Since then, I&apos;ve had the 
                  privilege of working with startups and established companies, helping them transform 
                  their ideas into successful digital products.
                </p>

                <p>
                  I&apos;m particularly passionate about fintech and e-commerce solutions, having built 
                  platforms that process millions of naira in transactions and serve thousands of users 
                  across Nigeria. My goal is always to create software that not only meets technical 
                  requirements but also delivers exceptional user experiences and drives business growth.
                </p>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{personalInfo.location.city}, {personalInfo.location.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto">
                <Image
                  src="/images/fortune-about.jpg"
                  alt={`${personalInfo.name} - Professional photo`}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section className="container py-24 bg-muted/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader className="text-center">
                <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>
                  Creating beautiful, responsive user interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Backend Development</CardTitle>
                <CardDescription>
                  Building robust, scalable server-side solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Lightbulb className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Tools</CardTitle>
                <CardDescription>
                  Essential tools for modern development workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values & Approach Section */}
        <section className="container py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Approach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my work and drive exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I believe in writing clean, maintainable code that stands the test of time. 
                  Every project is built with attention to detail and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>User-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Great software starts with understanding users. I prioritize user experience 
                  and accessibility in every interface I design and develop.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Performance Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Speed matters. I optimize every aspect of applications for maximum performance, 
                  from load times to user interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Innovation Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I stay current with the latest technologies and trends, always looking for 
                  innovative solutions to complex problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Achievements & Recognition Section */}
        <section className="container py-24 bg-muted/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milestones that reflect my commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalInfo.achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-primary" />
                    <Badge variant="outline">{achievement.year}</Badge>
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="container py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentCertificates.map((cert) => (
              <Card key={cert.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{cert.issueDate}</Badge>
                    <Badge variant={cert.type === 'certification' ? 'default' : 'secondary'}>
                      {cert.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="font-medium">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
