import { Container } from "./Container";
import { profile } from "../data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200">
      <Container className="flex flex-col gap-4 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 {profile.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
