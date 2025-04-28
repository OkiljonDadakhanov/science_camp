import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StaticMap() {
  return (
    <section
      id="location"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Location
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find us at our state-of-the-art campus with modern facilities and
              beautiful surroundings.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-1 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-500">
                    100099, Otchopar-1, Darvozakent Street, House 60, Yunusobod
                    District, Tashkent, Uzbekistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-500">+998 77 550 33 66</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-500">info@olympcenter.uz</p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-bold">Getting Here</h3>
              <div className="space-y-2">
                <h4 className="font-medium">By Car</h4>
                <p className="text-gray-500">
                  30 minutes from Downtown. Free parking available on campus.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Public Transportation</h4>
                <p className="text-gray-500">
                  Bus routes 42 and 108 stop directly in front of the campus.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Shuttle Service</h4>
                <p className="text-gray-500">
                  We offer shuttle service from major airports and train
                  stations.
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Toshkent+viloyati+O%CA%BBqituvchilari+malaka+oshirish/@41.348892668938966,69.29949832101188,19z/data=!4m6!3m5!1s0x38aef5fa8d575101:0xbceea98f74bfe973!8m2!3d41.3488927!4d69.2994983!16s%2Fg%2F11mcd9q8zf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full mt-6 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 transition-all duration-300">
                <ExternalLink className="mr-2 h-4 w-4" /> Get Directions
              </Button>
            </a>
          </Card>

          <div className="lg:col-span-2 h-[500px] rounded-lg overflow-hidden shadow-lg relative">
            {/* Google Maps embed replacing static image */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 blur-md"></div>
            <div className="w-full h-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748.7898071054376!2d69.29949832101188!3d41.348892668938966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5fa8d575101%3A0xbceea98f74bfe973!2sToshkent%20viloyati%20O%CA%BBqituvchilari%20malaka%20oshirish!5e0!3m2!1sen!2s!4v1745846060244!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative"
                title="Science Olympiad Center Location"
              ></iframe>
            </div>

            {/* Map pin overlay */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[-40%] z-10">
              <div className="flex flex-col items-center">
                <div className="bg-white p-2 rounded-md shadow-md text-center">
                  <strong>Science Olympiad Center</strong>
                  <br />
                  Otchopar-1, Darvozakent Street
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Nearby Attractions</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-medium bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Science Museum
              </h4>
              <p className="text-gray-500">
                Just 10 minutes away, featuring interactive exhibits and IMAX
                theater.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Natural History Park
              </h4>
              <p className="text-gray-500">
                Beautiful hiking trails and wildlife observation points within
                walking distance.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Innovation Center
              </h4>
              <p className="text-gray-500">
                Technology showcase and workshops, perfect for field trips
                during camp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
