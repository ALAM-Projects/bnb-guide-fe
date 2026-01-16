import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionConfig } from "./guide-sections.config";

interface DesktopSectionContentProps {
  sectionConfig?: SectionConfig;
  children: React.ReactNode;
}

export function DesktopSectionContent({
  sectionConfig,
  children,
}: DesktopSectionContentProps) {
  return (
    <div className="flex-1 min-w-0">
      <Card className="border border-white/40 rounded-3xl shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-6">
          <div className="flex items-start gap-4">
            {sectionConfig && (
              <>
                <div className="p-3 rounded-2xl bg-primary/10 text-primary shadow-md">
                  <sectionConfig.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl font-bold text-slate-900 tracking-tight">
                    {sectionConfig.label}
                  </CardTitle>
                  <CardDescription className="mt-2 text-base text-slate-600 font-medium">
                    {sectionConfig.description}
                  </CardDescription>
                </div>
              </>
            )}
          </div>
        </CardHeader>
        <CardContent className="pt-2">{children}</CardContent>
      </Card>
    </div>
  );
}
