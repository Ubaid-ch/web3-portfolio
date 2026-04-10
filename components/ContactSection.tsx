"use client";

import { motion } from "framer-motion";
import { Mail, X } from "lucide-react";
import type { FC, SVGProps } from "react";

/* ── Brand SVG icons (lucide removed all brand icons) ── */
const GithubIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ── Social links ── */
type SocialItem = {
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
};

const socials: SocialItem[] = [
  { icon: GithubIcon,  label: "GitHub",      href: "https://github.com/Ubaid-ch" },
  { icon: LinkedinIcon, label: "LinkedIn",    href: "https://www.linkedin.com/in/ubaid-ullah-chaudhry/" },
  {
    // X (Twitter) — use the lucide X icon wrapped to match SVG signature
    icon: (props) => <X className={`w-5 h-5 ${props.className ?? ""}`} />,
    label: "Twitter / X",
    href: "https://x.com/UbaidUllahCha12",
  },
  { icon: (props) => <Mail className={`w-5 h-5 ${props.className ?? ""}`} />, label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=ubaidullahchaudhry01@gmail.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2
            className="text-6xl sm:text-7xl lg:text-[8rem] font-display font-900 uppercase tracking-tighter mb-8"
            style={{ lineHeight: "0.9" }}
          >
            Let&apos;s Work
            <br />
            <span className="text-primary">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            create something great together.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ubaidullahchaudhry01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity mb-12"
          >
            Get in Touch
          </a>

          <div className="flex items-center justify-center gap-4 mt-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
