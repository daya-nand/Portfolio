import React from "react";

const OverlayMenu = ({ onClose }) => {
  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <div className="fixed inset-0 bg-black opacity-95 flex flex-col items-center justify-center z-50">
      
      {/* Close Button */}
      <button
        className="absolute top-15 right-15 text-white text-4xl hover:text-pink-500 transition-transform duration-300 hover:scale-110"
        onClick={onClose}
      >
        ✕
      </button>


      {/* Menu Items */}
      <ul className="space-y-8 text-3xl md:text-4xl text-center">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-white font-semibold hover:text-pink-500 transition-colors duration-300 tracking-wider"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverlayMenu;
