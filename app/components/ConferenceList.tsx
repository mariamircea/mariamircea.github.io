import type { Conference } from "../data/site";

export function ConferenceList({
  conferences,
}: {
  conferences: Conference[];
}) {
  return (
    <ol className="space-y-6">
      {conferences.map((conference) => (
        <li
          key={`${conference.date}-${conference.name}`}
          className="grid gap-3 border-t border-stone-200 pt-5 sm:grid-cols-[5rem_minmax(0,1fr)]"
        >
          <div className="text-sm font-semibold text-stone-950">
            {conference.date}
          </div>
          <article>
            <h3 className="text-lg font-semibold leading-7 text-stone-950">
              {conference.name}
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              {conference.location}
            </p>
            <p className="mt-2 leading-7 text-stone-700">
              <span className="font-medium text-stone-950">
                {conference.type}:
              </span>{" "}
              <span className="italic">{conference.title}</span>
            </p>
            {conference.links || conference.note ? (
              <p className="mt-2 text-sm text-stone-500">
                {conference.links?.map((link, index) => (
                  <span key={link.href}>
                    {index > 0 ? ", " : null}
                    <a
                      href={link.href}
                      className="font-medium text-teal-800 underline-offset-4 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  </span>
                ))}
                {conference.links && conference.note ? " · " : null}
                {conference.note}
              </p>
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  );
}
