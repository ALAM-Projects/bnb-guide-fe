import api from "@/api/client";
import Text from "@/components/base/text";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/(authenticated)/_checkAuth/dashboard")({
  component: Home,
});

function Home() {
  const [status, setStatus] = useState("");
  const [newName, setNewName] = useState("");

  const handleUpdate = async () => {
    try {
      setStatus("Inviando...");

      // Chiamata protetta
      const response = await api.patch("/user/updateUser", {
        name: newName,
      });

      setStatus(`Successo! Nome aggiornato in: ${response.data.updatedName}`);
      setNewName("");
    } catch (error: any) {
      setStatus(`Errore: ${error.response?.data?.message || "Fallito"}`);
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <Text size="h1">Bentornato </Text>
    </div>
  );
}
