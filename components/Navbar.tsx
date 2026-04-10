"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md"
    >
      <div className="container px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-display font-800 tracking-tight uppercase">
          ubaid<span className="text-primary">.</span>
        </a>

        <div className="hidden sm:flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for project</span>
          </div>
          <a
            href="#contact"
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Let&apos;s Talk
          </a>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <button className="sm:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border bg-background"
        >
          <div className="container px-6 py-8 flex flex-col gap-6">
            {[
              { label: "Skills", href: "#skills" },
              { label: "Services", href: "#services" },
              { label: "Work", href: "#work" },
              { label: "Process", href: "#process" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-display font-800 uppercase tracking-tight text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
