"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { 
  X, 
  LayoutDashboard, 
  BookOpen, 
  BarChart3, 
  Settings, 
  LogOut, 
  Sparkles, 
  CheckCircle2, 
  Gift 
} from "lucide-react";
import { courseData } from "@/data/courseData";
import { useAuth } from "@/lib/auth-context";
import { useProgress } from "@/lib/progress-context";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { getModuleProgress } = useProgress();

  // Close when route changes
  useEffect(() => {
    onClose();
  }, [pathname]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
      />

      {/* Drawer Panel */}
      <div className="relative w-4/5 max-w-xs bg-zinc-950 border-r border-zinc-800 flex flex-col h-full z-10 shadow-2xl animate-in slide-in-from-left duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">
          <NextLink href="/dashboard" className="flex items-center space-x-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-400 text-zinc-950 shadow-md">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-bold tracking-tight text-white text-base">
              AI Business System
            </span>
          </NextLink>
          <button 
            onClick={onClose}
            aria-label="Cerrar menú"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Main Nav */}
        <div className="p-3 space-y-1">
          <NextLink
            href="/dashboard"
            className={cn(
              "flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
              pathname === "/dashboard"
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
            )}
          >
            <LayoutDashboard className="h-4 w-4" />
            <span>Inicio</span>
          </NextLink>
          <NextLink
            href="/curso"
            className={cn(
              "flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
              pathname === "/curso"
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
            )}
          >
            <BookOpen className="h-4 w-4" />
            <span>Curso</span>
          </NextLink>
          <NextLink
            href="/dashboard#progreso"
            className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/60"
          >
            <BarChart3 className="h-4 w-4" />
            <span>Mi progreso</span>
          </NextLink>
        </div>

        <div className="px-5 my-1">
          <Separator className="bg-zinc-800/60" />
        </div>

        {/* Modules List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
            Módulos del curso
          </div>
          {courseData.modules.map((mod) => {
            const modProgress = getModuleProgress(mod.id);
            const isCompleted = modProgress.completedCount === modProgress.totalCount && modProgress.totalCount > 0;
            return (
              <NextLink
                key={mod.id}
                href={`/curso#${mod.id}`}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-zinc-400 hover:text-white hover:bg-zinc-900/50"
              >
                <div className="flex items-center space-x-2.5 truncate mr-2">
                  <span className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-mono",
                    isCompleted
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : mod.isBonus
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      : "bg-zinc-900 text-zinc-400 border border-zinc-800"
                  )}>
                    {isCompleted ? (
                      <CheckCircle2 className="h-3 w-3" />
                    ) : mod.isBonus ? (
                      <Gift className="h-3 w-3" />
                    ) : (
                      mod.order
                    )}
                  </span>
                  <span className="truncate">{mod.shortTitle}</span>
                </div>
                {mod.isBonus ? (
                  <Badge variant="bonus" className="text-[9px] px-1 py-0 h-4">
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

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-950/80 space-y-2">
          {user && (
            <div className="px-3 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
              <div className="text-xs font-medium text-white truncate">{user.name}</div>
              <div className="text-[11px] text-zinc-400 truncate">{user.email}</div>
            </div>
          )}
          <NextLink
            href="/configuracion"
            className="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs text-zinc-400 hover:text-white hover:bg-zinc-900"
          >
            <Settings className="h-4 w-4" />
            <span>Configuración</span>
          </NextLink>
          <button
            onClick={logout}
            className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs text-red-400 hover:bg-red-500/10 transition-colors text-left"
          >
            <LogOut className="h-4 w-4" />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </div>
    </div>
  );
}
