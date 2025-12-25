"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Eye, EyeClosed } from "lucide-react";

export default function LoginClient() {
  // para redirecionar
  const router = useRouter();

  // estado do form
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // estado do input de senha
  const [showPassword, setShowPassword] = useState(false);

  // estado do loading
  const [loading, setLoading] = useState(false);

  // função para lidar com o input
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // função para lidar com o envio do form
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      setLoading(false);
      toast.error(data.message);
      return;
    }

    // mensagem de sucesso
    toast.success("Login realizado com sucesso!");
    // redireciona para o painel
    router.push("/painel");
  }

  return (
    <section className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-lg border p-6"
      >
        <h1 className="text-xl font-semibold">Login</h1>

        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Senha</Label>
          <div className="flex gap-1">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              required
            />
            <Button
              type="button"
              variant={"default"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeClosed className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </Button>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </section>
  );
}
