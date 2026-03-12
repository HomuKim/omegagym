"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    image: "/images/event/event-banner1.jpg",
    title: "다시는 없을 기회! 오픈 1주년 역대급 혜택 공개",
    description: "1년에 단 한 번!<br>오픈 1주년을 맞아 역대급 혜택을 준비했습니다.<br>헬스장 등록을 고민하셨다면, 지금이 최고의 기회입니다! 💪<br><br>🎁 프로모션 혜택<br>상품명 정가 프로모션가 (VAT 포함)<br>🏋️‍♂️ 1년 회원권<br>정가 599,000원 → 330,000원 (VAT 포함)<br>🏋️‍♂️ 1년 회원권 + PT 10회<br>정가 1,655,000원 → 780,000원 (VAT 포함)<br>📢 안내사항<br>본 이벤트는 선착순 100명 한정으로 진행됩니다! ⏳<br><br>조기 마감될 수 있으니 서둘러 신청해 주세요! 🏃‍♂️💨<br><br>자세한 문의 및 상담은 메인페이지 [방문하기] 버튼 또는 대표전화로 연락해 주세요. ☎️<br><br>지금 바로 최고의 혜택을 만나보세요!<br>여러분의 건강한 변화를 응원합니다! 🥇<br><br>문의:<br>📞 010-7275-2477<br>📍 서경로 11길 6A동 2,3,4층 (연중무휴)<br><br>인스타그램: @DEFINE_THEBODY_FITNESS<br>네이버: 디파인더바디짐<br><br>🏆 건강한 라이프의 시작,<br>디파인더바디짐이 함께합니다!"
  },
  {
    image: "/images/event/event-banner2.jpg",
    title: "리뷰 이벤트 진행중!",
    description: "네이버 영수증 리뷰 작성 시 아메리카노 혹은 프로틴 증정!" // 예시 추가
  }
];

export default function EventPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center bg-black/60 text-white text-center py-1 px-5 my-[30px] mx-auto max-w-[1160px] min-h-[280px] max-sm:min-h-[175px] max-sm:w-[350px] max-sm:p-2.5 rounded-[20px] overflow-hidden leading-[1.6]"
      >
        <div className="absolute inset-0 bg-[url('/images/logo.png')] bg-[length:50%] max-sm:bg-[length:85%] bg-center bg-no-repeat opacity-30 z-[-1]" />
        <h1 className="text-5xl max-sm:text-[23px] mb-5 font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">목표 달성의 부스터, 지금 시작됩니다</h1>
        <p className="text-xl max-sm:text-[17px] max-w-[600px] mx-auto mb-[30px] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]">회원님들을 위한 특별한 이벤트를 확인하세요</p>
      </motion.section>

      {/* Content */}
      <section className="flex justify-between items-start max-w-[1200px] w-full mx-auto p-5 max-sm:flex-col max-sm:pt-0">
        <div className="relative w-[48%] max-sm:w-full max-sm:mb-5">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={events[currentIndex].image} 
              alt="이벤트 이미지" 
              className="w-full h-auto rounded-[10px]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </AnimatePresence>

          {events.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 left-2.5 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white border-0 py-2.5 px-4 cursor-pointer text-[18px] transition-colors duration-300 active:scale-95"
              >
                &#10094;
              </button>
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-2.5 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white border-0 py-2.5 px-4 cursor-pointer text-[18px] transition-colors duration-300 active:scale-95"
              >
                &#10095;
              </button>
            </>
          )}
        </div>
        <div className="w-[48%] max-sm:w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-[28px] max-sm:text-[24px] mb-[15px] font-bold">{events[currentIndex].title}</h2>
              <p 
                className="text-[18px] max-sm:text-[16px] leading-[1.6] whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: events[currentIndex].description }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
