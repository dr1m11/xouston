import type { MetadataRoute } from "next";
import { SITE, localeUrl, buildAlternates, type Locale } from "@/lib/seo";

const ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of ROUTES) {
    for (const locale of SITE.locales) {
      entries.push({
        url: localeUrl(locale as Locale, route.path),
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages: buildAlternates(route.path) },
      });
    }
  }

  return entries;
}