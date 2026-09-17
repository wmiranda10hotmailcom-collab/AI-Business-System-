"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Lock, Mail, ShieldCheck } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulated instant or micro-delay for realistic polished feel
    setTimeout(() => {
      login(email || "alumno@aibusinesssystem.com", password || "123456");
    }, 250);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#09090b] px-4 py-12 selection:bg-zinc-800 selection:text-white overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-800/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Login Container */}
      <div className="relative w-full max-w-md z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-zinc-100 to-zinc-300 text-zinc-950 shadow-xl mb-5 ring-1 ring-white/20">
            <Sparkles className="h-7 w-7" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            AI Business System
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-sm mx-auto leading-relaxed">
            Tu espacio de aprendizaje para dominar la creación digital con inteligencia artificial.
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-7 sm:p-9 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="block text-xs font-medium text-zinc-300 tracking-wide"
              >
                Correo electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                  <Mail className="h-4 w-4" />
                </div>
                <Input
                  id="email"
                  type="text"
                  placeholder="usuario@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-zinc-950/70 border-zinc-800 focus-visible:ring-zinc-400"
                  autoComplete="email"
                  autoFocus
                />
              </div>
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="password" 
                className="block text-xs font-medium text-zinc-300 tracking-wide"
              >
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                  <Lock className="h-4 w-4" />
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 bg-zinc-950/70 border-zinc-800 focus-visible:ring-zinc-400"
                  autoComplete="current-password"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-semibold text-sm transition-all shadow-md group mt-2"
            >
              <span>{isSubmitting ? "Ingresando..." : "Iniciar sesión"}</span>
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          {/* Discreet Tag */}
          <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center justify-center space-x-2 text-xs text-zinc-400">
            <ShieldCheck className="h-3.5 w-3.5 text-zinc-400" />
            <span>Acceso exclusivo para alumnos</span>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center text-xs text-zinc-400 mt-6">
          © {new Date().getFullYear()} AI Business System. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
