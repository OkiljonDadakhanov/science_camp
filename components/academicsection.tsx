import SubjectCard from "@/components/subject-card"
import MentorCard from "@/components/mentorcard";
import { subjects, mentors } from "@/lib/data"; // import ma'lumotlar

export default function AcademicSections() {
  return (
    <section
      id="academic"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Akademik dasturlar
          </h2>
          <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed">
            Bizning akademik dasturimiz yetuk ilmiy salohiyatga ega, xalqaro
            olimpiadalarda yuqori natijalarni ko'rsatgan mentorlar tomonidan
            olib boriladi.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, idx) => (
            <SubjectCard key={idx} {...subject} />
          ))}
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Bizning mentorlar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, idx) => (
              <MentorCard key={idx} {...mentor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
