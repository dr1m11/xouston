import { getTranslations } from "next-intl/server";
import { SITE, localeUrl, type Locale } from "@/lib/seo";

const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

type Props = {
  locale: Locale;
};

export default async function JsonLd({ locale }: Props) {
  const seo = await getTranslations({ locale, namespace: "seo" });
  const faq = await getTranslations({ locale, namespace: "faq" });

  const homeUrl = localeUrl(locale, "/");

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icon`,
    image: `${SITE.url}/opengraph-image`,
    description: seo("home_description"),
    sameAs: [`https://t.me/${SITE.telegram}`],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        availableLanguage: ["Russian", "English"],
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: seo("home_description"),
    inLanguage: locale === "ru" ? "ru-RU" : "en-US",
    publisher: { "@id": `${SITE.url}#organization` },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${homeUrl}#faq`,
    mainEntity: FAQ_KEYS.map((qKey) => {
      const aKey = qKey.replace("q", "a") as `a${1 | 2 | 3 | 4 | 5 | 6}`;
      return {
        "@type": "Question",
        name: faq(qKey),
        acceptedAnswer: {
          "@type": "Answer",
          text: faq(aKey),
        },
      };
    }),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}