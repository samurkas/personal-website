"use client";

import { useTranslations, useLocale } from "next-intl";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/sections/ProjectCard";

export default function ProjectsContent() {
  const t = useTranslations("projects");
  const locale = useLocale();

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
