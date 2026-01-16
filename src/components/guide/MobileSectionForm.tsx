import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./guide-sections.config";

interface MobileSectionFormProps {
  section: Section;
  children: React.ReactNode;
}

export function MobileSectionForm({
  section,
  children,
}: MobileSectionFormProps) {
  return (
    <div className="lg:hidden">
      <Card className="border border-white/40 rounded-3xl shadow-xl bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    </div>
  );
}
