import { getTranslations } from "next-intl/server";
import { getAllPosts } from "@/lib/mdx";
import SectionHeader from "@/components/ui/SectionHeader";
import BlogList from "@/components/sections/BlogList";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("blog");
  const posts = getAllPosts(locale);

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      {posts.length === 0 ? (
        <p className="text-center text-muted">{t("no_posts")}</p>
      ) : (
        <BlogList posts={posts} locale={locale} />
      )}
    </section>
  );
}
