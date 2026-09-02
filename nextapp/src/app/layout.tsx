import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data/personal";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: personalInfo.seo.title,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.seo.metaDescription,
  keywords: personalInfo.keywords,
  authors: [{ name: personalInfo.name, url: personalInfo.contact.website }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(personalInfo.contact.website),
  alternates: {
    canonical: "/",
  },
  openGraph: personalInfo.seo.openGraph,
  twitter: {
    card: "summary_large_image",
    title: personalInfo.seo.title,
    description: personalInfo.seo.metaDescription,
    creator: `@${personalInfo.social.twitter.replace("https://twitter.com/", "")}`,
    images: [personalInfo.seo.openGraph.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personalInfo.seo.structuredData),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <AnimatedBackground />
        <div className="relative z-10 flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
