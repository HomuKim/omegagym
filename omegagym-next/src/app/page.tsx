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
        className="relative h-[60vh] w-[95%] max-w-[1161px] mt-[30px] mx-auto text-center p-5 flex items-center justify-center rounded-[20px] overflow-hidden border border-white/20 max-sm:max-h-[240px] bg-[url('/omegagym/images/logo.png')] bg-[length:400px] max-sm:bg-[length:200px] bg-center bg-no-repeat"
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
            href="https://map.naver.com/p/search/%EC%98%A4%EB%A9%94%EA%B0%80%EC%A7%90/place/2028181993?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202603131951&locale=ko&svcName=map_pcv5&searchText=%EC%98%A4%EB%A9%94%EA%B0%80%EC%A7%90"
            target="_blank"
            className="bg-primary-gold hover:bg-hover-gold text-white tracking-wide py-3 px-8 text-[25px] font-bold rounded-[30px] transition-all duration-300 inline-block no-underline shadow-[0_4px_15px_rgba(197,160,89,0.4)] hover:shadow-[0_6px_20px_rgba(197,160,89,0.6)]"
          >
            지금 방문하기
          </motion.a>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="flex flex-col items-center w-full max-w-[1200px] mx-auto my-5 mb-[50px]">
        <div className="grid grid-cols-4 gap-5 w-full max-w-[1200px] mx-auto px-5 max-sm:px-0 max-sm:grid-cols-1 max-sm:gap-4 max-sm:w-[100vw] max-sm:place-items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Link href="/event" className="relative text-white shadow-sm p-10 max-sm:pt-6 max-sm:pb-[30px] rounded-[15px] border border-transparent text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_-5px_rgba(197,160,89,0.3)] hover:border-primary-gold/50 flex flex-col justify-between h-[200px] w-full min-w-[205px] overflow-hidden bg-[url('/omegagym/images/event/event-banner1.jpg')] bg-cover bg-center bg-no-repeat group max-sm:w-[92vw] max-sm:h-[180px]">
              <div className="absolute inset-0 bg-black/50 z-[1] transition-opacity duration-500 group-hover:bg-black/40" />
              <div className="relative z-[2] font-semibold flex flex-col justify-between h-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)] group-hover:drop-shadow-[2px_2px_6px_rgba(197,160,89,0.5)]">
                <h3 className="text-[30px] max-sm:text-[28px] m-0 text-white font-bold tracking-wide group-hover:text-primary-gold transition-colors duration-300">EVENT</h3>
                <p className="text-[20px] max-sm:text-[16px] mt-2.5 mb-0 text-white max-sm:break-keep max-sm:whitespace-normal font-medium leading-tight">오메가짐의<br />이벤트와 프로모션을<br /> 확인하세요</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/trainers" className="relative text-white shadow-sm p-10 max-sm:pt-6 max-sm:pb-[30px] rounded-[15px] border border-transparent text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_-5px_rgba(197,160,89,0.3)] hover:border-primary-gold/50 flex flex-col justify-between h-[200px] w-full min-w-[205px] overflow-hidden bg-[url('/omegagym/images/home/staff.jpg')] bg-cover bg-center bg-no-repeat group max-sm:w-[92vw] max-sm:h-[180px]">
              <div className="absolute inset-0 bg-black/50 z-[1] transition-opacity duration-500 group-hover:bg-black/40" />
              <div className="relative z-[2] font-semibold flex flex-col justify-between h-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)] group-hover:drop-shadow-[2px_2px_6px_rgba(197,160,89,0.5)]">
                <h3 className="text-[30px] max-sm:text-[28px] m-0 text-white font-bold tracking-wide group-hover:text-primary-gold transition-colors duration-300">STAFF</h3>
                <p className="text-[20px] max-sm:text-[16px] mt-2.5 mb-0 text-white max-sm:break-keep max-sm:whitespace-normal font-medium leading-tight">오메가짐의<br />열정적인 스태프들을<br />만나보세요</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/facilities" className="relative text-white shadow-sm p-10 max-sm:pt-6 max-sm:pb-[30px] rounded-[15px] border border-transparent text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_-5px_rgba(197,160,89,0.3)] hover:border-primary-gold/50 flex flex-col justify-between h-[200px] w-full min-w-[205px] overflow-hidden bg-[url('/omegagym/images/home/gym.JPEG')] bg-cover bg-center bg-no-repeat group max-sm:w-[92vw] max-sm:h-[180px]">
              <div className="absolute inset-0 bg-black/50 z-[1] transition-opacity duration-500 group-hover:bg-black/40" />
              <div className="relative z-[2] font-semibold flex flex-col justify-between h-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)] group-hover:drop-shadow-[2px_2px_6px_rgba(197,160,89,0.5)]">
                <h3 className="text-[30px] max-sm:text-[28px] m-0 text-white font-bold tracking-wide group-hover:text-primary-gold transition-colors duration-300">GYM</h3>
                <p className="text-[20px] max-sm:text-[16px] mt-2.5 mb-0 text-white max-sm:break-keep max-sm:whitespace-normal font-medium leading-tight">오메가짐의<br />최신 장비와 쾌적한<br />환경을 경험하세요</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="relative text-white shadow-sm p-10 max-sm:pt-6 max-sm:pb-[30px] rounded-[15px] border border-transparent text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_-5px_rgba(197,160,89,0.3)] hover:border-primary-gold/50 flex flex-col justify-between h-[200px] w-full min-w-[205px] overflow-hidden bg-[url('/omegagym/images/home/contact.jpg')] bg-cover bg-center bg-no-repeat group max-sm:w-[92vw] max-sm:h-[180px]">
              <div className="absolute inset-0 bg-black/50 z-[1] transition-opacity duration-500 group-hover:bg-black/40" />
              <div className="relative z-[2] font-semibold flex flex-col justify-between h-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)] group-hover:drop-shadow-[2px_2px_6px_rgba(197,160,89,0.5)]">
                <h3 className="text-[30px] max-sm:text-[28px] m-0 text-white font-bold tracking-wide group-hover:text-primary-gold transition-colors duration-300">CONTACT US</h3>
                <p className="text-[20px] max-sm:text-[16px] mt-2.5 mb-0 text-white max-sm:break-keep max-sm:whitespace-normal font-medium leading-tight">오메가짐에게<br />궁금한 점이 있으면<br />문의해주세요</p>
              </div>
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
