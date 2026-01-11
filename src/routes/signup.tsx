import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
});

function SignupPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:3001/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, surname, email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        // Salviamo il token e logghiamo l'utente immediatamente dopo la registrazione
        document.cookie = `auth_token=${data.access_token}; path=/; max-age=604800; samesite=lax`;

        alert("Registrazione completata con successo!");
        navigate({ to: "/dashboard" });
      } else {
        const errorData = await res.json();
        alert(errorData.message || "Errore durante la registrazione");
      }
    } catch (error) {
      alert("Errore di connessione con il server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-[400px] shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Crea un account</CardTitle>
          <CardDescription>
            Inserisci i tuoi dati per iniziare a gestire le tue guide
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input
                type="name"
                placeholder="John"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Surname</label>
              <Input
                type="surname"
                placeholder="Doe"
                required
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="nome@esempio.it"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input
                type="password"
                placeholder="Almeno 6 caratteri"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary"
              disabled={isLoading}
            >
              {isLoading ? "Creazione in corso..." : "Registrati"}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            Hai già un account?{" "}
            <Link
              to="/login"
              className="text-primary hover:underline font-medium"
            >
              Accedi qui
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
