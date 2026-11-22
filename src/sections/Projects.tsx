import type { ReactNode } from 'react';
import { projects, type Project } from '../data/profile';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { Tag } from '../components/Button';
import { ArrowUpRight, GitHubIcon } from '../components/Icons';
import { SafeStepDiagram, SkillMatchDiagram, SkillPayDiagram } from './diagrams';

const byId = (id: string) => {
  const p = projects.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown project: ${id}`);
  return p;
};

function Links({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={p.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-9 items-center gap-2 rounded-full border border-line bg-surface px-3.5 text-[0.85rem] transition-colors hover:border-ink/40"
        aria-label={`${p.name} source code on GitHub`}
      >
        <GitHubIcon width={14} height={14} /> Code
      </a>
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-3.5 text-[0.85rem] font-medium text-bg transition-colors hover:bg-ink/85"
          aria-label={`${p.name} live demo`}
        >
          Live demo <ArrowUpRight width={13} height={13} />
        </a>
      )}
    </div>
  );
}

function Header({ p, n }: { p: Project; n: string }) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="eyebrow">
          <span className="text-accent">{n}</span> <span className="mx-1 text-faint">—</span> {p.kind}
        </p>
        <h3 className="mt-3 text-[1.9rem] font-semibold leading-none tracking-tightest sm:text-[2.3rem]">{p.name}</h3>
      </div>
      <Links p={p} />
    </div>
  );
}

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-3">{label}</p>
      {children}
    </div>
  );
}

function Built({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
      {items.map((b) => (
        <li key={b} className="grid grid-cols-[0.9rem_1fr] gap-2">
          <span className="mt-[0.62rem] h-px w-2.5 bg-accent" aria-hidden="true" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {items.map((s) => (
        <li key={s}>
          <Tag>{s}</Tag>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Featured: SkillMatch (case-study layout) ---------- */
function SkillMatch() {
  const p = byId('skillmatch');
  return (
    <article id={p.id} aria-label={p.name} className="scroll-mt-24">
      <Reveal>
        <Header p={p} n="01" />
        <p className="mt-6 max-w-3xl text-[1.15rem] leading-relaxed">{p.summary}</p>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="space-y-8 lg:col-span-6">
          <Block label="The problem">
            <p className="text-[0.95rem] leading-relaxed text-muted">{p.problem}</p>
          </Block>
          <Block label="What I built">
            <Built items={p.built} />
          </Block>
          <Stack items={p.stack} />
        </Reveal>
        <Reveal className="lg:col-span-6" delay={120}>
          <SkillMatchDiagram />
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <p className="eyebrow mb-4">Engineering decisions</p>
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {p.decisions.map((d, i) => (
            <li key={d.title} className="bg-surface p-5 sm:p-6">
              <p className="font-mono text-[0.7rem] text-accent">0{i + 1}</p>
              <p className="mt-2 font-medium tracking-tight">{d.title}</p>
              <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">{d.body}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </article>
  );
}

/* ---------- SafeStep: pipeline-first layout ---------- */
function SafeStep() {
  const p = byId('safestep');
  return (
    <article id={p.id} aria-label={p.name} className="scroll-mt-24">
      <Reveal>
        <Header p={p} n="02" />
        <p className="mt-6 max-w-3xl text-[1.1rem] leading-relaxed">{p.summary}</p>
      </Reveal>
      <Reveal className="mt-8">
        <SafeStepDiagram />
      </Reveal>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <Reveal className="space-y-8">
          <Block label="The question">
            <p className="text-[0.95rem] leading-relaxed text-muted">{p.problem}</p>
          </Block>
          <Block label="Why the validation is subject-independent">
            <p className="text-[0.95rem] leading-relaxed text-muted">{p.decisions[0].body}</p>
          </Block>
        </Reveal>
        <Reveal className="space-y-8" delay={100}>
          <Block label="What I built">
            <Built items={p.built} />
          </Block>
          {p.note && (
            <p className="rounded-xl border border-line bg-surface px-4 py-3 text-[0.85rem] leading-relaxed text-muted">
              <span className="font-medium text-ink">Scope: </span>
              {p.note}
            </p>
          )}
          <Stack items={p.stack} />
        </Reveal>
      </div>
    </article>
  );
}

/* ---------- SkillPay: diagram-left, compact layout ---------- */
function SkillPay() {
  const p = byId('skillpay');
  return (
    <article id={p.id} aria-label={p.name} className="scroll-mt-24">
      <Reveal>
        <Header p={p} n="03" />
      </Reveal>
      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="order-2 lg:order-1 lg:col-span-5">
          <SkillPayDiagram />
        </Reveal>
        <Reveal className="order-1 space-y-8 lg:order-2 lg:col-span-7" delay={80}>
          <p className="text-[1.1rem] leading-relaxed">{p.summary}</p>
          <Block label="The problem">
            <p className="text-[0.95rem] leading-relaxed text-muted">{p.problem}</p>
          </Block>
          <Block label="What I built">
            <Built items={p.built} />
          </Block>
          <Stack items={p.stack} />
        </Reveal>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="work"
      index="01"
      label="Selected work"
      title="Three projects, each built around a hard part."
      intro="Auth and real-time features in SkillMatch, honest model evaluation in SafeStep, transactional correctness in SkillPay. Here is the problem behind each one and how I solved it."
    >
      <div className="space-y-24 md:space-y-32">
        <SkillMatch />
        <div className="border-t border-dashed border-line" aria-hidden="true" />
        <SafeStep />
        <div className="border-t border-dashed border-line" aria-hidden="true" />
        <SkillPay />
      </div>
    </Section>
  );
}
