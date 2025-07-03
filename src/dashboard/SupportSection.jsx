import React from "react";

const SupportSection = () => {
  return (
    <div className="w-full bg-black px-4 pt-4 pb-10">
      <div
        className="w-full bg-[#1D1B25] text-white rounded-xl p-6 md:p-10 shadow-md flex flex-col items-center justify-center gap-5 max-w-7xl mx-auto mt-10"
        role="region"
        aria-label="Support Section"
      >
        {/* Heading with golden gradient */}
        <h2 className="text-2xl md:text-[28px] font-bold text-center bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent tracking-wide leading-snug">
          NEED HELP!
        </h2>

        {/* Description */}
        <p className="text-[17px] md:text-[18px] text-center font-medium leading-relaxed">
          Contact our <span className="font-semibold">24/7 customer</span>
        </p>
        <p className="text-gray-400 text-sm md:text-base -mt-2">
          support center
        </p>

        {/* Button */}
        <button className="mt-3 px-8 py-3 rounded-full bg-gradient-to-r from-[#281000] via-[#C0971C] to-[#281000] text-black font-semibold text-base shadow-md hover:opacity-90 transition">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default SupportSection;
