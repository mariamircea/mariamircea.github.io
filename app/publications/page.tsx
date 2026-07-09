import { Container } from "../components/Container";
import { PageHeader } from "../components/PageHeader";
import { PublicationTabs } from "../components/PublicationTabs";
import { conferences, publications } from "../data/site";

export default function PublicationsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageHeader
        eyebrow="Publications"
        title="Publications"
        description="Publications and preprints."
      />

      <div className="mt-14">
        <PublicationTabs
          publications={publications}
          conferences={conferences}
        />
      </div>
    </Container>
  );
}
