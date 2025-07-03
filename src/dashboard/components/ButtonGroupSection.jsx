import React from "react";
import ToggleButton from "./ToggleButton";

export default function ButtonGroupSection({ clicked, setClicked }) {
  return (
    <div className="w-full bg-black py-6">
      <div className="flex gap-6 flex-wrap items-center justify-center">
        <ToggleButton
          text="Forex + Gold"
          clicked={clicked}
          setClicked={setClicked}
          eText="forex"
        />
        <ToggleButton
          text="Crypto"
          clicked={clicked}
          setClicked={setClicked}
          eText="crypto"
        />
        <ToggleButton
          text="Portfolio Management"
          clicked={clicked}
          setClicked={setClicked}
          eText="portfolio"
        />
      </div>
    </div>
  );
}
