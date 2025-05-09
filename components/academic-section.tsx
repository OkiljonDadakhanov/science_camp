import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AcademicSection() {
  const subjects = [
    {
      name: "Fizika",
      description: "Kinematika, elektr, magnitizm va zamonaviy fizika bo'limlarini amaliy tajribalar orqali o'rganing.",
      icon: "/physics-abstract.png",
    },
    {
      name: "Kimyo",
      description: "Kimyoviy reaksiyalarni bajarish, birikmalarni tahlil qilish va molekulyar tuzilmalar bilan tanishing.",
      icon: "/chemistry-beakers.png",
    },
    {
      name: "Biologiya",
      description: "Mikroskopiya va maydon ishlar orqali ekotizimlar, genetika va inson fiziologiyasini o'rganing.",
      icon: "/dna-helix-icon.png",
    },
    {
      name: "Astronomiya",
      description: "Osmon jismlarini kuzatib, fazo tadqiqotlari haqida ma'lumot oling va koinot hodisalarini tushuning.",
      icon: "/celestial-symbols.png",
    },
    {
      name: "Matematika",
      description: "Qiyin masalalar va real hayot misollari orqali mantiqiy fikrlash va muammo hal etish ko'nikmalarini rivojlantiring.",
      icon: "/abstract-mathematics.png",
    },
    {
      name: "Kompyuter savodxonligi",
      description: "Dasturlash, algoritmlar va hisoblash fikrlashni kodlash loyihalari orqali o'rganing.",
      icon: "/abstract-computer-science.png",
    },
  ];
  
  return (
    <section id="academic" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Akademik dasturlar</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Bizning akademik dasturimiz yetuk ilmiy salohiyatga ega, xalqaro olimpiadalarda yuqori natijalarni ko'rsatgan mentorlar tomonidan olib boriladi. Dastur iqtidorli oʻquvchilarni chuqurlashtirilgan nazariy bilim va amaliy ko'nikmalar bilan ta'minlashga qaratilgan.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Bizning mentorlar</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Firdavs Sobirov",
                role: "Kimyo mentori",
                education: "Yangi O'zbekiston universiteti, Kimyo muhandisligi yo'nalishi talabasi",
                position: "O'zbekiston Kimyo fanidan terma jamoa rahbari",
                achievements: [
                   { year: "2023-2024", award: "Respublika va Xalqaro olimpiadaga saralash bosqichlarida hakam sifatida ishtirok etgan" },
                  { year: "2024", award: "IJSO 2024 terma jamoa rahbari" },
                  { year: "2023", award: "IJSO 2023 terma jamoa rahbari" },
                  { year: "2021", award: "55-Xalqaro Mendeleyev kimyo olimpiadasi – oltin medal" },
                  { year: "2021", award: "53-Xalqaro Kimyo Olimpiadasi (Yaponiya) – bronza medal" },
                  { year: "2021", award: "Respublika Kimyo fan olimpiadasi – 1-o'rin" },
                  { year: "2021", award: "\"Tahsin-2021\" milliy mukofoti" },
                  { year: "2020", award: "54-Xalqaro Mendeleyev kimyo olimpiadasi – bronza medal" },
                  { year: "2020", award: "52-Xalqaro Kimyo Olimpiadasi (Turkiya) – bronza medal" },
                  { year: "2019", award: "Kimyo fanidan viloyat bosqichi olimpiadada 1-o'rin" },
                  { year: "2019", award: "Abu Rayhon Beruniy nomidagi Respublika kimyo olimpiadasida 2-o'rin" },
                ],
                image: "/mentors/firdavs.jpg",
              },
              {
  name: "Fayyoz Tuychiyev",
  role: "Robototexnika bo‘yicha mentor",
  education: `Sankt-Peterburg davlat elektrotexnika universiteti "LETI" bitiruvchisi (elektronika va nanoelektronika), 2021-yil;
Toshkent davlat texnika universiteti magistri (elektronika), 2023-yil`,
  position: "Robototexnika bo‘yicha mentor",
  achievements: [
    { year: "2017", award: "“Kelajak muhandislari” olimpiadasi g‘olibi (Sankt-Peterburg davlat elektrotexnika universiteti tomonidan)" },
    { year: "2018", award: "Sankt-Peterburg shahri universitetlari o‘rtasida o‘tkazilgan fizika fan olimpiadasi – 3-o‘rin" },
    { year: "2019", award: "“Elektrotexnikaning nazariy asoslari” universitet fan olimpiadasi sovrindori" },
    { year: "2021", award: "Butun Rossiya “Mobil Aloqa Sistemalarining Innovatsion Texnologiyalari” olimpiadasi g‘olibi" },
    { year: "2025", award: "Maktablar uchun robototexnika bo‘yicha o‘quv qo‘llanma muallifi" },
    { year: "2021-2025", award: "Robototexnika va elektronika bo‘yicha 10 ga yaqin ilmiy maqola va tezislar muallifi" },
  ],
  image: "/mentors/fayyoz.jpg",
},
             
              {
                name: "Saida Abdullaeyeva",
                role: "Kimyo mentori",
                education: "Toshkent davlat tibbiyot universiteti talabasi",
                position: "Kimyo yoʻnalishi boʻyicha Zulfiya davlat mukofoti sohibasi",
                achievements: [
                  { year: "2024", award: "56-Xalqaro Kimyo Olimpiadasi (IChO) – kumush medal" },
                  { year: "2024", award: "Kimyo fanidan respublika olimpiadasi – 1-o'rin" },
                  { year: "2024", award: "58-Xalqaro Maktablararo Kimyo Olimpiadasi (IMChO) – bronza medal" },
                  { year: "", award: "Abu Rayhon Beruniy nomidagi xalqaro kimyo olimpiadasi (ARBIChO) – kumush medal" },
                  { year: "", award: "IMChO-Xalqaro Mendeleyev kimyo olimpiadasi ishtirokchisi" },
                ],
                additionalInfo: "Navoiy shahridagi 11-AFCHOʻIM maktabini 2024-yilda tamomlagan",
                image: "/mentors/saida.JPG",
              },
              {
  name: "Asliddin Fayzullaev",
  role: "Fizika mentori",
  education: "Oʻzbekiston Milliy Universiteti, Fizika fakulteti magistranti (2024–hozir)",
  position: "I toifali o‘qituvchi",
  achievements: [
    { year: "2025", award: "O‘qituvchilar oʻrtasida Respublika fizika olimpiadasida 1-oʻrin" },
    { year: "2025", award: "I toifa unvoni berilgan" },
    { year: "2024", award: "GRE Physics xalqaro sertifikati – 900/990 ball" },
    { year: "2020–2024", award: "OʻzMU Fizika fakulteti talabasi – GPA 92 ball" },
    { year: "2018", award: "Innovatsion Respublika fizika olimpiadasida 1-oʻrin" },
  ],
  image: "/mentors/asliddin.jpg"
},
              {
                name: "Sardor Qurbonboyev",
                role: "Biologiya bo‘yicha Mentor",
                education: "ITMA Abu Ali Ibn Sino nomidagi ixtisoslashtirilgan maktab bitiruvchisi (2024)",
                position: "Hozirda Toshkent Tibbiyot Akademiyasi 1-kurs talabasi",
                achievements: [
                  { year: "", award: "Abu Ali Ibn Sino nomidagi Xalqaro Biologiya Olimpiadasi kumush medal sohibi" },
                  { year: "", award: " STEM olimpiadasining Respublika bosqichi 1-o‘rin g‘olibi" },
                  { year: "", award: "Biologiya fanidan Asosiy Olimpiadaning viloyat bosqichi 1-o‘rin egasi" },
                  { year: "", award: "Abu Ali Ibn Sino tayanch maktabida biologiya fanidan olimpiadaga tayyorlovchi trener" },
                  { year: "", award: "35-Xalqaro biologiya olimpaidasi ishtirokchisi " },
                   { year: "", award: "O‘quvchilarga sitologiya, molekulyar biologiya, fiziologiya, genetika, ekologiya va bioinformatika fanlari bo‘yicha chuqurlashtirilgan bilim beradi " },
                ],
                additionalInfo: "Navoiy shahridagi 11-AFCHOʻIM maktabini 2024-yilda tamomlagan",
                image: "/mentors/sardor.jpg",
              },
            ].map((mentor, i) => (
              <Card key={i} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square relative">
                  <Image src={mentor.image || "/placeholder.svg"} alt={mentor.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold">{mentor.name}</h4>
                  <p className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent font-medium mb-2">
                    {mentor.role}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">{mentor.education}</p>
                      <p className="text-sm font-medium text-gray-800">{mentor.position}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-1">Yutuqlar:</p>
                      <div className="space-y-2">
                        {mentor.achievements.slice(0, 3).map((achievement, j) => (
                          <div key={j} className="flex items-start">
                            {achievement.year && (
                              <Badge variant="outline" className="mr-2 bg-blue-50">
                                {achievement.year}
                              </Badge>
                            )}
                            <p className="text-xs text-gray-600">{achievement.award}</p>
                          </div>
                        ))}
                        
                        {mentor.achievements.length > 3 && (
                          <details className="mt-1">
                            <summary className="text-xs text-blue-600 cursor-pointer">
                              Barcha yutuqlarni ko'rish ({mentor.achievements.length - 3} ta qo'shimcha)
                            </summary>
                            <div className="mt-2 space-y-2 pl-1">
                              {mentor.achievements.slice(3).map((achievement, j) => (
                                <div key={j} className="flex items-start">
                                  {achievement.year && (
                                    <Badge variant="outline" className="mr-2 bg-blue-50">
                                      {achievement.year}
                                    </Badge>
                                  )}
                                  <p className="text-xs text-gray-600">{achievement.award}</p>
                                </div>
                              ))}
                            </div>
                          </details>
                        )}
                      </div>
                    </div>
                    
                    {mentor.additionalInfo && (
                      <p className="text-xs text-gray-500 italic">{mentor.additionalInfo}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Amaliyot fanlari</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, i) => (
              <Card key={i} className="transition-all duration-300 hover:shadow-lg hover:border-blue-200">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-4 relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-400/20 blur-sm"></div>
                    <Image
                      src={subject.icon || "/placeholder.svg"}
                      alt={subject.name}
                      width={80}
                      height={80}
                      className="relative object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold">{subject.name}</h4>
                  <p className="mt-2 text-gray-500">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}