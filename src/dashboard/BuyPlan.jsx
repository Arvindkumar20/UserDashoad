import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import moneyBag from "../assets/dashboardhome/moneyBag.png";

export default function BuyPlan() {
  const [paymentMethod, setPaymentMethod] = useState(null);

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="p-4">
          <div className="flex flex-col lg:flex-row gap-6 text-white min-h-screen">
            {/* Left: Buy New Plan */}
            <div className="flex-1 space-y-6 bg-[#121117] p-6 rounded-md">
              <h2 className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
                BUY NEW PLAN
              </h2>
              <p className="text-sm text-gray-400">
                Choose a plan that suits your trading needs.
              </p>

              <div className="bg-[#121117] border border-gray-800 p-6 rounded-md space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-700">Plan Type</label>
                  <select className="w-full bg-[#121117] border border-gray-700 text-gray-700 p-2 rounded py-2">
                    <option>Standard</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-700">Plan</label>
                  <select className="w-full bg-[#121117] border border-gray-700 text-gray-700 p-2 rounded">
                    <option>Funded $50,000</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm">
                    Choose Payment Method from the list below *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#121117] p-3 rounded-md">
                    {[
                      "ETH ERC20",
                      "USDT TRC20",
                      "Card Payment",
                      "Bank Transfer",
                      "BTC",
                    ].map((method) => (
                      <div
  key={method}
  className="bg-[#121117] border border-gray-700 rounded-md p-3 flex items-center space-x-2"
>
  {/* ✅ Styled Checkbox */}
  <input
    type="checkbox"
    value={method}
    className="appearance-none w-4 h-4 border border-gray-700 rounded  bg-[#26242f] checked:bg-yellow-400 checked:border-yellow-400 focus:ring-0"
  />
  <span className="text-gray-700">{method}</span>
</div>

                    ))}
                  </div>
                </div>

                <label
                  htmlFor="upload"
                  className="   p-4 rounded text-center cursor-pointer"
                >
                  <div className="text-yellow-400 text-2xl">📁</div>
                  <p className="text-yellow-400 text-sm">Click to upload</p>
                  <p className="text-gray-400 text-xs">
                    or drag and drop (max. 800x400px)
                  </p>
                  <input id="upload" type="file" className="hidden" />
                </label>

                <button className="w-full bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black px-6 py-3 text-sm sm:text-base rounded-full shadow-md hover:brightness-110 transition-all duration-300">
                  PROCEED TO PAYMENT
                </button>
              </div>
            </div>

            {/* Right: Current Plans */}
            <div className="w-full lg:w-1/2 space-y-4 bg-[#121117] p-6 rounded-md">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
                  CURRENT PLAN
                </h2>
                <button className="text-gray-400">Filter</button>
              </div>

              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#1D1B25] border border-gray-800 p-4 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div>
                    <p className="text-sm">Standard Plan</p>
                    <p className="text-3xl font-bold">
                      $199<span className="text-sm">/MONTHLY</span>
                    </p>
                    <p className="text-xs text-gray-400">
                      Purchase Date: 25-11-2024
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-green-500 text-center">
                      Plan Active
                    </p>
                    <p className="text-sm text-gray-10 my-1">
                      Purchase Date : 20/05/2003
                    </p>
                    <p className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black px-6 py-1 text-sm sm:text-base rounded-full shadow-md hover:brightness-110 transition-all duration-300">
                      Expires: 25-11-2025
                    </p>
                  </div>
                </div>
              ))}

              <div className="text-center mt-6 bg-black p-8 rounded-md relative">
                {/* 🔆 Yellow Radial Gradient Behind */}
                <div className="relative flex items-center justify-center w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.4)_0%,transparent_70%)] blur-2xl z-0" />
                  {/* 💰 Image On Top */}
                  <img
                    src={moneyBag}
                    alt="Money Bag"
                    className="left-5 w-60 h-60 mx-auto relative z-10 object-contain"
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
