import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { SITE, buildAlternates, localeUrl, type Locale } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const locales = SITE.locales;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!locales.includes(locale as Locale)) return {};
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    title: {
      default: t("home_title"),
      template: `%s — ${SITE.name}`,
    },
    description: t("home_description"),
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    keywords: t("home_keywords").split(",").map((k) => k.trim()),
    alternates: {
      canonical: localeUrl(locale as Locale, "/"),
      languages: buildAlternates("/"),
    },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: t("home_title"),
      description: t("home_description"),
      url: localeUrl(locale as Locale, "/"),
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? ["en_US"] : ["ru_RU"],
    },
    twitter: {
      card: "summary_large_image",
      title: t("home_title"),
      description: t("home_description"),
      site: SITE.twitter,
      creator: SITE.twitter,
    },
    category: "technology",
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body className="bg-bg text-text antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <JsonLd locale={locale as Locale} />
      </body>
    </html>
  );
}