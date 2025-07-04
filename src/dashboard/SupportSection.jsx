import React, { useState } from "react";

const SupportSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full bg-black px-4 pt-4 pb-10 overflow-x-hidden">
      <div
        className="w-full bg-[#1D1B25] text-white rounded-xl p-6 md:p-10 shadow-md flex flex-col items-center justify-center gap-5 max-w-7xl mx-auto mt-10"
        role="region"
        aria-label="Support Section"
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-[28px] font-bold text-center bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent tracking-wide leading-snug">
          NEED HELP!
        </h2>

        {/* Description */}
        <p className="text-[17px] md:text-[18px] text-center font-medium leading-relaxed">
          Contact our <span className="font-semibold">24/7 customer</span>
        </p>
        <p className="text-gray-400 text-sm md:text-base -mt-2">support center</p>

        {/* Button same as HeroSection */}
        <div className="mt-3 p-[2px] rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_0_17px_rgba(254,214,0,0.2)]">
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`w-[180px] h-[44px] rounded-full font-bold text-sm font-poppins transition duration-300
              ${hovered ? "bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] text-black" : "bg-black text-white"}`}
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
