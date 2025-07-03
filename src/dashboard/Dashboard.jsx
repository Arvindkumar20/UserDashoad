import React, { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import WelcomeBanner from "./WelcomeBanner";
import ButtonGroupSection from "./components/ButtonGroupSection";
import PricingPage from "./PricingPage";
import SupportSection from "./SupportSection";

export default function Dashboard() {
  const [clicked, setClicked] = useState("forex");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black">
      {/* Mobile Sidebar (hidden by default, shown when sidebarOpen is true) */}
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex flex-col w-full max-w-xs h-full bg-gray-900">
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>
      </div>

      {/* Desktop Sidebar (always visible on md screens and up) */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <Sidebar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="max-w-7xl mx-auto">
            <WelcomeBanner />
            <ButtonGroupSection clicked={clicked} setClicked={setClicked} />
            <PricingPage clicked={clicked} setClicked={setClicked} />
            <SupportSection />
          </div>
        </main>
      </div>
    </div>
  );
}