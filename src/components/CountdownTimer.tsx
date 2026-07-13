import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    // We want the countdown to feel highly urgent, starting from 23:59:59 when loaded
    // or loaded from localStorage to persist the countdown during session.
    const storageKey = "lt_essencial_timer_target";
    let targetTime = localStorage.getItem(storageKey);
    
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (!targetTime) {
      const target = now + twentyFourHours;
      localStorage.setItem(storageKey, target.toString());
      targetTime = target.toString();
    }

    const interval = setInterval(() => {
      const currentNow = Date.now();
      const difference = parseInt(targetTime || "0") - currentNow;

      if (difference <= 0) {
        // Reset timer
        const newTarget = Date.now() + twentyFourHours;
        localStorage.setItem(storageKey, newTarget.toString());
      } else {
        const hrs = Math.floor(difference / (1000 * 60 * 60));
        const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((difference % (1000 * 60)) / 1000);
        setTime({ hours: hrs, minutes: mins, seconds: secs });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div id="countdown-banner" className="w-full bg-[#FF0000] text-white py-3 px-4 flex flex-col items-center justify-center text-center select-none border-b-4 border-black">
      {/* Label: occupies exactly one line on mobile. Sized at headline font size (Tipo A, Montserrat ExtraBold) */}
      <h3 className="font-montserrat font-extrabold uppercase text-[12px] xxs:text-[14px] xs:text-[16px] sm:text-xl md:text-2xl tracking-wide whitespace-nowrap mb-1">
        esta oferta pode encerrar em:
      </h3>
      
      {/* Numbers and Labels container */}
      <div className="flex items-center justify-center gap-6 sm:gap-10 mt-1">
        {/* Hours */}
        <div className="flex flex-col items-center">
          <span className="font-anton text-4xl xxs:text-5xl xs:text-6xl sm:text-7xl md:text-8xl leading-none font-normal tracking-wide drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            {formatNumber(time.hours)}
          </span>
          <span className="font-montserrat font-extrabold text-[10px] sm:text-sm uppercase tracking-widest text-white mt-1">
            horas
          </span>
        </div>

        <span className="font-anton text-2xl sm:text-5xl leading-none text-white -mt-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <span className="font-anton text-4xl xxs:text-5xl xs:text-6xl sm:text-7xl md:text-8xl leading-none font-normal tracking-wide drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            {formatNumber(time.minutes)}
          </span>
          <span className="font-montserrat font-extrabold text-[10px] sm:text-sm uppercase tracking-widest text-white mt-1">
            min
          </span>
        </div>

        <span className="font-anton text-2xl sm:text-5xl leading-none text-white -mt-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <span className="font-anton text-4xl xxs:text-5xl xs:text-6xl sm:text-7xl md:text-8xl leading-none font-normal tracking-wide drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            {formatNumber(time.seconds)}
          </span>
          <span className="font-montserrat font-extrabold text-[10px] sm:text-sm uppercase tracking-widest text-white mt-1">
            seg
          </span>
        </div>
      </div>
    </div>
  );
}
