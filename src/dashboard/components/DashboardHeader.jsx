import { useState } from "react";
import { FiBell, FiSettings, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import profilePic from "../../assets/dashboard/stack.png";

export default function DashboardHeader({ onMenuClick }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <>
      {/* Full Width Black Background */}
      <div className="w-full bg-black py-3 px-4 sm:py-4 sm:px-6 lg:px-8">
        {/* Centered Header Box */}
        <header className="w-full max-w-[1100px] mx-auto bg-[#0d0c11] flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 rounded-xl shadow-md z-50">
          {/* Left Side - Logo/Website Link and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button (hidden on md and up) */}
            <button
              className="md:hidden focus:outline-none"
              onClick={onMenuClick}
            >
              <FiMenu className="text-white w-6 h-6" />
            </button>

            {/* Website Link */}
            <Link
              to="/"
              className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] to-[#452e06] text-black font-bold text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.3)] hover:brightness-110 transition-all duration-300 whitespace-nowrap"
            >
              GO TO WEBSITE
            </Link>
          </div>

          {/* Right Side - Search and Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Search (hidden on mobile) */}
            <div className="relative hidden sm:flex items-center">
              {showSearch ? (
                <>
                  <input
                    type="text"
                    autoFocus
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="bg-[#1a1921] text-white text-sm px-3 py-1.5 rounded-md placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 transition-all w-48 sm:w-56 md:w-64"
                  />
                  <button
                    onClick={() => setShowSearch(false)}
                    className="absolute right-2 text-gray-400 hover:text-white"
                  >
                    <FiX size={16} />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="text-white hover:text-yellow-400 transition"
                >
                  <FiSearch size={20} />
                </button>
              )}
            </div>

            {/* Mobile Search Button (shown only on mobile) */}
            <button
              className="sm:hidden text-white hover:text-yellow-400 transition"
              onClick={() => setMobileSearchOpen(true)}
            >
              <FiSearch size={20} />
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <FiBell className="text-white w-5 h-5 cursor-pointer hover:text-yellow-400 transition" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center font-bold">
                1
              </span>
            </div>

            {/* Settings Icon */}
            <Link
              to="/dashboard/setting"
              className="text-white hover:text-yellow-400 transition"
            >
              <FiSettings className="w-5 h-5" />
            </Link>

            {/* Profile Image (hidden on very small screens) */}
            <img
              src={profilePic}
              alt="Profile"
              className="hidden xs:block h-8 w-8 rounded-full border-2 border-green-500 object-cover"
            />
          </div>
        </header>
      </div>

      {/* Mobile Search Overlay (shown only when mobileSearchOpen is true) */}
      {mobileSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 sm:hidden">
          <div className="w-full max-w-md relative">
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full bg-[#1a1921] text-white text-base px-4 py-3 rounded-lg placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              onClick={() => setMobileSearchOpen(false)}
              className="absolute right-3 top-3 text-gray-400 hover:text-white"
            >
              <FiX size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}