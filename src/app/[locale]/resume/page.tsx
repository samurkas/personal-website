import { getTranslations } from "next-intl/server";
import ResumeContent from "./ResumeContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "resume" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function ResumePage() {
  return <ResumeContent />;
}
