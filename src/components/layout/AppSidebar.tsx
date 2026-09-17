"use client";

import React from "react";
import Link from "next/navigation";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  BookOpen, 
  BarChart3, 
  Settings, 
  LogOut, 
  Sparkles,
  Layers,
  CheckCircle2,
  ChevronRight,
  Gift
} from "lucide-react";
import { courseData } from "@/data/courseData";
import { useAuth } from "@/lib/auth-context";
import { useProgress } from "@/lib/progress-context";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import NextLink from "next/link";

export function AppSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { overallProgress, getModuleProgress } = useProgress();

  const navItems = [
    { label: "Inicio", href: "/dashboard", icon: LayoutDashboard },
    { label: "Curso", href: "/curso", icon: BookOpen },
    { label: "Mi progreso", href: "/dashboard#progreso", icon: BarChart3 },
  ];

  return (
    <aside className="hidden md:flex flex-col w-72 h-screen sticky top-0 border-r border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl z-40 select-none">
      {/* Brand Header */}
      <div className="p-6 pb-4">
        <NextLink href="/dashboard" className="flex items-center space-x-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-400 text-zinc-950 shadow-md transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <span className="font-bold tracking-tight text-white text-base block leading-tight">
              AI Business System
            </span>
            <span className="text-[11px] text-zinc-400 font-medium tracking-wide">
              Área de miembros
            </span>
          </div>
        </NextLink>
      </div>

      {/* Main Navigation */}
      <div className="px-4 py-2 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href === "/dashboard" && pathname === "/");
          return (
            <NextLink
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
                isActive
                  ? "bg-zinc-800/90 text-white shadow-sm border border-zinc-700/50"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
              )}
            >
              <Icon className={cn("h-4 w-4", isActive ? "text-white" : "text-zinc-400")} />
              <span>{item.label}</span>
            </NextLink>
          );
        })}
      </div>

      <div className="px-5 my-2">
        <Separator className="bg-zinc-800/60" />
      </div>

      {/* Modules List with Progress */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
        <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
          Módulos del curso
        </div>

        {courseData.modules.map((mod) => {
          const modProgress = getModuleProgress(mod.id);
          const isCompleted = modProgress.completedCount === modProgress.totalCount && modProgress.totalCount > 0;
          const isCurrentModule = pathname.includes(mod.id);

          return (
            <NextLink
              key={mod.id}
              href={`/curso#${mod.id}`}
              className={cn(
                "group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all",
                isCurrentModule
                  ? "bg-zinc-800/80 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50"
              )}
            >
              <div className="flex items-center space-x-3 truncate mr-2">
                <span className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-mono",
                  isCompleted 
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                    : mod.isBonus 
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800"
                )}>
                  {isCompleted ? (
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  ) : mod.isBonus ? (
                    <Gift className="h-3.5 w-3.5" />
                  ) : (
                    mod.order
                  )}
                </span>
                <span className="truncate text-xs font-medium">
                  {mod.shortTitle}
                </span>
              </div>

              {mod.isBonus ? (
                <Badge variant="bonus" className="text-[10px] px-1.5 py-0 h-4">
                  BÓNUS
                </Badge>
              ) : (
                <span className="text-[11px] font-mono text-zinc-400 shrink-0">
                  {modProgress.completedCount}/{modProgress.totalCount}
                </span>
              )}
            </NextLink>
          );
        })}
      </div>

      {/* User & Settings Footer */}
      <div className="p-4 border-t border-zinc-800/80 bg-zinc-950/60 space-y-2">
        {user && (
          <div className="px-3 py-2 rounded-xl bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-between mb-2">
            <div className="truncate mr-2">
              <div className="text-xs font-medium text-white truncate">
                {user.name}
              </div>
              <div className="text-[11px] text-zinc-400 truncate">
                {user.email}
              </div>
            </div>
            <div className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" title="Sesión activa" />
          </div>
        )}

        <NextLink
          href="/configuracion"
          className={cn(
            "flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-medium transition-colors",
            pathname === "/configuracion"
              ? "bg-zinc-800 text-white"
              : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
          )}
        >
          <Settings className="h-4 w-4" />
          <span>Configuración</span>
        </NextLink>

        <button
          onClick={logout}
          className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-red-300 hover:bg-red-500/10 transition-colors text-left"
        >
          <LogOut className="h-4 w-4 text-zinc-400 group-hover:text-red-400" />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
}
