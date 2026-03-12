"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Instagram, Mail } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactContent() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-5"
      >
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
            {t("name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-none rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-background transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] disabled:opacity-60"
        >
          <Send size={16} />
          {status === "sending" ? t("sending") : t("send")}
        </button>

        {status === "success" && (
          <p className="text-center text-sm text-green-400">{t("success")}</p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-400">{t("error")}</p>
        )}
      </motion.form>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center"
      >
        <p className="mb-4 text-sm text-muted">{t("or_reach")}</p>
        <div className="flex items-center justify-center gap-5">
          {[
            { icon: Mail, href: "mailto:ismailismailsamurkas@gmail.com", label: "Email" },
            { icon: Github, href: "https://github.com/samurkas", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ismail-samurka%C5%9F-6a566820a", label: "LinkedIn" },
            { icon: Instagram, href: "https://instagram.com/ismail_smrk", label: "Instagram" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
