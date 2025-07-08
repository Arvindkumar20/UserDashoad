import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/dashboard/logo.png";
import toggle from "../../assets/toggle.png";
import { FiSettings, FiLogOut, FiLayout, FiRepeat } from "react-icons/fi";
import { BiSolidDashboard } from "react-icons/bi";

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
  const location = useLocation();

  const menuItems = [
    { icon: <BiSolidDashboard size={20} />, label: "Dashboard", url: "/" },
    {
      icon: <FiRepeat size={20} />,
      label: "Transaction",
      url: "/dashboard/transaction-history",
    },
    {
      icon: <FiLayout size={20} />,
      label: "Buy Plan",
      url: "/dashboard/buy-plan",
    },
    {
      icon: <FiSettings size={20} />,
      label: "Settings",
      url: "/dashboard/setting",
    },
  ];

  const isActive = (url) => location.pathname === url;

  return (
    <div className="relative z-50">
      <div className="relative my-2 mx-3 rounded-3xl">
        {/* Mobile Backdrop */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 sm:hidden bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed sm:sticky top-0 left-0 h-screen bg-[#1D1B25] border-2 border-[#1a1a1a] shadow-lg
            rounded-3xl text-white flex flex-col justify-between
            transition-transform duration-300 ease-in-out
            ${isCollapsed ? "w-[70px]" : "w-52"}
            ${mobileOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 z-50`}
        >
          {/* Top Section */}
          <div className="flex flex-col h-full justify-start gap-48">
            <div>
              {/* Logo */}
              <div className="flex items-center justify-center py-4 border-b border-[#1a1a1a]">
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  <img
                    src={logo}
                    alt="Logo"
                    className={`transition-all duration-300 ${
                      isCollapsed ? "w-10" : "w-32"
                    }`}
                  />
                </Link>
              </div>

              {/* Collapse Button */}
              <div
                className={`absolute hidden sm:flex justify-end transition-all duration-300 w-14 ${
                  isCollapsed
                    ? "top-16 left-10"
                    : "top-24 left-[180px]" // adjust based on sidebar width
                }`}
              >
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="cursor-pointer w-full "
                >
                  <img src={toggle} alt="Toggle" className="w-full" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col mt-8 space-y-4 px-2">
                {menuItems.map(({ icon, label, url }, index) => {
                  const active = isActive(url);
                  return (
                    <Link
                      key={index}
                      to={url}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200
                        ${
                          active
                            ? "bg-gradient-to-l from-[#452e06] via-[#d1bf5a] to-[#452e06] text-black font-bold"
                            : "hover:bg-[#1a1921] text-gray-400"
                        }`}
                      title={label}
                    >
                      <span>{icon}</span>
                      {!isCollapsed && (
                        <span className="text-sm font-medium">{label}</span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Logout */}
            <div className="p-4">
              <Link
                to="/dashboard/logout"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#1a1921] text-gray-400 ${
                  isCollapsed && "justify-center px-0"
                }`}
                title="Logout"
              >
                <FiLogOut size={20} />
                {!isCollapsed && (
                  <span className="text-sm font-medium">Logout</span>
                )}
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}