import React from "react";
import heroImage from "../assets/dashboard/heroImage.png";
import DashHome from "./components/DashHome";

export default function WelcomeBanner() {
  return (
    <DashHome>
      {/* Minimum top & bottom padding */}
      <div className="w-full bg-black pt-2 pb-1 px-4">
        <div
          className="w-full max-w-7xl mx-auto bg-[#1D1B25] text-white rounded-xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
          role="region"
          aria-label="Welcome banner"
        >
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              WELCOME TO{" "}
              <span className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent font-bold">
                EXPERT EMIRATES
              </span>
            </h2>

            <p className="text-sm text-gray-300 mb-4 max-w-xl mx-auto md:mx-0 px-2 sm:px-0">
              The welcome mail has been sent to you. Please check the mail for
              your account credentials and start your trading journey.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm">
              <span className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
                • Plan Active
              </span>
              <span className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] to-[#452e06] text-black px-4 sm:px-6 py-1 text-sm sm:text-base rounded-full shadow-md hover:brightness-110 transition-all duration-300">
                Expire: 28-Oct-2025
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[260px] flex-shrink-0 mx-auto md:mx-0">
            <img
              src={heroImage}
              alt="Welcome graphic illustration for Expert Emirates dashboard"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </DashHome>
  );
}
