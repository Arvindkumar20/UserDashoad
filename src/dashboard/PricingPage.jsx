// pages/PricingPage.jsx
import { useState } from "react";

import PricingSection from "./components/PricingSection";

export default function PricingPage({clicked,setClicked}) {
  const [eText, setEText] = useState("FOREX");
  console.log(clicked);

  return (
    <div className="min-h-screen  text-white  overflow-x-scroll hide-scrollbar bg-black ">
      <PricingSection
        clicked={clicked}
        setClicked={setClicked}
        text={eText}
        setEText={setEText}
      />
</div>
);
}