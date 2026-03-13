"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type TabConfig = {
  id: string;
  label: string;
  folder: string;
  prefix: string;
  ext: string;
};

const facilityTabs: TabConfig[] = [
  { id: "floor2", label: "2nd Floor", folder: "floor2", prefix: "facility", ext: "jpg" },
  { id: "floor3", label: "3rd Floor", folder: "floor3", prefix: "facility", ext: "jpg" },
  { id: "floor4", label: "4th Floor", folder: "floor4", prefix: "facility", ext: "jpg" },
  { id: "PTRoom", label: "P.T Room", folder: "P.T Room", prefix: "P.T", ext: "jpg" },
  { id: "PilatesRoom", label: "Pilates Room", folder: "Pilates Room", prefix: "Pilates", ext: "jpg" },
  { id: "ShowerRoom", label: "Shower Room", folder: "Shower Room", prefix: "shower", ext: "jpg" }
];

export default function FacilitiesPage() {
  const [activeTab, setActiveTab] = useState<string>("floor2");
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = () => {
      const activeConfig = facilityTabs.find(t => t.id === activeTab);
      if (!activeConfig) return;

      const loadedImages: string[] = [];
      const imageCount = 20;

      for (let i = 1; i <= imageCount; i++) {
        const src = `/omegagym/images/facility/${activeConfig.folder}/${activeConfig.prefix}${i}.${activeConfig.ext}`;
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
          loadedImages.push(src);
          // Sort by number
          setImages([...loadedImages].sort((a, b) => {
            const numA = parseInt(a.match(/(\d+)\.\w+$/)?.[1] || "0");
            const numB = parseInt(b.match(/(\d+)\.\w+$/)?.[1] || "0");
            return numA - numB;
          }));
        };
      }
    };

    setImages([]);
    loadImages();

  }, [activeTab]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center bg-text-main/90 text-bg-beige text-center py-1 px-5 my-[30px] mx-auto w-[95%] max-w-[1160px] h-[280px] max-sm:h-[180px] max-sm:p-2.5 rounded-[20px] overflow-hidden leading-[1.6] border border-primary-gold/20 shadow-[0_4px_20px_rgba(197,160,89,0.1)]"
      >
        <div className="absolute inset-0 bg-[url('/omegagym/images/logo.png')] bg-[length:400px] max-sm:bg-[length:220px] bg-center bg-no-repeat opacity-60 z-[-1]" />
        <h1 className="text-5xl max-sm:text-[33px] mb-5 font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-primary-gold">건강한 삶을 위한 완벽한 환경</h1>
        <p className="text-xl max-sm:text-[16px] max-w-[600px] mx-auto mb-[30px] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] text-accent-silver-light">최고의 운동 환경과 다양한 시설을 갖춘<br/>오메가짐에 오신 것을 환영합니다.</p>
      </motion.section>

      {/* Layout Grid */}
      <section className="w-full max-w-[1200px] flex mx-auto max-lg:flex-col items-start px-5 mt-10 mb-20">
        
        {/* Sidebar Tabs */}
        <div className="w-[30%] max-lg:w-full sticky top-[100px] p-5 border-r border-gray-200 max-lg:border-r-0 max-lg:border-b max-lg:mb-[30px] max-lg:relative max-lg:top-0">
          <ul className="list-none p-0 mx-0 flex flex-col max-lg:flex-row max-lg:flex-wrap max-lg:justify-center gap-2">
            {facilityTabs.map((tab) => (
              <li 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[25px] max-lg:text-[18px] max-sm:text-[14px] font-bold px-0 py-4 max-lg:px-4 max-lg:py-2.5 cursor-pointer uppercase transition-all duration-300 relative
                  ${activeTab === tab.id 
                    ? "text-primary-gold" 
                    : "text-accent-silver hover:text-hover-gold hover:pl-[10px] max-lg:hover:pl-4"}
                  ${activeTab === tab.id ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-gold max-lg:after:h-[1px]" : ""}
                `}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="w-[70%] max-lg:w-full pl-[50px] max-lg:pl-0 min-h-[500px]">
          <div className="flex flex-col gap-10">
            {images.map((src, i) => (
              <motion.div 
                key={src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full rounded-[15px] overflow-hidden shadow-sm hover:shadow-[0_8px_25px_rgba(197,160,89,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-primary-gold/10"
              >
                <img src={src} alt={`${activeTab} ${i}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
            {images.length === 0 && (
              <div className="text-gray-400 mt-20 text-center">이미지를 불러오는 중이거나 없습니다.</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
