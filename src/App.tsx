import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// === NUEVO: reproductor y asset ===
import VideoPlayer from "./components/VideoPlayer";
import sampleMp4 from "./assets/video.mp4"; // coloca el archivo aquí

const queryClient = new QueryClient();

// Página simple para mostrar el video
const VideoPage = () => (
  <main className="p-6">
    <VideoPlayer
      source={{ src: sampleMp4, type: "video/mp4" }}
      poster="/poster.jpg"        // opcional, pon poster.jpg en /public
      controls
      // muted
      // autoPlay
      // subtitlesSrc="/subs.vtt"  // opcional, coloca subs.vtt en /public
    />
  </main>
);

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* === NUEVO: ruta para ver el video === */}
            <Route path="/video" element={<VideoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
