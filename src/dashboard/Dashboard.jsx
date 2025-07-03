import React, { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import WelcomeBanner from "./WelcomeBanner";
import ButtonGroupSection from "./components/ButtonGroupSection";
import PricingPage from "./PricingPage";
import SupportSection from "./SupportSection";

export default function Dashboard() {
  const [clicked, setClicked] = useState("forex");

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="p-4">
          <WelcomeBanner />
          <ButtonGroupSection clicked={clicked} setClicked={setClicked} />
          <PricingPage clicked={clicked} setClicked={setClicked} />
          <SupportSection />
        </main>
      </div>
    </div>
  );
}
