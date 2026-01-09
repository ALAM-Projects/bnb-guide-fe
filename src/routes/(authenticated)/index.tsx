import api from "@/api/client";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/(authenticated)/")({
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
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Inserisci nuovo nome"
        className="border p-2 rounded text-black"
      />

      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Aggiorna Nome
      </button>

      {status && (
        <p className="mt-2 p-2 bg-gray-100 text-sm italic">{status}</p>
      )}
    </div>
  );
}
