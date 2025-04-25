"use client";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 87,
    minutes: 60,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        // Convert everything to seconds for easier calculation
        let totalSeconds =
          prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;

        // Decrement by 1 second
        totalSeconds = Math.max(0, totalSeconds - 1);

        // Convert back to hours, minutes, seconds
        const hours = Math.floor(totalSeconds / 3600);
        const remainingSeconds = totalSeconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format numbers to always show 2 digits
  const formatNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex items-center gap-1 text-xl font-medium">
      <span className="text-white">Time Left:</span>
      <span className="text-white">{formatNumber(timeLeft.hours)}</span>
      <span className="text-white">H :</span>
      <span className="text-white">{formatNumber(timeLeft.minutes)}</span>
      <span className="text-white">M:</span>
      <span className="text-white">{formatNumber(timeLeft.seconds)}</span>
      <span className="text-white">S</span>
    </div>
  );
};

export default CountdownTimer;
