import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import moneyBag from "../assets/dashboardhome/moneyBag.png";

export default function BuyPlan() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex flex-col w-full max-w-xs h-full bg-gray-900">
          <Sidebar
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            mobileOpen={sidebarOpen}
            setMobileOpen={setSidebarOpen}
          />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className={`flex flex-col ${isCollapsed ? "w-20" : "w-64"}`}>
          <Sidebar
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            mobileOpen={sidebarOpen}
            setMobileOpen={setSidebarOpen}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Section: Buy Plan */}
            <div className="w-full lg:flex-1 bg-[#121117] p-6 rounded-md space-y-6">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,#281000_5.95%,#C0971C_29.93%,#FFE976_52.51%,#C0971C_76.02%,#281000_100%)]">
                BUY NEW PLAN
              </h2>
              <p className="text-sm text-gray-400">Choose a plan that suits your trading needs.</p>

              <div className="bg-[#121117] border border-gray-800 p-6 rounded-md space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Plan Type</label>
                  <select className="w-full bg-[#1e1d24] border border-gray-700 text-white p-2 rounded">
                    <option>Standard</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Plan</label>
                  <select className="w-full bg-[#1e1d24] border border-gray-700 text-white p-2 rounded">
                    <option>Funded $50,000</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white">
                    Choose Payment Method from the list below *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#121117] p-3 rounded-md">
                    {["ETH ERC20", "USDT TRC20", "Card Payment", "Bank Transfer", "BTC"].map((method) => (
                      <div
                        key={method}
                        className="bg-[#121117] border border-gray-700 rounded-md p-3 flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          value={method}
                          className="appearance-none w-4 h-4 border border-gray-700 rounded bg-[#26242f] checked:bg-yellow-400 checked:border-yellow-400 focus:ring-0"
                        />
                        <span className="text-gray-400 text-sm">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex justify-center">
                  <label
                    htmlFor="upload"
                    className="bg-[#1e1d24] border border-gray-700 p-4 rounded text-center cursor-pointer w-full sm:w-[300px]"
                  >
                    <div className="text-yellow-400 text-2xl">📁</div>
                    <p className="text-yellow-400 text-sm">Click to upload</p>
                    <p className="text-gray-400 text-xs">or drag and drop (max. 800x400px)</p>
                    <input id="upload" type="file" className="hidden" />
                  </label>
                </div>

                <div className="w-full flex justify-start">
                  <div className="p-[1.5px] rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_0_10px_rgba(254,214,0,0.2)] w-[180px]">
                    <button
                      className="w-full h-[40px] text-xs sm:text-sm rounded-full font-semibold
                      bg-black text-white hover:text-black
                      hover:bg-[linear-gradient(90deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)]
                      transition-all duration-300"
                    >
                      PROCEED TO PAYMENT
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: Current Plans */}
            <div className="w-full lg:w-1/2 bg-[#121117] p-6 rounded-md space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,#281000_5.95%,#C0971C_29.93%,#FFE976_52.51%,#C0971C_76.02%,#281000_100%)]">
                  CURRENT PLAN
                </h2>
                <button className="text-gray-400 text-sm">Filter</button>
              </div>

              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#1D1B25] border border-gray-800 p-4 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div>
                    <p className="text-sm">Standard Plan</p>
                    <p className="text-3xl font-bold">
                      $199 <span className="text-sm">/MONTHLY</span>
                    </p>
                    <p className="text-xs text-gray-400">Purchase Date: 25-11-2024</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-green-500 text-center">Plan Active</p>
                    <p className="text-xs text-gray-400 my-1">Purchase Date: 20/05/2003</p>
                    <p className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] to-[#452e06] text-black px-6 py-1 text-sm rounded-full shadow-md hover:brightness-110 transition-all duration-300">
                      Expires: 25-11-2025
                    </p>
                  </div>
                </div>
              ))}

              <div className="text-center mt-6 bg-black p-8 rounded-md relative">
                <div className="relative flex items-center justify-center w-full max-w-xs mx-auto">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.4)_0%,transparent_70%)] blur-2xl z-0" />
                  <img
                    src={moneyBag}
                    alt="Money Bag"
                    className="w-52 h-52 sm:w-60 sm:h-60 relative z-10 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
