"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/mdx";

interface BlogListProps {
  posts: BlogPost[];
  locale: string;
}

export default function BlogList({ posts, locale }: BlogListProps) {
  const t = useTranslations("blog");

  return (
    <div className="flex flex-col gap-5">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="gradient-border group block rounded-xl bg-card p-6 transition-colors hover:bg-card-hover"
          >
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted">
              <span className="inline-flex items-center gap-1">
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString(locale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} />
                {post.readingTime} {t("min_read")}
              </span>
            </div>

            <h2 className="mb-2 text-xl font-semibold transition-colors group-hover:text-accent">
              {post.title}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>

            <span className="mt-4 inline-block font-mono text-sm text-accent">
              {t("read_more")} →
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
