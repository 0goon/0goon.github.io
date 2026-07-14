export type ParagraphBlock = {
  id: string;
  type: "paragraph";
  value: string;
};

export type ImageBlock = {
  id: string;
  type: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type TableBlock = {
  id: string;
  type: "table";
  caption: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  rowHeaderColumn?: number;
};

export type CodeBlock = {
  id: string;
  type: "code";
  language: string;
  value: string;
};

export type QuoteBlock = {
  id: string;
  type: "quote";
  value: string;
};

export type BulletListBlock = {
  id: string;
  type: "bullets";
  items: readonly string[];
};

export type ContentBlock =
  | ParagraphBlock
  | ImageBlock
  | TableBlock
  | CodeBlock
  | QuoteBlock
  | BulletListBlock;

export type ContentSection = {
  id: string;
  heading: string;
  blocks: readonly ContentBlock[];
};
