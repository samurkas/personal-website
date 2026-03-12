"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, User, Trophy } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const timeline = [
  {
    type: "award" as const,
    titleTr: "IGVC Auto-Nav Resmi Kabulü",
    titleEn: "IGVC Auto-Nav Official Acceptance",
    orgTr: "IGVC Amerika",
    orgEn: "IGVC USA",
    dateTr: "2026",
    dateEn: "2026",
    descTr: "EVRENOS takımı olarak IGVC Auto-Nav kategorisine resmi kabul.",
    descEn: "Official acceptance to the IGVC Auto-Nav category as EVRENOS team.",
  },
  {
    type: "award" as const,
    titleTr: "Teknofest Türkiye 5.'liği (İKA) & İHA Finalisti",
    titleEn: "Teknofest Turkey 5th Place (UGV) & UAV Finalist",
    orgTr: "Teknofest",
    orgEn: "Teknofest",
    dateTr: "2025",
    dateEn: "2025",
    descTr: "EVRENOS İKA takımıyla Türkiye 5.'liği. İHA kategorisinde finalist.",
    descEn: "5th place in Turkey with EVRENOS UGV team. Finalist in UAV category.",
  },
  {
    type: "work" as const,
    titleTr: "Otonom Sistemler Geliştiricisi",
    titleEn: "Autonomous Systems Developer",
    orgTr: "EVRENOS Takımı",
    orgEn: "EVRENOS Team",
    dateTr: "2025 - Devam ediyor",
    dateEn: "2025 - Present",
    descTr: "ROS 2 tabanlı otonom navigasyon, YOLO ile engel tanıma, PyQt kontrol arayüzü ve TCP/IP haberleşme sistemi geliştirme.",
    descEn: "ROS 2-based autonomous navigation, obstacle detection with YOLO, PyQt control interface and TCP/IP communication system development.",
  },
  {
    type: "work" as const,
    titleTr: "Bağımsız Geliştirici",
    titleEn: "Independent Developer",
    orgTr: "Yazılım ve Mobil Oyun",
    orgEn: "Software & Mobile Games",
    dateTr: "2025 - Devam ediyor",
    dateEn: "2025 - Present",
    descTr: "C# masaüstü otomasyon, veritabanı uygulamaları ve çok oyunculu mobil oyun geliştirme.",
    descEn: "C# desktop automation, database applications and multiplayer mobile game development.",
  },
  {
    type: "education" as const,
    titleTr: "Bilgisayar Mühendisliği (%30 İngilizce)",
    titleEn: "Computer Engineering (30% English)",
    orgTr: "Karabük Üniversitesi",
    orgEn: "Karabuk University",
    dateTr: "2022 - Devam ediyor",
    dateEn: "2022 - Present",
    descTr: "Yazılım mühendisliği, algoritmalar, veri yapıları, veritabanı sistemleri ve bilgisayar ağları üzerine eğitim.",
    descEn: "Software engineering, algorithms, data structures, database systems and computer networks.",
  },
];

export default function AboutContent() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 md:items-start"
        >
          <div className="flex h-40 w-40 items-center justify-center rounded-full border border-border bg-card">
            <User size={64} className="text-accent/40" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="mb-1 text-xl font-semibold">
              {locale === "tr" ? "İsmail Samurkaş" : "Ismail Samurkas"}
            </h2>
            <p className="font-mono text-sm text-accent">
              {locale === "tr"
                ? "Bilgisayar Mühendisliği Öğrencisi"
                : "Computer Engineering Student"}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="leading-relaxed text-muted">{t("bio")}</p>
        </motion.div>
      </div>

      <div className="mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-2xl font-bold"
        >
          {t("timeline_title")}
        </motion.h2>

        <div className="relative ml-4 border-l border-border pl-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card">
                {item.type === "work" ? (
                  <Briefcase size={14} className="text-accent" />
                ) : item.type === "education" ? (
                  <GraduationCap size={14} className="text-accent" />
                ) : (
                  <Trophy size={14} className="text-yellow-400" />
                )}
              </div>
              <span className="mb-1 block font-mono text-xs text-accent/70">
                {locale === "tr" ? item.dateTr : item.dateEn}
              </span>
              <h3 className="text-lg font-semibold">
                {locale === "tr" ? item.titleTr : item.titleEn}
              </h3>
              <p className="mb-2 text-sm text-muted">
                {locale === "tr" ? item.orgTr : item.orgEn}
              </p>
              <p className="text-sm leading-relaxed text-muted/80">
                {locale === "tr" ? item.descTr : item.descEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
