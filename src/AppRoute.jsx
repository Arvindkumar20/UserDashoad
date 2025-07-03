import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import BuyPlan from "./dashboard/BuyPlan";
import UserSettings from "./dashboard/UserSettings";
import TransactionHistory from "./dashboard/TransactionHistory";
import ScrollToTop from "./utils/ScrollToTop";


// import StatusByProcessChart from "./admindashboad/StatusByProcessChart";

// Lazy-loaded components
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

export default function AppRoutes() {
  const location = useLocation();

  const authRoutes = [
    "/login",
    "/sign-up",
    "/forgot-password",
    "/otp-verification",
    "/reset-password",
  ];

  const hideNavbarFooter =
    location.pathname.startsWith("/") ||
    authRoutes.includes(location.pathname);




  return (
    <>
      {/* {!hideNavbarFooter && <Navbar />} */}
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="text-center text-white py-10">Loading...</div>
        }
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/buy-plan" element={<BuyPlan />} />
          <Route path="/dashboard/setting" element={<UserSettings />} />
          <Route
            path="/dashboard/transaction-history"
            element={<TransactionHistory />}
          />

          {/* <Route path="/admin" element={<StatusByProcessChart/>}/> */}
        </Routes>
      </Suspense>
      {/* {!hideNavbarFooter && <Footer />} */}
    </>
  );
}
