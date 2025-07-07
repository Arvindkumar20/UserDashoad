import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";

import {
  MdSpaceDashboard,
  MdEmail
} from "react-icons/md";
import {
  FiShare2,
  FiKey,
  FiCamera,
  FiInfo
} from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import DefaultAvatar from "../assets/dashboard/starticon.png";
import StarIcon from "../assets/dashboard/starticon.png";

export default function UserSettings() {
  const [activeTab, setActiveTab] = useState("General");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [formData, setFormData] = useState({
    name: "Jayvion Simon",
    email: "nannie.abernathy70@yahoo.com",
    phone: "365-374-4961",
    address: "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
    country: "India",
    state: "Chalandri",
    city: "Chalandri",
    zip: "22000",
    photo: null,
    facebook: "https://www.facebook.com/caitlyn.kerluke",
    instagram: "https://www.instagram.com/caitlyn.kerluke",
    linkedin: "https://www.linkedin.com/caitlyn.kerluke",
    twitter: "https://www.twitter.com/caitlyn.kerluke",
  });

  const tabs = [
    { label: "General", icon: <MdSpaceDashboard /> },
    { label: "Social links", icon: <FiShare2 /> },
    { label: "Security", icon: <FiKey /> },
  ];

  const blurredValues = [
    "Jayvion Simon",
    "nannie.abernathy70@yahoo.com",
    "365-374-4961",
    "India",
    "Chalandri",
    "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
    "22000",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, photo: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = () => {
    alert("Changes saved!");
  };

  const handleDeleteUser = () => {
    alert("User deleted!");
  };

  return (
    <div className="flex bg-black min-h-screen text-white overflow-hidden">
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex flex-col w-full max-w-xs h-full bg-gray-900">
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} mobileOpen={sidebarOpen} setMobileOpen={setSidebarOpen} />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className={`flex flex-col ${isCollapsed ? "w-20" : "w-64"}`}>
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} mobileOpen={sidebarOpen} setMobileOpen={setSidebarOpen} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4">
          <div className="w-full px-2 sm:px-6">
            {/* Tabs */}
            <div className="bg-black rounded-xl px-4 py-3 mb-6">
              <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(tab.label)}
                    className={`relative flex items-center gap-2 py-2 px-4 text-base sm:text-xl md:text-2xl font-bold whitespace-nowrap rounded-full transition-all duration-300 ${
                      activeTab === tab.label
                        ? "bg-clip-text text-transparent bg-[linear-gradient(180deg,_#281000_5.95%,_#C0971C_29.93%,_#FFE976_52.51%,_#C0971C_76.02%,_#281000_100%)]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab.label === "General" && (
                      <img src={StarIcon} alt="star" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                    )}
                    <span className="text-lg sm:text-xl">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* GENERAL TAB */}
            {activeTab === "General" && (
              <div className="w-full p-4 sm:p-6 rounded-xl bg-[#121117]">
                <div className="flex flex-col lg:flex-row gap-10 xl:gap-24">
                  {/* Avatar Card */}
                  <div className="w-full lg:max-w-xs text-center bg-[#121117] p-6 rounded-xl border border-[#29272e]">
                    <label htmlFor="photo-upload" className="block cursor-pointer">
                      <div className="w-32 h-32 mx-auto rounded-full bg-[#26242f] border border-gray-500 flex items-center justify-center relative overflow-hidden">
                        <img
                          src={formData.photo || DefaultAvatar}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <FiCamera className="text-white text-xl" />
                        </div>
                      </div>
                    </label>
                    <input id="photo-upload" type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                    <p className="text-xs text-gray-500 mt-3">
                      Allowed *.jpeg, *.jpg, *.png, *.gif <br /> Max size of 3.1 MB
                    </p>
                    <button
                      onClick={handleDeleteUser}
                      className="bg-[#2a1212] hover:bg-red-700 mt-4 px-4 py-2 rounded text-[#637381] text-sm flex items-center justify-center gap-2"
                    >
                      <RiDeleteBin6Line /> Delete user
                    </button>
                  </div>

                  {/* Form */}
                  <div className="flex-1 p-4 sm:p-6 rounded-xl border border-[#29272e] grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {["name","email","phone","address","country","state","city","zip"].map((field) => (
                      <div key={field} className="relative">
                        <span className="text-sm text-[#637381] absolute -top-2 left-3 bg-[#121117] px-1">
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </span>
                        <input
                          className={`bg-transparent px-10 py-2 rounded w-full placeholder-gray-400 focus:outline-none border border-[#383742] ${
                            blurredValues.includes(formData[field]) ? "text-[#454545]" : "text-white"
                          }`}
                          name={field}
                          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                          value={formData[field]}
                          onChange={handleChange}
                        />
                      </div>
                    ))}

                    <div className="col-span-1 md:col-span-2 text-right">
                      <div className="inline-block p-[2px] rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_0_17px_rgba(254,214,0,0.2)]">
                        <button
                          onClick={handleSubmit}
                          className="h-[39px] px-[18px] py-[7px] rounded-full font-bold text-sm font-poppins bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] text-black hover:bg-black hover:text-white transition duration-300"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SOCIAL LINKS TAB */}
            {activeTab === "Social links" && (
              <div className="w-full bg-[#121117] p-4 sm:p-6 rounded-xl border border-[#29272e] space-y-4">
                {["facebook", "instagram", "linkedin", "twitter"].map((name) => {
                  const iconMap = {
                    facebook: <FaFacebookF className="text-blue-500" />,
                    instagram: <FaInstagram className="text-pink-500" />,
                    linkedin: <FaLinkedinIn className="text-blue-400" />,
                    twitter: <FaXTwitter className="text-gray-400" />,
                  };

                  return (
                    <div
                      key={name}
                      className="flex flex-col sm:flex-row items-center bg-[#0F0E13] px-4 py-3 rounded-md border border-[#1e1e23] gap-3"
                    >
                      <div className="text-xl">{iconMap[name]}</div>
                      <input
                        type="text"
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={`Enter ${name} URL`}
                        className="bg-transparent text-sm sm:text-base text-white placeholder-gray-500 w-full focus:outline-none"
                      />
                    </div>
                  );
                })}
              </div>
            )}

            {/* SECURITY TAB */}
            {activeTab === "Security" && (
              <div className="w-full bg-[#121117] text-white p-4 sm:p-6 rounded-2xl shadow-md">
                <form className="space-y-6">
                  <div>
                    <input
                      type="password"
                      placeholder="Old password"
                      className="w-full bg-transparent border border-[#2a2a2a] text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="New password"
                      className="w-full bg-transparent border border-[#2a2a2a] text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    />
                    <p className="text-gray-400 text-sm flex items-center gap-2 mt-2">
                      <FiInfo className="text-blue-400" />
                      Password must be minimum 6+
                    </p>
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full bg-transparent border border-[#2a2a2a] text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
