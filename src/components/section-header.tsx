import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-300/80">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-lg leading-relaxed text-slate-300/90">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="flex-shrink-0">{action}</div> : null}
    </div>
  );
}
