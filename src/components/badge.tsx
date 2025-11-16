import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "accent" | "muted" | "glass";
};

export function Badge({ children, tone = "glass" }: BadgeProps) {
  const base =
    "inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium transition-colors";

  if (tone === "accent") {
    return (
      <span className={`${base} bg-sky-500/90 text-slate-950 shadow-lg shadow-sky-500/30`}>
        {children}
      </span>
    );
  }

  if (tone === "muted") {
    return (
      <span className={`${base} bg-slate-800/70 text-slate-300 ring-1 ring-slate-700/70`}>
        {children}
      </span>
    );
  }

  return (
    <span
      className={`${base} bg-white/5 text-slate-200 ring-1 ring-white/10 backdrop-blur-md`}
    >
      {children}
    </span>
  );
}
