"use client";

import { useLogout } from "@/lib/useLogout";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

export default function LogoutButton() {
  const { logout } = useLogout();

  return (
    <Button onClick={logout} variant={"link"}>
      <LogOut className="text-white w-6 h-6" />
    </Button>
  );
}
