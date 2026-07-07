import Link from "next/link";
import { Container } from "./components/Container";
import { PageHeader } from "./components/PageHeader";
import { Section } from "./components/Section";
import { externalLinks, profile, publications } from "./data/site";

export default function Home() {
  return (
    <Container className="py-16 sm:py-24">
      <section className="max-w-3xl">
        <PageHeader title={profile.name} description={profile.title} />
        <ul className="mt-8 flex flex-wrap gap-3">
          {profile.roles.map((role) => (
            <li
              key={role}
              className="rounded-sm border border-stone-200 px-3 py-2 text-sm text-stone-700"
            >
              {role}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg leading-8 text-stone-700">
          {profile.introduction}
        </p>
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
      </section>

      <div className="mt-20">
        <Section title="Selected Publications" className="mt-0">
          <ul className="space-y-4">
            {publications.slice(0, 2).map((publication) => (
              <li key={publication.title}>
                <Link
                  href="/publications"
                  className="font-medium text-stone-950 underline-offset-4 hover:underline"
                >
                  {publication.title}
                </Link>
                <p className="mt-1 text-sm text-stone-500">
                  {publication.venue}, {publication.year}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </Container>
  );
}
