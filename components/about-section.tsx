import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Our Science Camp</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Science Olympiad Center's Science Camp is a transformative experience designed to inspire the next
              generation of scientists, engineers, and innovators.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mt-12">
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <Image
              src="/placeholder.svg?key=42858"
              alt="Science Camp outdoor activities"
              width={700}
              height={550}
              className="w-full rounded-xl object-cover shadow-xl"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Why Choose Our Science Camp?</h3>
            <ul className="space-y-3">
              {[
                "Expert mentors from leading universities and research institutions",
                "Hands-on experiments and real-world applications",
                "State-of-the-art facilities and equipment",
                "Balanced program with academic and recreational activities",
                "Develop critical thinking and problem-solving skills",
                "Build lasting friendships with like-minded peers",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { value: "2", label: "Week Program" },
                  { value: "50+", label: "Activities" },
                  { value: "20+", label: "Expert Mentors" },
                  { value: "12-18", label: "Age Range" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <h4 className="text-3xl font-bold text-blue-600">{stat.value}</h4>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
