const circles = [
  {
    label: ["Machine", "Learning"],
    className: "left-1/2 top-2 -translate-x-1/2",
    labelClassName: "items-center justify-start pt-14",
  },
  {
    label: ["Mechanistic", "Understanding"],
    className: "bottom-4 left-5",
    labelClassName: "items-start justify-start pt-25 pl-4",
  },
  {
    label: ["Biomedical", "Data"],
    className: "bottom-4 right-5",
    labelClassName: "items-start justify-start pt-25 pl-28",
  },
];

export function ConceptDiagram() {
  return (
    <figure
      className="relative mx-auto aspect-square w-full max-w-[25rem]"
      aria-label="Machine learning, mechanistic understanding, and biomedical data intersecting toward precision medicine."
    >
      <div className="absolute -left-1 -right-1 top-2 -bottom-1 rounded-full border border-stone-200" />
      {circles.map((circle) => (
        <div
          key={circle.label.join(" ")}
          aria-label={circle.label.join(" ")}
          className={`absolute flex aspect-square w-[58%] flex-col rounded-full border border-stone-300 bg-stone-50/45 p-5 text-center text-sm font-medium leading-5 text-stone-700 ${circle.labelClassName} ${circle.className}`}
        >
          <span>
            {circle.label.map((word, index) => (
              <span key={word} className="block">
                {word}
                {index < circle.label.length - 1 ? " " : ""}
              </span>
            ))}
          </span>
        </div>
      ))}
      <div className="absolute left-1/2 top-[54%] z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-teal-700/35 bg-stone-50/90 px-4 text-center text-sm font-semibold leading-5 text-teal-900 shadow-[0_0_0_1px_rgba(250,250,249,0.85)]">
        <span>
          <span className="block">Precision </span>
          <span className="block">Medicine</span>
        </span>
      </div>
      <figcaption className="sr-only">
        Precision Medicine sits at the overlap of Machine Learning,
        Mechanistic Understanding, and Biomedical Data.
      </figcaption>
    </figure>
  );
}
