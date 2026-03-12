"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/projects", key: "projects" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
  { href: "/resume", key: "resume" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchLocale = () => {
    const next = locale === "tr" ? "en" : "tr";
    router.replace(pathname, { locale: next });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-lg font-bold tracking-tight text-accent">
          {"<Samurkas />"}
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map(({ href, key }) => (
            <li key={key}>
              <Link
                href={href}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  pathname === href
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {t(key)}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <button
              onClick={switchLocale}
              className="rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {locale === "tr" ? "EN" : "TR"}
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={switchLocale}
            className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted"
          >
            {locale === "tr" ? "EN" : "TR"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-muted"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {navItems.map(({ href, key }) => (
                <li key={key}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-md px-3 py-2.5 text-sm transition-colors ${
                      pathname === href
                        ? "text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
