"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // 👈 현재 브라우저 주소를 읽어오는 도구
import { Search, PlusCircle, User } from "lucide-react"; // 👈 이쁜 아이콘들

export function BottomNav() {
  const pathname = usePathname(); // 현재 주소 (예: "/", "/create", "/profile")

  // 하단 탭 메뉴 데이터 정의
  const navItems = [
    {
      label: "매치 검색",
      href: "/",
      icon: Search,
    },
    {
      label: "매치 생성",
      href: "/create",
      icon: PlusCircle,
    },
    {
      label: "내 정보",
      href: "/management",
      icon: User,
    },
  ];

  return (
    // 모바일 레이아웃(max-w-md) 크기에 맞추어 화면 하단에 고정
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-16 bg-white border-t border-slate-200 shadow-[0_-2px_10px_rgba(0,0,0,0.03)] z-50 flex items-center justify-around px-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        // 현재 페이지 주소와 메뉴의 링크가 일치하는지 확인
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            draggable="false"
            className="flex flex-col items-center justify-center w-20 h-full space-y-1 transition-colors select-none"
          >
            {/* 활성화 상태에 따라 아이콘 색상 변경 (활성화: 에메랄드, 비활성화: 슬레이트 회색) */}
            <Icon
              className={`w-5 h-5 transition-transform active:scale-95 ${
                isActive ? "text-emerald-600 stroke-[2.5]" : "text-slate-400 stroke-[1.8]"
              }`}
            />
            <span
              className={`text-[10px] font-medium tracking-tight ${
                isActive ? "text-emerald-600 font-bold" : "text-slate-500"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
