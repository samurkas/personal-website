import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { serialize } from "next-mdx-remote/serialize";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import BlogPostView from "@/components/sections/BlogPostView";

export async function generateStaticParams() {
  const trPosts = getAllPosts("tr");
  const enPosts = getAllPosts("en");

  return [
    ...trPosts.map((p) => ({ locale: "tr", slug: p.slug })),
    ...enPosts.map((p) => ({ locale: "en", slug: p.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations("blog");
  const post = getPostBySlug(locale, slug);

  if (!post) notFound();

  const mdxSource = await serialize(post.content);

  return (
    <BlogPostView
      post={post}
      source={mdxSource}
      locale={locale}
      backLabel={t("back")}
      minReadLabel={t("min_read")}
    />
  );
}
