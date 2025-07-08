import React from "react";
import heroImage from "../assets/dashboard/heroImage.png";
import DashHome from "./components/DashHome";

export default function WelcomeBanner() {
  return (
    <DashHome>
      <div className="w-full bg-black pt-4 pb-3 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full rounded-xl bg-[#1D1B25] text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6 p-4 sm:p-6 md:p-8">
          
          {/* Text Section */}
          <div className="w-full md:flex-1 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 leading-snug">
              WELCOME TO{" "}
              <span className="bg-[linear-gradient(180deg,#281000_5.95%,#C0971C_29.93%,#FFE976_52.51%,#C0971C_76.02%,#281000_100%)] bg-clip-text text-transparent font-bold">
                EXPERT EMIRATES
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 mb-4 w-full max-w-full md:max-w-2xl mx-auto md:mx-0 px-2 sm:px-0">
              The welcome mail has been sent to you. Please check the mail for
              your account credentials and start your trading journey.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm">
              {/* NEED HELP / Plan Active */}
              <span className="bg-[linear-gradient(180deg,#281000_5.95%,#C0971C_29.93%,#FFE976_52.51%,#C0971C_76.02%,#281000_100%)] bg-clip-text text-transparent font-semibold">
                • Plan Active
              </span>

              <span className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] to-[#452e06] text-black px-4 py-1 rounded-full shadow-md hover:brightness-110 transition-all duration-300">
                Expire: 28-Oct-2025
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[260px] 2xl:max-w-[280px] flex-shrink-0 flex justify-center">
            <img
              src={heroImage}
              alt="Welcome graphic illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </DashHome>
  );
}