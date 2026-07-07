import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`border-t border-stone-200 pt-10 ${className}`}>
      <h2 className="text-2xl font-semibold text-stone-950">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
