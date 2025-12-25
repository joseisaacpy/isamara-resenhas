"use client";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/logout");
    router.push("/login");
  }

  return { logout };
}
