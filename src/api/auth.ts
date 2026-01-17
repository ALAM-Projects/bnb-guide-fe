// src/api/auth.ts
import { createServerFn } from "@tanstack/react-start";
import api from "./client"; // Il tuo client Axios con intercettori
import Cookies from "js-cookie";
import { authMiddleware } from "@/middleware/authMIddleware";

/**
 * 1. SERVER FUNCTION (Per il Router)
 * Usata in beforeLoad per i redirect veloci
 */
export const checkAuthStatus = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    return context?.auth;
  });

/**
 * 2. SERVER FUNCTION per ottenere l'utente loggato
 * Funziona sia lato client che server (SSR)
 */
export const getLoggedUser = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    // Se non c'è autenticazione, ritorna null
    if (!context?.auth?.isAuthenticated || !context?.auth?.token) {
      return null;
    }

    try {
      // Durante SSR, dobbiamo usare fetch con i cookie della richiesta
      // Lato client, usiamo il normale client API
      if (typeof window === "undefined") {
        // Lato server: usa fetch con il token dal context
        const response = await fetch("http://localhost:3001/user/getUser", {
          headers: {
            Authorization: `Bearer ${context.auth.token}`,
          },
        });

        if (!response.ok) {
          console.error("Errore getLoggedUser SSR", response.status);
          return null;
        }

        return await response.json();
      } else {
        // Lato client: usa il client Axios con intercettori
        const { data } = await api.get("/user/getUser");
        return data;
      }
    } catch (error) {
      console.error("Errore getLoggedUser", error);
      return null;
    }
  });

/**
 * 3. LOGOUT FUNCTION (Azione Utente)
 * Coordina BE e FE
 */
export const logoutAction = async () => {
  try {
    // 1. Chiama NestJS.
    // Il server riceverà il cookie httpOnly e risponderà con "Set-Cookie: refresh_token=; Max-Age=0"
    // Questo cancellerà effettivamente il cookie dal browser.
    await api.post("/auth/logout");
  } catch (error) {
    console.error("Errore logout server", error);
  } finally {
    // 2. Rimuovi l'unico token che JavaScript può vedere
    Cookies.remove("auth_token");

    // 3. Questa riga ora è inutile per il refresh_token (non ha effetto se è httpOnly),
    // ma puoi lasciarla per pulire eventuali residui di vecchi test.
    Cookies.remove("refresh_token");

    window.location.href = "/login";
  }
};