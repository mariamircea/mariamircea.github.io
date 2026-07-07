type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-teal-700">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl font-semibold text-stone-950 sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-6 text-lg leading-8 text-stone-600">{description}</p>
      ) : null}
    </header>
  );
}
