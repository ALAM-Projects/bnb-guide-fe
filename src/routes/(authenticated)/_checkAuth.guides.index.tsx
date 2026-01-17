import { getMyGuides } from "@/api/generated/guide/guide";
import type { GuideDto } from "@/api/generated/hostly.schemas";
import { withSSRAuth } from "@/api/ssr-loader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BookOpen, Plus, MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/(authenticated)/_checkAuth/guides/")({
  loader: withSSRAuth(async () => {
    const guides = await getMyGuides();
    return { guides: guides as any };
  }),
  component: GuidesPage,
});

function GuidesPage() {
  const { guides } = Route.useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Le Mie Guide
          </h1>
          <p className="text-muted-foreground">
            Gestisci e organizza le tue guide per gli ospiti
          </p>
        </div>
        <Button
          onClick={() => navigate({ to: "/guides/create" })}
          size="lg"
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          Crea Nuova Guida
        </Button>
      </div>

      {/* Guides Grid */}
      {guides && guides.length > 0 ? (
        <>
          <div className="mb-4 text-sm text-muted-foreground">
            {guides.length}{" "}
            {guides.length === 1 ? "guida trovata" : "guide trovate"}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide: GuideDto) => (
              <Card
                key={guide.id}
                className="hover:shadow-lg transition-all duration-200 cursor-pointer group hover:border-primary/50"
                onClick={() => navigate({ to: `/guides/${guide.id}` })}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {guide.structure?.name || "Nessuna struttura associata"}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    {guide.structure?.address && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span className="truncate">
                          {guide.structure.address}
                        </span>
                      </div>
                    )}
                    {guide.createdAt && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>
                          Creata il{" "}
                          {new Date(guide.createdAt).toLocaleDateString(
                            "it-IT"
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="text-xs text-muted-foreground">
                  Clicca per visualizzare
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      ) : (
        // Empty State
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <div className="rounded-full bg-primary/10 p-4 mb-4">
              <BookOpen className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Nessuna guida trovata
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Inizia creando la tua prima guida per aiutare i tuoi ospiti a
              godersi al meglio il soggiorno
            </p>
            <Button
              onClick={() => navigate({ to: "/guides/create" })}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Crea la Tua Prima Guida
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
