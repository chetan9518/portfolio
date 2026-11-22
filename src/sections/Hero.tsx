import { openSource, profile } from '../data/profile';
import { ArrowDown, ArrowUpRight, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../components/Icons';
import { ButtonLink } from '../components/Button';

/** Each step of a SkillMatch sign-in, as it moves through the backend. */
const TRACE: { dir: '→' | '·' | '←'; step: string; via: string }[] = [
  { dir: '→', step: 'sign-in request', via: 'React client' },
  { dir: '·', step: 'validate payload', via: 'Zod' },
  { dir: '·', step: 'verify OTP', via: 'Redis · TTL' },
  { dir: '·', step: 'issue session', via: 'JWT' },
  { dir: '·', step: 'load profile', via: 'Postgres · Prisma' },
  { dir: '·', step: 'open chat channel', via: 'WebSocket' },
  { dir: '←', step: 'signed in', via: '200 OK' },
];

function AuthTrace() {
  return (
    <figure
      className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_0_rgb(var(--line)),0_24px_60px_-30px_rgb(0_0_0/0.25)]"
      aria-labelledby="trace-caption"
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <span className="font-mono text-[0.7rem] text-muted">skillmatch / auth flow</span>
      </div>

      <ol className="space-y-0 px-4 py-4 font-mono text-[0.78rem] leading-[1.9] sm:px-5 sm:text-[0.8rem]">
        {TRACE.map((t, i) => (
          <li
            key={t.step}
            className="trace-line grid grid-cols-[1.1rem_minmax(0,1fr)_auto] items-baseline gap-3"
            style={{ animationDelay: `${300 + i * 140}ms` }}
          >
            <span className={t.dir === '·' ? 'text-faint' : 'text-accent'} aria-hidden="true">
              {t.dir}
            </span>
            <span className="truncate text-ink">{t.step}</span>
            <span className="whitespace-nowrap text-right text-muted">{t.via}</span>
          </li>
        ))}
        <li
          className="trace-line mt-1 grid grid-cols-[1.1rem_1fr] gap-2 text-muted"
          style={{ animationDelay: `${300 + TRACE.length * 140}ms` }}
          aria-hidden="true"
        >
          <span>$</span>
          <span>
            <span className="caret inline-block h-[1em] w-[0.55em] translate-y-[2px] bg-ink/70" />
          </span>
        </li>
      </ol>

      <figcaption id="trace-caption" className="border-t border-line bg-sunken/60 px-4 py-3 text-[0.8rem] leading-snug text-muted sm:px-5">
        How a sign-in moves through <a href="#skillmatch" className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink">SkillMatch</a>,
        one of the systems I designed and deployed end to end.
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative">
      <div className="mx-auto grid max-w-page items-center gap-14 px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:grid-cols-12 lg:gap-10 lg:pb-20">
        <div className="lg:col-span-7">
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[0.8rem] text-muted">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 id="hero-title" className="text-[2.7rem] font-semibold leading-[1.02] tracking-tightest sm:text-[3.6rem] lg:text-[3.5rem] xl:text-[4.1rem]">
            Chetan
            <span className="block text-muted">
              <span className="whitespace-nowrap">Full-stack</span> software engineer.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-[1.08rem] leading-relaxed text-muted">
            Computer Science undergrad at IIIT Agartala. I design schemas, auth
            flows and real-time features in{' '}
            <span className="text-ink">TypeScript, Node.js, PostgreSQL and React</span>, then ship them to
            production. My code is merged in{' '}
            <a
              href={openSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-accent/60 decoration-2 underline-offset-4 hover:decoration-accent"
            >
              AWS Powertools for TypeScript
            </a>
            .
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#work">
              View projects <ArrowDown width={15} height={15} />
            </ButtonLink>
            <ButtonLink href={profile.resume} download="Chetan-Resume.pdf" variant="secondary">
              <DownloadIcon width={15} height={15} /> Download résumé
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.88rem] text-muted" aria-label="Profiles">
            <li>
              <a className="inline-flex items-center gap-1.5 hover:text-ink" href={profile.links.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> GitHub <ArrowUpRight width={12} height={12} />
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-1.5 hover:text-ink" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon /> LinkedIn <ArrowUpRight width={12} height={12} />
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-1.5 hover:text-ink" href={`mailto:${profile.email}`}>
                <MailIcon /> {profile.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-5">
          <AuthTrace />
        </div>
      </div>

      {/* Fact strip: verifiable signals only */}
      <div className="border-t border-line">
        <dl className="mx-auto grid max-w-page grid-cols-2 px-5 sm:px-8 md:grid-cols-4">
          {[
            ['Open source', `PR #${openSource.pr} merged`, 'AWS Powertools · TypeScript'],
            ['Projects', '3 full-stack builds', 'Web, mobile & ML'],
            ['Problem solving', '300+ LeetCode', 'Mostly C++'],
            ['Graduating', 'Aug 2027', 'B.Tech CSE · IIIT Agartala'],
          ].map(([k, v, s], i) => (
            <div
              key={k}
              className={`py-6 ${i % 2 === 1 ? 'pl-5 border-l border-line' : 'pr-5'} ${
                i >= 2 ? 'border-t border-line md:border-t-0' : ''
              } ${i === 2 ? 'md:border-l md:pl-5' : ''} ${i >= 1 ? 'md:pl-6' : ''}`}
            >
              <dt className="eyebrow">{k}</dt>
              <dd className="mt-2 text-[1.05rem] font-medium tracking-tight">{v}</dd>
              <dd className="mt-0.5 text-[0.82rem] text-muted">{s}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
