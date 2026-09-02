import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FadeInUp, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/Animations";
import { blogPosts } from "@/lib/data/blog";
import { personalInfo } from "@/lib/data/personal";
import { ArrowRight, Calendar, Clock, User, TrendingUp, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Articles",
  description: `Read ${personalInfo.name}'s insights on web development, Next.js, React, and software engineering. Sharing knowledge and experiences from the Nigerian tech ecosystem.`,
  alternates: {
    canonical: "/blog",
  },
};

export default function Blog() {
  const publishedPosts = blogPosts.filter(post => post.published);
  const featuredPosts = publishedPosts.filter(post => post.featured);
  const recentPosts = publishedPosts.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24">
          <div className="container max-w-7xl mx-auto px-4">
            <FadeInUp>
              <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Blog & Articles
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Sharing insights, experiences, and knowledge from my journey as a full-stack developer. 
                From technical tutorials to industry trends in the Nigerian tech ecosystem.
              </p>
              <div className="flex justify-center gap-4">
                <Badge variant="outline" className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {publishedPosts.length} Articles Published
                </Badge>
                <Badge variant="outline" className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  Web Development Insights
                </Badge>                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="container py-16">
            <FadeInUp delay={0.2}>
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
                <p className="text-lg text-muted-foreground">
                  In-depth articles on web development and software engineering
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <StaggerItem key={post.id}>
                  <ScaleOnHover>
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:shadow-primary/20 bg-gradient-to-br from-background to-muted/50">
                      <CardHeader className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="flex items-center gap-2 mb-3 relative z-10">
                          <Badge variant="default" className="bg-gradient-to-r from-primary to-primary/80">
                            ⭐ Featured
                          </Badge>
                          <Badge variant="outline" className="group-hover:border-primary/50 transition-colors">
                            {post.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors line-clamp-2 relative z-10">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-base line-clamp-3 relative z-10">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              {post.author.name}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.publishDate).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {post.readTime} min read
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Button asChild className="w-full group-hover:shadow-md transition-shadow">
                          <Link href={`/blog/${post.slug}`}>
                            Read Full Article
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        )}

        {/* Recent Posts */}
        <section className="container py-16 bg-gradient-to-br from-muted/30 to-muted/70 rounded-3xl my-8">
          <FadeInUp delay={0.3}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Recent Articles</h2>
              <p className="text-lg text-muted-foreground">
                Latest insights and tutorials from the world of web development
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.15}>
            {recentPosts.map((post) => (
              <StaggerItem key={post.id}>
                <ScaleOnHover scale={1.03}>
                  <Card className="group hover:shadow-xl transition-all duration-500 h-full flex flex-col border-0 shadow-md hover:shadow-primary/10 bg-background/80 backdrop-blur-sm">
                    <CardHeader className="flex-1 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex items-center gap-2 mb-3 relative z-10">
                        <Badge variant="outline" className="group-hover:border-primary/50 transition-colors">
                          {post.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2 relative z-10">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 flex-1 relative z-10">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime} min
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button asChild variant="outline" className="w-full group-hover:border-primary/50 group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Categories */}
        <section className="container py-16">
          <FadeInUp delay={0.4}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore by Category</h2>
              <p className="text-lg text-muted-foreground">
                Find articles that match your interests and skill level
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerChildren={0.1}>
            {['Web Development', 'Next.js', 'React', 'Node.js', 'Career Tips', 'Nigerian Tech'].map((category) => {
              const categoryPosts = publishedPosts.filter(post => 
                post.category === category || post.tags.includes(category.toLowerCase())
              );
              
              return (
                <StaggerItem key={category}>
                  <ScaleOnHover scale={1.05}>
                    <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:shadow-primary/20 border-0 bg-gradient-to-br from-background to-muted/30 cursor-pointer">
                      <CardHeader className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardTitle className="text-lg group-hover:text-primary transition-colors relative z-10">
                          {category}
                        </CardTitle>
                        <CardDescription className="relative z-10">
                          {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>

        {/* Newsletter Signup */}
        <section className="container py-24">
          <FadeInUp delay={0.5}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" />
              <div className="relative z-10 text-center max-w-3xl mx-auto p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Stay Updated with My Latest Articles
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Get notified when I publish new articles on web development, 
                  career tips, and insights from the Nigerian tech ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ScaleOnHover>
                    <Button asChild size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-shadow">
                      <Link href="/contact">
                        Subscribe to Newsletter
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </ScaleOnHover>
                  <ScaleOnHover>
                    <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground hover:text-primary-foreground">
                      <Link href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                        Follow on Twitter
                        <ArrowRight className="w-4 h-4 ml-2" />
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
