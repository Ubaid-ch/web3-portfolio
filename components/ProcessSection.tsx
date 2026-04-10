"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "Step 1",
    title: "Discovery",
    description: "Understanding your goals, pain points, audience, and what sets your project apart.",
  },
  {
    num: "Step 2",
    title: "Architecture & Build",
    description: "Designing the system, writing clean code, and deploying secure smart contracts.",
  },
  {
    num: "Step 3",
    title: "Review & Refine",
    description: "Sharing progress, gathering feedback, and fine-tuning until it's production-ready.",
  },
  {
    num: "Step 4",
    title: "Launch & Support",
    description: "Deploying with confidence and providing ongoing support for your next moves.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-baseline justify-between mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-900 uppercase tracking-tighter">
              How I Work
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">(Process)</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background p-8 flex flex-col"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                  {step.num}
                </span>
                <h3 className="text-xl font-display font-800 uppercase tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
