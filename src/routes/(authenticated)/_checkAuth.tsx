// routes/(authenticated)/_checkAuth.tsx
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { checkAuthStatus } from "@/api/auth";
import { getUser } from "@/api/generated/user/user";
import { withSSRAuth } from "@/api/ssr-loader";

export const Route = createFileRoute("/(authenticated)/_checkAuth")({
  beforeLoad: async ({ location }) => {
    // Chiamiamo la Server Function
    const auth = await checkAuthStatus();

    if (!auth.isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }

    // Passiamo i dati auth al contesto della rotta per i figli
    // Include il token per le chiamate SSR
    return { auth };
  },
  loader: withSSRAuth(async () => {
    const user = await getUser();
    return { user } as any;
  }),
  component: () => <Outlet />,
});
