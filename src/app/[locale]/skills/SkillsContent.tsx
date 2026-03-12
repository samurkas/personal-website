"use client";

import { useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillsGrid from "@/components/sections/SkillsGrid";

export default function SkillsContent() {
  const t = useTranslations("skills");

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      <SkillsGrid />
    </section>
  );
}
