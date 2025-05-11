"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ActivitiesSlider() {
  const activities = [
  {
  title: "Robo Coding",
  description:
    "Robotlarni qurish va dasturlash orqali chaqiruvlarni bajarish va real dunyo muammolarini hal qilish.",
  image: "/images/robotics.jpg"
},
{
  title: "Raketa Qurilishi",
  description:
    "Aerodinamika va propulsiyani o'rganish davomida raketalarni loyihalash, qurish va uchirish.",
  image: "/images/rocket.jpg"
},
{
  title: "Laboratoriya Tajribalari",
  description:
    "Yaxshi jihozlangan laboratoriyalarimizda ekspert nazorati ostida ilg'or tajribalar o'tkazish.",
  image: "/images/lab.jpg"
},
{
  title: "Kosmik Kashfiyot",
  description:
    "Teleskoplar va planetariy texnologiyasidan foydalanib, osmon jismlarini kuzatish va o'rganish.",
  image: "/images/space1.jpg"
}

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = activities.length - 1;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 75) {
      handlePrevious();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      id="intellectual-activities"
      className="w-[80%] py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Foto lavhalar
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Amaliy tajriba asosida fikrlashni chuqurlashtiring va muammolarni tahlil qilish ko‘nikmasini rivojlantiring
            </p>
          </div>
        </div>

        <div className="mt-12 relative">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {activities.map((activity, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold">{activity.title}</h3>
                      <p className="mt-2 text-gray-500">
                        {activity.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>

          <div className="flex justify-center mt-4 gap-2">
            {activities.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
