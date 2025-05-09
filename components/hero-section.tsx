import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full pt-32 pb-12 md:pt-40 md:pb-20 lg:py-48 bg-gradient-to-b from-blue-50 via-blue-100/50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-base text-white">
              Summer 2025
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
              Summer Science Camp 
            </h1>
            <p className="max-w-[650px] text-gray-500 text-xl md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
              Ilm olamiga birinchi qadamingizni qo'ying — kashf qilish, o'rganish va o'zgarishga tayyor bo'ling.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button
                size="lg"
                className="text-lg py-6 px-8 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 transition-all duration-300"
              >
                Ro'yhatdan o'tish
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg py-6 px-8 border-blue-300 hover:border-blue-400 transition-all duration-300"
              >
                Kirish
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[600px] lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-30 blur-xl"></div>
              <Image
                src="/images/main.jpg"
                alt="Science Camp students engaged in experiments"
                width={900}
                height={700}
                className="relative w-full rounded-xl object-cover shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}