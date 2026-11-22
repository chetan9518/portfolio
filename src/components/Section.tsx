import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

/** Consistent section scaffold: mono index + label, headline, optional intro. */
export function Section({ id, index, label, title, intro, children, className = '' }: Props) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={`border-t border-line ${className}`}>
      <div className="mx-auto max-w-page px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12">
          <p className="eyebrow md:col-span-3 md:pt-2">
            <span className="text-accent">{index}</span>
            <span className="mx-2 text-faint">/</span>
            {label}
          </p>
          <div className="md:col-span-9">
            <h2 id={headingId} className="max-w-3xl text-balance text-[1.9rem] font-semibold leading-[1.1] tracking-tightest sm:text-[2.4rem]">
              {title}
            </h2>
            {intro && <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">{intro}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
