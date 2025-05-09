import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Biz haqimizda
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Summer Science Camp — bu Fan Olimpiadalari Markazi va Iqtidorlar
              maktabi tomonidan 5–6-7-8-9-sinf o'quvchilari uchun tashkil
              etilgan tanlov asosidagi ilmiy oromgoh. Oromgohda ishtirokchilar
              matematika, fizika, kimyo, biologiya kabi yo'nalishlar bo'yicha
              chuqurlashtirilgan bilimlar va amaliy ko'nikmalarni egallaydi.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mt-12">
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <Image
              src="/images/about.jpg"
              alt="Science Camp outdoor activities"
              width={700}
              height={550}
              className="w-full rounded-xl object-cover shadow-xl"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Nega aynan biz?</h3>
            <ul className="space-y-3">
              {[
                "Xalqaro olimpiada g'oliblari va tajribali mentorlar bilan chuqur darslar",
                "Robototexnika, muhandislik va kosmonavtika bo'yicha laboratoriya mashg'ulotlari",
                "Innovatsion fikrlashni shakllantiruvchi loyihalar",
                "Sport, intellektual va ijodiy tadbirlar",
                "Har bir ishtirokchiga sertifikat, sovg'alar va xalqaro tayyorgarlik uchun imkoniyatlar",
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
                  { value: "1", label: "Haftalik dastur" },
                  { value: "50+", label: "Mashg'ulotlar" },
                  { value: "20+", label: "Mentorlar" },
                  { value: "5-6-7-8-9", label: "Sinflar uchun" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <h4 className="text-3xl font-bold text-blue-600">
                      {stat.value}
                    </h4>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-8">
            Tashkilotchilar
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 relative">
                <Image
                  src="/logos/fom.png"
                  alt="Fan Olimpiadalari Markazi"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <p className="mt-3 font-medium text-center">
                Fan Olimpiadalari Markazi
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 relative">
                <Image
                  src="/logos/iqtidor.jpg"
                  alt="Iqtidorlar maktabi"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <p className="mt-3 font-medium text-center">Iqtidorlar maktabi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
