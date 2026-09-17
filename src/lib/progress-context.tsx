"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllLessons, getLessonById } from "@/data/courseData";
import { Lesson } from "@/types/course";

interface ProgressContextType {
  completedLessons: string[]; // lesson IDs (video classes)
  completedMaterials: string[]; // lesson IDs for completed/downloaded materials
  lastAccessedLessonId: string | null;
  toggleLessonCompleted: (lessonId: string) => void;
  markLessonCompleted: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  toggleMaterialCompleted: (lessonId: string) => void;
  markMaterialCompleted: (lessonId: string) => void;
  isMaterialCompleted: (lessonId: string) => boolean;
  setLastAccessedLesson: (lessonId: string) => void;
  getLastAccessedLesson: () => Lesson | null;
  overallProgress: {
    completedCount: number;
    totalCount: number;
    percentage: number;
  };
  getModuleProgress: (moduleId: string) => {
    completedCount: number;
    totalCount: number;
    percentage: number;
  };
}

const PROGRESS_KEY = "ai_business_system_progress";
const MATERIALS_PROGRESS_KEY = "ai_business_system_materials_progress";
const LAST_ACCESSED_KEY = "ai_business_system_last_lesson";

const LEGACY_PROGRESS_KEY = "ai_digital_creator_progress";
const LEGACY_MATERIALS_PROGRESS_KEY = "ai_digital_creator_materials_progress";
const LEGACY_LAST_ACCESSED_KEY = "ai_digital_creator_last_lesson";

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [completedMaterials, setCompletedMaterials] = useState<string[]>([]);
  const [lastAccessedLessonId, setLastAccessedLessonId] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedProgress = localStorage.getItem(PROGRESS_KEY) || localStorage.getItem(LEGACY_PROGRESS_KEY);
      if (storedProgress) {
        setCompletedLessons(JSON.parse(storedProgress));
      }
      const storedMaterials = localStorage.getItem(MATERIALS_PROGRESS_KEY) || localStorage.getItem(LEGACY_MATERIALS_PROGRESS_KEY);
      if (storedMaterials) {
        setCompletedMaterials(JSON.parse(storedMaterials));
      }
      const storedLast = localStorage.getItem(LAST_ACCESSED_KEY) || localStorage.getItem(LEGACY_LAST_ACCESSED_KEY);
      if (storedLast) {
        setLastAccessedLessonId(storedLast);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const saveCompletedLessons = (updated: string[]) => {
    setCompletedLessons(updated);
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const saveCompletedMaterials = (updated: string[]) => {
    setCompletedMaterials(updated);
    try {
      localStorage.setItem(MATERIALS_PROGRESS_KEY, JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const toggleLessonCompleted = (lessonId: string) => {
    const updated = completedLessons.includes(lessonId)
      ? completedLessons.filter(id => id !== lessonId)
      : [...completedLessons, lessonId];
    saveCompletedLessons(updated);
  };

  const markLessonCompleted = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      const updated = [...completedLessons, lessonId];
      saveCompletedLessons(updated);
    }
  };

  const isLessonCompleted = (lessonId: string): boolean => {
    return completedLessons.includes(lessonId);
  };

  const toggleMaterialCompleted = (lessonId: string) => {
    const updated = completedMaterials.includes(lessonId)
      ? completedMaterials.filter(id => id !== lessonId)
      : [...completedMaterials, lessonId];
    saveCompletedMaterials(updated);
  };

  const markMaterialCompleted = (lessonId: string) => {
    if (!completedMaterials.includes(lessonId)) {
      const updated = [...completedMaterials, lessonId];
      saveCompletedMaterials(updated);
    }
  };

  const isMaterialCompleted = (lessonId: string): boolean => {
    return completedMaterials.includes(lessonId);
  };

  const setLastAccessedLesson = (lessonId: string) => {
    setLastAccessedLessonId(lessonId);
    try {
      localStorage.setItem(LAST_ACCESSED_KEY, lessonId);
    } catch {
      // Ignore
    }
  };

  const getLastAccessedLesson = (): Lesson | null => {
    if (lastAccessedLessonId) {
      const found = getLessonById(lastAccessedLessonId);
      if (found) return found;
    }
    const all = getAllLessons();
    return all.length > 0 ? all[0] : null;
  };

  const allLessons = getAllLessons();
  // Cada aula possui 1 vídeo e 1 material didático complementar (PDF) = 2 conteúdos por aula
  const totalCount = allLessons.length * 2;
  const completedCount = completedLessons.length + completedMaterials.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const getModuleProgress = (moduleId: string) => {
    const moduleLessons = allLessons.filter(l => l.moduleId === moduleId);
    // Cada módulo tem 2 vídeos + 2 materiais didáticos complementares = 4 conteúdos por módulo
    const modTotal = moduleLessons.length * 2;
    const modLessonsDone = moduleLessons.filter(l => completedLessons.includes(l.id)).length;
    const modMaterialsDone = moduleLessons.filter(l => completedMaterials.includes(l.id)).length;
    const modCompleted = modLessonsDone + modMaterialsDone;
    const modPercentage = modTotal > 0 ? Math.round((modCompleted / modTotal) * 100) : 0;

    return {
      completedCount: modCompleted,
      totalCount: modTotal,
      percentage: modPercentage
    };
  };

  return (
    <ProgressContext.Provider
      value={{
        completedLessons,
        completedMaterials,
        lastAccessedLessonId,
        toggleLessonCompleted,
        markLessonCompleted,
        isLessonCompleted,
        toggleMaterialCompleted,
        markMaterialCompleted,
        isMaterialCompleted,
        setLastAccessedLesson,
        getLastAccessedLesson,
        overallProgress: {
          completedCount,
          totalCount,
          percentage
        },
        getModuleProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress debe utilizarse dentro de un ProgressProvider");
  }
  return context;
}
