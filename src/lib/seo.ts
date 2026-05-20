export const SITE = {
  url: "https://xouston.com",
  name: "Xouston",
  defaultLocale: "ru" as const,
  locales: ["ru", "en"] as const,
  email: "hello@xouston.com",
  telegram: "XO_Contact",
  twitter: "@xouston",
  ogImage: {
    width: 1200,
    height: 630,
  },
} as const;

export type Locale = (typeof SITE.locales)[number];

export function localeUrl(locale: Locale, path = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === SITE.defaultLocale) {
    return `${SITE.url}${cleanPath === "/" ? "" : cleanPath}`;
  }
  return `${SITE.url}/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

export function buildAlternates(path = "/") {
  const languages: Record<string, string> = {};
  for (const locale of SITE.locales) {
    languages[locale] = localeUrl(locale, path);
  }
  languages["x-default"] = localeUrl(SITE.defaultLocale, path);
  return languages;
}