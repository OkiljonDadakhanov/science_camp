import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full pt-24 pb-6 md:pt-32 md:pb-12 lg:py-32 bg-gradient-to-b from-blue-50 via-blue-100/50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-3 py-1 text-sm text-white">
              Summer 2025
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Science Camp by{" "}
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Science Olympiad Center
              </span>
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ignite curiosity, foster innovation, and build lifelong skills
              through hands-on scientific exploration and discovery.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 transition-all duration-300"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 hover:border-blue-400 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-30 blur-xl"></div>
              <Image
                src="/images/main.jpg"
                alt="Science Camp students engaged in experiments"
                width={700}
                height={550}
                className="relative w-full rounded-xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
