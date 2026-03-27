type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-5">
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="font-serif text-4xl text-navy sm:text-5xl">{title}</h2>
        <p className="max-w-2xl text-base text-foreground/66 sm:text-lg">{description}</p>
      </div>
    </div>
  );
}
