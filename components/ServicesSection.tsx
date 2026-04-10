"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    num: "01",
    title: "MVP Development",
    description: "From concept to launch. I build production-ready MVPs that help founders validate ideas fast.",
    tags: ["Full-Stack Apps", "Rapid Prototyping", "API Design", "Database Architecture"],
  },
  {
    num: "02",
    title: "Smart Contracts",
    description: "Secure, auditable smart contracts on EVM chains and SUI. DeFi, NFTs, DAOs — you name it.",
    tags: ["Solidity", "Move", "Security Audits", "Gas Optimization"],
  },
  {
    num: "03",
    title: "Web3 Integration",
    description: "Connecting traditional web apps to blockchain. Wallet auth, on-chain data, oracles.",
    tags: ["Wallet Auth", "Chainlink", "On-chain Data", "dApp Frontend"],
  },
  {
    num: "04",
    title: "Full-Stack Development",
    description: "Modern web applications with React, Node.js, and robust database architectures.",
    tags: ["React/Next.js", "Node.js", "PostgreSQL", "REST API"],
  },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-900 uppercase tracking-tighter">
              How I Can Help
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">(Services)</span>
          </div>

          <div className="space-y-0 mt-20">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="border-t border-border"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="py-8 px-4 -mx-4 hover:bg-card/30 transition-colors">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-6">
                      <span className="text-xs font-bold text-primary mt-2">{service.num}</span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-display font-800 uppercase tracking-tight">
                          {service.title}
                        </h3>
                        <motion.div
                          initial={false}
                          animate={{
                            height: hoveredIndex === i ? "auto" : 0,
                            opacity: hoveredIndex === i ? 1 : 0,
                          }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1.5 text-xs font-medium border border-border text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <span className="text-2xl font-display font-300 text-muted-foreground/50">
                      {hoveredIndex === i ? "−" : "+"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;