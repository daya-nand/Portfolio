import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import OverlayMenu from "./OverlayMenu";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true); // first load visible
  const lastScrollY = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // home section => always visible
      if (currentY < 500) {
        setVisible(true);
        return;
      }

      // scroll UP => show header for 3s
      if (currentY < lastScrollY.current) {
        setVisible(true);

        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => setVisible(false), 3000);
      }

      // save last
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-transform duration-500
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="w-full min-w-[320px] mx-auto flex items-center justify-between p-4 bg-transparent">
          
          {/* Left: Logo + Brand */}
          <div className="flex items-center space-x-2">
            <img className="w-10 h-10 object-contain" src="./logo1.png" alt="Logo" />
            <a
              href="#"
              className="text-xl md:text-2xl font-bold text-white tracking-wide transition-colors"
            >
              Dayanand
            </a>
          </div>

          {/* Center: Menu Icon */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-3xl text-white transition-colors hover:text-gray-300"
            >
              <GiHamburgerMenu />
            </button>
          </div>

          {/* Right: Reach Out button */}
          <div className="hidden md:flex justify-end">
            <a
              href="#"
              className="px-5 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-pink-800 to-blue-800 shadow-md hover:opacity-90 transition-all"
            >
              Reach Out
            </a>
          </div>

        </div>
      </header>

      {isMenuOpen && <OverlayMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Header;
