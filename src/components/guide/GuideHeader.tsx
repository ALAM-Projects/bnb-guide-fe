import { Button } from "@/components/ui/button";
import Text from "@/components/base/text";
import { ArrowLeft, Eye, Save } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionConfig } from "./guide-sections.config";

interface GuideHeaderProps {
  guideTitle: string;
  showMobileForm: boolean;
  activeSectionConfig?: SectionConfig;
  onMobileBack: () => void;
}

export function GuideHeader({
  guideTitle,
  showMobileForm,
  activeSectionConfig,
  onMobileBack,
}: GuideHeaderProps) {
  return (
    <div className="rounded-3xl shadow-lg backdrop-blur-sm sticky top-4 z-10 bg-white/90 border border-white/20">
      <div className="mx-auto px-6 py-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            {/* Su mobile, mostra "Indietro" quando sei nel form */}
            <div className="lg:hidden">
              {showMobileForm ? (
                <Button 
                  size="icon-sm" 
                  onClick={onMobileBack}
                  className="rounded-2xl bg-slate-900 hover:bg-slate-800"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              ) : (
                <Link to="/guides">
                  <Button 
                    size="icon-sm"
                    className="rounded-2xl bg-slate-900 hover:bg-slate-800"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
            {/* Su desktop, sempre il link normale */}
            <Link to="/guides" className="hidden lg:block">
              <Button 
                size="icon-sm"
                className="rounded-2xl bg-slate-900 hover:bg-slate-800"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                {/* Su mobile in vista form, mostra il nome della sezione */}
                <span className="lg:hidden">
                  {showMobileForm && activeSectionConfig
                    ? activeSectionConfig.label
                    : guideTitle}
                </span>
                <span className="hidden lg:block">{guideTitle}</span>
              </h1>
              <p className="text-sm text-slate-600 mt-1 font-medium">
                {/* Descrizione dinamica su mobile */}
                <span className="lg:hidden">
                  {showMobileForm && activeSectionConfig
                    ? activeSectionConfig.description
                    : "Seleziona una sezione da modificare"}
                </span>
                <span className="hidden lg:block">
                  Gestisci tutti i contenuti della tua guida
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="gap-2 rounded-2xl border-slate-200 hover:bg-slate-50 hover:border-slate-300 font-semibold"
            >
              <Eye className="h-4 w-4" />
              <span className="hidden sm:inline">Anteprima</span>
            </Button>
            <Button className="gap-2 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-md font-semibold">
              <Save className="h-4 w-4" />
              <span className="hidden sm:inline">Salva</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
