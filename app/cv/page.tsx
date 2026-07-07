import { Container } from "../components/Container";
import { PageHeader } from "../components/PageHeader";
import { profile } from "../data/site";

export default function CvPage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageHeader
        eyebrow="CV"
        title="Curriculum vitae"
        description="Download the latest CV as a PDF."
      />

      <div className="mt-12 border-t border-stone-200 pt-8">
        <a
          href={profile.cvHref}
          className="inline-flex rounded-sm bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-800"
        >
          Download CV
        </a>
        <p className="mt-4 text-sm text-stone-500">
          Replace the placeholder PDF in the public folder when the final CV is
          ready.
        </p>
      </div>
    </Container>
  );
}
