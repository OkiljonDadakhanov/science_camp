"use client"; // Bu qatorda mijoz tarafida ishlaydigan komponent ekanligi ko‘rsatilmoqda

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarClock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const nextSessionDate = new Date("May 31, 2025 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = nextSessionDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    // Dastlabki hisoblash
    setTimeLeft(calculateTimeLeft());

    // Har soniyada yangilab borish
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Komponent yopilganda tozalash
    return () => clearInterval(timer);
  }, [nextSessionDate]);

  const timeBlocks = [
    { label: "Kun", value: timeLeft.days },
    { label: "Soat", value: timeLeft.hours },
    { label: "Daqiqa", value: timeLeft.minutes },
    { label: "Soniya", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full py-12 md:py-16 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white relative overflow-hidden">
      {/* Dekorativ elementlar */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm">
            <CalendarClock className="h-4 w-4" />
            <span className="font-medium">Keyingi sessiya: 11-Iyun, 2025</span>
          </div> */}

          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            {isExpired
              ? "Yozgi oromgoh boshlandi!"
              : "Ro'yxatdan o'tish tugashiga qolgan vaqt"}
          </h2> 

          <p className="max-w-[700px] text-white/90 text-lg">
            {isExpired
              ? "Oromgoh hozirda davom etmoqda. Keyingi sessiyaga ro‘yxatdan o‘tish tez orada ochiladi!"
              : "Joyingizni hozirdan band qiling. Yozgi sessiyalar uchun joylar soni cheklangan."}
          </p>

          {!isExpired && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 w-full max-w-4xl">
              {timeBlocks.map((block, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-sm border-white/20 p-4 md:p-6 flex flex-col items-center transition-all duration-300 hover:transform hover:scale-105 hover:from-white/25 hover:to-white/15"
                >
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold tabular-nums">
                    {block.value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-sm md:text-base text-black font-medium mt-2">
                    {block.label}
                  </span>
                </Card>
              ))}
            </div>
          )}

          <div className="mt-8">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isExpired ? "Kutilayotganlar ro‘yxatiga qo‘shiling" : "Ro‘yxatdan o‘tish"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
