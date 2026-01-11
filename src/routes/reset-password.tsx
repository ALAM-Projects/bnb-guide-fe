import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

// Definiamo lo schema per validare il token nell'URL
const searchSchema = z.object({
  token: z.string(),
});

export const Route = createFileRoute("/reset-password")({
  validateSearch: searchSchema,
  component: ResetPasswordComponent,
});

function ResetPasswordComponent() {
  const { token } = Route.useSearch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    // Chiamata al backend per aggiornare la password usando il token
    const res = await fetch(`http://localhost:3001/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, newPassword: password, email }),
    });

    if (res.ok) {
      throw redirect({
        to: "/login",
      });
    }
  };

  return (
    <form onSubmit={handleReset}>
      <h1>Imposta nuova password</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Inserisci la tua email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Aggiorna Password</button>
    </form>
  );
}
