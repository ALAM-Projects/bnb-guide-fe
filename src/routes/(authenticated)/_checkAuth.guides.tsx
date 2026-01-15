import { getLoggedUser } from "@/api/auth";
import api from "@/api/client";
import { useGetUser } from "@/api/generated/user/user";
import Text from "@/components/base/text";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/(authenticated)/_checkAuth/guides")({
  component: Home,
});

function Home() {
  const [status, setStatus] = useState("");
  const [newName, setNewName] = useState("");

  const { data, isLoading } = useGetUser();

  return (
    <div className="flex flex-col gap-4 max-w-sm">{JSON.stringify(data)}</div>
  );
}
