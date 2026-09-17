"use client";

import React from "react";
import { 
  User, 
  Mail, 
  Shield, 
  LogOut, 
  HardDrive, 
  Sparkles, 
  CheckCircle2,
  Trash2
} from "lucide-react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { useAuth } from "@/lib/auth-context";
import { useProgress } from "@/lib/progress-context";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ConfiguracionPage() {
  const { user, logout } = useAuth();
  const { overallProgress } = useProgress();

  const handleResetProgress = () => {
    if (window.confirm("¿Deseas reiniciar tu progreso en el curso?")) {
      try {
        localStorage.removeItem("ai_business_system_progress");
        localStorage.removeItem("ai_business_system_materials_progress");
        localStorage.removeItem("ai_business_system_last_lesson");
        localStorage.removeItem("ai_digital_creator_progress");
        localStorage.removeItem("ai_digital_creator_materials_progress");
        localStorage.removeItem("ai_digital_creator_last_lesson");
        window.location.reload();
      } catch {
        // Ignore
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex">
      {/* Desktop Sidebar */}
      <AppSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader 
          title="Configuración de la Cuenta" 
          subtitle="Gestiona tu sesión y preferencias de aprendizaje"
        />

        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-4xl mx-auto w-full space-y-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Configuración
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Información de tu acceso y estado de tu área de miembros en AI Business System.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* User Profile Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 text-white border border-zinc-700/60">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Perfil del Alumno</CardTitle>
                    <CardDescription>Datos de sesión utilizados para acceder a la plataforma</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                    <span className="text-xs text-zinc-400 block mb-1">Nombre del Alumno</span>
                    <span className="text-sm font-semibold text-white">{user?.name || "Alumno"}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                    <span className="text-xs text-zinc-400 block mb-1">Correo Electrónico</span>
                    <span className="text-sm font-semibold text-white truncate block">{user?.email || "No registrado"}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <div>
                      <span className="text-xs font-semibold text-white block">Estado de la Sesión</span>
                      <span className="text-[11px] text-zinc-400">Sesión activa localmente</span>
                    </div>
                  </div>
                  <Badge variant="success">ACTIVA</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Course Progress & Storage Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 text-white border border-zinc-700/60">
                    <HardDrive className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Almacenamiento y Progreso</CardTitle>
                    <CardDescription>Control de datos y avance de clases</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-white block">Progreso actual del curso</span>
                    <span className="text-xs text-zinc-400">
                      Has completado {overallProgress.completedCount} de {overallProgress.totalCount} clases ({overallProgress.percentage}%)
                    </span>
                  </div>

                  <Button
                    onClick={handleResetProgress}
                    variant="outline"
                    size="sm"
                    className="text-xs text-zinc-400 hover:text-red-400 hover:border-red-500/30"
                  >
                    <Trash2 className="h-3.5 w-3.5 mr-1.5" />
                    <span>Reiniciar progreso</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Logout Card */}
            <Card className="border-red-500/20 bg-red-950/5">
              <CardHeader>
                <CardTitle className="text-base text-red-300">Cerrar Sesión</CardTitle>
                <CardDescription className="text-zinc-400">
                  Finaliza tu sesión actual en este dispositivo. Podrás volver a ingresar en cualquier momento con tus datos.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  onClick={logout}
                  variant="danger"
                  className="font-medium text-xs"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Cerrar sesión ahora</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
