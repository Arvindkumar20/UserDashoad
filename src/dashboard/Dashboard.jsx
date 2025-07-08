import React, { useState, useEffect } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import WelcomeBanner from "./WelcomeBanner";
import ButtonGroupSection from "./components/ButtonGroupSection";
import PricingPage from "./PricingPage";
import SupportSection from "./SupportSection";

export default function Dashboard() {
  const [clicked, setClicked] = useState("forex");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile) setSidebarOpen(false); // Close on desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex w-full min-h-screen bg-black transition-all duration-300 relative">
      {/* Sidebar (Fixed on mobile) */}
      <div
        className={`${
          sidebarOpen ? "fixed inset-0 z-40" : "hidden"
        } md:block md:relative`}
      >
        <Sidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          mobileOpen={sidebarOpen}
          setMobileOpen={setSidebarOpen}
          isMobile={isMobile}
        />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
   <div className="flex-1 w-full flex flex-col min-h-screen transition-all duration-300 px-2 sm:px-4 md:px-6 lg:px-8">
  <DashboardHeader
    onMenuClick={() => setSidebarOpen(true)}
    isCollapsed={isCollapsed}
    setIsCollapsed={setIsCollapsed}
    sidebarOpen={sidebarOpen}
  />

  <main className="flex-1 overflow-y-auto py-3 sm:py-4 md:py-5 lg:py-6 transition-all duration-300">
    <div className="w-full sm:w-2xl md:w-2xl lg:w-4xl max-w-7xl mx-auto">
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
