import type { Metadata } from "next";
import { BottomNav } from "@/components/ui/bottomNav"; // 👈 방금 만든 하단 바 가져오기
import "./globals.css";

export const metadata: Metadata = {
  title: "Hooping - 매치 관리 앱",
  description: "모바일에서 즐기는 농구 매치 검색 및 관리",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="ko">
      <body>
        {/* 하단 바 공간 확보를 위해 pb-16(패딩 바텀 64px)을 부여합니다 */}
        <div className="relative min-h-screen pb-16">
          {children}
          
          {/* 전역 고정 하단 네비게이션 바 */}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
