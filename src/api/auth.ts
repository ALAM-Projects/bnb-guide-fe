// src/api/auth.ts
import { authMiddleware } from "@/middleware/authMIddleware";
import { createServerFn } from "@tanstack/react-start";
import api from "./client"; // Il tuo client Axios con intercettori
import Cookies from "js-cookie";

/**
 * 1. SERVER FUNCTION (Per il Router)
 * Usata in beforeLoad per i redirect veloci
 */
export const checkAuthStatus = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    return context.auth;
  });

/**
 * 2. LOGOUT FUNCTION (Azione Utente)
 * Coordina BE e FE
 */
export const logoutAction = async () => {
  try {
    // Chiama NestJS tramite Axios (passando l'AT nell'header)
    await api.post("/auth/logout");
  } catch (error) {
    console.error("Errore logout server", error);
  } finally {
    // Pulisce tutto a prescindere
    Cookies.remove("auth_token");
    Cookies.remove("refresh_token");
    // window.location.href = "/login";
  }
};
