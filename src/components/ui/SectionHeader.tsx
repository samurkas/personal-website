"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
        <span className="text-accent">.</span>
      </h1>
      <p className="text-muted">{subtitle}</p>
    </motion.div>
  );
}
