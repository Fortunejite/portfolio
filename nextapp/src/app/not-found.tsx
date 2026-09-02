"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="flex-1 flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
          <div className="space-y-2">
            <h1 className="text-8xl font-bold text-muted-foreground">404</h1>
            <h2 className="text-3xl font-bold">Page Not Found</h2>
            <p className="text-xl text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
