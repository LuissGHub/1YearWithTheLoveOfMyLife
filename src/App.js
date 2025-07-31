import React from "react";
import FloatingHearts from "./FloatingHearts";
import LoveLetter from "./LoveLetter";
import PhotoGallery from "./PhotoGallery";
import Countdown from "./Countdown";
import VinylPlayer from "./VinylPlayer";
import "./index.css";
  
function App() {
  return (
    <div className="relative font-sans bg-pink-50">
      <FloatingHearts />

      {/* Header Section */}
      <section className="text-center py-16 bg-gradient-to-b from-rose-100 to-pink-50">
          <div className="text-8xl mb-6 animate-pulse">💕</div>
        <h1 className="text-6xl text-rose-600 font-script">Happy 1 Year Anniversary</h1>
        <Countdown />
      </section>

      {/* Love Letter */}
      <LoveLetter />

      {/* Vinyl Music Player */}
      <section className="py-12 px-4 bg-rose-100">
        <h2 className="text-4xl font-script text-center text-rose-500 mb-6">Our Love Song</h2>
        <VinylPlayer />
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />
    </div>
  );
}

export default App; 