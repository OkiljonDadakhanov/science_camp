import { CheckCircle } from "lucide-react";

export default function OrganizersSection() {
  // Organization data
  const organizations = [
    {
      name: "Fan Olimpiadalari Markazi",
      logo: "/logos/fom.png",
      alt: "Fan Olimpiadalari Markazi"
    },
    {
      name: "Iqtidorlar maktabi",
      logo: "/logos/iqtidor.jpg",
      alt: "Iqtidorlar maktabi"
    }
  ];

  // Team members data
  const teamMembers = [
    { 
      name: "Murodbek Islamov", 
      role: "Loyiha bosh menejeri", 
      img: "/images/murod.jpg" 
    },
    { 
      name: "Tursunboy Jumayev", 
      role: "Akademik ishlar menejeri", 
      img: "/images/tursunboy.jpg" 
    },
    { 
      name: "Fayyozbek Tuychiyev", 
      role: "Tashkiliy masalalar bo'yicha menejer", 
      img: "/images/fayyoz.jpg" 
    },
    { 
      name: "Oqiljon Dadaxanov ", 
      role: "Dasturchi", 
      img: "/images/oqiljon.jpeg" 
    }
  ];

  // Benefits data
  const benefits = [
    "Xalqaro olimpiada g'oliblari va tajribali mentorlar bilan chuqur darslar",
    "Robototexnika, muhandislik va kosmonavtika bo'yicha laboratoriya mashg'ulotlari",
    "Innovatsion fikrlashni shakllantiruvchi loyihalar",
    "Sport, intellektual va ijodiy tadbirlar",
    "Har bir ishtirokchiga sertifikat, sovg'alar va xalqaro tayyorgarlik uchun imkoniyatlar"
  ];

  // Stats data
  const stats = [
    { value: "1", label: "Haftalik dastur" },
    { value: "50+", label: "Mashg'ulotlar" },
    { value: "20+", label: "Mentorlar" },
    { value: "5-6-7-8-9", label: "Sinflar uchun" }
  ];

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Biz haqimizda
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Summer Science Camp — bu Fan Olimpiadalari Markazi va Iqtidorlar maktabi tomonidan 5–9-sinf o'quvchilari uchun tashkil etilgan tanlov asosidagi ilmiy oromgoh.
              Oromgohda ishtirokchilar matematika, fizika, kimyo, biologiya kabi yo'nalishlar bo'yicha chuqurlashtirilgan bilimlar va amaliy ko'nikmalarni egallaydi.
            </p>
          </div>
        </div>

        {/* Organizers Section - ENLARGED */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Tashkilotchilar</h3>
          
          {/* Organizations - BIGGER */}
          <div className="flex justify-center items-center gap-16 md:gap-24 flex-wrap mb-16">
            {organizations.map((org, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center p-4 border border-gray-100 rounded-lg shadow-sm">
                  <img
                    src={org.logo}
                    alt={org.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="mt-4 text-lg md:text-xl font-medium text-gray-800">
                  {org.name}
                </p>
              </div>
            ))}
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((person, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 font-medium text-lg">{person.name}</p>
                <p className="text-sm text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Us Section */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mx-auto w-full max-w-lg lg:max-w-none order-2 lg:order-1">
            <img
              src="/images/us.jpg"
              alt="Science Camp outdoor activities"
              className="w-full rounded-xl object-cover shadow-xl aspect-[4/3]"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl font-bold">Nega aynan biz?</h3>
            <ul className="space-y-3">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat, i) => (
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
      </div>
    </section>
  );
}