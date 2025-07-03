import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  

  useEffect(() => {
    // Clear the token from localStorage
    localStorage.removeItem("token");

    // Optionally clear other user info (if stored)
    // localStorage.removeItem("user");

    // Redirect after logout
    const timeout = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl text-center">
        <h2 className="text-2xl font-bold mb-4">You’ve been logged out</h2>
        <p className="text-gray-300">Redirecting to login page...</p>
      </div>
    </div>
  );
};

export default Logout;
