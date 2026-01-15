import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)/_checkAuth/guides")({
  component: GuidesLayout,
});

function GuidesLayout() {
  return <Outlet />;
}
