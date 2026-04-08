import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
        {
          "bg-white border border-border text-text": variant === "default",
          "bg-success/10 text-success border border-success/20":
            variant === "success",
          "bg-accent/10 text-accent border border-accent/20":
            variant === "accent",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
