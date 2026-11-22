import { openSource } from '../data/profile';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { ArrowUpRight, GitHubIcon, MergeIcon } from '../components/Icons';

export function OpenSource() {
  return (
    <Section
      id="open-source"
      index="02"
      label="Open source"
      title="Code reviewed and merged by AWS maintainers."
      intro="Contributing to a widely used library meant working to someone else’s standards: reading an unfamiliar codebase, following its conventions and revising through review until it was ready to merge."
    >
      <Reveal>
        <a
          href={openSource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-ink/30"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5 sm:px-6">
            <span className="inline-flex items-center gap-2 font-mono text-[0.78rem] text-muted">
              <GitHubIcon width={14} height={14} />
              {openSource.repo}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8250df] px-2.5 py-1 text-[0.75rem] font-medium text-white">
              <MergeIcon width={13} height={13} /> Merged
            </span>
          </div>
          <div className="grid gap-6 px-5 py-6 sm:px-6 sm:py-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-9">
              <p className="font-mono text-[0.8rem] text-accent">#{openSource.pr}</p>
              <p className="mt-2 text-[1.35rem] font-semibold leading-snug tracking-tight sm:text-[1.6rem]">
                Refactor of core utility functions in {openSource.project}
              </p>
              <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted">{openSource.summary}</p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <span className="inline-flex items-center gap-1.5 text-[0.9rem] font-medium">
                View pull request
                <ArrowUpRight
                  width={15}
                  height={15}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </div>
        </a>
      </Reveal>
    </Section>
  );
}
