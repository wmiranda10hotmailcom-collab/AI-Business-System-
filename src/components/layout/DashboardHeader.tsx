"use client";

import React, { useState } from "react";
import { Menu, Sparkles, CheckCircle2, User } from "lucide-react";
import { useProgress } from "@/lib/progress-context";
import { MobileSidebar } from "./MobileSidebar";
import NextLink from "next/link";

interface DashboardHeaderProps {
  title?: string;
  subtitle?: string;
}

export function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { overallProgress } = useProgress();

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-800/80 bg-zinc-950/80 px-4 md:px-8 backdrop-blur-xl">
        <div className="flex items-center space-x-3">
          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Breadcrumb / Title */}
          <div>
            {title && (
              <h1 className="text-sm md:text-base font-semibold text-white tracking-tight leading-tight">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="hidden sm:block text-xs text-zinc-400">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Right Status Badge */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Progreso: <strong className="text-zinc-200">{overallProgress.completedCount} de {overallProgress.totalCount}</strong> ({overallProgress.percentage}%)</span>
          </div>

          <NextLink
            href="/configuracion"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            title="Mi cuenta"
            aria-label="Configuración de la cuenta"
          >
            <User className="h-4 w-4" />
          </NextLink>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileSidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
