"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

// 임시 아이템 데이터 리스트
export const MOCK_ITEMS = [
  { id: 1, name: "고급 농구공", category: "스포츠", price: "45,000원", desc: "실내외 겸용 최고급 가죽 농구공입니다. 그립감이 뛰어납니다." },
  { id: 2, name: "에어 조던 운동화", category: "신발", price: "189,000원", desc: "클래식한 디자인과 편안한 쿠셔닝을 제공하는 한정판 스니커즈." },
  { id: 3, name: "스포츠 헤드밴드", category: "의류", price: "12,000원", desc: "땀 흡수가 빠르고 신축성이 뛰어난 기능성 헤드밴드입니다." },
  { id: 4, name: "트레이닝 조거팬츠", category: "의류", price: "39,000원", desc: "데일리 룩으로도 활용 가능한 편안한 핏의 조거팬츠." },
  { id: 5, name: "프로틴 쉐이커 보틀", category: "헬스", price: "8,500원", desc: "환경호르몬이 없는 친환경 소재의 믹싱 전용 보틀." },
  { id: 6, name: "고급 농구공", category: "스포츠", price: "45,000원", desc: "실내외 겸용 최고급 가죽 농구공입니다. 그립감이 뛰어납니다." },
  { id: 7, name: "에어 조던 운동화", category: "신발", price: "189,000원", desc: "클래식한 디자인과 편안한 쿠셔닝을 제공하는 한정판 스니커즈." },
  { id: 8, name: "스포츠 헤드밴드", category: "의류", price: "12,000원", desc: "땀 흡수가 빠르고 신축성이 뛰어난 기능성 헤드밴드입니다." },
  { id: 9, name: "트레이닝 조거팬츠", category: "의류", price: "39,000원", desc: "데일리 룩으로도 활용 가능한 편안한 핏의 조거팬츠." },
  { id: 10, name: "프로틴 쉐이커 보틀", category: "헬스", price: "8,500원", desc: "환경호르몬이 없는 친환경 소재의 믹싱 전용 보틀." },
];

export default function Home() {
  const [search, setSearch] = useState("");

  // 검색어 필터링 기능
  const filteredItems = MOCK_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // 전체 화면을 모바일 해상도(최대 480px) 크기로 고정하고 화면 중앙 정렬
    <div className="mx-auto w-full max-w-md h-screen flex flex-col bg-slate-50 border-x border-slate-200 overflow-hidden">
      
      {/* 📌 상단 고정 검색바 영역 */}
      <header className="p-4 bg-white border-b border-slate-200 shadow-sm z-10">
        <h1 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">아이템 검색</h1>
        <Input
          type="text"
          placeholder="검색어를 입력하세요..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-11 bg-slate-50 border-slate-200 focus-visible:ring-emerald-500" 
        />
      </header>

      {/* 📌 아래로 스크롤되는 아이템 리스트 영역 */}
      <main className="flex-1 overflow-y-auto p-4 space-y-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Link key={item.id} href={`/match/${item.id}`} className="block">
              <Card className="border-slate-200 bg-white active:scale-[0.98] transition-transform cursor-pointer">
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-semibold text-slate-800 mt-1.5">{item.name}</h3>
                  </div>
                  <span className="font-bold text-sm text-emerald-600">{item.price}</span>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div className="text-center py-20">
            <p className="text-sm text-slate-400">검색 결과가 없습니다 😢</p>
          </div>
        )}
      </main>
    </div>
  );
}
