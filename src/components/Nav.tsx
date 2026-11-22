import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, SunIcon } from './Icons';

const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'open-source', label: 'Open source' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const;

const IDS = NAV.map((n) => n.id);

export function Nav() {
  const active = useActiveSection(IDS);
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape or when resizing up to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 768px)');
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  const themeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5 font-medium tracking-tight" aria-label="Chetan — back to top">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink font-mono text-[0.8rem] font-medium text-bg">
            C
          </span>
          <span>chetan</span>
          <span className="hidden font-mono text-[0.72rem] text-muted sm:inline">/ software engineer</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? 'true' : undefined}
                className={`rounded-full px-3 py-1.5 text-[0.88rem] transition-colors ${
                  active === n.id ? 'bg-sunken text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggle}
            aria-label={themeLabel}
            title={themeLabel}
            className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-sunken hover:text-ink"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href={profile.resume}
            download="Chetan-Resume.pdf"
            className="hidden h-9 items-center gap-2 rounded-full bg-ink px-4 text-[0.85rem] font-medium text-bg transition-colors hover:bg-ink/85 sm:inline-flex"
          >
            <DownloadIcon width={14} height={14} />
            Résumé
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full text-ink hover:bg-sunken md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-line md:hidden">
        <ul className="mx-auto max-w-page px-5 py-3 sm:px-8">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-3.5 text-[1.05rem] last:border-0"
              >
                {n.label}
                <span className="font-mono text-xs text-faint">#{n.id}</span>
              </a>
            </li>
          ))}
          <li className="pt-3 sm:hidden">
            <a
              href={profile.resume}
              download="Chetan-Resume.pdf"
              className="flex h-11 items-center justify-center gap-2 rounded-full bg-ink text-[0.92rem] font-medium text-bg"
            >
              <DownloadIcon /> Download résumé
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
