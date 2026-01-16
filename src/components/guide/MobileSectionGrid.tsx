import { sections, Section } from "./guide-sections.config";

interface MobileSectionGridProps {
  onSectionSelect: (section: Section) => void;
}

export function MobileSectionGrid({ onSectionSelect }: MobileSectionGridProps) {
  return (
    <div className="lg:hidden mb-6">
      <div className="grid grid-cols-2 gap-4">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => onSectionSelect(section.id)}
              className="group flex flex-col items-center gap-4 p-6 rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 text-center active:scale-95 border border-white/40"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm mb-1.5">
                  {section.label}
                </p>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
