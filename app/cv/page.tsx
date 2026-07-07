import { Container } from "../components/Container";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { education, experience, type CvEntry } from "../data/site";

function Timeline({ entries }: { entries: CvEntry[] }) {
  return (
    <div className="relative space-y-8 before:absolute before:bottom-0 before:left-2 before:top-2 before:w-px before:bg-stone-200 sm:before:left-[8.5rem]">
      {entries.map((entry) => (
        <article
          key={`${entry.title}-${entry.dates}`}
          className="relative grid gap-3 pl-8 sm:grid-cols-[9rem_minmax(0,1fr)] sm:pl-0"
        >
          <div className="text-sm font-medium text-stone-500 sm:pr-6">
            {entry.dates}
          </div>
          <div className="absolute left-[0.35rem] top-1.5 h-3 w-3 rounded-full border border-stone-300 bg-stone-50 sm:left-[8.15rem]" />
          <div>
            <h3 className="text-lg font-semibold leading-7 text-stone-950">
              {entry.title}
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              {entry.organization}, {entry.location}
            </p>
            {entry.tags ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-sm border border-stone-200 px-2 py-1 text-xs text-stone-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function CvPage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageHeader
        eyebrow="CV"
        title="Curriculum vitae"
      />

      <div className="mt-14 space-y-14">
        <Section title="Experience">
          <Timeline entries={experience} />
        </Section>

        <Section title="Education">
          <Timeline entries={education} />
        </Section>
      </div>
    </Container>
  );
}
