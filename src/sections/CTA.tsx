"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTA() {
  const t = useTranslations("cta");
  const footer = useTranslations("footer");

  return (
    <section id="cta" className="py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-dark rounded-3xl p-10 md:p-14 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {t("title")}
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="mt-8">
          <Button
            size="lg"
            className="bg-white text-dark hover:bg-gray-100 border-0"
            onClick={() => window.open(`mailto:${footer("email")}`, "_blank")}
          >
            {t("button")}
          </Button>
        </div>

        <p className="mt-8 text-xs text-slate-500">{t("note")}</p>
        <div className="mt-3 flex items-center justify-center gap-6">
          <a
            href={`mailto:${footer("email")}`}
            className="text-slate-300 hover:text-white transition-colors text-sm"
          >
            {footer("email")}
          </a>
          <span className="text-slate-600">·</span>
          <a
            href="https://t.me/xouston"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors text-sm"
          >
            {footer("telegram")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
