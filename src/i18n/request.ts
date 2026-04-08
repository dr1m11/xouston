import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["ru", "en"];

export default getRequestConfig(async ({requestLocale}) => {
    const locale = await requestLocale
  if (!locales.includes(locale as string)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
