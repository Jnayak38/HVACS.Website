type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase text-brand-blue dark:text-brand-cyan">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
