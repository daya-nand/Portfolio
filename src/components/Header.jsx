
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import OverlayMenu from "./OverlayMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-transparent z-50">
        <div className="w-full min-w-[320px] mx-auto flex items-center justify-between p-4">
          
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

          {/* Right: Reach Out button (hidden on small screens) */}
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

      {/* Overlay Menu */}
      {isMenuOpen && <OverlayMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Header;
