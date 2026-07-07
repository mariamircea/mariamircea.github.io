"use client";

import Link from "next/link";
import { useState } from "react";
import type { Publication } from "../data/site";

function pickRandomPublications(publications: Publication[], count: number) {
  return [...publications]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export function RandomPublications({
  publications,
  initialPublications,
  count = 2,
}: {
  publications: Publication[];
  initialPublications: Publication[];
  count?: number;
}) {
  const [visiblePublications, setVisiblePublications] = useState(() =>
    initialPublications,
  );

  function shufflePublications() {
    setVisiblePublications(pickRandomPublications(publications, count));
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold text-stone-950">
          Random Publications
        </h2>
        <button
          type="button"
          onClick={shufflePublications}
          className="text-sm font-medium text-teal-800 underline-offset-4 hover:underline"
        >
          Shuffle
        </button>
      </div>
      <ul className="mt-6 space-y-4">
        {visiblePublications.map((publication) => (
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
    </div>
  );
}
