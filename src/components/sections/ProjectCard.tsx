"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  locale: string;
  index: number;
}

export default function ProjectCard({ project, locale, index }: ProjectCardProps) {
  const t = useTranslations("projects");
  const title = locale === "tr" ? project.titleTr : project.titleEn;
  const description = locale === "tr" ? project.descriptionTr : project.descriptionEn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="gradient-border group flex flex-col rounded-xl bg-card p-6 transition-colors hover:bg-card-hover"
    >
      <div className="mb-4 flex items-center justify-between">
        <Folder size={28} className="text-accent/60" />
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label={t("view_code")}
            >
              <Github size={18} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label={t("live_demo")}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-accent">
        {title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{description}</p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
