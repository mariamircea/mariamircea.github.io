import Link from "next/link";
import { Container } from "./Container";
import { navigation, profile } from "../data/site";

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-stone-50/90">
      <Container className="flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="text-base font-semibold text-stone-950 underline-offset-4 hover:underline"
        >
          {profile.name.replace(", PhD", "")}
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-stone-600">
            {navigation.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="underline-offset-4 transition hover:text-stone-950 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
