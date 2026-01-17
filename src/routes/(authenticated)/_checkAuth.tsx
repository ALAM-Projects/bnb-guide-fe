// routes/(authenticated)/_checkAuth.tsx
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { checkAuthStatus, getLoggedUser } from "@/api/auth";

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
    return { auth };
  },
  loader: async ({ context}) => {
    if (!context.auth.isAuthenticated) {
      return { user: null };
    }
    const loggedUser = await getLoggedUser();

    return { user: loggedUser };
  },
  component: () => <Outlet />,
});
