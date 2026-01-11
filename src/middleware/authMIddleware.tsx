// src/middleware/authMiddleware.ts
import { createMiddleware } from "@tanstack/react-start";
import Cookies from "js-cookie";

export const authMiddleware = createMiddleware({ type: "function" })
  .client(async ({ next }) => {
    // Lato client usiamo js-cookie in modo sicuro
    const token =
      typeof document !== "undefined" ? Cookies.get("auth_token") : null;

    return next({
      context: {
        auth: {
          isAuthenticated: !!token,
          token: token || null,
        },
      },
    });
  })
  .server(async ({ next, ...args }) => {
    // Usiamo 'args' come any per bypassare il problema dei tipi mancanti
    // In TanStack Start 1.14x, l'oggetto request è passato qui
    const { request } = args as any;

    let token: string | undefined;

    if (request) {
      const cookieHeader = request.headers.get("cookie") ?? "";
      token = cookieHeader
        .split("; ")
        .find((row: string) => row.trim().startsWith("auth_token="))
        ?.split("=")[1];
    }

    console.log("SERVER MIDDLEWARE - Token:", !!token);

    return next({
      context: {
        auth: {
          isAuthenticated: !!token,
          token: token || null,
        },
      },
    });
  });
