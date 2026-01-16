import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sections, Section } from "./guide-sections.config";

interface DesktopSidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export function DesktopSidebar({
  activeSection,
  onSectionChange,
}: DesktopSidebarProps) {
  return (
    <aside className="w-72 shrink-0">
      <Card className="border border-white/40 rounded-3xl shadow-xl sticky top-28 bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold text-slate-900">Sezioni</CardTitle>
          <CardDescription className="text-sm text-slate-600 font-medium">
            Seleziona una sezione da modificare
          </CardDescription>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => onSectionChange(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-lg scale-[1.02]"
                      : "hover:bg-slate-100 text-slate-700 hover:scale-[1.01]"
                  }`}
                >
                  <div className={`p-2 rounded-xl transition-colors ${
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-slate-100 text-slate-600"
                  }`}>
                    <Icon className="h-4 w-4 shrink-0" />
                  </div>
                  <span className="truncate">{section.label}</span>
                </button>
              );
            })}
          </nav>
        </CardContent>
      </Card>
    </aside>
  );
}
