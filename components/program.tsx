import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MapPin,
  CalendarDays,
  BookOpen,
  Users,
  Clock,
  AlertTriangle,
} from "lucide-react";

const locations = [
  {
    region: "Qoraqalpogʻiston Respublikasi",
    address:
      'Nukus shahar, 52- sonli umumta`lim maktabi Marat Nurmuhammedov ko`chasi 53',
    link: "https://yandex.ru/maps/org/48017255722?si=0jagdjwrmtkc59mavkv7c4rnz4",
  },
  {
    region: "Andijon viloyati",
    address:
      "Pedagoglarni yangi metodikalarga oʻrgatish milliy markazi (Andijon shahar, Istiqlol koʻchasi, 8-uy)",
      link: "https://yandex.ru/maps/org/215782377454?si=0jagdjwrmtkc59mavkv7c4rnz4",
  },
  {
    region: "Buxoro viloyati",
    address:
      "Buxoro shahridagi 44-maktab binosi (Buxoro shahar, Bog'ishamol ko'chasi 5-uy. Mo'ljal: oldingi Pedagogika kolleji)",
    link: "https://yandex.ru/maps/org/182862476548?si=0jagdjwrmtkc59mavkv7c4rnz4",
  },
  {
    region: "Jizzax viloyati",
    address:
      "Jizzax shahridagi 4-maktab binosi (Jizzax shahar, “Kimyogar” MFY, Toʻqimachilar koʻchasi, 45-uy)",
    link: "https://yandex.ru/maps/org/227289740864?si=0jagdjwrmtkc59mavkv7c4rnz4",
  },
  {
    region: "Qashqadaryo viloyati",
    address:
      "Pedagoglarni yangi metodikalarga oʻrgatish milliy markazi (Qarshi shahar, Olimlar koʻchasi, 2-uy)",
    link: "https://maps.app.goo.gl/5zqw98F9nSMVx4nR8",
  },
  {
    region: "Navoiy viloyati",
    address:
      "Navoiy shahridagi “Barkamol avlod” bolalar maktabi (Navoiy shahri, Aloqa koʻchasi, 6-uy)",
    link: "https://maps.app.goo.gl/b9ssxmNKwbeVX3Yt7",
  },
  {
    region: "Namangan viloyati",
    address:
      "Namangan shahridagi 15-maktab binosi (Namangan shahri, “Gʻishkoʻprik” MFY, Uychi koʻchasi, 329-uy)",
    link: "https://maps.app.goo.gl/ZDAJiW5N7XEtsTRe7",
  },
  {
    region: "Samarqand viloyati",
    address:
      "Pedagoglarni yangi metodikalarga oʻrgatish milliy markazi (Samarqand shahar, Hasan Obiddinov koʻchasi, 7-uy)",
    link: "https://maps.app.goo.gl/FaixKVE8brPPpvX8A",
  },
  {
    region: "Sirdaryo viloyati",
    address:
      "Guliston shahridagi “Barkamol avlod” bolalar maktabi (Guliston shahri, “Shodlik” MFY, Navoiy shoh koʻchasi, 55-uy)",
    link: "https://maps.app.goo.gl/2GwLW99FTbgEk5WdA",
  },
  {
    region: "Surxondaryo viloyati",
    address:
      'Termiz shahridagi 26-maktab binosi (Termiz shahri "Kattabog\'" MFY, Farovon massivi, 2-mavze, 7-manzilgoh. Mo\'ljal: "Yashil dunyo" bozori)',
    link: "https://maps.app.goo.gl/RXiYiB9UHNPCdCSY9",
  },
  {
    region: "Fargʻona viloyati",
    address:
      "Fargʻona shahridagi 28-maktab binosi (Fargʻona shahar, “Istiqlol” MFY, Abdulla Qodiriy ko‘chasi, 13-“A” uy)",
    link: "https://maps.app.goo.gl/C3Zws1gT3XXnDXcz5",
  },
  {
    region: "Xorazm viloyati",
    address:
      'Urganch shahridagi 17-maktab binosi (Urganch shahar "4-Yuqori bog\'" mahallasi, Maxtumquli ko\'chasi, 229 "A"-uy)',
    link: "https://yandex.ru/maps/org/79849992675?si=0jagdjwrmtkc59mavkv7c4rnz4",
  },
  {
    region: "Toshkent shahri va Toshkent viloyati",
    address:
      "Pedagogik mahorat va xalqaro baholash ilmiy-amaliy markazi (Toshkent shahar, Olmazor tumani, Beruniy koʻchasi, 83-uy)",
    link: "https://maps.app.goo.gl/ULemL1YxXEiNGc1i9",
  },
];

const schedule = [
  {
    id: 1,
    time: "10:00 - 11:30",
    subject: "Biologiya, Fizika, Kimyo",
    grades: "8- va 9-sinflar",
  },
  { id: 2, time: "12:00 - 13:30", subject: "Matematika", grades: "5-sinf" },
  { id: 3, time: "14:00 - 15:30", subject: "Matematika", grades: "6- va 8-sinflar" },
  { id: 4, time: "17:00 - 18:30", subject: "Matematika", grades: "7- va 9-sinflar" },
];

export default function ExamInfoPage() {
  return (
    <div className="container mx-auto px-4">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold from-blue-50 mb-2">
          OROMGOH UCHUN SARALASH IMTIHONI MANZILLARI
        </h1>
        <p className="text-lg text-slate-600">
          "Summer Science Camp"ga ishtirokchilarni saralash imtihonlari haqida ma'lumot
        </p>
      </header>

      <Card className="mb-8 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-blue-300">
            <MapPin className="w-7 h-7 mr-3 text-blue-300" />
            Imtihon O‘tkaziladigan Manzillar
          </CardTitle>
          <CardDescription>
            Saralash imtihoni bo‘lib o‘tadigan joy manzillari bilan tanishing:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {locations.map((location, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-base font-medium hover:text-green-600">
                  {location.region}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pl-6">
                  {location.link ? (
                    <a
                      href={location.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      {location.address}
                    </a>
                  ) : (
                    location.address
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="mb-8 shadow-lg" id="exam-schedule">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-blue-300">
            <CalendarDays className="w-7 h-7 mr-3 text-blue-300" />
            “Summer science camp” REJA-GRAFIGI
          </CardTitle>
          <CardDescription>
            Yozgi iqtidorli yoshlar intellektual oromgohiga saralash sinovlarini tashkil etish rejasi
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px] text-center font-semibold">T/r</TableHead>
                <TableHead className="font-semibold">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1.5" />
                    Vaqtlar
                  </div>
                </TableHead>
                <TableHead className="font-semibold">
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1.5" />
                    Fan
                  </div>
                </TableHead>
                <TableHead className="font-semibold">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1.5" />
                    Sinflar
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium text-center">
                    {item.id}
                  </TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.subject}</TableCell>
                  <TableCell>{item.grades}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-md shadow-md flex items-start">
        <AlertTriangle className="w-8 h-8 mr-4 text-green-500 flex-shrink-0" />
        <div>
          <h3 className="font-bold text-lg mb-1">Muhim Ma’lumot!</h3>
          <p className="text-base">
            Saralash imtihoni <strong className="font-semibold">20-iyun</strong> kuni bo‘lib o‘tadi.
          </p>
        </div>
      </div>
    </div>
  );
}
