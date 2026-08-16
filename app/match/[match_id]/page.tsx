"use client";

import { use } from "react";
import Link from "next/link";
import { MOCK_ITEMS } from "../../page"; // 메인 페이지의 데이터 가져오기

interface PageProps {
  params: Promise<{ match_id: string }>;
}

export default function MatchDetailPage({ params }: PageProps) {
  // 주소창의 id를 안전하게 읽어옵니다 (예: /item/2 면 "2")
  const resolvedParams = use(params);
  const matchId = parseInt(resolvedParams.match_id, 10);

  // 데이터 목록에서 현재 id와 일치하는 아이템 찾기
  const item = MOCK_ITEMS.find((i) => i.id === matchId);

  // 만약 엉뚱한 주소로 들어와서 아이템이 없다면 예외 처리
  if (!item) {
    return (
      <div className="mx-auto w-full max-w-md h-screen flex flex-col items-center justify-center bg-white p-4">
        <p className="text-slate-500 mb-4">존재하지 않는 아이템입니다.</p>
        <Link href="/" className="px-4 py-2 bg-slate-900 text-white rounded-lg">목록으로</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md h-screen flex flex-col bg-white md:border-x md:border-slate-200 overflow-hidden">
      
      {/* 📌 상단 헤더 (뒤로가기 버튼 포함) */}
      <header className="h-14 border-b border-slate-100 flex items-center px-4 justify-between">
        <Link href="/" className="text-slate-600 font-medium text-sm flex items-center gap-1 active:opacity-60">
          ◀ 뒤로가기
        </Link>
        <span className="font-bold text-slate-800">상세보기</span>
        <div className="w-14"></div> {/* 좌우 밸런스를 위한 더미 공간 */}
      </header>

      {/* 📌 상세 정보 본문 영역 */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* 가짜 사진 공간 (추후 사진 넣을 자리) */}
        <div className="w-full aspect-video bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 border-dashed">
          <span className="text-sm text-slate-400">📷 사진 준비 중</span>
        </div>

        {/* 카테고리 및 제목 */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full w-max block">
            {item.category}
          </span>
          <h2 className="text-2xl font-bold text-slate-900">{item.name}</h2>
          <p className="text-xl font-extrabold text-slate-800">{item.price}</p>
        </div>

        <hr className="border-slate-100" />

        {/* 상세 내용 세세한 정보 */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">상품 상세 설명</h3>
          <p className="text-slate-700 leading-relaxed text-base">{item.desc}</p>
        </div>
      </main>

    </div>
  );
}
