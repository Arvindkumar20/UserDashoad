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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-close sidebar when resizing to desktop if mobile
      if (window.innerWidth >= 768 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  return (
    <div className="flex w-full min-h-screen bg-black transition-all duration-300">
      {/* Sidebar Component - Hidden on mobile when closed */}
      <div className={`${sidebarOpen ? 'fixed inset-0 z-40' : 'hidden md:block'}`}>
        <Sidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          mobileOpen={sidebarOpen}
          setMobileOpen={setSidebarOpen}
          isMobile={isMobile}
        />
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Layout */}
      <div className={`flex-1 flex flex-col transition-all duration-300`}>
        <DashboardHeader 
          onMenuClick={() => setSidebarOpen(true)} 
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          sidebarOpen={sidebarOpen}
        />

        <main className="flex-1 overflow-y-auto p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 transition-all duration-300">
          <div className="max-w-6xl mx-auto px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6">
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