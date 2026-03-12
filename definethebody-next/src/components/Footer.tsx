export default function Footer() {
  return (
    <footer className="bg-primary-black text-white text-center py-[30px] max-md:py-5 max-md:px-4 max-sm:py-4 max-sm:px-2.5">
      <div className="max-w-[1200px] mx-auto max-md:max-w-full">
        <p className="my-2.5 max-md:text-sm max-md:leading-relaxed max-md:my-4 max-sm:text-xs max-sm:leading-relaxed max-sm:my-3 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:after:content-[''] max-sm:after:w-[30px] max-sm:after:h-[1px] max-sm:after:bg-white/20 max-sm:after:mt-3">
          연락처: 010-7275-2477
        </p>
        <p className="my-2.5 max-md:text-sm max-md:leading-relaxed max-md:my-4 max-sm:text-xs max-sm:leading-relaxed max-sm:my-3">
          운영시간: 평일 06:00 - 24:00 | 주말 및 공휴일 10:00 - 20:00
        </p>
        <p className="my-2.5 max-md:text-sm max-md:leading-relaxed max-md:my-4 max-sm:text-xs max-sm:leading-relaxed max-sm:my-3 max-sm:mt-5 text-primary-red">
          &copy; 2024 <span className="underline text-white">디파인더바디 피트니스</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
