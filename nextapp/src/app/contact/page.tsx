import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { personalInfo } from "@/lib/data/personal";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageSquare,
  Calendar,
  Briefcase,
  Users,
  Code
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Me",
  description: `Get in touch with ${personalInfo.name} for web development projects, freelance opportunities, or collaboration. Based in ${personalInfo.location.city}, ${personalInfo.location.country} and available for remote work.`,
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s Work Together
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              I&apos;m always interested in new opportunities, collaborations, and exciting projects. 
              Whether you need a full-stack developer, want to discuss a project, or just say hello, 
              I&apos;d love to hear from you.
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="text-sm">
                <Clock className="w-4 h-4 mr-2" />
                Available for Projects
              </Badge>
              <Badge variant="outline" className="text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Remote & On-site
              </Badge>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <CardTitle>Email Me</CardTitle>
                <CardDescription>Best for detailed discussions and project inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`mailto:${personalInfo.contact.email}`}>
                    {personalInfo.contact.email}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <CardTitle>Call Me</CardTitle>
                <CardDescription>Quick discussions and urgent matters</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`tel:${personalInfo.contact.phone}`}>
                    {personalInfo.contact.phone}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <CardTitle>Location</CardTitle>
                <CardDescription>Available for remote work and local meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {personalInfo.location.city}, {personalInfo.location.country}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {personalInfo.location.timezone} Timezone
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Social Links */}
        <section className="container py-16 bg-muted/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Connect on Social Media</h2>
            <p className="text-lg text-muted-foreground">
              Follow me for development tips, project updates, and tech insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Github className="w-8 h-8 mx-auto mb-4 group-hover:text-primary transition-colors" />
                <CardTitle className="text-lg">GitHub</CardTitle>
                <CardDescription>View my open source code and contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                    Follow on GitHub
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Linkedin className="w-8 h-8 mx-auto mb-4 group-hover:text-primary transition-colors" />
                <CardTitle className="text-lg">LinkedIn</CardTitle>
                <CardDescription>Professional network and career updates</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Twitter className="w-8 h-8 mx-auto mb-4 group-hover:text-primary transition-colors" />
                <CardTitle className="text-lg">Twitter</CardTitle>
                <CardDescription>Daily thoughts, tips, and tech discussions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                    Follow on Twitter
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <MessageSquare className="w-8 h-8 mx-auto mb-4 group-hover:text-primary transition-colors" />
                <CardTitle className="text-lg">WhatsApp</CardTitle>
                <CardDescription>Quick messages and instant communication</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`https://wa.me/${personalInfo.contact.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How I Can Help</h2>
            <p className="text-lg text-muted-foreground">
              Services I offer to help bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle>Full-Stack Development</CardTitle>
                    <CardDescription>Complete web applications from frontend to backend</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Custom web application development</li>
                  <li>• E-commerce platforms and marketplaces</li>
                  <li>• API development and integration</li>
                  <li>• Database design and optimization</li>
                  <li>• Performance optimization and scaling</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle>Consulting & Strategy</CardTitle>
                    <CardDescription>Technical guidance and project planning</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Technology stack selection</li>
                  <li>• Architecture design and planning</li>
                  <li>• Code review and optimization</li>
                  <li>• Team mentoring and training</li>
                  <li>• Project timeline and budget estimation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Availability */}
        <section className="container py-16 bg-muted/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Availability</h2>
            <p className="text-lg text-muted-foreground">
              My current status and upcoming availability for new projects
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-600">Available for New Projects</CardTitle>
                <CardDescription className="text-lg">
                  I&apos;m currently accepting new freelance and contract opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="font-semibold">Response Time</div>
                    <div className="text-muted-foreground">Within 24 hours</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Start Date</div>
                    <div className="text-muted-foreground">Within 1-2 weeks</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Project Duration</div>
                    <div className="text-muted-foreground">2-6 months</div>
                  </div>
                </div>
                <Button asChild size="lg">
                  <Link href={`mailto:${personalInfo.contact.email}?subject=New Project Inquiry`}>
                    Discuss Your Project
                    <MessageSquare className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about working with me
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What types of projects do you work on?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I specialize in full-stack web applications, particularly e-commerce platforms, 
                  fintech solutions, SaaS applications, and custom business software. I work with 
                  both startups and established companies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you work with international clients?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, I work with clients globally. I&apos;m experienced in remote collaboration 
                  and can adapt to different time zones. I&apos;m based in Lagos, Nigeria (WAT timezone) 
                  but flexible with meeting times.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What&apos;s your typical project timeline?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Project timelines vary based on complexity. Simple websites take 2-4 weeks, 
                  while complex applications can take 2-6 months. I provide detailed timelines 
                  during the planning phase and maintain regular communication throughout.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide ongoing support and maintenance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, I offer ongoing support packages including bug fixes, updates, performance 
                  monitoring, and feature enhancements. I believe in building long-term partnerships 
                  with my clients.
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
