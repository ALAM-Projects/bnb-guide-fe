import { getGuideById } from "@/api/generated/guide/guide";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  UtensilsCrossed,
  Palmtree,
  ShoppingCart,
  HelpCircle,
  FileText,
  Train,
  Wifi,
  CalendarClock,
  Save,
  ArrowLeft,
  Eye,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import Text from "@/components/base/text";

export const Route = createFileRoute(
  "/(authenticated)/_checkAuth/guides/$guideId"
)({
  component: GuideDetailsPage,
  loader: async ({ params }) => {
    const guide = await getGuideById(params.guideId);
    return { guide: guide as any };
  },
});

type Section =
  | "restaurants"
  | "activities"
  | "supermarkets"
  | "faqs"
  | "rules"
  | "transportation"
  | "wifi"
  | "checkin-checkout";

interface SectionConfig {
  id: Section;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const sections: SectionConfig[] = [
  {
    id: "restaurants",
    label: "Ristoranti",
    icon: UtensilsCrossed,
    description: "Gestisci i ristoranti consigliati nella tua zona",
  },
  {
    id: "activities",
    label: "Attività",
    icon: Palmtree,
    description: "Aggiungi attività e luoghi di interesse da visitare",
  },
  {
    id: "supermarkets",
    label: "Supermercati",
    icon: ShoppingCart,
    description: "Indica i supermercati e negozi nelle vicinanze",
  },
  {
    id: "faqs",
    label: "FAQ",
    icon: HelpCircle,
    description: "Domande frequenti dei tuoi ospiti",
  },
  {
    id: "rules",
    label: "Regole",
    icon: FileText,
    description: "Regole della casa e informazioni importanti",
  },
  {
    id: "transportation",
    label: "Trasporti",
    icon: Train,
    description: "Mezzi di trasporto e collegamenti",
  },
  {
    id: "wifi",
    label: "WiFi",
    icon: Wifi,
    description: "Informazioni sulla rete WiFi",
  },
  {
    id: "checkin-checkout",
    label: "Check-in/out",
    icon: CalendarClock,
    description: "Orari e procedure di check-in e check-out",
  },
];

function GuideDetailsPage() {
  const { guide } = Route.useLoaderData();
  const [activeSection, setActiveSection] = useState<Section>("restaurants");

  const activeSectionConfig = sections.find((s) => s.id === activeSection);

  return (
    <main className="mt-6 px-10">
      {/* Header */}
      <div className="border border-gray-200 rounded-lg shadow-md sticky top-0 z-10 ">
        <div className="mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <Link to="/guides">
                <Button size="icon-sm">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  {guide.title || "Guida della struttura"}
                </h1>
                <Text size="h4" color="gray-5">
                  Gestisci tutti i contenuti della tua guida
                </Text>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2">
                <Eye className="h-4 w-4" />
                Vedi preview
              </Button>
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Salva modifiche
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto py-6">
        {/* Mobile Navigation */}
        <div className="lg:hidden mb-6">
          <Card className="border border-gray-200 rounded-lg shadow-md">
            <CardContent className="p-4">
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-thin">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg text-xs font-medium transition-all shrink-0 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="whitespace-nowrap">{section.label}</span>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Desktop Layout: Sidebar + Content */}
        <div className="flex gap-6">
          {/* Sidebar Navigation - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <Card className="border border-gray-200 rounded-lg shadow-md sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Sezioni</CardTitle>
                <CardDescription>
                  Seleziona una sezione da modificare
                </CardDescription>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="truncate">{section.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            <Card className="border border-gray-200 rounded-lg shadow-md">
              <CardHeader>
                <div className="flex items-start gap-3">
                  {activeSectionConfig && (
                    <>
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <activeSectionConfig.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl">
                          {activeSectionConfig.label}
                        </CardTitle>
                        <CardDescription className="mt-1.5">
                          {activeSectionConfig.description}
                        </CardDescription>
                      </div>
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <SectionForm section={activeSection} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

// Placeholder form component for each section
function SectionForm({ section }: { section: Section }) {
  return (
    <div className="space-y-6">
      <div className="p-6 border-2 border-dashed rounded-lg bg-slate-50 dark:bg-slate-900/50">
        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Form per la sezione: <span className="font-bold">{section}</span>
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Il form dettagliato verrà implementato successivamente
          </p>
        </div>
      </div>

      {/* Example placeholder fields */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="example-input">Campo esempio</Label>
          <Input
            id="example-input"
            placeholder="Inserisci un valore..."
            className="max-w-md"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="example-textarea">Descrizione esempio</Label>
          <textarea
            id="example-textarea"
            placeholder="Inserisci una descrizione..."
            rows={4}
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-2xl"
          />
        </div>
        <Button variant="outline">Aggiungi elemento</Button>
      </div>
    </div>
  );
}
