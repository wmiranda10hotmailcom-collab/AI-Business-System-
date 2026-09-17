"use client";

import React from "react";
import NextLink from "next/link";
import { 
  Sparkles, 
  Play, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Layers, 
  Award,
  Gift
} from "lucide-react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { useAuth } from "@/lib/auth-context";
import { useProgress } from "@/lib/progress-context";
import { courseData, getAllLessons } from "@/data/courseData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const { user } = useAuth();
  const { overallProgress, getModuleProgress, getLastAccessedLesson, lastAccessedLessonId } = useProgress();

  const lastLesson = getLastAccessedLesson();
  const allLessons = getAllLessons();

  return (
    <div className="min-h-screen bg-[#09090b] flex">
      {/* Desktop Sidebar */}
      <AppSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader 
          title="Panel de Control" 
          subtitle="Bienvenido a tu formación en inteligencia artificial"
        />

        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto w-full space-y-8">
          {/* Welcome Banner */}
          <section className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-zinc-950 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-xs text-zinc-300 font-medium mb-4">
                <Sparkles className="h-3.5 w-3.5 text-zinc-300" />
                <span>Capacitación Oficial</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 leading-tight">
                Bienvenido a AI Business System{user?.name ? `, ${user.name}` : ""}
              </h1>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
                Continúa aprendiendo y avanza a tu propio ritmo. Domina las herramientas de inteligencia artificial para crear textos, imágenes y productos digitales reales.
              </p>
            </div>
            {/* Subtle decorative glow */}
            <div className="absolute right-0 top-0 -translate-y-12 translate-x-12 w-80 h-80 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />
          </section>

          {/* Progress & Continue Learning Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="progreso">
            {/* Progress Card */}
            <Card className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Tu progreso
                  </span>
                  <Badge variant={overallProgress.percentage === 100 ? "success" : "secondary"}>
                    {overallProgress.percentage}% completado
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {overallProgress.completedCount} de {overallProgress.totalCount} contenidos completados
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  {overallProgress.percentage === 100 
                    ? "¡Felicidades! Has completado todas las clases del curso."
                    : "Cada lección te acerca a dominar la creación digital con IA."}
                </p>
              </div>

              <div className="space-y-3">
                <Progress value={overallProgress.percentage} className="h-2.5 bg-zinc-800" />
                <div className="flex justify-between text-xs text-zinc-500 font-mono">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </Card>

            {/* Continue Learning Card */}
            <Card className="flex flex-col justify-between bg-zinc-900/80 border-zinc-700/60">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Continuar aprendiendo
                  </span>
                </div>

                {lastLesson ? (
                  <>
                    <div className="text-xs font-mono text-zinc-400 mb-1">
                      {lastLesson.numberFormatted} — {lastLesson.moduleId.toUpperCase().replace("-", " ")}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                      {lastLesson.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 mb-6">
                      {lastLesson.description}
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Comienza tu primera clase
                    </h3>
                    <p className="text-xs text-zinc-400 mb-6">
                      Inicia con los fundamentos esenciales para utilizar la inteligencia artificial en tu proceso de creación.
                    </p>
                  </>
                )}
              </div>

              <div className="flex items-center space-x-3">
                {lastLesson ? (
                  <NextLink href={`/clase/${lastLesson.id}`} className="w-full">
                    <Button className="w-full bg-white text-zinc-950 hover:bg-zinc-200 font-semibold group">
                      <Play className="h-4 w-4 mr-2 fill-zinc-950" />
                      <span>{lastAccessedLessonId ? "Continuar clase" : "Comenzar clase"}</span>
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </NextLink>
                ) : (
                  <NextLink href="/curso" className="w-full">
                    <Button className="w-full bg-white text-zinc-950 hover:bg-zinc-200 font-semibold">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>Ver curso</span>
                    </Button>
                  </NextLink>
                )}
              </div>
            </Card>
          </div>

          {/* Modules Overview */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Estructura del Curso
                </h2>
                <p className="text-xs text-zinc-400">
                  {courseData.modules.length} módulos prácticos paso a paso
                </p>
              </div>
              <NextLink href="/curso">
                <Button variant="outline" size="sm" className="text-xs">
                  <span>Ver todas las clases</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                </Button>
              </NextLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courseData.modules.map((mod) => {
                const modProgress = getModuleProgress(mod.id);
                const isAllDone = modProgress.completedCount === modProgress.totalCount && modProgress.totalCount > 0;
                const firstLesson = mod.lessons[0];

                return (
                  <div
                    key={mod.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 hover:bg-zinc-900/80 hover:border-zinc-700/80 transition-all duration-200 shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={cn(
                          "flex h-7 w-7 items-center justify-center rounded-lg text-xs font-mono font-semibold",
                          isAllDone
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : mod.isBonus
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                            : "bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                        )}>
                          {isAllDone ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : mod.isBonus ? (
                            <Gift className="h-3.5 w-3.5" />
                          ) : (
                            mod.order
                          )}
                        </span>

                        {mod.isBonus ? (
                          <Badge variant="bonus">BÓNUS</Badge>
                        ) : (
                          <span className="text-xs font-mono text-zinc-400">
                            {modProgress.completedCount} de {modProgress.totalCount} completados
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm font-semibold text-white group-hover:text-zinc-100 mb-1.5 line-clamp-1">
                        {mod.title}
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                        {mod.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                      <span className="text-[11px] text-zinc-400">
                        {mod.lessons.length} clases en video
                      </span>

                      <NextLink href={`/clase/${firstLesson.id}`}>
                        <span className="inline-flex items-center text-xs font-medium text-zinc-300 hover:text-white group-hover:translate-x-0.5 transition-transform">
                          <span>Comenzar</span>
                          <ArrowRight className="h-3.5 w-3.5 ml-1" />
                        </span>
                      </NextLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
