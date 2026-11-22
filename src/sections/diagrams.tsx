/**
 * Small, responsive architecture diagrams built from HTML so they reflow on
 * phones and stay legible in both themes. Each one describes only what the
 * résumé states about the project.
 */
import type { ReactNode } from 'react';

function Node({
  title,
  sub,
  items,
  accent,
  className = '',
}: {
  title: string;
  sub?: string;
  items?: string[];
  accent?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border bg-surface px-3.5 py-3 ${accent ? 'border-accent/50' : 'border-line'} ${className}`}
    >
      <p className="text-[0.88rem] font-medium leading-tight">{title}</p>
      {sub && <p className="mt-0.5 font-mono text-[0.68rem] text-muted">{sub}</p>}
      {items && (
        <ul className="mt-2 flex flex-wrap gap-1">
          {items.map((i) => (
            <li key={i} className="rounded bg-sunken px-1.5 py-0.5 font-mono text-[0.66rem] text-muted">
              {i}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Edge({ label, dashed }: { label: string; dashed?: boolean }) {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden="true">
      <span className={`h-3 w-px ${dashed ? 'border-l border-dashed border-faint' : 'bg-faint'}`} />
      <span className="my-0.5 font-mono text-[0.64rem] text-muted">{label}</span>
      <span className={`h-3 w-px ${dashed ? 'border-l border-dashed border-faint' : 'bg-faint'}`} />
      <span className="-mt-1 text-[0.6rem] leading-none text-faint">▼</span>
    </div>
  );
}

function Frame({ label, children, className = '' }: { label: string; children: ReactNode; className?: string }) {
  return (
    <figure className={`grid-paper relative rounded-2xl border border-line bg-sunken/50 p-4 sm:p-6 ${className}`}>
      <figcaption className="eyebrow mb-4">{label}</figcaption>
      {children}
    </figure>
  );
}

export function SkillMatchDiagram() {
  return (
    <Frame label="SkillMatch · system overview">
      <div className="sr-only">
        A React and TypeScript client on Cloudflare Pages talks to an Express API on Render over REST and WebSocket.
        The API validates requests with Zod, authenticates with OTP, JWT and Google OAuth, stores data in PostgreSQL
        through Prisma and keeps one-time codes in Redis with a TTL. Files are uploaded directly from the client to
        AWS S3 using pre-signed URLs issued by the API.
      </div>
      <div aria-hidden="true">
        <Node title="Web client" sub="React · TypeScript · Cloudflare Pages" />
        <div className="grid grid-cols-2">
          <Edge label="REST + WebSocket" />
          <Edge label="direct upload" dashed />
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <Node title="API server" sub="Express.js · Render" items={['Zod', 'JWT', 'OAuth 2.0', 'WS chat']} accent />
          <Node title="AWS S3" sub="pre-signed URLs" items={['API signs only']} />
        </div>
        <div className="grid grid-cols-2">
          <Edge label="queries" />
          <span />
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <Node title="PostgreSQL" sub="Prisma ORM" items={['profiles', 'skills', 'goals']} />
          <Node title="Redis" sub="OTP store" items={['TTL expiry']} />
        </div>
      </div>
    </Frame>
  );
}

export function SafeStepDiagram() {
  const train = [
    ['SisFall', 'waist-sensor recordings'],
    ['Windowing', '4 s @ 50 Hz'],
    ['Features', '33 per window'],
    ['Random Forest', 'scikit-learn'],
    ['Validation', '5-fold, by subject'],
  ];
  const serve = [
    ['Expo app', 'accelerometer + gyroscope'],
    ['FastAPI', 'inference service'],
    ['Result', 'fall / no fall'],
  ];
  const Row = ({ steps, accentIdx }: { steps: string[][]; accentIdx: number }) => (
    <ol className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-0">
      {steps.map(([t, s], i) => (
        <li key={t} className="flex flex-col sm:flex-1 sm:flex-row sm:items-center">
          <Node title={t} sub={s} accent={i === accentIdx} className="sm:h-full sm:flex-1" />
          {i < steps.length - 1 && (
            <span className="self-center py-0.5 text-faint sm:px-1.5 sm:py-0" aria-hidden="true">
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </span>
          )}
        </li>
      ))}
    </ol>
  );
  return (
    <Frame label="SafeStep · training & serving pipeline">
      <p className="mb-2 font-mono text-[0.68rem] text-muted">train</p>
      <Row steps={train} accentIdx={4} />
      <p className="mb-2 mt-5 font-mono text-[0.68rem] text-muted">serve</p>
      <Row steps={serve} accentIdx={1} />
    </Frame>
  );
}

export function SkillPayDiagram() {
  return (
    <Frame label="SkillPay · transfer as one transaction">
      <div className="font-mono text-[0.78rem] leading-relaxed">
        <p className="text-accent">BEGIN transaction</p>
        <div className="my-2 ml-2 space-y-2 border-l border-dashed border-faint pl-4">
          <div className="flex items-center justify-between rounded-lg border border-line bg-surface px-3 py-2">
            <span>debit sender</span>
            <span className="text-muted">balance − amount</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-line bg-surface px-3 py-2">
            <span>credit receiver</span>
            <span className="text-muted">balance + amount</span>
          </div>
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-ok/40 bg-ok/5 px-3 py-2">
            <p className="text-ok">COMMIT</p>
            <p className="mt-0.5 text-[0.7rem] text-muted">both writes land together</p>
          </div>
          <div className="rounded-lg border border-line bg-surface px-3 py-2">
            <p className="text-ink">ROLLBACK</p>
            <p className="mt-0.5 text-[0.7rem] text-muted">any failure → no partial update</p>
          </div>
        </div>
        <p className="mt-4 border-t border-line pt-3 text-[0.7rem] text-muted">
          every route: JWT → role check (admin / user) → handler · token checks cached in Redis
        </p>
      </div>
    </Frame>
  );
}
