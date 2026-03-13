"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import { MessageCircle, Phone, MapPin, Dumbbell, Flower2, Building } from "lucide-react";

declare global {
  interface Window {
    naver: any;
  }
}


export default function ContactPage() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Naver Map Load
  useEffect(() => {
    if (isMapModalOpen && mapLoaded && mapRef.current) {
      if (window.naver && window.naver.maps) {
        const location = new window.naver.maps.LatLng(37.6086138, 127.0151611); // 임의 좌표 (길음역 근처)
        const mapOptions = {
          center: location,
          zoom: 15,
        };
        const map = new window.naver.maps.Map(mapRef.current, mapOptions);
        new window.naver.maps.Marker({
          position: location,
          map: map,
        });
      }
    }
  }, [isMapModalOpen, mapLoaded]);

  const faqs = [
    { q: "운영 시간은 어떻게 되나요?", a: "평일 06:00 - 24:00 /\n주말 및 공휴일 10:00 - 20:00 입니다." },
    { q: "휴무는 없나요?", a: "명절(설, 추석) 당일과 전날,\n1년 중 총 4일만 휴무입니다." },
    { q: "회원권 종류는 어떻게 되나요?", a: "1개월, 4개월, 7개월, 12개월 단위로 회원권을\n제공하고 있습니다. 자세한 내용은 문의 바랍니다." },
    { q: "개인락커와 운동복은 무료인가요?", a: "개인락커와 운동복은 결제 후 이용하셔야 합니다." },
    { q: "PT를 결제하면 회원권은 무료인가요?", a: "PT와 회원권은 별도로 결제 후 이용 하셔야 합니다" }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <Script
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=w4u0t9veg3"
        strategy="lazyOnload"
        onReady={() => setMapLoaded(true)}
      />

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center bg-text-main/90 text-bg-beige text-center py-1 px-5 my-[30px] mx-auto w-[95%] max-w-[1160px] h-[280px] max-sm:h-[180px] max-sm:p-2.5 rounded-[20px] overflow-hidden leading-[1.6] border border-primary-gold/20 shadow-[0_4px_20px_rgba(197,160,89,0.1)]"
      >
        <div className="absolute inset-0 bg-[url('/omegagym/images/logo.png')] bg-[length:400px] max-sm:bg-[length:220px] bg-center bg-no-repeat opacity-60 z-[-1]" />
        <h1 className="text-5xl max-sm:text-[24px] mb-5 font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-primary-gold">언제든 문의하세요</h1>
        <p className="text-xl max-sm:text-[14px] max-w-[600px] mx-auto mb-[30px] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] text-accent-silver-light">오메가짐은 여러분의 건강한 삶을 응원합니다.</p>
      </motion.section>

      <section className="max-w-[1200px] w-full mx-auto p-5 max-lg:px-5 pb-[60px]">
        {/* FAQ */}
        <div className="bg-bg-beige p-[30px] max-sm:p-5 rounded-[15px] shadow-[0_4px_15px_rgba(197,160,89,0.05)] mb-10 w-full border border-primary-gold/10">
          <h2 className="text-2xl font-bold mb-5 max-sm:text-xl text-primary-gold">자주 묻는 질문 (FAQ)</h2>
          <ul className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 list-none p-0 m-0 w-full">
            {faqs.map((faq, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-beige-soft p-5 rounded-[10px] border border-primary-gold/20 transition-all hover:-translate-y-1 hover:bg-bg-beige hover:shadow-[0_4px_15px_rgba(197,160,89,0.15)] hover:border-primary-gold"
              >
                <h3 className="text-[1.1rem] mb-2.5 text-text-main font-bold">{faq.q}</h3>
                <p className="text-[0.9rem] text-text-light leading-[1.5] whitespace-pre-line">{faq.a}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Grid */}
        <div className="w-full mb-[60px] max-sm:mb-[40px]">
          <h2 className="text-[28px] max-sm:text-[20px] text-center mb-10 max-sm:mb-5 font-bold text-text-main">문의하기</h2>
          <div className="grid grid-cols-3 gap-[30px] max-lg:grid-cols-2 max-sm:grid-cols-1 w-full justify-center">

            <motion.div
              whileHover={{ y: -5 }}
              onClick={() => window.open('https://talk.naver.com/ct/w6mnzhi?frm=mnmb&frm=nmb_detail#nafullscreen')}
              className="bg-bg-beige p-[30px] max-sm:p-4 rounded-[15px] text-center cursor-pointer border border-primary-gold/20 shadow-[0_4px_15px_rgba(197,160,89,0.05)] hover:shadow-[0_8px_25px_rgba(197,160,89,0.2)] hover:border-primary-gold/50 transition-all group"
            >
              <div className="text-[2.5rem] max-sm:text-[2rem] text-primary-gold mb-5 max-sm:mb-[15px] flex justify-center group-hover:scale-110 transition-transform"><MessageCircle size={40} /></div>
              <h3 className="text-[1.2rem] max-sm:text-[1rem] mb-[15px] font-bold text-text-main">채팅 문의</h3>
              <p className="text-[0.9rem] max-sm:text-[0.8rem] text-text-light my-1.25">평일 06:00 - 24:00<br />주말 및 공휴일 09:00 - 21:00</p>
              <p className="text-[0.9rem] max-sm:text-[0.8rem] text-text-light my-1.25">연중무휴</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-bg-beige p-[30px] max-sm:p-4 rounded-[15px] text-center border border-primary-gold/20 shadow-[0_4px_15px_rgba(197,160,89,0.05)] hover:shadow-[0_8px_25px_rgba(197,160,89,0.2)] hover:border-primary-gold/50 transition-all group"
            >
              <div className="text-[2.5rem] max-sm:text-[2rem] text-primary-gold mb-5 max-sm:mb-[15px] flex justify-center group-hover:scale-110 transition-transform"><Phone size={40} /></div>
              <h3 className="text-[1.2rem] max-sm:text-[1rem] mb-[15px] font-bold text-text-main">전화 문의</h3>
              <p className="text-[0.9rem] max-sm:text-[0.8rem] text-text-main font-bold my-1.25">010-5956-3611</p>
              <p className="text-[0.9rem] max-sm:text-[0.8rem] text-text-light my-1.25">평일 06:00 - 24:00 <br />주말 및 공휴일 09:00 - 21:00</p>
              <p className="text-[0.9rem] max-sm:text-[0.8rem] text-text-light my-1.25">연중무휴</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              onClick={() => setIsMapModalOpen(true)}
              className="bg-bg-beige p-[30px] max-sm:p-4 rounded-[15px] text-center cursor-pointer border border-primary-gold/20 shadow-[0_4px_15px_rgba(197,160,89,0.05)] hover:shadow-[0_8px_25px_rgba(197,160,89,0.2)] hover:border-primary-gold/50 transition-all group"
            >
              <div className="text-[2.5rem] max-sm:text-[2rem] text-primary-gold mb-5 max-sm:mb-[15px] flex justify-center group-hover:scale-110 transition-transform"><MapPin size={40} /></div>
              <h3 className="text-[1.2rem] max-sm:text-[1rem] mb-[15px] font-bold text-text-main">매장 찾기</h3>
              <p className="text-[0.9rem] max-sm:text-[0.8rem] text-text-light my-1.25">용민로 192 <br />웅신프라자 7층 오메가짐</p>
            </motion.div>

          </div>
        </div>

        {/* Programs */}
        <div className="bg-bg-beige p-[30px] max-sm:p-5 rounded-[15px] shadow-[0_4px_15px_rgba(197,160,89,0.05)] w-full mb-10 border border-primary-gold/10">
          <h2 className="text-2xl font-bold mb-5 max-sm:text-xl text-primary-gold">시설 및 운동 프로그램 안내</h2>
          <div className="flex justify-center mt-5 max-lg:flex-wrap w-full">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-5 bg-bg-beige-soft rounded-[10px] flex-1 mx-[10px] max-lg:flex-[0_0_calc(50%-20px)] max-lg:mb-5 max-sm:flex-[0_0_100%] max-sm:m-0 max-sm:mb-[15px] cursor-pointer hover:shadow-[0_8px_20px_rgba(197,160,89,0.15)] hover:border-primary-gold/50 transition-all border border-primary-gold/20 group"
            >
              <div className="text-[48px] max-sm:text-[36px] text-primary-gold mb-[15px] flex justify-center group-hover:scale-110 transition-transform"><Dumbbell size={48} /></div>
              <h3 className="font-bold text-lg mb-2 text-text-main">1:1 퍼스널 트레이닝</h3>
              <p className="text-sm text-text-light">전문 트레이너와 함께하는 맞춤형<br />운동 프로그램을 경험해보세요</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-5 bg-bg-beige-soft rounded-[10px] flex-1 mx-[10px] max-lg:flex-[0_0_calc(50%-20px)] max-lg:mb-5 max-sm:flex-[0_0_100%] max-sm:m-0 max-sm:mb-[15px] cursor-pointer hover:shadow-[0_8px_20px_rgba(197,160,89,0.15)] hover:border-primary-gold/50 transition-all border border-primary-gold/20 group"
            >
              <div className="text-[48px] max-sm:text-[36px] text-primary-gold mb-[15px] flex justify-center group-hover:scale-110 transition-transform"><Flower2 size={48} /></div>
              <h3 className="font-bold text-lg mb-2 text-text-main">1:1 필라테스</h3>
              <p className="text-sm text-text-light">코어 강화와 유연성 향상을 위한<br />전문 필라테스 프로그램을 경험해보세요</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              onClick={() => setVideoUrl('4Y6ieG5NXis')}
              className="text-center p-5 bg-bg-beige-soft rounded-[10px] flex-1 mx-[10px] max-lg:flex-[0_0_calc(50%-20px)] max-lg:mb-5 max-sm:flex-[0_0_100%] max-sm:m-0 max-sm:mb-[15px] cursor-pointer hover:shadow-[0_8px_20px_rgba(197,160,89,0.15)] hover:border-primary-gold/50 transition-all border border-primary-gold/20 group"
            >
              <div className="text-[48px] max-sm:text-[36px] text-primary-gold mb-[15px] flex justify-center group-hover:scale-110 transition-transform"><Building size={48} /></div>
              <h3 className="font-bold text-lg mb-2 text-text-main">최고의 시설</h3>
              <p className="text-sm text-text-light">함께 운동하며 건강과 즐거움을 찾아가는<br />여정을 경험해보세요</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Modal */}
      <AnimatePresence>
        {isMapModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center p-5"
            onClick={() => setIsMapModalOpen(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg-beige w-[80%] max-w-[600px] max-sm:w-[90%] p-5 rounded-[15px] shadow-[0_10px_40px_rgba(197,160,89,0.2)] border border-primary-gold/30 relative"
            >
              <button
                onClick={() => setIsMapModalOpen(false)}
                className="absolute top-2 right-4 text-[28px] max-sm:text-[24px] max-sm:top-1 max-sm:right-[15px] text-accent-silver hover:text-hover-gold font-bold transition-colors"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4 text-primary-gold">매장 위치</h2>
              <div ref={mapRef} className="w-full h-[400px] max-sm:h-[300px] rounded-[10px] bg-bg-beige-soft border border-primary-gold/20" />
            </motion.div>
          </motion.div>
        )}

        {/* Video Modal */}
        {videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[1000] flex items-center justify-center p-5"
            onClick={() => setVideoUrl(null)}
          >
            <div className="relative w-[90%] max-w-[800px]">
              <button
                onClick={() => setVideoUrl(null)}
                className="absolute -top-[40px] right-0 text-white hover:text-gray-300 text-[28px] font-bold z-[1001]"
              >
                &times;
              </button>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-[10px]">
                <iframe
                  src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
