import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Achievement {
  year: string;
  award: string;
}

interface Publication {
  title: string;
  type: string;
}

interface Mentor {
  name: string;
  role: string;
  education: string;
  position: string;
  achievements: Achievement[];
  image: string;
  additionalInfo?: string;
  certificates?: string[];
  languages?: string[];
  experience?: string;
  publications?: Publication[];
}

export default function MentorCard({
  name,
  role,
  education,
  position,
  achievements,
  image,
  additionalInfo,
  certificates,
  languages,
  experience,
  publications,
}: Mentor) {
  return (
    <Card className="p-4">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="rounded-lg w-full h-60 object-cover"
      />
      <CardContent className="mt-4 space-y-2">
        <h4 className="text-xl font-bold">{name}</h4>
        <p className="text-sm font-medium text-gray-600">{role}</p>
        <p className="text-sm text-gray-500">{education}</p>
        <p className="text-sm text-gray-500 italic">{position}</p>
        {additionalInfo && (
          <p className="text-sm text-gray-500">{additionalInfo}</p>
        )}
        {certificates && (
          <div>
            <p className="text-sm font-semibold">Sertifikatlar:</p>
            <ul className="list-disc list-inside text-sm text-gray-500">
              {certificates.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        )}
        {languages && (
          <div>
            <p className="text-sm font-semibold">Tillar:</p>
            <ul className="list-disc list-inside text-sm text-gray-500">
              {languages.map((l, idx) => (
                <li key={idx}>{l}</li>
              ))}
            </ul>
          </div>
        )}
        {experience && (
          <p className="text-sm text-gray-500">Tajriba: {experience}</p>
        )}
        {publications && (
          <div>
            <p className="text-sm font-semibold">Nashrlar:</p>
            <ul className="list-disc list-inside text-sm text-gray-500">
              {publications.map((p, idx) => (
                <li key={idx}>
                  {p.title} ({p.type})
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="pt-2 space-y-1">
          {achievements.map((ach, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="block w-full justify-start"
            >
              {ach.year && (
                <span className="font-semibold mr-1">{ach.year}:</span>
              )}
              {ach.award}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
