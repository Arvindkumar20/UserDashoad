import React from "react";
import { pricingPlans } from "../data/pricingPlans";
import PricingCard from "./PricingCard";

export default function PricingSection({ clicked, setClicked, text, setEText }) {
  const isActive = (type) => clicked === type;

  return (
    <div className="w-full px-4 py-8 text-white bg-black">
      {/* Toggle Buttons */}
      {clicked === "forex" && (
        <div className="flex gap-2 justify-center mb-6">
          {["forex", "gold"].map((type) => (
            <button
  key={type}
  onClick={() => {
    setClicked(type);
    setEText?.(type.toUpperCase());
  }}
  className={`min-w-[60px] px-4 py-2 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-300
    ${
      isActive(type)
        ? "bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black shadow-md hover:brightness-110"
        : "bg-[#0f0e13] text-gray-300"
    }`}
>
  {type.toUpperCase()}
</button>

          ))}
        </div>
      )}

      {/* Pricing Cards */}
      <div className="flex flex-nowrap gap-x-6 justify-center items-stretch overflow-x-auto scrollbar-hide">
        {pricingPlans[clicked]?.map((plan, i) => (
          <PricingCard key={i} plan={plan} />
        ))}
      </div>
    </div>
  );
}
