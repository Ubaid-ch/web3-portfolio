"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    num: "01",
    title: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    num: "02",
    title: "Backend",
    skills: ["Node.js", "MongoDB", "PostgreSQL", "REST API"],
  },
  {
    num: "03",
    title: "Web3",
    skills: ["Solidity", "Move", "EVM", "SUI", "ZKP", "Chainlink", "OpenZeppelin"],
  },
   {
    num: "04",
    title: "AI",
    skills: ["Claude Code", "Antigravity", "AI Agents"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-baseline justify-between mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-900 uppercase tracking-tighter">
              Expertise
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">(Skills)</span>
          </div>

          <div className="space-y-0">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border-t border-border py-10 grid grid-cols-12 gap-6 items-start group hover:bg-card/30 transition-colors px-4 -mx-4"
              >
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-xs font-bold text-primary">{cat.num}</span>
                </div>
                <div className="col-span-10 sm:col-span-3">
                  <h3 className="text-2xl font-display font-800 uppercase tracking-tight">{cat.title}</h3>
                </div>
                <div className="col-span-12 sm:col-span-8 flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
