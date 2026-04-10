"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects shipped" },
  { value: "5+", label: "Years in Web3" },
  { value: "100%", label: "Client satisfaction" },
  { value: "$2M+", label: "TVL in deployed contracts" },
];

const StatsSection = () => {
  return (
    <section className="py-24 border-t border-b border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-900 uppercase tracking-tighter">
              Numbers Don&apos;t Lie
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">(Why Me)</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <p className="text-5xl sm:text-6xl lg:text-7xl font-display font-900 tracking-tighter text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
