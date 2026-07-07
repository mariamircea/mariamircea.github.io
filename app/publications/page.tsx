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
        description="Selected peer-reviewed publications and preprints."
      />

      <div className="mt-14">
        <PublicationList publications={publications} />
      </div>
    </Container>
  );
}
