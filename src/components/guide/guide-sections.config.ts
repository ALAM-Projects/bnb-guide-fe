import {
  UtensilsCrossed,
  Palmtree,
  ShoppingCart,
  HelpCircle,
  FileText,
  Train,
  Wifi,
  CalendarClock,
} from "lucide-react";

export type Section =
  | "restaurants"
  | "activities"
  | "supermarkets"
  | "faqs"
  | "rules"
  | "transportation"
  | "wifi"
  | "checkin-checkout";

export interface SectionConfig {
  id: Section;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export const sections: SectionConfig[] = [
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
