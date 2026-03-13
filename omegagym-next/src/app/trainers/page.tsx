"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Trainer = {
  id: string;
  name: string;
  role: string;
  thumbnail: string;
  folder?: string;
  instagram?: string;
  noModal?: boolean;
};

const admins: Trainer[] = [
  { id: "admin1", name: "C E O", role: "C E O", thumbnail: "/images/member/Hyesung/ceo.jpg", noModal: true },
  { id: "admin2", name: "GENERAL\nMANAGER", role: "GENERAL MANAGER", thumbnail: "/images/member/Woosung/thumbnail.png", folder: "Woosung", instagram: "https://www.instagram.com/define_thebody_general_manager" },
  { id: "admin3", name: "PT TEAM\nLEADER", role: "PT TEAM LEADER", thumbnail: "/images/member/Dongsoo/thumbnail.png", folder: "Dongsoo", instagram: "https://www.instagram.com/define_thebody_han" }
];

const trainers: Trainer[] = [
  { id: "tr1", name: "주 영 현", role: "트레이너", thumbnail: "/images/member/Younghyun/thumbnail.png", folder: "Younghyun", instagram: "https://www.instagram.com/define_thebody_joo" },
  { id: "tr2", name: "권 현 우", role: "트레이너", thumbnail: "/images/member/Hyunwoo/thumbnail.png", folder: "Hyunwoo", instagram: "https://www.instagram.com/define_thebody_kwon" },
  { id: "tr3", name: "왕 종 민", role: "트레이너", thumbnail: "/images/member/Jongmin/thumbnail.png", folder: "Jongmin", instagram: "https://www.instagram.com/define_thebody_wang" },
  { id: "tr4", name: "원 은 빈", role: "트레이너", thumbnail: "/images/member/Eunbin/thumbnail.png", folder: "Eunbin", instagram: "https://www.instagram.com/eu____b" },
  { id: "tr5", name: "박 민 서", role: "트레이너", thumbnail: "/images/member/Minseo/thumnail.png", folder: "Minseo", instagram: "https://www.instagram.com/define_thebody_min" },
  { id: "tr6", name: "이 주 은", role: "트레이너", thumbnail: "/images/member/Jueun/thumnail.png", folder: "Jueun", instagram: "https://www.instagram.com/define_thebody_min" },
  { id: "tr7", name: "손 지 호", role: "트레이너", thumbnail: "/images/member/Jiho/thumbnail.png", folder: "Jiho", instagram: "https://www.instagram.com/define_thebody_min" }
];

export default function TrainersPage() {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [activeTab, setActiveTab] = useState<"career" | "project" | "education">("career");
  
  // 상태: 동적으로 불러올 이미지 에러 핸들링을 위한 배열
  const [validProfiles, setValidProfiles] = useState<string[]>([]);
  const [validReviews, setValidReviews] = useState<string[]>([]);
  const [mainProfileImage, setMainProfileImage] = useState<string>("");

  useEffect(() => {
    if (selectedTrainer?.folder) {
      document.body.classList.add("overflow-hidden");
      
      // Load max 10 profiles
      const possibleProfiles = Array.from({length: 10}, (_, i) => `/images/member/${selectedTrainer.folder}/profile${i+1}.jpg`);
      // Fallback for first image mostly being `profile1.jpg`
      setMainProfileImage(possibleProfiles[0]);
      
      const loadedProfiles: string[] = [];
      possibleProfiles.forEach(src => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
          loadedProfiles.push(src);
          setValidProfiles([...loadedProfiles].sort());
        };
      });

      // Load max 30 reviews
      const possibleReviews = Array.from({length: 30}, (_, i) => `/images/member/${selectedTrainer.folder}/review${i+1}.jpg`);
      const loadedReviews: string[] = [];
      possibleReviews.forEach(src => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
          loadedReviews.push(src);
          setValidReviews([...loadedReviews].sort((a,b) => {
            // natural sort for review1.jpg vs review10.jpg
            const numA = parseInt(a.match(/review(\d+)/)?.[1] || "0");
            const numB = parseInt(b.match(/review(\d+)/)?.[1] || "0");
            return numA - numB;
          }));
        };
      });

    } else {
      document.body.classList.remove("overflow-hidden");
      setValidProfiles([]);
      setValidReviews([]);
      setMainProfileImage("");
      setActiveTab("career");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedTrainer]);

  const closeModal = () => setSelectedTrainer(null);

  const renderCard = (trainer: Trainer, isGrid: boolean = false) => {
    return (
      <motion.div 
        key={trainer.id}
        whileHover={{ y: -3 }}
        className={`relative overflow-hidden rounded-[15px] shadow-sm cursor-pointer transition-all duration-300 leading-none bg-gradient-to-br from-bg-beige to-accent-silver group border border-primary-gold/10 hover:border-primary-gold/50 hover:shadow-[0_8px_20px_rgba(197,160,89,0.2)]
          ${isGrid ? "w-full" : "w-[270px] max-sm:w-full"} h-[400px] max-sm:h-[230px]`}
        onClick={() => !trainer.noModal && setSelectedTrainer(trainer)}
      >
        <Image 
          src={trainer.thumbnail} 
          alt={trainer.name.replace('\n', ' ')} 
          fill
          className="object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-50"
          sizes="(max-width: 576px) 165px, 270px"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[2.5rem] max-sm:text-[28px] font-bold text-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-pre-line leading-[1.5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {trainer.name}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center bg-text-main/90 text-bg-beige text-center py-1 px-5 my-[30px] mx-auto w-[95%] max-w-[1160px] h-[280px] max-sm:h-[180px] max-sm:p-2.5 rounded-[20px] overflow-hidden border border-primary-gold/20 shadow-[0_4px_20px_rgba(197,160,89,0.1)]"
      >
        <div className="absolute inset-0 bg-[url('/images/logo.png')] bg-[length:400px] max-sm:bg-[length:220px] bg-center bg-no-repeat opacity-60 z-[-1]" />
        <h1 className="text-5xl max-sm:text-[35px] mb-5 font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-primary-gold">
          함께하는 피트니스 여정
        </h1>
        <p className="text-xl max-sm:text-[17px] max-w-[600px] mx-auto mb-[30px] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] text-accent-silver-light">
          오메가짐의 열정적인 스태프들을 만나보세요
        </p>
      </motion.section>

      {/* Admin Section */}
      <section className="my-10 text-center flex flex-col items-center w-full">
        <h2 className="text-2xl font-bold mb-5 text-primary-gold flex items-center gap-2"><span className="w-8 h-[1px] bg-primary-gold"></span>운영진<span className="w-8 h-[1px] bg-primary-gold"></span></h2>
        <div className="flex justify-center gap-5 max-sm:grid max-sm:grid-cols-2 max-sm:gap-2.5 max-sm:px-2.5">
          {admins.map(admin => renderCard(admin))}
        </div>
      </section>

      {/* Trainers Section */}
      <section className="my-10 mb-20 flex flex-col items-center w-full">
        <h2 className="text-2xl font-bold mb-5 text-primary-gold flex items-center gap-2"><span className="w-8 h-[1px] bg-primary-gold"></span>트레이너<span className="w-8 h-[1px] bg-primary-gold"></span></h2>
        <div className="grid grid-cols-4 gap-5 max-w-[1200px] px-5 w-full max-sm:grid-cols-2 max-sm:gap-2.5 max-sm:px-2.5">
          {trainers.map(tr => renderCard(tr, true))}
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedTrainer && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-text-main/90 flex items-center justify-center backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Modal Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-row max-sm:flex-col bg-bg-beige w-[80%] h-[80%] max-sm:w-[calc(100%-20px)] max-sm:h-auto max-sm:max-h-[85vh] rounded-[15px] overflow-hidden max-sm:p-2.5 shadow-[0_10px_40px_rgba(197,160,89,0.2)] border border-primary-gold/30"
            >
              <button 
                onClick={closeModal} 
                className="absolute top-2 right-4 text-gray-400 hover:text-black transition-colors z-[1001] max-sm:hidden"
              >
                <X size={32} />
              </button>

              {/* Sidebar */}
              <div className="p-[30px] px-[80px] max-sm:p-2.5 flex flex-col justify-center bg-gray-50 border-r max-sm:border-r-0 max-sm:border-b border-gray-200">
                <ul className="list-none p-0 mx-0 my-auto flex flex-col max-sm:flex-row max-sm:justify-around max-sm:w-full gap-4">
                  {[
                    { id: "career", label: "Profile" },
                    { id: "project", label: "Career" },
                    { id: "education", label: "Review" },
                  ].map(tab => (
                    <li 
                      key={tab.id}
                      className={`text-[40px] max-sm:text-sm font-bold text-center py-[15px] px-[10px] cursor-pointer transition-all duration-300
                        ${activeTab === tab.id 
                          ? "text-primary-gold drop-shadow-sm max-sm:border-b-2 max-sm:border-primary-gold" 
                          : "text-accent-silver hover:text-hover-gold"}`}
                      onClick={() => setActiveTab(tab.id as any)}
                    >
                      {tab.label}
                    </li>
                  ))}
                  {selectedTrainer.instagram && (
                    <li className="text-[40px] max-sm:text-sm font-bold text-center py-[15px] px-[10px] text-accent-silver hover:text-hover-gold transition-colors">
                      <Link href={selectedTrainer.instagram} target="_blank">SNS</Link>
                    </li>
                  )}
                </ul>
              </div>

              {/* Content Area */}
              <div className="relative flex-1 p-5 overflow-y-auto w-full h-full bg-bg-beige">
                
                {/* Profile Tab (career) */}
                {activeTab === "career" && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex gap-5 h-full max-sm:flex-col">
                    <div className="flex flex-col max-sm:flex-row gap-2.5 overflow-y-auto max-sm:overflow-x-auto max-sm:overflow-y-hidden pr-2.5 max-sm:pr-0 scrollbar-hide">
                      {validProfiles.map((src, i) => (
                        <div 
                          key={i} 
                          className="relative w-[160px] h-[160px] max-sm:w-[100px] max-sm:h-[100px] shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-md"
                          onMouseEnter={() => setMainProfileImage(src)}
                        >
                          <Image src={src} alt="profile" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 flex justify-center items-center h-full min-h-[300px] relative">
                      {mainProfileImage && (
                        <Image 
                          src={mainProfileImage} 
                          alt="Main Profile" 
                          fill 
                          className="object-contain rounded-[15px]" 
                        />
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Career Tab (project) */}
                {activeTab === "project" && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} className="min-h-full flex items-center justify-center py-10">
                    <img 
                      src={`/images/member/${selectedTrainer.folder}/career.jpg`} 
                      alt="Career" 
                      className="w-[80%] max-sm:w-full h-auto rounded-[15px] shadow-sm"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                  </motion.div>
                )}

                {/* Review Tab (education) */}
                {activeTab === "education" && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex flex-col items-center gap-5 pb-10">
                    {validReviews.length > 0 ? validReviews.map((src, i) => (
                      <img 
                        key={i} 
                        src={src} 
                        alt={`Review ${i+1}`} 
                        className="w-[75%] max-sm:w-full h-auto rounded-[15px] shadow-sm border border-primary-gold/10" 
                      />
                    )) : (
                      <div className="text-text-light mt-20">등록된 후기가 없습니다.</div>
                    )}
                  </motion.div>
                )}
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
