import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";

import { MdSpaceDashboard, MdEmail } from "react-icons/md";
import { FiShare2, FiKey, FiCamera } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUser, FaHome, FaGlobe, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdBusiness } from "react-icons/io";
import { BiSolidMap } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

import DefaultAvatar from "../assets/dashboard/starticon.png";
import StarIcon from "../assets/dashboard/starticon.png";

export default function UserSettings() {
  const [activeTab, setActiveTab] = useState("General");

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
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white overflow-hidden">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="p-4 overflow-hidden">
          <div className="min-h-screen bg-black p-2 sm:p-6">
            {/* Tabs */}
            <div className="w-full bg-black rounded-xl px-4 py-3 mb-6">
              <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(tab.label)}
                    className={`relative flex items-center gap-2 py-2 px-4 text-base sm:text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap rounded-full transition-all duration-300 ${
                      activeTab === tab.label
                        ? "bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent"
                        : "text-gray-400 hover:bg-black hover:text-white"
                    }`}
                  >
                    {tab.label === "General" && (
                      <img
                        src={StarIcon}
                        alt="star"
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                    )}
                    <span className="text-lg sm:text-xl">{tab.icon}</span>
                    <span>{tab.label}</span>
                    {tab.label === "General" && activeTab === "General" && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-800 via-yellow-300 to-yellow-800 rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links Section */}
            {activeTab === "Social links" && (
              <div className="w-full bg-[#121117] p-4 sm:p-6 rounded-xl border border-[#29272e] space-y-4">
                {[
                  {
                    name: "facebook",
                    icon: <FaFacebookF className="text-blue-500" />,
                    placeholder: "https://www.facebook.com/caitlyn.kerluke",
                  },
                  {
                    name: "instagram",
                    icon: <FaInstagram className="text-pink-500" />,
                    placeholder: "https://www.instagram.com/caitlyn.kerluke",
                  },
                  {
                    name: "linkedin",
                    icon: <FaLinkedinIn className="text-blue-400" />,
                    placeholder: "https://www.linkedin.com/caitlyn.kerluke",
                  },
                  {
                    name: "twitter",
                    icon: <FaXTwitter className="text-gray-400" />,
                    placeholder: "https://www.twitter.com/caitlyn.kerluke",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center bg-[#0F0E13] px-4 py-3 rounded-md border border-[#1e1e23]"
                  >
                    <div className="mr-3 text-xl">{item.icon}</div>
                    <input
                      type="text"
                      name={item.name}
                      value={formData[item.name]}
                      onChange={handleChange}
                      placeholder={item.placeholder}
                      className="bg-transparent text-sm sm:text-base text-white placeholder-gray-500 w-full focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
