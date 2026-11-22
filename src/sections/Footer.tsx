import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-3 px-5 py-8 text-[0.82rem] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Chetan. Built with React, TypeScript and Tailwind CSS.</p>
        <div className="flex items-center gap-5">
          <a className="link-underline hover:text-ink" href={profile.links.source} target="_blank" rel="noopener noreferrer">
            Source
          </a>
          <a className="link-underline hover:text-ink" href="#top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
