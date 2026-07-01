type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="grid grid-cols-[200px_minmax(0,1fr)] gap-10 border-b border-blog-border pb-[54px] max-[760px]:grid-cols-1 max-[760px]:gap-5 max-[760px]:pb-[38px]">
      <p className="mt-2 font-mono text-[11px] font-bold tracking-[0.13em] text-blog-primary max-[760px]:mt-0">
        {eyebrow}
      </p>
      <div>
        <h2 className="max-w-[710px] text-[clamp(2rem,4vw,3rem)] leading-[1.23] font-[720] tracking-[-0.05em] max-[760px]:text-[34px] max-[480px]:text-[30px]">
          {title}
        </h2>
        {description ? (
          <span className="mt-[18px] block max-w-[630px] text-[15px] leading-[1.8] text-blog-muted">
            {description}
          </span>
        ) : null}
      </div>
    </div>
  );
}
