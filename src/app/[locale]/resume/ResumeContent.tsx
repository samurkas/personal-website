"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  Download,
  Briefcase,
  GraduationCap,
  Trophy,
  Heart,
  Award,
} from "lucide-react";
import {
  experience,
  education,
  awards,
  volunteer,
  certifications,
  type ResumeEntry,
  type AwardEntry,
  type VolunteerEntry,
  type CertificationEntry,
} from "@/data/resume";
import { skillCategories } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";

function ResumeSection({
  title,
  icon: Icon,
  entries,
  locale,
}: {
  title: string;
  icon: typeof Briefcase;
  entries: ResumeEntry[];
  locale: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
        <Icon size={20} className="text-accent" />
        {title}
      </h2>
      <div className="space-y-6">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="mb-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-semibold">
                {locale === "tr" ? entry.titleTr : entry.titleEn}
              </h3>
              <span className="font-mono text-xs text-accent/70">
                {locale === "tr" ? entry.dateTr : entry.dateEn}
              </span>
            </div>
            <p className="mb-2 text-sm text-muted">
              {locale === "tr" ? entry.organizationTr : entry.organizationEn}
            </p>
            <p className="text-sm leading-relaxed text-muted/80">
              {locale === "tr" ? entry.descriptionTr : entry.descriptionEn}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AwardsSection({
  title,
  entries,
  locale,
}: {
  title: string;
  entries: AwardEntry[];
  locale: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
        <Trophy size={20} className="text-yellow-400" />
        {title}
      </h2>
      <div className="space-y-4">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center justify-between rounded-xl border border-border bg-card p-4"
          >
            <div>
              <h3 className="font-semibold">
                {locale === "tr" ? entry.titleTr : entry.titleEn}
              </h3>
              <p className="text-sm text-muted">
                {locale === "tr" ? entry.organizationTr : entry.organizationEn}
              </p>
            </div>
            <span className="font-mono text-xs text-accent/70">
              {locale === "tr" ? entry.dateTr : entry.dateEn}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function VolunteerSection({
  title,
  entries,
  locale,
}: {
  title: string;
  entries: VolunteerEntry[];
  locale: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
        <Heart size={20} className="text-red-400" />
        {title}
      </h2>
      <div className="space-y-6">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="mb-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3 className="font-semibold">
                {locale === "tr" ? entry.titleTr : entry.titleEn}
              </h3>
              <span className="font-mono text-xs text-accent/70">
                {locale === "tr" ? entry.dateTr : entry.dateEn}
              </span>
            </div>
            <p className="mb-2 text-sm text-muted">
              {locale === "tr" ? entry.organizationTr : entry.organizationEn}
            </p>
            <p className="text-sm leading-relaxed text-muted/80">
              {locale === "tr" ? entry.descriptionTr : entry.descriptionEn}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CertificationsSection({
  title,
  entries,
  locale,
}: {
  title: string;
  entries: CertificationEntry[];
  locale: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
        <Award size={20} className="text-accent" />
        {title}
      </h2>
      <div className="space-y-4">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center justify-between rounded-xl border border-border bg-card p-4"
          >
            <h3 className="font-semibold text-sm">
              {locale === "tr" ? entry.titleTr : entry.titleEn}
            </h3>
            {(locale === "tr" ? entry.dateTr : entry.dateEn) && (
              <span className="font-mono text-xs text-accent/70">
                {locale === "tr" ? entry.dateTr : entry.dateEn}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ResumeContent() {
  const t = useTranslations("resume");
  const ts = useTranslations("skills");
  const locale = useLocale();

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12 flex justify-center"
      >
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <Download size={16} />
          {t("download")}
        </a>
      </motion.div>

      <ResumeSection
        title={t("experience")}
        icon={Briefcase}
        entries={experience}
        locale={locale}
      />

      <ResumeSection
        title={t("education")}
        icon={GraduationCap}
        entries={education}
        locale={locale}
      />

      <AwardsSection
        title={t("awards")}
        entries={awards}
        locale={locale}
      />

      <VolunteerSection
        title={t("volunteer")}
        entries={volunteer}
        locale={locale}
      />

      <CertificationsSection
        title={t("certifications")}
        entries={certifications}
        locale={locale}
      />

      <div>
        <h2 className="mb-6 text-xl font-semibold">{ts("title")}</h2>
        <div className="flex flex-wrap gap-2">
          {skillCategories.flatMap((cat) =>
            cat.skills.map((skill) => (
              <span
                key={skill.name}
                className="rounded-md border border-border px-3 py-1.5 text-sm text-muted"
              >
                {skill.name}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
