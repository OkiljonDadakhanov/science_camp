import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Subject {
  name: string;
  description: string;
  icon: string;
}

export default function SubjectCard({ name, description, icon }: Subject) {
  return (
    <Card className="flex items-start gap-4 p-4">
      <Image src={icon} alt={name} width={48} height={48} />
      <CardContent className="p-0">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
}
