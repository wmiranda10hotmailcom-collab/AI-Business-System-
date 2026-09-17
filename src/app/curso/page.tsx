"use client";

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { 
  ChevronDown, 
  ChevronUp, 
  Play, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Sparkles, 
  Gift,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { courseData } from "@/data/courseData";
import { useProgress } from "@/lib/progress-context";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function CoursePage() {
  const { isLessonCompleted, getModuleProgress, toggleLessonCompleted } = useProgress();
  
  // Track expanded state for each module. Default all expanded for smooth UX
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    "modulo-1": true,
    "modulo-2": true,
    "modulo-3": true,
    "modulo-4": true,
    "modulo-5": true,
    "modulo-6": true,
    "modulo-7": true,
    "modulo-bonus": true,
  });

  const toggleModule = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !prev[modId],
    }));
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex">
      {/* Desktop Sidebar */}
      <AppSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader 
          title="Curso Completo" 
          subtitle="Accede a todas las clases y módulos de AI Business System"
        />

        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-5xl mx-auto w-full space-y-8">
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Plan de Estudio</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Contenido del Curso
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl leading-relaxed">
                6 módulos estructurados paso a paso para dominar la creación digital con inteligencia artificial.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const allOpen = Object.values(expandedModules).every(Boolean);
                  const nextState: Record<string, boolean> = {};
                  courseData.modules.forEach(m => nextState[m.id] = !allOpen);
                  setExpandedModules(nextState);
                }}
                className="text-xs"
              >
                {Object.values(expandedModules).every(Boolean) ? "Colapsar todos" : "Expandir todos"}
              </Button>
            </div>
          </div>

          {/* Modules List */}
          <div className="space-y-6">
            {courseData.modules.map((mod) => {
              const isExpanded = !!expandedModules[mod.id];
              const modProgress = getModuleProgress(mod.id);
              const isModuleComplete = modProgress.completedCount === modProgress.totalCount && modProgress.totalCount > 0;

              return (
                <div
                  key={mod.id}
                  id={mod.id}
                  className={cn(
                    "rounded-2xl border transition-all duration-200 overflow-hidden",
                    mod.isBonus 
                      ? "border-amber-500/30 bg-gradient-to-b from-amber-950/10 via-zinc-900/60 to-zinc-900/40" 
                      : "border-zinc-800/90 bg-zinc-900/50"
                  )}
                >
                  {/* Module Accordion Header */}
                  <div
                    onClick={() => toggleModule(mod.id)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 cursor-pointer select-none hover:bg-zinc-850/50 transition-colors gap-4"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-semibold mt-0.5",
                        isModuleComplete
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : mod.isBonus
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          : "bg-zinc-800 text-zinc-300 border border-zinc-700/60"
                      )}>
                        {isModuleComplete ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : mod.isBonus ? (
                          <Gift className="h-5 w-5" />
                        ) : (
                          mod.order
                        )}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center space-x-2.5 flex-wrap">
                          <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {mod.title}
                          </h2>
                          {mod.isBonus && (
                            <Badge variant="bonus">BÓNUS</Badge>
                          )}
                        </div>
                        <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed">
                          {mod.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end space-x-4 pl-14 sm:pl-0">
                      <div className="text-left sm:text-right">
                        <span className="text-xs font-mono font-medium text-zinc-300 block">
                          {modProgress.completedCount} de {modProgress.totalCount} completados
                        </span>
                        <span className="text-[11px] text-zinc-400 block">
                          {mod.lessons.length} videos • {mod.lessons.length} materiales
                        </span>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800/80 text-zinc-400">
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Module Lessons Container */}
                  {isExpanded && (
                    <div className="border-t border-zinc-800/80 bg-zinc-950/40 divide-y divide-zinc-800/60 p-2 sm:p-4">
                      {mod.lessons.map((lesson) => {
                        const completed = isLessonCompleted(lesson.id);

                        return (
                          <div
                            key={lesson.id}
                            className="group flex flex-col sm:flex-row sm:items-center justify-between p-3.5 sm:p-4 rounded-xl hover:bg-zinc-900/80 transition-all gap-3"
                          >
                            <div className="flex items-start sm:items-center space-x-3.5">
                              {/* Completion Toggle button */}
                              <button
                                onClick={() => toggleLessonCompleted(lesson.id)}
                                title={completed ? "Marcar como pendiente" : "Marcar como completada"}
                                aria-label={completed ? "Marcar clase como pendiente" : "Marcar clase como completada"}
                                className={cn(
                                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors mt-0.5 sm:mt-0",
                                  completed
                                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30"
                                    : "bg-zinc-900 text-zinc-500 border-zinc-800 hover:text-zinc-300 hover:border-zinc-700"
                                )}
                              >
                                {completed ? (
                                  <CheckCircle2 className="h-4 w-4" />
                                ) : (
                                  <Circle className="h-4 w-4" />
                                )}
                              </button>

                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs font-mono text-zinc-400">
                                    {lesson.numberFormatted}
                                  </span>
                                  <span className="text-xs text-zinc-600">•</span>
                                  <h3 className={cn(
                                    "text-sm font-semibold tracking-tight transition-colors",
                                    completed ? "text-zinc-400 line-through" : "text-white group-hover:text-zinc-100"
                                  )}>
                                    {lesson.title}
                                  </h3>
                                </div>

                                <div className="flex items-center space-x-3 mt-1 text-[11px] text-zinc-400">
                                  <span className={completed ? "text-emerald-400 font-medium" : "text-zinc-400"}>
                                    {completed ? "Completada" : "Pendiente"}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center justify-end pl-11 sm:pl-0">
                              <NextLink href={`/clase/${lesson.id}`}>
                                <Button 
                                  size="sm" 
                                  variant={completed ? "subtle" : "default"}
                                  className="text-xs group/btn"
                                >
                                  <Play className="h-3.5 w-3.5 mr-1.5 fill-current" />
                                  <span>{completed ? "Ver de nuevo" : "Ver clase"}</span>
                                  <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover/btn:translate-x-1" />
                                </Button>
                              </NextLink>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
