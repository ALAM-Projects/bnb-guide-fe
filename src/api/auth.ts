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
 * 2. LOGOUT FUNCTION (Azione Utente)
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

export const getLoggedUser = async () => {
  try {
    const { data } = await api.get("/user/getUser");
    return data;
  } catch (error) {
    console.error("Errore getLoggedUser", error);
    return null;
  }
};
