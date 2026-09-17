"use client";

import React, { useEffect, use } from "react";
import { notFound, useRouter } from "next/navigation";
import NextLink from "next/link";
import { 
  CheckCircle2, 
  Circle, 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Gift,
  Share2,
  FileText,
  Download
} from "lucide-react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { CustomVideoPlayer } from "@/components/video-player/CustomVideoPlayer";
import { 
  getLessonById, 
  getModuleById, 
  getNextAndPrevLesson,
  getMaterialByLessonId,
  courseData
} from "@/data/courseData";
import { useProgress } from "@/lib/progress-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface LessonPageProps {
  params: Promise<{ lessonId: string }>;
}

export default function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = use(params);
  const router = useRouter();
  
  const lesson = getLessonById(lessonId);
  if (!lesson) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Clase no encontrada</h2>
          <p className="text-sm text-zinc-400">La lección solicitada no existe o fue reubicada.</p>
          <NextLink href="/curso">
            <Button>Volver al curso</Button>
          </NextLink>
        </div>
      </div>
    );
  }

  const currentModule = getModuleById(lesson.moduleId);
  const material = getMaterialByLessonId(lesson.id);
  const { prevLesson, nextLesson } = getNextAndPrevLesson(lesson.id);
  const { 
    isLessonCompleted, 
    toggleLessonCompleted, 
    markLessonCompleted, 
    setLastAccessedLesson,
    isMaterialCompleted,
    markMaterialCompleted,
    toggleMaterialCompleted
  } = useProgress();

  const isCompleted = isLessonCompleted(lesson.id);
  const isMatCompleted = isMaterialCompleted(lesson.id);

  // Update last accessed lesson on load
  useEffect(() => {
    setLastAccessedLesson(lesson.id);
  }, [lesson.id, setLastAccessedLesson]);

  return (
    <div className="min-h-screen bg-[#09090b] flex">
      {/* Desktop Sidebar */}
      <AppSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader 
          title={currentModule?.shortTitle || "Curso"} 
          subtitle={lesson.title}
        />

        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-5xl mx-auto w-full space-y-8">
          {/* Top Breadcrumb & Navigation */}
          <div className="flex items-center justify-between">
            <NextLink 
              href="/curso" 
              className="inline-flex items-center text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              <span>Volver a todos los módulos</span>
            </NextLink>

            {currentModule?.isBonus && (
              <Badge variant="bonus">MÓDULO BÓNUS</Badge>
            )}
          </div>

          {/* Module & Lesson Title Header */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider">
              <span>{currentModule?.title}</span>
              <span>•</span>
              <span>Clase {lesson.numberFormatted}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              {lesson.title}
            </h1>
          </div>

          {/* CUSTOM VIDEO PLAYER CONTAINER */}
          {/* Render ONLY the single player for this active lesson */}
          <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden">
            <CustomVideoPlayer 
              videoId={lesson.videoId} 
              title={lesson.title}
              onEnded={() => {
                // Automatically mark as completed when playback finishes
                markLessonCompleted(lesson.id);
              }}
            />
          </div>

          {/* Action Bar: Mark as Completed & Next/Prev */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
            {/* Mark as completed Button */}
            <Button
              onClick={() => toggleLessonCompleted(lesson.id)}
              variant={isCompleted ? "secondary" : "default"}
              size="lg"
              className={cn(
                "font-semibold text-sm transition-all",
                isCompleted 
                  ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25" 
                  : "bg-white text-zinc-950 hover:bg-zinc-200"
              )}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="h-4 w-4 mr-2 text-emerald-400" />
                  <span>Clase completada</span>
                </>
              ) : (
                <>
                  <Circle className="h-4 w-4 mr-2" />
                  <span>Marcar como completada</span>
                </>
              )}
            </Button>

            {/* Navigation Buttons: Previous / Next */}
            <div className="flex items-center space-x-3">
              {prevLesson ? (
                <NextLink href={`/clase/${prevLesson.id}`} className="flex-1 sm:flex-none">
                  <Button variant="outline" size="default" className="w-full sm:w-auto text-xs">
                    <ChevronLeft className="h-4 w-4 mr-1.5" />
                    <span>Clase anterior</span>
                  </Button>
                </NextLink>
              ) : (
                <Button variant="outline" size="default" disabled className="flex-1 sm:flex-none opacity-40 text-xs">
                  <ChevronLeft className="h-4 w-4 mr-1.5" />
                  <span>Clase anterior</span>
                </Button>
              )}

              {nextLesson ? (
                <NextLink href={`/clase/${nextLesson.id}`} className="flex-1 sm:flex-none">
                  <Button variant="outline" size="default" className="w-full sm:w-auto text-xs font-medium">
                    <span>Clase siguiente</span>
                    <ChevronRight className="h-4 w-4 ml-1.5" />
                  </Button>
                </NextLink>
              ) : (
                <NextLink href="/curso" className="flex-1 sm:flex-none">
                  <Button variant="outline" size="default" className="w-full sm:w-auto text-xs font-medium">
                    <span>Finalizar curso</span>
                    <CheckCircle2 className="h-4 w-4 ml-1.5 text-emerald-400" />
                  </Button>
                </NextLink>
              )}
            </div>
          </div>

          {/* MATERIAL COMPLEMENTARIO OFICIAL (DESCARGA DE PDF) */}
          <div className="rounded-2xl border border-zinc-800/90 bg-gradient-to-r from-zinc-900/95 via-zinc-900/70 to-zinc-950/95 p-5 sm:p-6 backdrop-blur-md shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-5 transition-all hover:border-zinc-700/80">
            <div className="flex items-start space-x-4">
              <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
                    Material didáctico complementario
                  </span>
                  {isMatCompleted ? (
                    <Badge className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center space-x-1">
                      <CheckCircle2 className="h-3 w-3 mr-1 text-emerald-400" />
                      <span>Completado</span>
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-[10px] font-mono border-zinc-700 bg-zinc-800/60 text-zinc-300">
                      PDF Oficial • 15 Páginas
                    </Badge>
                  )}
                  {material?.fileSizeFormatted && (
                    <span className="text-[11px] font-mono text-zinc-400">
                      {material.fileSizeFormatted}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {material?.title || "Guía Didáctica y Cuaderno de Trabajo Oficial"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
                  {material?.description || "Material de profundización conceptual, plantillas de ejecución paso a paso, ejercicios y cuaderno de notas para esta lección."}
                </p>
              </div>
            </div>

            <div className="shrink-0 pt-2 md:pt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              {material ? (
                <>
                  <a 
                    href={material.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    download
                    onClick={() => markMaterialCompleted(lesson.id)}
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button 
                      size="lg"
                      className="w-full sm:w-auto bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs sm:text-sm shadow-lg hover:shadow-indigo-500/10 flex items-center justify-center space-x-2 px-6 py-2.5 transition-all"
                    >
                      <Download className="h-4 w-4 mr-1 text-zinc-900" />
                      <span>Descargar material complementario</span>
                    </Button>
                  </a>

                  <Button
                    onClick={() => toggleMaterialCompleted(lesson.id)}
                    variant="outline"
                    size="lg"
                    className={cn(
                      "text-xs font-semibold transition-colors",
                      isMatCompleted
                        ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25"
                        : "border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                    )}
                  >
                    <CheckCircle2 className={cn("h-3.5 w-3.5 mr-1.5", isMatCompleted ? "text-emerald-400" : "text-zinc-500")} />
                    <span>{isMatCompleted ? "Material completado" : "Marcar como leído"}</span>
                  </Button>
                </>
              ) : (
                <div className="text-xs text-zinc-500 italic p-3 rounded-lg bg-zinc-950/60 border border-zinc-800">
                  Material complementario próximamente disponible.
                </div>
              )}
            </div>
          </div>

          {/* Lesson Script & Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
            {/* Main Text Content (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-white mb-6 tracking-tight flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-zinc-400" />
                  <span>Contenido y Guía de la Clase</span>
                </h2>

                <div className="space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {lesson.description.split("\n\n").map((paragraph, index) => {
                    const cleanText = paragraph.trim();
                    if (!cleanText) return null;

                    // Check if bullet/numbered or list item
                    if (cleanText.startsWith("El primer") || cleanText.startsWith("El segundo") || cleanText.startsWith("El tercer") || cleanText.startsWith("El cuarto") || cleanText.startsWith("El quinto")) {
                      return (
                        <div key={index} className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 my-3">
                          <p className="text-zinc-200 font-medium">{cleanText}</p>
                        </div>
                      );
                    }

                    return (
                      <p key={index} className="text-zinc-300/95 leading-relaxed">
                        {cleanText}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar: Lessons in this Module (1 col) */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800/80">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Clases de este módulo
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">
                    {currentModule?.lessons.length} clases
                  </span>
                </div>

                <div className="space-y-2">
                  {currentModule?.lessons.map((item) => {
                    const isItemCompleted = isLessonCompleted(item.id);
                    const isItemActive = item.id === lesson.id;

                    return (
                      <NextLink
                        key={item.id}
                        href={`/clase/${item.id}`}
                        className={cn(
                          "group flex items-start space-x-3 p-3 rounded-xl text-xs transition-all",
                          isItemActive
                            ? "bg-zinc-800 border border-zinc-700/60 text-white font-medium shadow-sm"
                            : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"
                        )}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isItemCompleted ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          ) : (
                            <Circle className="h-4 w-4 text-zinc-600" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] font-mono text-zinc-400 mb-0.5">
                            Clase {item.numberFormatted}
                          </div>
                          <div className={cn(
                            "truncate font-medium",
                            isItemActive ? "text-white" : "text-zinc-300"
                          )}>
                            {item.title}
                          </div>
                        </div>
                      </NextLink>
                    );
                  })}
                </div>
              </div>

              {/* Course navigation helper box */}
              <div className="rounded-2xl border border-zinc-800/60 bg-zinc-950/40 p-5 text-xs text-zinc-400 space-y-2.5">
                <div className="flex items-center space-x-2 text-zinc-200 font-medium">
                  <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Consejo de estudio</span>
                </div>
                <p className="leading-relaxed">
                  Aplica los conceptos de cada clase en una herramienta de IA antes de pasar a la siguiente lección.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
