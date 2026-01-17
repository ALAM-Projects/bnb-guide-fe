import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true, // Permette l'invio e la ricezione di cookie HttpOnly
});

// Intercettore per aggiungere l'Access Token a ogni richiesta
api.interceptors.request.use((config: any) => {
  const token = Cookies.get("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Intercettore per gestire l'errore 401 (Token scaduto)
api.interceptors.response.use(
  (response: any) => response,
  async (error: any) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // NOTA: Non leggiamo più il refresh_token dai cookie qui.
        // Grazie a withCredentials: true, il browser lo invierà da solo.

        const res = await axios.post(
          "http://localhost:3001/auth/refresh",
          {},
          { withCredentials: true }
        );

        // Il backend restituirà il nuovo Access Token nel body
        // e imposterà il nuovo Refresh Token tramite header Set-Cookie
        const { access_token } = res.data;

        // Aggiorniamo solo l'access token visibile
        Cookies.set("auth_token", access_token, { path: "/" });

        // Riprova la richiesta originale
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Pulizia locale se il refresh fallisce (sessione scaduta del tutto)
        Cookies.remove("auth_token");
        // Non possiamo rimuovere il refresh_token via JS se è HttpOnly,
        // ma il server lo sovrascriverà al prossimo login.

        // Redirect solo se siamo lato client
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
