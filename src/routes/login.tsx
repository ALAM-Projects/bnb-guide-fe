import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Cookies from "js-cookie";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Chiamata al tuo backend NestJS
    const res = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include", // Permette al browser di ricevere e salvare il cookie httpOnly
    });

    if (res.ok) {
      const data = await res.json();
      // Salviamo solo l'access_token (che non è httpOnly per poterlo leggere)
      Cookies.set("auth_token", data.access_token, { expires: 7, path: "/" });
      navigate({ to: "/dashboard" });
    } else {
      alert("Credenziali errate");
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-muted/30">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login Gestore</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" className="w-full bg-primary">
                Accedi
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <p>
        Password dimenticata? <Link to="/forgot-password">Clicca qui</Link>
      </p>
    </>
  );
}
