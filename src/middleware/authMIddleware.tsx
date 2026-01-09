import { createMiddleware } from "@tanstack/react-start";
import Cookies from "js-cookie";

export const authMiddleware = createMiddleware({ type: "function" })
  .client(({ next }) => {
    // Sul client, possiamo fare logica aggiuntiva o semplicemente passare il prossimo

    return next({
      context: {
        auth: {
          isAuthenticated: !!Cookies.get("auth_token"),
          token: Cookies.get("auth_token") || null,
        },
      },
    });
  })
  .server(async ({ next }) => {
    // Legge il cookie direttamente dal server (Vinxi/H3)
    const token = Cookies.get("auth_token");

    // Passa le informazioni al contesto della funzione o della rotta
    return next({
      context: {
        auth: {
          isAuthenticated: !!token,
          token: token || null,
        },
      },
    });
  });
