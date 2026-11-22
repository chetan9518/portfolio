import { coreStack, skills } from '../data/profile';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      label="Toolkit"
      title="Strongest on the backend, comfortable across the stack."
      intro="Grouped by where they fit in a system. The daily drivers are the ones I reach for first."
    >
      <Reveal className="mb-10 rounded-2xl border border-line bg-surface p-5 sm:p-6">
        <p className="eyebrow mb-4">Daily drivers</p>
        <ul className="flex flex-wrap gap-2">
          {coreStack.map((s) => (
            <li key={s} className="rounded-full bg-ink px-3.5 py-1.5 text-[0.88rem] font-medium text-bg">
              {s}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <dl className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div key={g.label} className="border-b border-line py-5 sm:pr-6">
              <dt className="eyebrow mb-2.5">{g.label}</dt>
              <dd>
                <ul className="flex flex-wrap gap-x-1.5 gap-y-1 text-[0.95rem] leading-relaxed">
                  {g.items.map((item, i) => (
                    <li key={item} className="whitespace-nowrap">
                      {item}
                      {i < g.items.length - 1 && (
                        <span className="ml-1.5 text-faint" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
