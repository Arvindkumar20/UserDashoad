import React from "react";
import ToggleButton from "./ToggleButton";

export default function ButtonGroupSection({ clicked, setClicked }) {
  return (
    <div className="w-full bg-black py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  xs:flex-row gap-3 sm:gap-4 md:gap-6 flex-wrap items-center justify-center">
          <ToggleButton
            text="Forex + Gold"
            clicked={clicked}
            setClicked={setClicked}
            eText="forex"
            className="w-full xs:w-auto px-4 py-2 text-sm sm:text-base"
          />
          <ToggleButton
            text="Crypto"
            clicked={clicked}
            setClicked={setClicked}
            eText="crypto"
            className="w-full xs:w-auto px-4 py-2 text-sm sm:text-base"
          />
          <ToggleButton
            text="Portfolio Management"
            clicked={clicked}
            setClicked={setClicked}
            eText="portfolio"
            className="w-full xs:w-auto px-4 py-2 text-sm sm:text-base"
          />
        </div>
      </div>
    </div>
  );
}