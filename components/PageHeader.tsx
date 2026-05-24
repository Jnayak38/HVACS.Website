import { Reveal } from "@/components/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="industrial-grid bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase text-brand-cyan">{eyebrow}</p>
          <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
