import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "디파인더바디 | 헬스장, PT, 트레이너, 이벤트",
  description: "디파인더바디  - 최신 헬스장 시설, 전문 트레이너, PT, 다양한 이벤트와 프로모션 안내. 건강한 삶을 위한 최고의 선택!",
  openGraph: {
    title: "디파인더바디 | 건강한 삶의 시작",
    description: "최신 헬스장 시설, 전문 트레이너, 다양한 이벤트 안내. 디파인더바디에서 건강을 시작하세요!",
    url: "https://definethebody.com/",
    type: "website",
    images: ["https://definethebody.com/images/logo.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
