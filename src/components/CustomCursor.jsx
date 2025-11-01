import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false); // controls rendering

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true); // make cursor visible when moving
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      setVisible(false); // hide cursor when listener is removed
    };
  }, []);

  if (!visible) return null; // don't render anything if not visible

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className="fixed z-100 pointer-events-none w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen shadow-xl transition-transform duration-100 blur-xl"
    />
  );
};

export default CustomCursor;
