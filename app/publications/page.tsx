import { Container } from "../components/Container";
import { PageHeader } from "../components/PageHeader";
import { PublicationList } from "../components/PublicationList";
import { publications } from "../data/site";

export default function PublicationsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageHeader
        eyebrow="Publications"
        title="Publications"
        description="A clean, maintainable publication list. Placeholder entries can later be replaced or populated from Google Scholar."
      />

      <div className="mt-14">
        <PublicationList publications={publications} />
      </div>
    </Container>
  );
}
