import type { Publication } from "../data/site";

export function PublicationList({
  publications,
}: {
  publications: Publication[];
}) {
  return (
    <ol className="space-y-8">
      {publications.map((publication) => (
        <li
          key={`${publication.title}-${publication.year}`}
          className="border-l-2 border-stone-200 pl-5"
        >
          <article>
            <h2 className="text-xl font-semibold text-stone-950">
              {publication.title}
            </h2>
            <p className="mt-2 text-stone-700">{publication.authors}</p>
            <p className="mt-1 text-sm text-stone-500">
              {publication.venue}, {publication.year}
            </p>
            {publication.note ? (
              <p className="mt-2 text-sm font-medium text-teal-700">
                {publication.note}
              </p>
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  );
}
