import { createFileRoute } from "@tanstack/react-router";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useCreateGuide } from "@/api/generated/guide/guide";
import { CreateGuideWithStructureDto } from "@/api/generated/hostly.schemas";

export const Route = createFileRoute(
  "/(authenticated)/_checkAuth/guides/create"
)({
  component: CreateGuidesPage,
});

function CreateGuidesPage() {
  const form = useForm();

  const { mutate: createGuide, isPending } = useCreateGuide();

  const onSubmit = (data: any) => {
    const newGuideData: CreateGuideWithStructureDto = {
      ...data,
    };

    createGuide(
      { data: newGuideData },
      {
        onSuccess: () => {
          window.alert("Guida creata con successo");
        },
        onError: () => {
          window.alert("Errore nella creazione della guida");
        },
      }
    );
  };
  console.log("FORM => ", form.getValues());

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Crea nuova guida</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Sezione Struttura */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Struttura</h2>
              <FormDescription>
                Inserisci i dati della tua struttura ricettiva
              </FormDescription>
            </div>

            <FormField
              control={form.control}
              name="structure.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome della struttura</FormLabel>
                  <FormControl>
                    <Input placeholder="Es. Hotel Bella Vista" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="structure.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Indirizzo</FormLabel>
                  <FormControl>
                    <Input placeholder="Es. Via Roma 123, Milano" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="structure.description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrizione</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Descrizione della struttura"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Sezione Guida */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Guida</h2>
              <FormDescription>
                Inserisci le informazioni da inserire nella guida
              </FormDescription>
            </div>

            <FormField
              control={form.control}
              name="guide.title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titolo della guida</FormLabel>
                  <FormControl>
                    <Input placeholder="Es. Guida di Milano" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="guide.description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrizione</FormLabel>
                  <FormControl>
                    <Input placeholder="Descrizione della guida" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" disabled={isPending} isLoading={isPending}>
            Crea guida
          </Button>
        </form>
      </Form>
    </main>
  );
}
