import { useTranslations } from "next-intl";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          &copy; {year} İsmail Samurkaş. {t("rights")}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/samurkas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ismail-samurka%C5%9F-6a566820a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://instagram.com/ismail_smrk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>

        <p className="text-xs text-muted/60">
          {t("built_with")}
        </p>
      </div>
    </footer>
  );
}
