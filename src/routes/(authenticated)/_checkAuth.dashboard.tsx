import { getMyGuides } from "@/api/generated/guide/guide";
import type { GuideDto } from "@/api/generated/hostly.schemas";
import { withSSRAuth } from "@/api/ssr-loader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  createFileRoute,
  getRouteApi,
  useNavigate,
} from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle,
  HelpCircle,
  Mountain,
  Plus,
  Settings,
  ShoppingCart,
  Utensils,
  Wifi,
  XCircle,
} from "lucide-react";

export const Route = createFileRoute("/(authenticated)/_checkAuth/dashboard")({
  loader: withSSRAuth(async () => {
    const guides = await getMyGuides();
    return { guides: guides as GuideDto[] };
  }),
  component: DashboardPage,
});

function completenessScore(guide: GuideDto): number {
  const checks = [
    (guide.restaurants?.length ?? 0) > 0,
    (guide.activities?.length ?? 0) > 0,
    (guide.supermarkets?.length ?? 0) > 0,
    (guide.faqs?.length ?? 0) > 0,
    (guide.rules?.length ?? 0) > 0,
    (guide.transportation?.length ?? 0) > 0,
    !!guide.wifiName,
    !!(guide.checkInRules || guide.checkOutRules),
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

function CompletenessBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-foreground transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground w-8 text-right tabular-nums">
        {value}%
      </span>
    </div>
  );
}

function StatTile({
  icon: Icon,
  count,
  label,
}: {
  icon: React.ElementType;
  count: number;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-md border border-border/60 px-3 py-2.5">
      <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-none tabular-nums">{count}</p>
        <p className="text-xs text-muted-foreground mt-0.5 truncate">{label}</p>
      </div>
    </div>
  );
}

function StructureCard({ guide }: { guide: GuideDto }) {
  const navigate = useNavigate();
  const score = completenessScore(guide);

  return (
    <Card className="group flex flex-col overflow-hidden border-border/60 shadow-none hover:border-foreground/20 transition-colors duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-lg border border-border/80 bg-muted/50 flex items-center justify-center shrink-0">
            <Building2 className="h-4 w-4 text-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <CardTitle className="text-base font-semibold truncate">
                {guide.structure?.name}
              </CardTitle>
              <span
                className={cn(
                  "inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium shrink-0 border",
                  guide.isActive
                    ? "border-border/80 bg-muted/50 text-foreground"
                    : "border-border/60 bg-transparent text-muted-foreground"
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    guide.isActive ? "bg-foreground" : "bg-muted-foreground/50"
                  )}
                />
                {guide.isActive ? "Attiva" : "Inattiva"}
              </span>
            </div>
            {guide.structure?.address && (
              <p className="text-sm text-muted-foreground truncate mt-0.5">
                {guide.structure.address}
              </p>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 flex-1 pb-5">
        <div className="flex items-center gap-2 rounded-md border border-border/60 bg-muted/30 px-3 py-2.5">
          <BookOpen className="h-4 w-4 text-muted-foreground shrink-0" />
          <span className="text-sm font-medium truncate text-foreground">
            {guide.title}
          </span>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Completamento
            </span>
          </div>
          <CompletenessBar value={score} />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <StatTile icon={Utensils} count={guide.restaurants?.length ?? 0} label="Ristoranti" />
          <StatTile icon={Mountain} count={guide.activities?.length ?? 0} label="Attività" />
          <StatTile icon={HelpCircle} count={guide.faqs?.length ?? 0} label="FAQ" />
          <StatTile icon={ShoppingCart} count={guide.supermarkets?.length ?? 0} label="Supermercati" />
        </div>

        <div className="flex items-center gap-1.5">
          <Wifi
            className={cn(
              "h-3.5 w-3.5",
              guide.wifiName ? "text-foreground" : "text-muted-foreground/40"
            )}
          />
          <span
            className={cn(
              "text-xs",
              guide.wifiName ? "text-foreground" : "text-muted-foreground/60"
            )}
          >
            {guide.wifiName ? `Wi-Fi: ${guide.wifiName}` : "Wi-Fi non configurato"}
          </span>
        </div>

        <p className="text-xs text-muted-foreground">
          Aggiornata il{" "}
          {new Date(guide.updatedAt).toLocaleDateString("it-IT", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="flex gap-2 pt-1 mt-auto border-t border-border/60">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-1.5 text-sm"
            onClick={() => navigate({ to: `/guides/${guide.id}` })}
          >
            <Settings className="h-3.5 w-3.5" />
            Gestisci
          </Button>
          <Button
            size="sm"
            className="flex-1 gap-1.5 text-sm"
            onClick={() => navigate({ to: `/guides/${guide.id}` })}
          >
            Apri
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function SummaryCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string | number;
  label: string;
}) {
  return (
    <Card className="py-5 border-border/60 shadow-none">
      <CardContent className="px-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <p className="text-3xl font-semibold tracking-tight tabular-nums">{value}</p>
      </CardContent>
    </Card>
  );
}

function DashboardPage() {
  const parentRoute = getRouteApi("/(authenticated)/_checkAuth");
  const { user } = parentRoute.useLoaderData() as { user: any };
  const { guides } = Route.useLoaderData();
  const navigate = useNavigate();

  const activeCount = guides?.filter((g) => g.isActive).length ?? 0;
  const totalContent =
    guides?.reduce(
      (acc, g) =>
        acc +
        (g.restaurants?.length ?? 0) +
        (g.activities?.length ?? 0) +
        (g.supermarkets?.length ?? 0) +
        (g.faqs?.length ?? 0),
      0
    ) ?? 0;
  const avgScore =
    guides && guides.length > 0
      ? Math.round(
          guides.reduce((acc, g) => acc + completenessScore(g), 0) /
            guides.length
        )
      : 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Bentornato, {user?.name ?? "host"}
            </h1>
            <p className="text-muted-foreground mt-1.5">
              Gestisci le tue strutture e le guide per gli ospiti
            </p>
          </div>
          <Button
            onClick={() => navigate({ to: "/guides/create" })}
            size="lg"
            className="gap-2 shrink-0"
          >
            <Plus className="h-4 w-4" />
            Aggiungi struttura
          </Button>
        </div>

        {guides && guides.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <SummaryCard icon={Building2} value={guides.length} label="Strutture totali" />
            <SummaryCard icon={CheckCircle} value={activeCount} label="Guide attive" />
            <SummaryCard icon={BarChart3} value={totalContent} label="Contenuti inseriti" />
            <SummaryCard icon={BookOpen} value={`${avgScore}%`} label="Completamento medio" />
          </div>
        )}

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold tracking-tight">
            Le tue strutture
          </h2>
          {guides && guides.length > 0 && (
            <span className="text-sm text-muted-foreground">
              {guides.length}{" "}
              {guides.length === 1 ? "struttura" : "strutture"}
            </span>
          )}
        </div>

        {guides && guides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <StructureCard key={guide.id} guide={guide} />
            ))}
          </div>
        ) : (
          <Card className="border-dashed border border-border shadow-none">
            <CardContent className="flex flex-col items-center justify-center py-20 text-center gap-4">
              <div className="rounded-xl border border-border/80 bg-muted/50 p-4">
                <Building2 className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Nessuna struttura ancora
                </h3>
                <p className="text-muted-foreground mt-2 max-w-sm">
                  Crea la tua prima guida per fornire ai tuoi ospiti tutte le
                  informazioni necessarie su struttura e dintorni.
                </p>
              </div>
              <Button
                onClick={() => navigate({ to: "/guides/create" })}
                size="lg"
                className="gap-2 mt-2"
              >
                <Plus className="h-4 w-4" />
                Crea la prima struttura
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
