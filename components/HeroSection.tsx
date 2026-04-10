"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-16">
      {/* Background ambient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card pointer-events-none" />

      <div className="container relative z-10 px-6 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Giant brand name */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-[12vw] lg:text-[8vw] font-display font-900 uppercase leading-none tracking-tighter text-foreground/30" style={{ lineHeight: '0.85' }}>
              FULL
              <br />
              STACK
              <br />
              <span className="text-foreground">WEB3</span>
            </h1>
          </motion.div>

          {/* Right: Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:text-right"
          >
            <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-700 tracking-tight italic" style={{ lineHeight: '1.1' }}>
              Beyond Code.
              <br />
              <span className="font-800 not-italic">
                Built with
                <br />
                Vision.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Bottom description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 lg:mt-24 max-w-2xl"
        >
          <p className="text-lg sm:text-xl leading-relaxed">
            <span className="text-foreground font-medium">
              I build MVPs, smart contracts, and scalable web solutions
            </span>{" "}
            <span className="text-muted-foreground">
              with intention, precision and care.
            </span>
          </p>
        </motion.div>
      </div>

      {/* Logos marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="border-t border-border py-6 overflow-hidden"
      >
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {["SOLIDITY", "REACT", "NEXT.JS", "NODE.JS", "MOVE", "SUI", "EVM", "CHAINLINK", "TYPESCRIPT", "POSTGRESQL", "MONGODB", "SOLIDITY", "REACT", "NEXT.JS", "NODE.JS", "MOVE", "SUI", "EVM", "CHAINLINK", "TYPESCRIPT", "POSTGRESQL", "MONGODB"].map((tech, i) => (
            <span key={i} className="text-sm font-bold uppercase tracking-widest text-muted-foreground/40">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* CTA button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-20 right-6 lg:right-12"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Start a Project
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
