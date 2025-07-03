import React from "react";
import { pricingPlans } from "../data/pricingPlans";
import PricingCard from "./PricingCard";

export default function PricingSection({ clicked, setClicked, text, setEText }) {
  const isActive = (type) => clicked === type;

  return (
    <div className="w-full px-4 xs:px-6 sm:px-8 py-8 sm:py-12 lg:py-16 text-white bg-black">
      {/* Section Title (optional) */}
     

      {/* Toggle Buttons */}
      {clicked === "forex" && (
        <div className="flex gap-2 xs:gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 lg:mb-10">
          {["forex", "gold"].map((type) => (
            <button
              key={type}
              onClick={() => {
                setClicked(type);
                setEText?.(type.toUpperCase());
              }}
              className={`min-w-[70px] xs:min-w-[80px] sm:min-w-[90px] px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm sm:text-base font-medium transition-all duration-300
                ${
                  isActive(type)
                    ? "bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black shadow-md hover:brightness-110"
                    : "bg-[#0f0e13] text-gray-300 hover:bg-[#1a191f]"
                }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {/* Pricing Cards Container */}
      <div className="relative">
        {/* Scrollable Cards */}
        <div className="flex flex-nowrap gap-4 sm:gap-6 lg:gap-8 pb-4 sm:pb-6 overflow-x-auto scrollbar-hide px-1">
          {pricingPlans[clicked]?.map((plan, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-[280px] xs:w-[300px] sm:w-[320px] md:w-[340px] lg:w-[360px]"
            >
              <PricingCard 
                plan={plan} 
                highlight={i === 1} // Example: highlight middle card
              />
            </div>
          ))}
        </div>

        {/* Scroll indicators (for mobile) */}
        <div className="md:hidden flex justify-center gap-1.5 mt-4">
          {pricingPlans[clicked]?.map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 1 ? "bg-yellow-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* View All Link (optional) */}
      {/* <div className="text-center mt-8 sm:mt-10">
        <button className="text-sm sm:text-base text-yellow-500 hover:text-yellow-400 font-medium underline transition-colors">
          View All Plans
        </button>
      </div> */}
    </div>
  );
}