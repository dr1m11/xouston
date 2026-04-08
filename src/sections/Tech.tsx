"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const stack = {
  mobile: [
    "React Native", "Flutter", "Swift", "Kotlin", "KMP",
  ],
  frontend: [
    "React", "Next.js", "Vue", "TypeScript", "Tailwind CSS",
  ],
  backend: [
    "Python", "Django", "FastAPI", "Go", "PHP", "Laravel", "Symfony",
  ],
  devops: [
    "Docker", "Kubernetes", "CI/CD", "Nginx", "PostgreSQL", "Redis", "Grafana",
  ],
} as const;

const categoryColors: Record<string, string> = {
  mobile: "bg-blue-50 text-blue-700 border-blue-100",
  frontend: "bg-violet-50 text-violet-700 border-violet-100",
  backend: "bg-emerald-50 text-emerald-700 border-emerald-100",
  devops: "bg-orange-50 text-orange-700 border-orange-100",
};

export default function Tech() {
  const t = useTranslations("tech");

  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        title={t("title")}
        subtitle={t("subtitle")}
        className="mb-12"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(Object.keys(stack) as Array<keyof typeof stack>).map((category, ci) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.08 }}
            className="bg-white rounded-2xl border border-border shadow-card p-5"
          >
            <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
              {t(category as "mobile" | "frontend" | "backend" | "devops")}
            </p>
            <div className="flex flex-wrap gap-2">
              {stack[category].map((tech) => (
                <span
                  key={tech}
                  className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${categoryColors[category]}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
