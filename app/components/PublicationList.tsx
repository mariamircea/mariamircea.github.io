"use client";

import { useMemo, useState } from "react";
import type { Publication, PublicationTheme } from "../data/site";
import { publicationThemes } from "../data/site";

function HighlightedAuthors({ authors }: { authors: string }) {
  const parts = authors.split("Maria Mircea");

  return (
    <>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {part}
          {index < parts.length - 1 ? (
            <strong className="font-semibold text-stone-950">
              Maria Mircea
            </strong>
          ) : null}
        </span>
      ))}
    </>
  );
}

function ThemeFilter({
  selectedThemes,
  onToggle,
  onClear,
}: {
  selectedThemes: PublicationTheme[];
  onToggle: (theme: PublicationTheme) => void;
  onClear: () => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Publication themes">
      <button
        type="button"
        onClick={onClear}
        aria-pressed={selectedThemes.length === 0}
        className={`rounded-sm border px-3 py-2 text-sm font-medium transition ${
          selectedThemes.length === 0
            ? "border-stone-950 bg-stone-950 text-white"
            : "border-stone-300 text-stone-700 hover:border-stone-950 hover:text-stone-950"
        }`}
      >
        All
      </button>
      {publicationThemes.map((theme) => {
        const isSelected = selectedThemes.includes(theme);

        return (
          <button
            key={theme}
            type="button"
            onClick={() => onToggle(theme)}
            aria-pressed={isSelected}
            className={`rounded-sm border px-3 py-2 text-sm font-medium transition ${
              isSelected
                ? "border-teal-800 bg-teal-800 text-white"
                : "border-stone-300 text-stone-700 hover:border-stone-950 hover:text-stone-950"
            }`}
          >
            {theme}
          </button>
        );
      })}
    </div>
  );
}

export function PublicationList({
  publications,
}: {
  publications: Publication[];
}) {
  const [selectedThemes, setSelectedThemes] = useState<PublicationTheme[]>([]);

  const filteredPublications = useMemo(() => {
    if (selectedThemes.length === 0) {
      return publications;
    }

    return publications.filter((publication) =>
      selectedThemes.some((theme) => publication.themes.includes(theme)),
    );
  }, [publications, selectedThemes]);

  function toggleTheme(theme: PublicationTheme) {
    setSelectedThemes((currentThemes) =>
      currentThemes.includes(theme)
        ? currentThemes.filter((currentTheme) => currentTheme !== theme)
        : [...currentThemes, theme],
    );
  }

  return (
    <div>
      <ThemeFilter
        selectedThemes={selectedThemes}
        onToggle={toggleTheme}
        onClear={() => setSelectedThemes([])}
      />

      <ol className="mt-9 space-y-7">
        {filteredPublications.map((publication) => (
          <li
            key={`${publication.title}-${publication.year}`}
            className="grid gap-3 border-t border-stone-200 pt-6 sm:grid-cols-[4.5rem_minmax(0,1fr)]"
          >
            <div className="text-sm font-semibold text-stone-950">
              {publication.year}
            </div>
            <article>
              <h2 className="text-lg font-semibold leading-7 text-stone-950">
                {publication.title}
              </h2>
              <p className="mt-2 leading-7 text-stone-700">
                <HighlightedAuthors authors={publication.authors} />
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-500">
                <span className="italic">{publication.venue}</span>
                {publication.details ? ` ${publication.details}` : null}
                {". "}
                <a
                  href={publication.href}
                  className="font-medium text-teal-800 underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {publication.linkLabel}
                </a>
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {publication.themes.map((theme) => (
                  <li
                    key={theme}
                    className="rounded-sm border border-stone-200 px-2 py-1 text-xs text-stone-600"
                  >
                    {theme}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
