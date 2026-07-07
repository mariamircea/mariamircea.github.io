import Link from "next/link";
import { ConceptDiagram } from "./ConceptDiagram";
import { Container } from "./Container";
import { PageHeader } from "./PageHeader";
import { RandomPublications } from "./RandomPublications";
import { externalLinks, profile, publications } from "../data/site";

function pickRandomPublications(count: number) {
  return [...publications].sort(() => Math.random() - 0.5).slice(0, count);
}

export function AboutLanding() {
  const randomPublications = pickRandomPublications(2);

  return (
    <Container className="py-16 sm:py-24">
      <section className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:items-center">
        <div>
          <PageHeader
            eyebrow={profile.name}
            title={profile.title}
            description={profile.introduction}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {externalLinks.map((link) => {
              const isExternal = link.href.startsWith("http");

              return isExternal ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-sm border border-stone-300 px-4 py-2 text-sm font-medium text-stone-900 transition hover:border-stone-900 hover:bg-stone-900 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-sm border border-stone-300 px-4 py-2 text-sm font-medium text-stone-900 transition hover:border-stone-900 hover:bg-stone-900 hover:text-white"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        <ConceptDiagram />
      </section>

      <div className="mt-20 border-t border-stone-200 pt-10">
        <RandomPublications
          publications={publications}
          initialPublications={randomPublications}
        />
      </div>
    </Container>
  );
}
