export default function Footer() {
  return (
    <footer className="bg-text-main text-bg-beige text-center py-[30px] max-md:py-5 max-md:px-4 max-sm:py-4 max-sm:px-2.5 border-t border-primary-gold/20">
      <div className="max-w-[1200px] mx-auto max-md:max-w-full">
        <p className="my-2.5 max-md:text-sm max-md:leading-relaxed max-md:my-4 max-sm:text-xs max-sm:leading-relaxed max-sm:my-3 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:after:content-[''] max-sm:after:w-[30px] max-sm:after:h-[1px] max-sm:after:bg-accent-silver/20 max-sm:after:mt-3 text-accent-silver-light">
          연락처: <span className="text-primary-gold font-bold ml-1">010-5956-3611</span>
        </p>
        <p className="my-2.5 max-md:text-sm max-md:leading-relaxed max-md:my-4 max-sm:text-xs max-sm:leading-relaxed max-sm:my-3 text-accent-silver-light">
          운영시간: 평일 06:00 - 24:00 | 주말 및 공휴일 09:00 - 21:00
        </p>
        <p className="my-2.5 max-md:text-sm max-md:leading-relaxed max-md:my-4 max-sm:text-xs max-sm:leading-relaxed max-sm:my-3 max-sm:mt-5 text-accent-silver">
          &copy; 2026 <span className="text-primary-gold font-semibold">OMEGAGYM</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
