import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin,
  Clock,
  Utensils,
  Map,
  HelpCircle,
  Smartphone,
  Home,
  Car,
  ShoppingBag,
  Mountain,
  Check,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

const features = [
  { icon: Clock, title: "Orari Check-in/out", desc: "Comunica chiaramente gli orari per evitare incomprensioni." },
  { icon: Utensils, title: "Ristoranti consigliati", desc: "Condividi i migliori locali nelle vicinanze della struttura." },
  { icon: Mountain, title: "Escursioni e attività", desc: "Suggerisci le migliori esperienze da fare nella zona." },
  { icon: MapPin, title: "Luoghi da visitare", desc: "Indica punti di interesse e attrazioni imperdibili." },
  { icon: HelpCircle, title: "FAQ e regole", desc: "Rispondi alle domande frequenti e comunica le regole." },
  { icon: Smartphone, title: "Mobile-friendly", desc: "Guide ottimizzate per qualsiasi dispositivo." },
];

const useCases = [
  {
    icon: Home,
    title: "Informazioni sulla struttura",
    items: ["Regole della casa", "WiFi e servizi disponibili", "Istruzioni elettrodomestici", "Contatti di emergenza"],
  },
  {
    icon: Car,
    title: "Trasporti e mobilità",
    items: ["Parcheggi disponibili", "Mezzi pubblici nelle vicinanze", "Servizi taxi e car sharing", "Noleggio bici e scooter"],
  },
  {
    icon: ShoppingBag,
    title: "Servizi essenziali",
    items: ["Supermercati vicini", "Farmacie 24h", "Ospedali e pronto soccorso", "Bancomat e uffici postali"],
  },
  {
    icon: Map,
    title: "Esperienze locali",
    items: ["Tour e escursioni guidate", "Eventi e manifestazioni", "Musei e gallerie d'arte", "Vita notturna"],
  },
];

const faqs = [
  {
    q: "Cos'è Hostly?",
    a: "Hostly è una piattaforma che permette ai gestori di BnB di creare guide interattive per le proprie strutture ricettive. Crea mini-siti condivisibili con gli ospiti contenenti orari, ristoranti, escursioni, FAQ e molto altro.",
  },
  {
    q: "Come condivido le guide con i miei ospiti?",
    a: "Una volta creata la guida, ricevi un link univoco da condividere via email, WhatsApp, SMS o nelle comunicazioni di prenotazione. Gli ospiti accedono da qualsiasi dispositivo senza registrarsi.",
  },
  {
    q: "Posso personalizzare la mia guida?",
    a: "Sì. Aggiungi le sezioni che preferisci, carica foto, modifica i contenuti e inserisci il tuo logo. Ogni guida può rispecchiare l'identità della tua struttura.",
  },
  {
    q: "È gratuito?",
    a: "Hostly offre un piano gratuito per iniziare. Per strutture con più proprietà o funzionalità avanzate come analytics, sono disponibili piani premium.",
  },
  {
    q: "Posso modificare la guida dopo averla creata?",
    a: "Certamente. Le modifiche sono visibili immediatamente agli ospiti, senza bisogno di inviare nuovi link.",
  },
  {
    q: "Le guide funzionano su tutti i dispositivi?",
    a: "Sì, le guide sono completamente responsive e ottimizzate per smartphone, tablet e desktop.",
  },
];

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            La soluzione per gestori di BnB
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground mb-6 max-w-4xl mx-auto">
            Guide interattive per i tuoi ospiti
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Hostly è la piattaforma che permette ai gestori di BnB di creare
            mini-siti condivisibili con tutte le informazioni essenziali per gli
            ospiti.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link to="/signup">
              <Button size="lg" className="h-11 px-6 gap-2">
                Inizia gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-11 px-6">
              Scopri di più
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Nessuna carta richiesta · Setup in 5 minuti
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Tutto ciò che serve per ospitare al meglio
          </h2>
          <p className="text-lg text-muted-foreground">
            Fornisci ai tuoi ospiti tutte le informazioni necessarie in un'unica
            guida professionale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-xl overflow-hidden">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-8 hover:bg-muted/40 transition-colors">
              <div className="h-10 w-10 rounded-lg border border-border/80 bg-muted/50 flex items-center justify-center mb-5">
                <Icon className="h-4.5 w-4.5 text-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border/60 bg-muted/30 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Semplice come 1, 2, 3
            </h2>
            <p className="text-lg text-muted-foreground">
              Creare una guida professionale non è mai stato così immediato.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: "01", t: "Crea la tua guida", d: "Registrati e inizia la tua prima guida in pochi minuti." },
              { n: "02", t: "Aggiungi le informazioni", d: "Inserisci dettagli, consigli e contenuti per la tua struttura." },
              { n: "03", t: "Condividi con gli ospiti", d: "Un solo link da inviare via email, WhatsApp o messaggio." },
            ].map((step) => (
              <div key={step.n}>
                <div className="text-sm font-mono text-muted-foreground mb-4">{step.n}</div>
                <h3 className="text-xl font-semibold mb-2">{step.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Cosa puoi includere
          </h2>
          <p className="text-lg text-muted-foreground">
            Personalizza la tua guida con tutte le informazioni utili.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map(({ icon: Icon, title, items }) => (
            <Card key={title} className="border-border/60 shadow-none">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg border border-border/80 bg-muted/50 flex items-center justify-center shrink-0">
                    <Icon className="h-4.5 w-4.5 text-foreground" />
                  </div>
                  <div>
                    <CardTitle className="mb-3 text-base">{title}</CardTitle>
                    <CardDescription>
                      <ul className="space-y-2">
                        {items.map((it) => (
                          <li key={it} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-foreground/60 shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border/60 bg-muted/30 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Domande frequenti
            </h2>
            <p className="text-lg text-muted-foreground">
              Tutto ciò che devi sapere su Hostly.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-background rounded-lg border border-border/60 px-5"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="rounded-2xl border border-border/60 bg-foreground text-background px-8 py-16 sm:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-5">
            Pronto a migliorare l'esperienza dei tuoi ospiti?
          </h2>
          <p className="text-lg text-background/70 mb-8 max-w-2xl mx-auto">
            Unisciti agli host che hanno scelto Hostly per un'accoglienza più
            professionale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="h-11 px-6 gap-2">
                Inizia gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-6 bg-transparent border-background/20 text-background hover:bg-background/10 hover:text-background"
            >
              Vedi un esempio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-3">Hostly</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Guide interattive per strutture ricettive.
              </p>
            </div>
            {[
              { h: "Prodotto", l: ["Funzionalità", "Prezzi", "Esempi", "FAQ"] },
              { h: "Azienda", l: ["Chi siamo", "Blog", "Contatti"] },
              { h: "Legale", l: ["Privacy Policy", "Termini di servizio", "Cookie Policy"] },
            ].map((col) => (
              <div key={col.h}>
                <h4 className="text-sm font-semibold mb-3">{col.h}</h4>
                <ul className="space-y-2 text-sm">
                  {col.l.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator className="mb-6" />
          <p className="text-muted-foreground text-xs">
            © 2026 Hostly. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
}
