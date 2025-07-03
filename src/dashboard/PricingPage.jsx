// pages/PricingPage.jsx
import React, { useState } from "react";
import PricingSection from "./components/PricingSection";

export default function PricingPage({clicked,setClicked}) {
  const [eText, setEText] = useState("FOREX");
  console.log(clicked);

  return (
    <div className="min-h-screen bg-black text-white">
      <PricingSection
        clicked={clicked}
        setClicked={setClicked}
        text={eText}
        setEText={setEText}
      />
    </div>
  );
}
