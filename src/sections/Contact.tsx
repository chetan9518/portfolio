import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/profile';
import { Reveal } from '../components/Reveal';
import { ButtonLink } from '../components/Button';
import { ArrowUpRight, CheckIcon, CodeIcon, CopyIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../components/Icons';

function CopyEmail() {
  const [state, setState] = useState<'idle' | 'copied' | 'error'>('idle');
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setState('copied');
    } catch {
      setState('error');
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState('idle'), 2200);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-[0.92rem] transition-colors hover:border-ink/40"
    >
      {state === 'copied' ? <CheckIcon className="text-ok" /> : <CopyIcon />}
      <span aria-live="polite">
        {state === 'copied' ? 'Copied' : state === 'error' ? 'Copy failed, select the address' : 'Copy email'}
      </span>
    </button>
  );
}

const CHANNELS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: MailIcon, external: false },
  { label: 'LinkedIn', value: 'in/chetan-bb87bb31a', href: profile.links.linkedin, icon: LinkedInIcon, external: true },
  { label: 'GitHub', value: 'chetan9518', href: profile.links.github, icon: GitHubIcon, external: true },
  { label: 'LeetCode', value: 'u/chetan9518', href: profile.links.leetcode, icon: CodeIcon, external: true },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-page px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">
              <span className="text-accent">05</span>
              <span className="mx-2 text-faint">/</span>Contact
            </p>
            <h2 id="contact-title" className="mt-6 text-[2.1rem] font-semibold leading-[1.05] tracking-tightest sm:text-[3rem]">
              Hiring a software engineering intern or new grad?
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-muted">
              I’m open to SWE internships and full-time roles starting after graduation in 2027, on backend
              or full-stack teams. Email is the fastest way to reach me.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${profile.email}?subject=${encodeURIComponent('Opportunity for Chetan')}`}>
                <MailIcon width={15} height={15} /> Email me
              </ButtonLink>
              <CopyEmail />
              <ButtonLink href={profile.resume} download="Chetan-Resume.pdf" variant="ghost">
                <DownloadIcon width={15} height={15} /> Résumé (PDF)
              </ButtonLink>
            </div>
          </div>

          <ul className="self-end lg:col-span-5">
            {CHANNELS.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label} className="border-b border-line first:border-t">
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 py-4"
                >
                  <Icon className="shrink-0 text-muted transition-colors group-hover:text-ink" />
                  <span className="w-20 shrink-0 text-[0.9rem] font-medium">{label}</span>
                  <span className="min-w-0 flex-1 truncate font-mono text-[0.8rem] text-muted">{value}</span>
                  <ArrowUpRight
                    className="shrink-0 text-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    width={14}
                    height={14}
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
