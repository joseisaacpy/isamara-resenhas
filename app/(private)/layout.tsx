"use client";
import { useLogout } from "@/lib/useLogout";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { logout } = useLogout();
  return (
    <main>
      <Button
        onClick={() => {
          logout();
        }}
      >
        <LogOut className="h-4 w-4" />
      </Button>
      {children}
    </main>
  );
}
