import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-[68vh] flex-col items-center justify-center px-6 py-20 text-center"
    >
      <p className="mb-[18px] font-mono text-xs font-bold tracking-[0.16em] text-blog-primary">
        404
      </p>
      <h1 className="text-[clamp(30px,5vw,46px)] font-bold tracking-[-0.05em]">
        이 페이지는 아직 기록되지 않았어요.
      </h1>
      <span className="mt-[17px] text-sm text-blog-muted">
        주소를 다시 확인하거나, 홈에서 다른 이야기를 둘러보세요.
      </span>
      <Link
        className="mt-[30px] inline-flex items-center gap-2 rounded-full bg-blog-primary px-[18px] py-3 text-[13px] font-bold text-white"
        href="/"
      >
        <ArrowLeft size={17} aria-hidden="true" />
        홈으로 돌아가기
      </Link>
    </main>
  );
}
