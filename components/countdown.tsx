'use client'

import { useEffect, useState } from "react"

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-05T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "DAYS", value: String(timeLeft.days).padStart(2, '0') },
        { label: "HOURS", value: String(timeLeft.hours).padStart(2, '0') },
        { label: "MINUTES", value: String(timeLeft.minutes).padStart(2, '0') },
        { label: "SECONDS", value: String(timeLeft.seconds).padStart(2, '0') },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 border border-white/10 bg-black/30 backdrop-blur-sm rounded-lg"
        >
          <span className="text-3xl md:text-5xl font-bold text-white mb-1">{item.value}</span>
          <span className="text-xs md:text-sm text-white/60">{item.label}</span>
        </div>
      ))}
    </div>
  );
}