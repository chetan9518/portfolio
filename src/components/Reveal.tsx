import type { ElementType, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type Props = { children: ReactNode; className?: string; as?: ElementType; delay?: number };

export function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }: Props) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
