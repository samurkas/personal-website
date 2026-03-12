import { getTranslations } from "next-intl/server";
import SkillsContent from "./SkillsContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "skills" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function SkillsPage() {
  return <SkillsContent />;
}
