import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-dark mb-2">
              <span className="text-primary">XO</span> Xouston
            </div>
            <p className="text-sm text-muted">{t("tagline")}</p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-sm font-semibold text-dark mb-3">Навигация</p>
            <nav className="flex flex-col gap-2">
              {[
                { label: nav("services"), href: "#services" },
                { label: nav("approach"), href: "#approach" },
                { label: nav("cases"), href: "#cases" },
                { label: nav("contacts"), href: "#cta" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-dark transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-sm font-semibold text-dark mb-3">Контакты</p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${t("email")}`}
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                {t("email")}
              </a>
              <a
                href="https://t.me/XO_Contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                {t("telegram")}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">{t("copyright", { year: new Date().getFullYear() })}</p>
          <p className="text-xs text-muted">
            Сделано с заботой о деталях
          </p>
        </div>
      </div>
    </footer>
  );
}
