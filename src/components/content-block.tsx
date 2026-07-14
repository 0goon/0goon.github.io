import Image from "next/image";
import type { ContentBlock as ContentBlockData } from "@/data/content";

type ContentBlockProps = {
  block: ContentBlockData;
};

function assertUnreachable(block: never): never {
  throw new Error(`지원하지 않는 콘텐츠 블록입니다: ${JSON.stringify(block)}`);
}

export function ContentBlock({ block }: ContentBlockProps) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="mb-5 text-base leading-[2] tracking-[-0.01em] text-[#334e68] max-[760px]:text-[15px] max-[760px]:leading-[1.9]">
          {block.value}
        </p>
      );

    case "image":
      return (
        <figure className="my-9">
          <div className="overflow-hidden rounded-2xl border border-blog-border bg-blog-soft shadow-card">
            <Image
              alt={block.alt}
              className="h-auto w-full"
              height={block.height}
              sizes="(max-width: 760px) calc(100vw - 36px), 720px"
              src={block.src}
              width={block.width}
            />
          </div>
          {block.caption ? (
            <figcaption className="mt-3 px-1 text-center text-xs leading-[1.7] text-blog-subtle">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case "quote":
      return (
        <blockquote className="my-8 rounded-r-xl border-l-[3px] border-blog-sky bg-[#f2f9ff] px-[25px] py-[22px] text-[15px] leading-[1.8] font-medium text-[#27638d]">
          {block.value}
        </blockquote>
      );

    case "bullets":
      return (
        <ul className="my-7 flex list-disc flex-col gap-3 pl-6 text-[#334e68] marker:text-blog-sky">
          {block.items.map((item) => (
            <li
              className="pl-[5px] text-[15px] leading-[1.8]"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div
          aria-label={`${block.caption} 표`}
          className="my-9 overflow-x-auto rounded-2xl border border-blog-border bg-white shadow-card"
          role="region"
          tabIndex={0}
        >
          <table className="w-full min-w-[680px] border-collapse text-left">
            <caption className="border-b border-blog-border bg-[#f8fcff] px-5 py-4 text-left text-sm font-semibold text-blog-text">
              {block.caption}
            </caption>
            <thead>
              <tr className="bg-blog-soft">
                {block.headers.map((header) => (
                  <th
                    className="border-b border-blog-border px-5 py-3.5 text-xs font-bold whitespace-nowrap text-blog-primary"
                    key={header}
                    scope="col"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="[&_tr:last-child>*]:border-b-0">
              {block.rows.map((row, rowIndex) => (
                <tr
                  className="transition-colors duration-150 hover:bg-[#f8fcff]"
                  key={`${block.id}-${rowIndex}`}
                >
                  {row.map((cell, cellIndex) =>
                    block.rowHeaderColumn === cellIndex ? (
                      <th
                        className="border-b border-blog-border px-5 py-4 text-[13px] leading-[1.7] font-semibold whitespace-nowrap text-blog-text"
                        key={`${block.id}-${rowIndex}-${cellIndex}`}
                        scope="row"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        className="border-b border-blog-border px-5 py-4 text-[13px] leading-[1.7] text-[#486581]"
                        key={`${block.id}-${rowIndex}-${cellIndex}`}
                      >
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "code":
      return (
        <div className="my-[34px] overflow-hidden rounded-[14px] border border-slate-800 bg-blog-code shadow-[0_16px_42px_rgba(15,23,42,0.14)]">
          <div className="flex items-center justify-between border-b border-slate-800 px-4 py-[11px] font-mono text-[9px] text-slate-500">
            <span className="text-sky-300">{block.language}</span>
            <span aria-hidden="true">•••</span>
          </div>
          <pre className="overflow-x-auto p-[23px]">
            <code className="font-mono text-xs leading-[1.8] text-blue-100">
              {block.value}
            </code>
          </pre>
        </div>
      );

    default:
      return assertUnreachable(block);
  }
}
