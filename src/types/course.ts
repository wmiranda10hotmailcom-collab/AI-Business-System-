export interface Lesson {
  id: string;
  key: string;
  moduleId: string;
  moduleOrder: number;
  order: number;
  numberFormatted: string;
  title: string;
  duration?: string;
  videoUrl: string;
  videoId: string;
  description: string;
  summary?: string;
}

export interface Module {
  id: string;
  key: string;
  order: number;
  title: string;
  shortTitle: string;
  description: string;
  isBonus?: boolean;
  lessons: Lesson[];
}

export interface CourseData {
  title: string;
  tagline: string;
  description: string;
  modules: Module[];
}

export interface UserSession {
  email: string;
  name: string;
  isAuthenticated: boolean;
  loginTimestamp?: number;
}
