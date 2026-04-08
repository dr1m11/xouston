"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = ["step1", "step2", "step3", "step4", "step5", "step6", "step7"] as const;

export default function Approach() {
  const t = useTranslations("approach");

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="px-4 sm:px-6 max-w-6xl mx-auto">
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-12"
        />

        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-px bg-border" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative flex gap-6 md:gap-8 pb-8 last:pb-0 group"
              >
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-bg border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                  <span className="text-sm font-bold text-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center pt-1">
                  <h3 className="font-semibold text-dark text-base mb-1">
                    {t(`${step}_title` as Parameters<typeof t>[0])}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed max-w-md">
                    {t(`${step}_desc` as Parameters<typeof t>[0])}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
