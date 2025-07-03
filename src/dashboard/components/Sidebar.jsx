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
      {/* Mobile Toggle Button */}
      <div className="sm:hidden p-4 bg-[#0d0c11] text-white flex justify-between items-center">
        <img src={logo} alt="logo" className="h-10 w-auto" />
        <button
          onClick={() => setMobileOpen(true)}
          className="text-white text-2xl"
        >
          <FiMenu />
        </button>
      </div>

      {/* Backdrop for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 sm:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bg-[#0d0c11] text-white flex flex-col justify-between py-6 px-3 transition-all duration-300
        ${isCollapsed ? "w-20" : "w-64"}
        h-screen z-50 fixed sm:sticky top-0 sm:block
        ${mobileOpen ? "left-0" : "-left-full"} sm:left-0`}
      >
        <div>
          {/* Logo */}
          <div className="mb-6 flex items-center justify-center bg-[#121117] rounded-xl py-4">
            <Link to="/" className="flex items-center justify-center">
              <img
                src={logo}
                alt="logo"
                className={`h-16 object-contain ${isCollapsed ? "w-12" : "w-24"}`}
              />
            </Link>
            {/* Mobile Close Button */}
            <button
              className="sm:hidden absolute top-4 right-4 text-xl"
              onClick={() => setMobileOpen(false)}
            >
              <FiX />
            </button>
          </div>

          {/* Collapse Button */}
          <div className="flex justify-end px-1 mb-5 hidden sm:flex">
            <button
              className="bg-[#1a1921] hover:bg-gradient-to-l hover:from-[#452e06] hover:via-[#d1bf5a] hover:to-[#452e06] text-white font-bold p-2 rounded-full hover:text-black transition"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? <FiArrowRight size={16} /> : <FiArrowLeft size={16} />}
            </button>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <Link
                to={item.url}
                key={index}
                onClick={() => setMobileOpen(false)} // close on mobile click
                className={`flex items-center gap-3 px-4 py-2 transition rounded-lg group ${
                  isActive(item.url)
                    ? "bg-gradient-to-l from-[#452e06] via-[#d1bf5a] to-[#452e06] text-black font-bold shadow-md"
                    : "hover:bg-[#1a1921]"
                }`}
                title={isCollapsed ? item.label : ""}
              >
                <span>{item.icon}</span>
                {!isCollapsed && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Spacer */}
        <div className="h-10" />
      </aside>
    </>
  );
}
