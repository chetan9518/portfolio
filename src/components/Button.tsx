import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const styles: Record<Variant, string> = {
  primary: 'bg-ink text-bg hover:bg-ink/85',
  secondary: 'border border-line bg-surface text-ink hover:border-ink/40',
  ghost: 'text-ink hover:bg-sunken',
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
  external?: boolean;
};

export function ButtonLink({ variant = 'primary', className = '', children, external, ...rest }: Props) {
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a
      {...ext}
      {...rest}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[0.92rem] font-medium transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

/** Small pill used for tech tags. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-surface px-2 py-[3px] font-mono text-[0.72rem] text-muted">
      {children}
    </span>
  );
}
