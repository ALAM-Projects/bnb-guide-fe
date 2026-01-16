import { getGuideById } from "@/api/generated/guide/guide";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  GuideHeader,
  MobileSectionGrid,
  MobileSectionForm,
  DesktopSidebar,
  DesktopSectionContent,
  SectionFormPlaceholder,
  sections,
  type Section,
} from "@/components/guide";

export const Route = createFileRoute(
  "/(authenticated)/_checkAuth/guides/$guideId"
)({
  component: GuideDetailsPage,
  loader: async ({ params }) => {
    const guide = await getGuideById(params.guideId);
    return { guide: guide as any };
  },
});

function GuideDetailsPage() {
  const { guide } = Route.useLoaderData();
  const [activeSection, setActiveSection] = useState<Section>("restaurants");
  const [showMobileForm, setShowMobileForm] = useState(false);

  const activeSectionConfig = sections.find((s) => s.id === activeSection);

  // Funzione per selezionare una sezione su mobile
  const handleMobileSectionSelect = (section: Section) => {
    setActiveSection(section);
    setShowMobileForm(true);
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-primary/5 via-primary/10 to-background px-4 py-6">
      <GuideHeader
        guideTitle={guide.title || "Guida della struttura"}
        showMobileForm={showMobileForm}
        activeSectionConfig={activeSectionConfig}
        onMobileBack={() => setShowMobileForm(false)}
      />

      <div className="mx-auto pt-6 ">
        {/* Vista Mobile - Selezione Sezioni (Pagina 1) */}
        {!showMobileForm && (
          <MobileSectionGrid onSectionSelect={handleMobileSectionSelect} />
        )}

        {/* Vista Mobile - Form (Pagina 2) */}
        {showMobileForm && (
          <MobileSectionForm section={activeSection}>
            <SectionFormPlaceholder section={activeSection} />
          </MobileSectionForm>
        )}

        {/* Desktop Layout: Sidebar + Content */}
        <div className="hidden lg:block">
          <div className="flex gap-6">
            <DesktopSidebar
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />

            <DesktopSectionContent sectionConfig={activeSectionConfig}>
              <SectionFormPlaceholder section={activeSection} />
            </DesktopSectionContent>
          </div>
        </div>
      </div>
    </main>
  );
}
