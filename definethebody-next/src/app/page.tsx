"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[80vh] w-[95%] max-w-[1161px] mt-[30px] mx-auto text-center p-5 flex items-center justify-center rounded-[20px] overflow-hidden border border-white/20 max-sm:max-h-[240px] max-sm:bg-[length:105%] bg-[url('/images/logo.png')] bg-[length:85%] bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div className="relative z-[2] font-medium text-white max-w-[1200px] mx-auto w-full group drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[60px] max-sm:text-[33px] mb-5 mt-0 font-bold"
          >
            건강한 삶을 시작하세요
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-[40px] max-sm:text-[28px] max-w-[1200px] mx-auto mb-[50px] font-medium"
          >
            최신 장비와 전문 트레이너가 여러분을 기다리고 있습니다
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            href="https://map.naver.com/p/entry/place/1960250523?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.0151611&lat=37.6086138&c=15.00,0,0,0,dh"
            target="_blank"
            className="bg-primary-red hover:bg-hover-red text-white py-3 px-6 text-[25px] font-semibold rounded-[20px] transition-colors duration-300 inline-block no-underline"
          >
            지금 방문하기
          </motion.a>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="flex flex-col items-center w-full max-w-[1200px] mx-auto my-5 mb-[50px]">
        <div className="grid grid-cols-4 gap-5 w-full max-w-[1200px] mx-auto px-5 max-sm:px-0 max-sm:grid-cols-1 max-sm:gap-2.5 max-sm:w-[100vw] max-sm:place-items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Link href="/event" className="relative text-white shadow-sm p-10 max-sm:pt-6 max-sm:pb-[30px] rounded-[15px] text-left transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] flex flex-col justify-between h-[200px] w-full min-w-[205px] overflow-hidden bg-[url('/images/event/event-banner1.jpg')] bg-cover bg-center bg-no-repeat group max-sm:w-[98vw] max-sm:h-[180px]">
              <div className="absolute inset-0 bg-black/50 z-[1]" />
              <div className="relative z-[2] font-semibold flex flex-col justify-between h-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
                <h3 className="text-[30px] max-sm:text-[28px] m-0 text-white font-bold tracking-wide">EVENT</h3>
                <p className="text-[20px] max-sm:text-[16px] mt-2.5 mb-0 text-white max-sm:break-keep max-sm:whitespace-normal font-medium leading-tight">디파인더바디의<br/>이벤트와 프로모션을<br/> 확인하세요</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/trainers" className="relative text-white shadow-sm p-10 max-sm:pt-6 max-sm:pb-[30px] rounded-[15px] text-left transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] flex flex-col justify-between h-[200px] w-full min-w-[205px] overflow-hidden bg-[url('/images/home/staff.jpg')] bg-cover bg-center bg-no-repeat group max-sm:w-[98vw] max-sm:h-[180px]">
              <div className="absolute inset-0 bg-black/50 z-[1]" />
              <div className="relative z-[2] font-semibold flex flex-col justify-between h-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
                <h3 className="text-[30px] max-sm:text-[28px] m-0 text-white font-bold tracking-wide">STAFF</h3>
                <p className="text-[20px] max-sm:text-[16px] mt-2.5 mb-0 text-white max-sm:break-keep max-sm:whitespace-normal font-medium leading-tight">디파인더바디의<br/>열정적인 스태프들을<br/>만나보세요</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/facilities" className="relative text-white shadow-sm p-10 max-sm:pt-6 max-sm:pb-[30px] rounded-[15px] text-left transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] flex flex-col justify-between h-[200px] w-full min-w-[205px] overflow-hidden bg-[url('/images/home/gym.JPEG')] bg-cover bg-center bg-no-repeat group max-sm:w-[98vw] max-sm:h-[180px]">
              <div className="absolute inset-0 bg-black/50 z-[1]" />
              <div className="relative z-[2] font-semibold flex flex-col justify-between h-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
                <h3 className="text-[30px] max-sm:text-[28px] m-0 text-white font-bold tracking-wide">GYM</h3>
                <p className="text-[20px] max-sm:text-[16px] mt-2.5 mb-0 text-white max-sm:break-keep max-sm:whitespace-normal font-medium leading-tight">디파인더바디의<br/>최신 장비와 쾌적한<br/>환경을 경험하세요</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="relative text-white shadow-sm p-10 max-sm:pt-6 max-sm:pb-[30px] rounded-[15px] text-left transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] flex flex-col justify-between h-[200px] w-full min-w-[205px] overflow-hidden bg-[url('/images/home/contact.jpg')] bg-cover bg-center bg-no-repeat group max-sm:w-[98vw] max-sm:h-[180px]">
              <div className="absolute inset-0 bg-black/50 z-[1]" />
              <div className="relative z-[2] font-semibold flex flex-col justify-between h-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
                <h3 className="text-[30px] max-sm:text-[28px] m-0 text-white font-bold tracking-wide">CONTACT US</h3>
                <p className="text-[20px] max-sm:text-[16px] mt-2.5 mb-0 text-white max-sm:break-keep max-sm:whitespace-normal font-medium leading-tight">디파인더바디에게<br/>궁금한 점이 있으면<br/>문의해주세요</p>
              </div>
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
