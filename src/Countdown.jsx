import { useEffect, useState } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [isAnniversaryToday, setIsAnniversaryToday] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      // Get current time in Florida (Eastern Time)
      const now = new Date();
      const floridaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
      const currentYear = floridaTime.getFullYear();

      // Create target date in Florida time
      let targetDate = new Date(`${currentYear}-08-01T00:00:00`);
      const targetInFlorida = new Date(targetDate.toLocaleString("en-US", {timeZone: "America/New_York"}));
      
      if (floridaTime > targetInFlorida) {
        targetDate = new Date(`${currentYear + 1}-08-01T00:00:00`);
      }

      const diff = targetDate - floridaTime;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, mins, secs });

      // Show message only when countdown reaches zero
      setIsAnniversaryToday(diff <= 0);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (num) => String(num).padStart(2, "0");

  if (isAnniversaryToday) {
    return (
      <section className="py-10 px-4 bg-rose-100 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-rose-50 to-rose-100 rounded-3xl shadow-2xl p-8 border border-rose-300 backdrop-blur-sm">
          <p className="text-rose-600 text-xl italic">
             A whole year of loving you and thousands of memories I'll cherish forever. 💖
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 px-4 bg-rose-100 text-center">
      <div className="max-w-2xl mx-auto bg-gradient-to-b from-rose-50 to-rose-100 rounded-3xl shadow-2xl p-8 border border-rose-300 backdrop-blur-sm">
        <h2 className="text-3xl font-script text-rose-600 font-semibold mb-8">
          Countdown to Our Anniversary
        </h2>

        <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
          <div className="bg-white border-2 border-rose-300 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="text-3xl font-bold text-rose-700 mb-1">{pad(timeLeft.days)}</div>
            <div className="text-sm text-rose-500 font-medium">Days</div>
          </div>

          <div className="bg-white border-2 border-rose-300 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="text-3xl font-bold text-rose-700 mb-1">{pad(timeLeft.hours)}</div>
            <div className="text-sm text-rose-500 font-medium">Hours</div>
          </div>

          <div className="bg-white border-2 border-rose-300 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="text-3xl font-bold text-rose-700 mb-1">{pad(timeLeft.mins)}</div>
            <div className="text-sm text-rose-500 font-medium">Minutes</div>
          </div>

          <div className="bg-white border-2 border-rose-300 rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="text-3xl font-bold text-rose-700 mb-1">{pad(timeLeft.secs)}</div>
            <div className="text-sm text-rose-500 font-medium">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Countdown;