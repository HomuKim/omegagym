"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 모바일 메뉴 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  const navLinks = [
    { name: "홈", path: "/" },
    { name: "이벤트", path: "/event" },
    { name: "팀원소개", path: "/trainers" },
    { name: "시설소개", path: "/facilities" },
    { name: "고객지원", path: "/contact" },
  ];

  return (
    <header className="relative overflow-hidden bg-bg-beige shadow-md z-50">
      <nav className="flex justify-between items-center px-5 max-w-[1200px] mx-auto h-20 bg-bg-beige max-sm:flex-wrap max-sm:h-auto max-sm:py-2.5">
        <div className="flex items-center text-text-main font-extrabold tracking-tighter">
          <Link href="https://www.instagram.com/omega__gym1" target="_blank">
            <div className="relative h-[60px] w-[120px] max-sm:h-[36px] max-sm:w-[72px]">
              <Image
                src="/images/logo.png"
                alt="OMEGAGYM Logo"
                fill
                className="object-contain"
                sizes="(max-width: 576px) 56px, 140px"
              />
            </div>
          </Link>
          <Link
            href="/"
            className="font-black text-[30px] max-sm:text-[22px] text-text-main drop-shadow-sm tracking-tight ml-4 whitespace-nowrap hover:text-hover-gold transition-colors duration-300"
            onClick={closeMenu}
          >
            OMEGAGYM
          </Link>
        </div>

        {/* 햄버거 버튼 */}
        <button
          className="hidden max-sm:block bg-transparent border-none cursor-pointer z-[999]"
          aria-label="메뉴 열기"
          onClick={toggleMenu}
        >
          <span className={`block w-[25px] h-[3px] bg-text-main my-1 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""}`}></span>
          <span className={`block w-[25px] h-[3px] bg-text-main my-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-[25px] h-[3px] bg-text-main my-1 transition-all duration-300 ${isMenuOpen ? "-rotate-45 translate-x-[7px] -translate-y-[6px]" : ""}`}></span>
        </button>

        {/* 네비게이션 링크 */}
        <ul className={`flex gap-5 max-sm:fixed max-sm:-top-2.5 ${isMenuOpen ? "max-sm:right-2.5" : "max-sm:-right-full"} max-sm:w-4/5 max-sm:max-w-[100px] max-sm:h-[28vh] max-sm:bg-bg-beige/90 max-sm:backdrop-blur-md max-sm:p-2.5 max-sm:pl-1 max-sm:transition-all max-sm:duration-300 max-sm:z-[998] max-sm:flex-col max-sm:gap-0 max-sm:overflow-y-auto max-sm:shadow-md max-sm:rounded-xl`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path} className={`ml-5 max-sm:ml-0 max-sm:transition-all max-sm:duration-300 ${isMenuOpen ? "max-sm:opacity-100 max-sm:translate-x-0" : "max-sm:opacity-0 max-sm:-translate-x-5"}`}>
                <Link
                  href={link.path}
                  className={`relative font-bold text-xl py-2 px-3 tracking-tight transition-all duration-300 max-sm:block max-sm:py-2.5 max-sm:font-bold max-sm:uppercase max-sm:tracking-wider max-sm:text-[19px] max-sm:hover:bg-primary-gold/10
                    ${isActive ? "text-primary-gold" : "text-text-light max-sm:text-text-main hover:text-primary-gold"}
                    after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-primary-gold after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full max-sm:after:hidden ${isActive && !isMenuOpen ? "after:w-full" : ""}
                  `}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 모바일 메뉴 오버레이 */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[997] hidden max-sm:block"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
