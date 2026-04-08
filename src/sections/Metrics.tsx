"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const cases = [
  { key: "case1", color: "from-blue-50 to-indigo-50", accent: "text-primary" },
  { key: "case2", color: "from-emerald-50 to-teal-50", accent: "text-success" },
  { key: "case3", color: "from-violet-50 to-purple-50", accent: "text-accent" },
] as const;

export default function Metrics() {
  const t = useTranslations("metrics");

  return (
    <section id="cases" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} className="mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cases.map((c, i) => (
          <motion.div
            key={c.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`rounded-2xl border border-border bg-gradient-to-br ${c.color} p-8`}
          >
            <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">
              {t(`${c.key}_label` as Parameters<typeof t>[0])}
            </p>
            <div className={`text-6xl font-bold tracking-tight mb-4 ${c.accent}`}>
              {t(`${c.key}_metric` as Parameters<typeof t>[0])}
            </div>
            <p className="text-sm text-text leading-relaxed">
              {t(`${c.key}_desc` as Parameters<typeof t>[0])}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
