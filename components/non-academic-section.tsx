import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function NonAcademicSection() {
  const activities = [
    {
      title: "Sports & Recreation",
      description:
        "Stay active with swimming, hiking, team sports, and outdoor games that promote physical fitness and teamwork.",
      image: "/images/sports.jpg",
    },
    {
      title: "Field Trips & Excursions",
      description:
        "Explore museums, research facilities, nature reserves, and other educational destinations that complement our curriculum.",
      image: "/images/trips.jpg",
    },
    {
      title: "Entertainment & Social Activities",
      description:
        "Enjoy campfires, talent shows, movie nights, and social events designed to build friendships and create lasting memories.",
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
              Non-Academic Activities
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We believe in a balanced approach to learning, combining academic
              rigor with fun recreational activities.
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

        <div className="mt-16 bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-lg">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">A Day at Science Camp</h3>
              <ul className="space-y-3">
                {[
                  { time: "7:30 AM - 8:30 AM", activity: "Breakfast" },
                  {
                    time: "9:00 AM - 12:00 PM",
                    activity: "Morning Academic Sessions",
                  },
                  { time: "12:00 PM - 1:00 PM", activity: "Lunch" },
                  {
                    time: "1:00 PM - 3:00 PM",
                    activity: "Intellectual Activities",
                  },
                  {
                    time: "3:00 PM - 5:00 PM",
                    activity: "Sports & Recreation",
                  },
                  { time: "5:00 PM - 6:00 PM", activity: "Free Time" },
                  { time: "6:00 PM - 7:00 PM", activity: "Dinner" },
                  {
                    time: "7:00 PM - 9:00 PM",
                    activity: "Evening Activities & Social Events",
                  },
                  {
                    time: "9:00 PM - 10:00 PM",
                    activity: "Reflection & Preparation",
                  },
                  { time: "10:00 PM", activity: "Lights Out" },
                ].map((item, i) => (
                  <li key={i} className="flex">
                    <span className="font-medium w-36 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                      {item.time}
                    </span>
                    <span>{item.activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 blur-md"></div>
              <Image
                src="/images/camp.jpg"
                alt="A day at Science Camp"
                fill
                className="relative object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
