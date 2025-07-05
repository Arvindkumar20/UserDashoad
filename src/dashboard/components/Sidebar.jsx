import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/dashboard/logo.png";
import {
  FiSettings,
  FiLogOut,
  FiArrowLeft,
  FiArrowRight,
  FiLayout,
  FiRepeat,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { BiSolidDashboard } from "react-icons/bi";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: <FiLayout size={20} />, label: "Overview", url: "/" },
    { icon: <BiSolidDashboard size={20} />, label: "Dashboard", url: "/" },
    { icon: <FiRepeat size={20} />, label: "Sync", url: "/dashboard/transaction-history" },
    { icon: <FiLayout size={20} />, label: "Buy Plan", url: "/dashboard/buy-plan" },
    { icon: <FiSettings size={20} />, label: "Settings", url: "/dashboard/setting" },
    { icon: <FiLogOut size={20} />, label: "Logout", url: "/dashboard/logout" },
  ];

  const isActive = (url) => location.pathname === url;

  return (
    <>
      {/* Mobile Topbar */}
      <div className="sm:hidden p-4 bg-[#0d0c11] text-white flex justify-between items-center">
        <img src={logo} alt="logo" className="h-10 w-auto" />
        <button
          onClick={() => setMobileOpen(true)}
          className="text-white text-2xl"
          aria-label="Open Menu"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 sm:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed sm:sticky top-0 left-0 h-screen z-50 transition-all duration-300
        ${isCollapsed ? "w-20" : "w-64"} 
        bg-[#0d0c11] text-white flex flex-col justify-between
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        {/* Top Logo + Collapse Button */}
        <div>
          <div className="flex items-center justify-between px-4 py-5 ">
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center justify-center">
              <img
                src={logo}
                alt="Logo"
                className={`h-1/2 object-contain transition-all duration-300 ${
                  isCollapsed ? "w-12" : "w-1/2"
                }`}
              />
            </Link>
            <button
              className="sm:hidden text-white text-2xl"
              onClick={() => setMobileOpen(false)}
              aria-label="Close Menu"
            >
              <FiX />
            </button>
          </div>

          {/* Collapse Toggle (Desktop Only) */}
          <div className="hidden sm:flex justify-end p-2">
            <button
              className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] to-[#452e06] text-black p-2 rounded-full transition"
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label="Toggle Collapse"
            >
              {isCollapsed ? <FiArrowRight /> : <FiArrowLeft />}
            </button>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2 mt-2 px-2">
            {menuItems.map(({ icon, label, url }, index) => (
              <Link
                key={index}
                to={url}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(url)
                    ? "bg-gradient-to-l from-[#452e06] via-[#d1bf5a] to-[#452e06] text-black font-bold"
                    : "hover:bg-[#1a1921]"
                }`}
                title={isCollapsed ? label : ""}
              >
                <span>{icon}</span>
                {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* Spacer */}
        <div className="h-6" />
      </aside>
    </>
  );
}
