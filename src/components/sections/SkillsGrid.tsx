"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function SkillsGrid() {
  const t = useTranslations("skills");

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category, catIdx) => (
        <motion.div
          key={category.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: catIdx * 0.1 }}
          className="gradient-border rounded-xl bg-card p-6"
        >
          <h3 className="mb-5 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
            {t(category.key)}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <span className="text-xs">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
