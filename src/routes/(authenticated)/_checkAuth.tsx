import { checkAuthStatus } from "@/api/auth";
import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)/_checkAuth")({
  beforeLoad: async () => {
    const auth = await checkAuthStatus();

    if (!auth.isAuthenticated) {
      throw redirect({
        // to: "/login",
      });
    }
  },
  // Questo componente avvolgerà tutte le rotte figlie
  component: () => <Outlet />,
});
