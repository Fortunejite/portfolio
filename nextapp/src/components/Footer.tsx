import Link from "next/link";
import { personalInfo } from "@/lib/data/personal";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: personalInfo.social.github,
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: personalInfo.social.linkedin,
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: personalInfo.social.twitter,
      icon: Twitter,
    },
    {
      name: "Email",
      href: `mailto:${personalInfo.contact.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
