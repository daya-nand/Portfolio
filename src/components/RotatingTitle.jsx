import { useState, useEffect } from "react";

const RotatingTitle = () => {
  const titles = ["Developer", "Full Stack", "UI/UX Designer", "React Enthusiast"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // for fade in/out

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length); // next title
        setFade(true); // fade in
      }, 500); // animation duration
    }, 2000); // total hold duration + animation

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className={`text-2xl md:text-3xl font-semibold transition-all duration-500 transform ${
        fade ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}
    >
      {titles[currentIndex]}
    </h2>
  );
};

export default RotatingTitle;
