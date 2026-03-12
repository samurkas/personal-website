"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import type { BlogPost } from "@/lib/mdx";

interface BlogPostViewProps {
  post: BlogPost;
  source: MDXRemoteSerializeResult;
  locale: string;
  backLabel: string;
  minReadLabel: string;
}

export default function BlogPostView({
  post,
  source,
  locale,
  backLabel,
  minReadLabel,
}: BlogPostViewProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          {backLabel}
        </Link>

        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted">
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString(locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            {post.readingTime} {minReadLabel}
          </span>
        </div>

        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>

        <div className="mb-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        <hr className="mb-10 border-border" />

        {/* MDX Content */}
        <div className="prose prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-p:text-muted prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-accent prose-pre:bg-card prose-pre:border prose-pre:border-border prose-li:text-muted">
          <MDXRemote {...source} />
        </div>
      </motion.div>
    </article>
  );
}
