import NextLink from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white p-4">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Página no encontrada</h2>
        <p className="text-sm text-zinc-400">La página que buscas no existe o fue movida.</p>
        <NextLink href="/dashboard">
          <Button>Volver al inicio</Button>
        </NextLink>
      </div>
    </div>
  );
}
