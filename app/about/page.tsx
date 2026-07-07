import { Container } from "../components/Container";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import {
  biography,
  currentPosition,
  education,
  researchInterests,
} from "../data/site";

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageHeader
        eyebrow="About"
        title="Biography and research background"
        description="A concise overview of training, current work, and research interests."
      />

      <div className="mt-14 space-y-14">
        <Section title="Biography">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-stone-700">
            {biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section title="Education">
          <ul className="max-w-3xl space-y-3 text-stone-700">
            {education.map((item) => (
              <li key={item} className="border-l-2 border-stone-200 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Current Position">
          <p className="max-w-3xl text-lg leading-8 text-stone-700">
            {currentPosition}
          </p>
        </Section>

        <Section title="Research Interests">
          <ul className="grid gap-3 sm:grid-cols-2">
            {researchInterests.map((interest) => (
              <li
                key={interest}
                className="rounded-sm border border-stone-200 bg-white px-4 py-3 text-stone-700"
              >
                {interest}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </Container>
  );
}
