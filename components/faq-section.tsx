"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function FAQSection() {
  const faqCategories = [
    {
      title: "Registration & Admissions",
      questions: [
        {
          question: "How do I register my child for Science Camp?",
          answer:
            "Registration can be completed online through our website. Click the 'Register Now' button at the top of the page, fill out the required information, and submit your application. You'll receive a confirmation email with further instructions.",
        },
        {
          question: "What is the age range for Science Camp participants?",
          answer:
            "Our Science Camp is designed for students aged 12-18 years old. We group campers by age and academic level to ensure appropriate instruction and peer interaction.",
        },
        {
          question: "Is there an application deadline?",
          answer:
            "Yes, applications typically close 6 weeks before each camp session begins. However, popular sessions may fill up quickly, so we recommend registering as early as possible to secure your spot.",
        },
        {
          question: "Do you offer any scholarships or financial aid?",
          answer:
            "Yes, we offer a limited number of merit-based and need-based scholarships. To apply, please complete the scholarship section during the registration process and submit the required documentation by the specified deadline.",
        },
      ],
    },
    {
      title: "Camp Logistics",
      questions: [
        {
          question: "Where is the Science Camp located?",
          answer:
            "Our main campus is located at 123 Science Way, Innovation City, ST 12345. We have state-of-the-art laboratories, dormitories, recreational facilities, and outdoor spaces all within our secure campus.",
        },
        {
          question: "Is accommodation provided?",
          answer:
            "Yes, all campers stay in our modern dormitories on campus. Rooms are typically shared between 2-4 students of the same gender and similar age. Each dormitory has resident counselors who provide supervision.",
        },
        {
          question: "What about meals and dietary restrictions?",
          answer:
            "Three nutritious meals plus snacks are provided daily. Our dining hall can accommodate most dietary restrictions and food allergies. Please specify any dietary requirements during registration so we can make appropriate arrangements.",
        },
        {
          question: "Is transportation provided to and from the camp?",
          answer:
            "We offer shuttle service from major airports and train stations on arrival and departure days. There is an additional fee for this service, which can be selected during registration.",
        },
      ],
    },
    {
      title: "Academic Program",
      questions: [
        {
          question: "What subjects are covered at Science Camp?",
          answer:
            "Our curriculum covers Physics, Chemistry, Biology, Astronomy, Mathematics, Computer Science, and Engineering. Each camper will experience all subjects but can choose to specialize in areas of particular interest.",
        },
        {
          question: "Who are the instructors?",
          answer:
            "Our instructors are experienced educators, university professors, research scientists, and industry professionals who are passionate about science education. All instructors undergo thorough background checks and training.",
        },
        {
          question: "Do campers need prior knowledge or experience?",
          answer:
            "No prior specialized knowledge is required. We welcome students with all levels of science background, from beginners to advanced. Our program is designed to challenge and engage students at their appropriate level.",
        },
        {
          question:
            "Will campers receive any certification or academic credit?",
          answer:
            "All campers receive a certificate of completion. While we don't offer formal academic credit, many schools recognize our program for enrichment purposes. We can provide detailed documentation of the curriculum covered upon request.",
        },
      ],
    },
    {
      title: "Health & Safety",
      questions: [
        {
          question: "What medical facilities are available at camp?",
          answer:
            "We have a fully equipped health center staffed by registered nurses 24/7. Additionally, we have partnerships with local medical facilities for any emergency situations. All staff are trained in first aid and CPR.",
        },
        {
          question: "How do you handle medications?",
          answer:
            "All medications must be turned in to our health center upon arrival. Our medical staff will dispense medications according to the instructions provided during registration. Please ensure all medications are in their original containers with clear instructions.",
        },
        {
          question:
            "What safety measures are in place for laboratory activities?",
          answer:
            "Safety is our top priority. All lab activities are supervised by qualified instructors with appropriate safety equipment provided. Campers receive comprehensive safety training before participating in any lab work, and our facilities meet or exceed all safety standards.",
        },
        {
          question: "What is the staff-to-camper ratio?",
          answer:
            "We maintain a staff-to-camper ratio of 1:8 during academic activities and 1:10 during recreational activities to ensure proper supervision and individual attention.",
        },
      ],
    },
    {
      title: "Preparation & Packing",
      questions: [
        {
          question: "What should my child bring to Science Camp?",
          answer:
            "We provide a detailed packing list after registration, but essentials include casual clothing, closed-toe shoes, toiletries, bedding (or sleeping bag), towels, sunscreen, a water bottle, and any required medications. Lab coats and safety equipment will be provided by the camp.",
        },
        {
          question: "Are electronic devices allowed?",
          answer:
            "Limited use of electronic devices is permitted during designated times. Smartphones and tablets may be used during free time but must be stored away during academic and group activities. We encourage campers to fully engage with the program and their peers.",
        },
        {
          question: "Is there a dress code?",
          answer:
            "We don't have a strict dress code, but we require appropriate attire for all activities. For lab work, closed-toe shoes and long pants are mandatory. For outdoor activities, weather-appropriate clothing and sun protection are recommended.",
        },
        {
          question: "Can parents visit during the camp?",
          answer:
            "We have a designated Visitors' Day midway through each session where family members can tour the facilities and observe activities. Outside of this day, visits are limited to maintain the immersive camp experience and security protocols.",
        },
      ],
    },
  ];

  return (
    <section
      id="faq"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our Science Camp program,
              logistics, and more.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {faqCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-6 transition-all duration-300 hover:shadow-md"
            >
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`item-${categoryIndex}-${faqIndex}`}
                  >
                    <AccordionTrigger className="text-left font-medium hover:text-blue-600 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Don't see your question here? Contact us at{" "}
            <a
              href="mailto:info@olympcenter.uz"
              className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent hover:underline"
            >
              info@olympcenter.uz
            </a>{" "}
            or call{" "}
            <a
              href="tel:+998775503366"
              className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent hover:underline"
            >
              +998 77 550 33 66
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
