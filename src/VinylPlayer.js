import React, { useRef, useState, useEffect } from "react";
import "./VinylPlayer.css";

function VinylPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Get correct paths for GitHub Pages
  const albumCoverPath = `${process.env.PUBLIC_URL}/album-cover.jpg`;
  const audioPath = `${process.env.PUBLIC_URL}/Young and Beautiful.mp3`;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      setIsLoading(false);
      setDuration(audio.duration);
    };

    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      const percentage = (audio.currentTime / audio.duration) * 100;
      setProgress(percentage || 0);
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Playback error:', error);
      setHasError(true);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (hasError) {
    return (
      <div className="spotify-style-player">
        <div className="text-center text-rose-400 py-8">
          <div className="text-4xl mb-2">🎵</div>
          <p>Music couldn't load, but you're still my favorite song!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="spotify-style-player">
      <div className="album-section">
        <img
          src={albumCoverPath}
          alt="Album Cover - Young and Beautiful by Lana Del Rey"
          className={`album-img ${isPlaying ? "spin" : ""}`}
          onError={(e) => {
            // Fallback if album cover doesn't load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div 
          className="album-img bg-gradient-to-br from-pink-300 to-rose-400 items-center justify-center text-white text-2xl"
          style={{display: 'none'}}
        >
          🎵
        </div>
        <div className="text-info">
          <h3 className="song-title">Young and Beautiful</h3>
          <p className="artist-name">Lana Del Rey</p>
        </div>
      </div>

      <div className="controls">
        <button 
          onClick={togglePlay} 
          className="play-btn"
          disabled={isLoading}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isLoading ? "⏳" : isPlaying ? "❚❚" : "▶"}
        </button>
        
        <div className="bar-wrapper">
          <div className="bar-track">
            <div 
              className="bar-fill" 
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        
        <div className="time-display">
          <span className="text-xs text-rose-400">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>

      <audio ref={audioRef} src={audioPath} preload="metadata" />
    </div>
  );
}

export default VinylPlayer;