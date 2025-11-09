import React from "react";
import AppLayout from "@/components/AppLayout";
import { AppProvider } from "@/contexts/AppContext";

import VideoPlayer from "@/components/VideoPlayer";
import sampleMp4 from "@/assets/video.mp4";

const Index: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col">
        {/* Tu página completa */}
        <AppLayout />

        {/* Sección con el video debajo del layout */}
        <section id="demo-video" className="p-6">
          <div className="max-w-4xl mx-auto">
            <VideoPlayer
              source={{ src: sampleMp4, type: "video/mp4" }}
              poster="/poster.jpg"  // opcional: si existe en /public
              controls
            />
          </div>
        </section>
      </div>
    </AppProvider>
  );
};

export default Index;
