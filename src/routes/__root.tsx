/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
  useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import appCss from "@/styles/app.css?url";
import { seo } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Text from "@/components/base/text";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title: "Hostly | Guida interattiva per le tue strutture",
        description: `Hostly è un'applicazione web che permette di creare guide interattive per le tue strutture.`,
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      // {
      //   src: "/customScript.js",
      //   type: "text/javascript",
      // },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

const queryClient = new QueryClient();

function RootDocument({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  // Funzione helper per leggere il cookie (solo lato client qui)
  const getCookie = (name: string) => {
    if (typeof document === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
  };

  const isAuthenticated = !!getCookie("auth_token");

  const handleLogout = async () => {
    const token = Cookies.get("auth_token");

    try {
      // 1. Avvisa il server (opzionale ma consigliato per invalidare RT)
      await fetch("http://localhost:3001/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    } finally {
      // 2. Pulisci SEMPRE il client
      Cookies.remove("auth_token");
      navigate({ to: "/" });
    }
  };

  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          {/* Navbar Semplice */}
          <nav className="flex items-center justify-between p-4 border-b bg-white">
            <Link to="/" className="text-xl font-bold text-primary">
              BnB Guide
            </Link>
            <div className="flex gap-4">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard">
                    <Text>Dashboard</Text>
                  </Link>
                  <Link to="/guides">
                    <Text>Guides</Text>
                  </Link>
                  <Button variant="outline" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost">Accedi</Button>
                  </Link>
                  <Link to="/signup">
                    <Button>Registrati</Button>
                  </Link>
                </>
              )}
            </div>
          </nav>

          <hr />
          {children}
          <TanStackRouterDevtools position="bottom-right" />
          <Scripts />
        </QueryClientProvider>
      </body>
    </html>
  );
}
