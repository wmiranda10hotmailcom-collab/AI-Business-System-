"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { UserSession } from "@/types/course";

interface AuthContextType {
  user: UserSession | null;
  isLoading: boolean;
  login: (email: string, password?: string) => void;
  logout: () => void;
}

const STORAGE_KEY = "ai_business_system_session";
const LEGACY_STORAGE_KEY = "ai_digital_creator_session";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as UserSession;
        if (parsed && parsed.isAuthenticated) {
          setUser(parsed);
        }
      }
    } catch {
      // Ignore localStorage errors
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (email: string, _password?: string) => {
    const cleanEmail = email.trim() || "alumno@aibusinesssystem.com";
    const namePart = cleanEmail.split("@")[0] || "Alumno";
    const displayName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

    const session: UserSession = {
      email: cleanEmail,
      name: displayName,
      isAuthenticated: true,
      loginTimestamp: Date.now()
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } catch {
      // Ignore
    }

    setUser(session);
    window.location.href = "/dashboard";
  };

  const logout = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
    setUser(null);
    window.location.href = "/login";
  };

  // Route protection
  useEffect(() => {
    if (isLoading || !pathname) return;

    const isLoginPage = pathname === "/login";

    if (!user && !isLoginPage) {
      window.location.href = "/login";
    } else if (user && isLoginPage) {
      window.location.href = "/dashboard";
    }
  }, [user, isLoading, pathname]);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe utilizarse dentro de un AuthProvider");
  }
  return context;
}
