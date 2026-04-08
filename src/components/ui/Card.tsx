"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-card rounded-2xl border border-border shadow-card",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
