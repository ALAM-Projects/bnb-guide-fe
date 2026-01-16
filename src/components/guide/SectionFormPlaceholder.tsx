import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Section } from "./guide-sections.config";

interface SectionFormPlaceholderProps {
  section: Section;
}

export function SectionFormPlaceholder({ section }: SectionFormPlaceholderProps) {
  return (
    <div className="space-y-8">
      <div className="p-8 border-2 border-dashed border-slate-300 rounded-3xl bg-gradient-to-br from-slate-50 to-white">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-2">
            <span className="text-2xl">📝</span>
          </div>
          <p className="text-base font-bold text-slate-900">
            Form per la sezione: <span className="text-primary">{section}</span>
          </p>
          <p className="text-sm text-slate-600 font-medium">
            Il form dettagliato verrà implementato successivamente
          </p>
        </div>
      </div>

      {/* Example placeholder fields */}
      <div className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="example-input" className="text-sm font-bold text-slate-900">
            Campo esempio
          </Label>
          <Input
            id="example-input"
            placeholder="Inserisci un valore..."
            className="max-w-2xl rounded-2xl border-slate-300 bg-white/50 backdrop-blur-sm px-4 py-3 text-sm focus:border-primary focus:ring-primary/20"
          />
        </div>
        <div className="space-y-3">
          <Label htmlFor="example-textarea" className="text-sm font-bold text-slate-900">
            Descrizione esempio
          </Label>
          <textarea
            id="example-textarea"
            placeholder="Inserisci una descrizione..."
            rows={4}
            className="flex min-h-[120px] w-full max-w-2xl rounded-2xl border border-slate-300 bg-white/50 backdrop-blur-sm px-4 py-3 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none"
          />
        </div>
        <Button 
          variant="outline" 
          className="rounded-2xl border-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 font-semibold px-6"
        >
          Aggiungi elemento
        </Button>
      </div>
    </div>
  );
}
