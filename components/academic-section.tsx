import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AcademicSection() {
  const subjects = [
    {
      name: "Physics",
      description: "Explore mechanics, electricity, magnetism, and modern physics through hands-on experiments.",
      icon: "/physics-abstract.png",
    },
    {
      name: "Chemistry",
      description: "Conduct chemical reactions, analyze compounds, and understand molecular structures.",
      icon: "/chemistry-beakers.png",
    },
    {
      name: "Biology",
      description: "Study ecosystems, genetics, and human physiology through microscopy and field work.",
      icon: "/dna-helix-icon.png",
    },
    {
      name: "Astronomy",
      description: "Observe celestial bodies, learn about space exploration, and understand cosmic phenomena.",
      icon: "/celestial-symbols.png",
    },
    {
      name: "Mathematics",
      description: "Develop problem-solving skills through challenging puzzles and real-world applications.",
      icon: "/abstract-mathematics.png",
    },
    {
      name: "Computer Science",
      description: "Learn programming, algorithms, and computational thinking through coding projects.",
      icon: "/abstract-computer-science.png",
    },
  ]

  return (
    <section id="academic" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Academic Process</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our comprehensive academic program is led by expert mentors who are passionate about science education.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Expert Mentors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Physics Professor",
                bio: "PhD from MIT with 15 years of research experience in quantum physics.",
                image: "/thoughtful-physics-instructor.png",
              },
              {
                name: "Prof. Michael Chen",
                role: "Chemistry Specialist",
                bio: "Award-winning educator with expertise in organic chemistry and material science.",
                image: "/engaged-chemistry-professor.png",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Robotics Engineer",
                bio: "Former NASA engineer specializing in autonomous systems and AI applications.",
                image: "/focused-female-engineer.png",
              },
            ].map((mentor, i) => (
              <Card key={i} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square relative">
                  <Image src={mentor.image || "/placeholder.svg"} alt={mentor.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold">{mentor.name}</h4>
                  <p className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent font-medium">
                    {mentor.role}
                  </p>
                  <p className="mt-2 text-gray-500">{mentor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Subjects Covered</h3>
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
