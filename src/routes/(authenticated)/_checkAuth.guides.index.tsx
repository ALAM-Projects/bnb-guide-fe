import { useGetMyGuides } from "@/api/generated/guide/guide";
import Text from "@/components/base/text";
import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)/_checkAuth/guides/")({
  component: GuidesPage,
});

function GuidesPage() {
  const { data: guides, isLoading } = useGetMyGuides();
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate({ to: "/guides/create" })}>
        Crea nuova guida
      </Button>
      <div className="flex flex-col gap-4 max-w-sm">Le mie guide</div>
      {guides && guides.length ? (
        <div className="flex flex-col gap-4 max-w-sm">
          {guides.map((guide) => (
            <div key={guide.id}>{guide.title}</div>
          ))}
        </div>
      ) : (
        <Text size="h2" color="gray-4">
          Nessuna guide trovata
        </Text>
      )}
    </>
  );
}
