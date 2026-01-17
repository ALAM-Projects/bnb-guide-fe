// src/api/guide.ts
import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/middleware/authMIddleware";
import { getMyGuides as getMyGuidesAPI } from "./generated/guide/guide";

/**
 * SERVER FUNCTION per ottenere le guide dell'utente
 * Funziona sia lato client che server (SSR)
 */
export const getMyGuides = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    // Se non c'è autenticazione, ritorna array vuoto
    if (!context?.auth?.isAuthenticated || !context?.auth?.token) {
      return [];
    }

    try {
      // Durante SSR, dobbiamo usare fetch con i cookie della richiesta
      // Lato client, usiamo il normale client API
      if (typeof window === "undefined") {
        // Lato server: usa fetch con il token dal context
        const response = await fetch("http://localhost:3001/guide/getMyGuides", {
          headers: {
            Authorization: `Bearer ${context.auth.token}`,
          },
        });

        if (!response.ok) {
          console.error("Errore getMyGuides SSR", response.status);
          return [];
        }

        return await response.json();
      } else {
        // Lato client: usa il client Axios con intercettori (generato da Orval)
        return await getMyGuidesAPI();
      }
    } catch (error) {
      console.error("Errore getMyGuides", error);
      return [];
    }
  });
