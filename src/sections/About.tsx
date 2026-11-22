import { achievements, education } from '../data/profile';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';
import { ArrowUpRight } from '../components/Icons';

const PRINCIPLES = [
  {
    title: 'Model the data first',
    body: 'A clear schema makes the API and the UI simpler. I start from tables, relations and transactions.',
  },
  {
    title: 'Trust nothing at the boundary',
    body: 'Validate every input, scope every token, and let infrastructure such as TTLs and transactions enforce the rules.',
  },
  {
    title: 'Be honest about limits',
    body: 'Measure things properly, state what a result does and doesn’t show, and leave code clearer than I found it.',
  },
];

export function About() {
  return (
    <Section id="about" index="04" label="About" title="I like problems where correctness matters.">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="space-y-5 text-[1.02rem] leading-relaxed text-muted lg:col-span-7">
          <p>
            I’m a Computer Science undergraduate at IIIT Agartala, graduating in 2027. What I enjoy most is the part
            of a product users never see: how data is modelled, how a request is authenticated, what happens when a
            write fails halfway.
          </p>
          <p>
            Competitive programming gave me the foundation. I’ve solved 300+ problems, mostly in C++, and spent a camp
            working through advanced graph theory. Building SkillMatch, SafeStep and SkillPay taught me what those
            fundamentals look like in practice: sessions that expire, transfers that must not half-complete, and models
            that have to be evaluated honestly.
          </p>
          <p className="text-ink">
            I’m looking for a team where I can ship production code, learn from strong reviewers and take on
            ownership early.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={100}>
          <ol className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="grid grid-cols-[2rem_1fr] gap-2 p-5">
                <span className="font-mono text-[0.72rem] text-accent">0{i + 1}</span>
                <div>
                  <p className="font-medium tracking-tight">{p.title}</p>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-12">
        {/* Education */}
        <Reveal className="rounded-2xl border border-line bg-surface p-6 sm:p-7 lg:col-span-7">
          <p className="eyebrow mb-5">Education</p>
          <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
            <div>
              <p className="text-[1.25rem] font-semibold tracking-tight">{education.school}</p>
              <p className="mt-1 text-[0.95rem] text-muted">{education.degree}</p>
            </div>
            <div className="font-mono text-[0.8rem] text-muted sm:text-right">
              <p>{education.graduation}</p>
              <p className="mt-0.5">CGPA {education.cgpa}</p>
            </div>
          </div>
          <p className="eyebrow mb-3 mt-7">Relevant coursework</p>
          <ul className="flex flex-wrap gap-1.5">
            {education.coursework.map((c) => (
              <li key={c} className="rounded-md bg-sunken px-2.5 py-1 text-[0.82rem]">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Achievements */}
        <Reveal className="rounded-2xl border border-line bg-surface p-6 sm:p-7 lg:col-span-5" delay={100}>
          <p className="eyebrow mb-5">Problem solving</p>
          <ul className="space-y-6">
            {achievements.map((a) => (
              <li key={a.title}>
                <p className="font-medium tracking-tight">{a.title}</p>
                <p className="mt-1 text-[0.9rem] leading-relaxed text-muted">{a.body}</p>
                {a.href && (
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[0.85rem] font-medium hover:text-accent"
                  >
                    {a.linkLabel} <ArrowUpRight width={12} height={12} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
