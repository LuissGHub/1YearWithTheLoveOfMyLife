import { useEffect, useState } from "react";
import "./FloatingHearts.css";

const HeartComponent = ({ heart }) => (
  <div className="heart" style={heart.style}>
    💖
  </div>
);

function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const left = Math.random() * window.innerWidth;
      const size = Math.random() * 20 + 20;
      const style = {
        left,
        fontSize: `${size}px`,
        animationDuration: `${6 + Math.random() * 2}s`,
        top: '100vh',
      };
      setHearts((prev) => [...prev, { id: Date.now(), style }]);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // Cleanup old hearts to prevent memory leaks
  useEffect(() => {
    const cleanup = setInterval(() => {
      setHearts(prev => prev.filter(heart => 
        Date.now() - heart.id < 8000 // Remove hearts older than 8 seconds
      ));
    }, 1000);
    
    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-10 overflow-hidden">
      {hearts.map((heart) => (
        <HeartComponent key={heart.id} heart={heart} />
      ))}
    </div>
  );
}

export default FloatingHearts;