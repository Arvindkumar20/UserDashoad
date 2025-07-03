import React from "react";

export default function ToggleButton({ text, clicked, setClicked, eText }) {
  const isActive = clicked === eText;

  const handleClick = () => {
    setClicked(eText);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300
        ${
          isActive
            ? "bg-gradient-to-r from-[#2c1e00] via-[#e7c65b] to-[#2c1e00] text-black shadow-[0_0_10px_rgba(255,215,0,0.5)]"
            : "bg-[#1a1921] text-white"
        }`}
    >
      {text}
    </button>
  );
}
