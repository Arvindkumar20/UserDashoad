import React from "react";
import ToggleButton from "./ToggleButton";

export default function ButtonGroupSection({ clicked, setClicked }) {
  return (
    <div className="w-full  py-4 sm:py-6 md:py-7 lg:py-8">
      <div className=" mx-auto px-3 sm:px-5 ">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <ToggleButton
            text="Forex + Gold"
            clicked={clicked}
            setClicked={setClicked}
            eText="forex"
            className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base"
          />
          <ToggleButton
            text="Crypto"
            clicked={clicked}
            setClicked={setClicked}
            eText="crypto"
            className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base"
          />
          <ToggleButton
            text="Portfolio Management"
            clicked={clicked}
            setClicked={setClicked}
            eText="portfolio"
            className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base"
          />
        </div>
      </div>
    </div>
  );
}
