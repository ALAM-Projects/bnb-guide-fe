import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  CheckCircle,
  Share2,
  FileText,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32">
          <div className="text-center">
            <Badge className="mb-4 px-4 py-1 text-sm" variant="secondary">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              La soluzione perfetta per gestori di BnB
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
              Crea guide interattive per i tuoi ospiti
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              Hostly è la piattaforma che permette ai gestori di BnB di creare
              mini-siti condivisibili con tutte le informazioni che gli ospiti
              devono avere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Inizia gratis
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Scopri di più
              </Button>
            </div>
            <p className="mt-6 text-sm text-neutral-500">
              Nessuna carta di credito richiesta • Setup in 5 minuti
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Tutto ciò che serve per ospitare al meglio
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Con Hostly, fornisci ai tuoi ospiti tutte le informazioni necessarie
            in un'unica guida interattiva e professionale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Orari Check-in/out</CardTitle>
              <CardDescription>
                Comunica chiaramente gli orari di check-in e check-out per
                evitare incomprensioni.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Ristoranti consigliati</CardTitle>
              <CardDescription>
                Condividi i migliori ristoranti e locali nelle vicinanze della
                tua struttura.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Mountain className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Escursioni e attività</CardTitle>
              <CardDescription>
                Suggerisci le migliori esperienze e attività da fare nella zona.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Luoghi da visitare</CardTitle>
              <CardDescription>
                Indica i punti di interesse e le attrazioni imperdibili della
                zona.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-pink-200 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6 text-pink-600" />
              </div>
              <CardTitle>FAQ e regole</CardTitle>
              <CardDescription>
                Rispondi alle domande frequenti e comunica le regole della
                struttura.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle>Mobile-friendly</CardTitle>
              <CardDescription>
                Guide perfettamente ottimizzate per essere consultate da
                smartphone.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-linear-to-br from-neutral-50 to-neutral-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Semplice come 1, 2, 3
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Creare una guida professionale per i tuoi ospiti non è mai stato
              così facile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Crea la tua guida
                </h3>
                <p className="text-neutral-600">
                  Registrati e inizia a creare la tua prima guida in pochi
                  minuti. Interfaccia intuitiva e facile da usare.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Aggiungi le informazioni
                </h3>
                <p className="text-neutral-600">
                  Inserisci tutte le informazioni sulla tua struttura, consigli
                  sui luoghi da visitare e molto altro.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Condividi con gli ospiti
                </h3>
                <p className="text-neutral-600">
                  Condividi il link della guida con i tuoi ospiti via email,
                  WhatsApp o qualsiasi altro canale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Cosa puoi includere nelle tue guide
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Personalizza la tua guida con tutte le informazioni utili per i tuoi
            ospiti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="mb-2">
                    Informazioni sulla struttura
                  </CardTitle>
                  <CardDescription>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Regole della casa</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>WiFi e servizi disponibili</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Istruzioni per gli elettrodomestici</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Contatti di emergenza</span>
                      </li>
                    </ul>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                  <Car className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="mb-2">Trasporti e mobilità</CardTitle>
                  <CardDescription>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Parcheggi disponibili</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Mezzi pubblici nelle vicinanze</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Servizi taxi e car sharing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Noleggio bici e scooter</span>
                      </li>
                    </ul>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="mb-2">Servizi essenziali</CardTitle>
                  <CardDescription>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Supermercati vicini</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Farmacie 24h</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Ospedali e pronto soccorso</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Bancomat e uffici postali</span>
                      </li>
                    </ul>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                  <Map className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="mb-2">Esperienze locali</CardTitle>
                  <CardDescription>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Tour e escursioni guidate</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Eventi e manifestazioni</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Musei e gallerie d'arte</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Vita notturna e intrattenimento</span>
                      </li>
                    </ul>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-linear-to-br from-neutral-50 to-neutral-100 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Domande frequenti
            </h2>
            <p className="text-xl text-neutral-600">
              Tutto ciò che devi sapere su Hostly
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white rounded-lg px-6 border-2"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Cos'è Hostly?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                Hostly è una piattaforma che permette ai gestori di BnB di
                creare guide interattive per le proprie strutture ricettive.
                Puoi creare mini-siti condivisibili con gli ospiti contenenti
                tutte le informazioni necessarie: orari di check-in/out,
                ristoranti nelle vicinanze, escursioni, luoghi da visitare, FAQ
                e molto altro.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-lg px-6 border-2"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Come condivido le guide con i miei ospiti?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                Una volta creata la tua guida, riceverai un link univoco che
                potrai condividere con i tuoi ospiti in qualsiasi modo
                preferisci: email, WhatsApp, SMS, o inserendolo direttamente
                nelle tue comunicazioni di prenotazione. Gli ospiti potranno
                accedere alla guida da qualsiasi dispositivo senza bisogno di
                registrarsi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-lg px-6 border-2"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Posso personalizzare la mia guida?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                Assolutamente sì! Puoi personalizzare completamente la tua guida
                aggiungendo le sezioni che preferisci, caricando foto,
                modificando i colori e inserendo il tuo logo. Ogni guida può
                essere unica e rispecchiare l'identità della tua struttura
                ricettiva.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white rounded-lg px-6 border-2"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                È gratuito?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                Hostly offre un piano gratuito per iniziare, che include le
                funzionalità base per creare la tua prima guida. Per strutture
                con più proprietà o per accedere a funzionalità avanzate come
                analytics e personalizzazioni estese, offriamo piani premium a
                prezzi competitivi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white rounded-lg px-6 border-2"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Posso modificare la guida dopo averla creata?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                Certamente! Puoi modificare la tua guida in qualsiasi momento.
                Tutte le modifiche saranno immediatamente visibili agli ospiti
                che accedono al link, senza bisogno di inviare nuovi link o
                aggiornamenti.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-white rounded-lg px-6 border-2"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Le guide funzionano su tutti i dispositivi?
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600">
                Sì! Le guide create con Hostly sono completamente responsive e
                ottimizzate per funzionare perfettamente su smartphone, tablet e
                desktop. I tuoi ospiti potranno consultare la guida comodamente
                dal loro dispositivo preferito.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-purple-600 to-indigo-600 px-8 py-20 sm:px-16">
          <div className="relative text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto a migliorare l'esperienza dei tuoi ospiti?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Unisciti a centinaia di host che hanno già scelto Hostly per
              rendere l'accoglienza più professionale e senza stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-neutral-100 text-lg px-8 py-6"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Inizia gratis ora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <FileText className="w-5 h-5 mr-2" />
                Vedi un esempio
              </Button>
            </div>
            <p className="mt-6 text-white/80 text-sm">
              ✓ Nessuna carta di credito richiesta • ✓ Setup istantaneo • ✓
              Supporto in italiano
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hostly</h3>
              <p className="text-neutral-400 text-sm">
                La piattaforma per creare guide interattive per le tue strutture
                ricettive.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Prodotto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Funzionalità
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Prezzi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Esempi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Azienda</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Chi siamo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Contatti
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legale</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Termini di servizio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="bg-neutral-800 mb-8" />
          <div className="text-center text-neutral-400 text-sm">
            <p>© 2026 Hostly. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
