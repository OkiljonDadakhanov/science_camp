import Image from "next/image";
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
                    123 Science Way
                    <br />
                    Innovation City, ST 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-500">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-500">info@sciencecamp.org</p>
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

            <Button className="w-full mt-6 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 transition-all duration-300">
              <ExternalLink className="mr-2 h-4 w-4" /> Get Directions
            </Button>
          </Card>

          <div className="lg:col-span-2 h-[500px] rounded-lg overflow-hidden shadow-lg relative">
            {/* Static map image from OpenStreetMap */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 blur-md"></div>
            <Image
              src="/placeholder.svg?height=500&width=800&text=Science+Camp+Location+Map"
              alt="Map showing Science Camp location"
              fill
              className="object-cover relative"
            />

            {/* Map pin overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center">
                <MapPin className="h-10 w-10 text-blue-600 drop-shadow-lg" />
                <div className="bg-white p-2 rounded-md shadow-md mt-2 text-center">
                  <strong>Science Olympiad Center</strong>
                  <br />
                  123 Science Way
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
