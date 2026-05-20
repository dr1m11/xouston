"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Badges */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-2 mb-8"
      >
        <Badge>
          <span className="w-1.5 h-1.5 rounded-full bg-success" />
          {t("badge1")}
        </Badge>
        <Badge>
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {t("badge2")}
        </Badge>
        <Badge>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {t("badge3")}
        </Badge>
      </motion.div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Main card — no entrance animation: this is the LCP element, must render immediately */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-border shadow-card p-8 flex flex-col justify-between min-h-[340px]">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight tracking-tight text-balance">
              {t("title").split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
            <p className="mt-4 text-muted text-lg leading-relaxed max-w-lg">
              {t("subtitle")}
            </p>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("cta")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("cta_primary")}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("cta")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("cta_secondary")}
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted">{t("note")}</p>
          </div>
        </div>

        {/* Right column cards */}
        <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-4">
          {/* 24/7 */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-dark rounded-2xl border border-dark p-6 flex flex-col justify-between min-h-[120px] lg:min-h-0"
          >
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-3">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-white font-semibold text-lg whitespace-pre-line leading-tight">
              {t("card_support")}
            </p>
          </motion.div>

          {/* Markets */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-primary rounded-2xl p-6 flex flex-col justify-between min-h-[120px] lg:min-h-0"
          >
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-3">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <p className="text-white font-semibold text-lg whitespace-pre-line leading-tight">
              {t("card_markets")}
            </p>
          </motion.div>

          {/* Rhythm */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 col-span-2 bg-white rounded-2xl border border-border shadow-card p-6"
          >
            <p className="text-sm font-semibold text-dark mb-1">
              {t("card_rhythm_title")}
            </p>
            <p className="text-sm text-muted leading-relaxed">
              {t("card_rhythm_desc")}
            </p>
            {/* Mini stats */}
            <div className="mt-4 flex gap-4">
              {[
                { num: "7d", label: "demo" },
                { num: "NDA", label: "by default" },
                { num: "KPI", label: "focused" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-sm font-bold text-dark">{item.num}</div>
                  <div className="text-xs text-muted">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
