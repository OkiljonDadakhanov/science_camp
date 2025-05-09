import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function NonAcademicSection() {
  const activities = [
    {
      title: "Sport tadbirlari",
      description:
        "Jismoniy faollikni oshirish va sog‘lom raqobatni rivojlantirish uchun turli sport musobaqalari va o‘yinlar.",
      image: "/images/sports.jpg",
    },
    {
      title: "Mahalliy Ekskursiya va muzeylarga tashriflar",
      description:
        "Madaniyat va tarixni o‘rganish uchun mahalliy diqqatga sazovor joylar va muzeylarga ekskursiyalar.",
      image: "/images/trips.jpg",
    },
    {
      title: "Ko’ngilochar dasturlar ",
      description:
        "Talantlar ko‘rgazmasi, kino kechalari va ijtimoiy tadbirlar orqali do‘stlikni mustahkamlash va unutilmas xotiralar yaratish.",
      image: "/images/activities.jpg",
    },
  ];

  return (
    <section
      id="non-academic"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 via-blue-100/30 to-white"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Ijtimoiy hayot 
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Qiziqarli mashg‘ulotlar orqali ishtirokchilar jamoada ishlash, do‘stona munosabatlar o‘rnatish va yetakchilik qobiliyatlarini rivojlantiradilar.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {activities.map((activity, i) => (
            <Card
              key={i}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg group"
            >
              <div className="aspect-video relative">
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{activity.title}</h3>
                <p className="mt-2 text-gray-500">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

       
        </div>
      
    </section>
  );
}
