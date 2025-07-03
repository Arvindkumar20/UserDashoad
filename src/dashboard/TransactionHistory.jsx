import { useState } from "react";
import { FaSearch, FaDownload } from "react-icons/fa";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";

const dummyData = [
  {
    id: 4567,
    name: "Jayvion Simon",
    email: "nannie.abernathy70@yahoo.com",
    amount: "$1000",
    method: "365-374-4961",
    created: "$1000",
    action: "Lueilwitz and Sons",
    status: "Active",
  },
  {
    id: 4567,
    name: "Lucien Obrien",
    email: "ashlynn.ohara62@gmail.com",
    amount: "$1900",
    method: "904-986-2836",
    created: "$1900",
    action: "Gleichner, Mueller and Tromp",
    status: "Pending",
  },
  {
    id: 4567,
    name: "Deja Brady",
    email: "milo.farrell@hotmail.com",
    amount: "$1200",
    method: "399-757-9909",
    created: "$1200",
    action: "Nikolaus – Leuschke",
    status: "Banned",
  },
  {
    id: 4567,
    name: "Harrison Stein",
    email: "violet.strake86@yahoo.com",
    amount: "$500",
    method: "692-767-2903",
    created: "$500",
    action: "Hegmann, Kreiger and Bayer",
    status: "Rejected",
  },
  {
    id: 4567,
    name: "Reece Chung",
    email: "letha.lubowitz24@yahoo.com",
    amount: "$1600",
    method: "990-588-5716",
    created: "$1600",
    action: "Grimes Inc",
    status: "Active",
  },
];

export default function TransactionHistory() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(dummyData);

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearch(val);
    setFiltered(
      dummyData.filter((item) =>
        item.name.toLowerCase().includes(val.toLowerCase())
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-[#0D0F1C] text-white">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="p-6 bg-black min-h-screen">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
            <h2 className="text-xl font-semibold">Transaction History</h2>
            <button className="bg-[#121117] hover:bg-[#ffffff1f] text-white font-medium px-4 py-2 rounded border border-[#ffffff22]">
              + Add Payment
            </button>
          </div>

          <div className="bg-[#121117] rounded-xl shadow-md p-6 border border-[#1c1c24]">
            <div className="flex gap-2 flex-wrap mb-4 text-sm">
              {["All", "Active", "Pending", "Banner", "Rejected"].map(
                (label, idx) => (
                  <button
                    key={idx}
                    className="bg-[#1E1D24] px-4 py-1 rounded text-gray-300 flex items-center gap-2"
                  >
                    {label}
                    <span className="bg-[#26242f] px-2 py-0.5 rounded-full text-xs">
                      {Math.floor(Math.random() * 20)}
                    </span>
                  </button>
                )
              )}
            </div>

            <div className="flex flex-col md:flex-row flex-wrap items-center gap-4 mb-3">
              <div className="relative w-full md:w-[600px]">
                <input
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search Plan Name"
                  className="bg-[#1e1d24] text-white pl-10 pr-4 py-3 rounded w-full border border-[#2c2a33]"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              </div>
              <div className="flex gap-4 w-full md:w-auto justify-end ml-auto">
                <button className="bg-[#1e1d24] px-5 py-3 rounded border border-[#2c2a33] text-white text-sm flex items-center gap-2 w-full md:w-auto">
                  <FaDownload className="text-base" />
                  Download Excel
                </button>
                <select className="bg-[#1e1d24] px-5 py-3 rounded border border-[#2c2a33] text-sm text-white w-full md:w-auto">
                  <option>Show 10</option>
                  <option>Show 20</option>
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-400 mb-3 flex items-center gap-2 flex-wrap">
              <span>Status:</span>
              <span className="bg-[#26242f] px-3 py-1 rounded-full">Keyword</span>
              <span>Role:</span>
              <span className="bg-[#26242f] px-3 py-1 rounded-full">Keyword</span>
              <span className="bg-[#26242f] px-3 py-1 rounded-full">Keyword</span>
              <span className="text-red-400 cursor-pointer ml-2">🗑 Clear</span>
            </div>

            <p className="text-gray-500 text-sm mb-4">
              {filtered.length} results found
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-[#1E1D24] text-gray-400">
                  <tr>
                    <th className="px-4 py-2"><input type="checkbox" /></th>
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Payment Method</th>
                    <th className="px-4 py-2">Date Created</th>
                    <th className="px-4 py-2">Action</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#26242f] hover:bg-[#1a1a20]"
                    >
                      <td className="px-4 py-3">
                        <input type="checkbox" />
                      </td>
                      <td className="px-4 py-3">#{row.id}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <img
                            src={`https://i.pravatar.cc/32?img=${i + 1}`}
                            alt="avatar"
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p>{row.name}</p>
                            <p className="text-xs text-gray-500">
                              {row.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">{row.amount}</td>
                      <td className="px-4 py-3">{row.method}</td>
                      <td className="px-4 py-3">{row.created}</td>
                      <td className="px-4 py-3">{row.action}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            row.status === "Active"
                              ? "bg-green-600 text-white"
                              : row.status === "Pending"
                              ? "bg-yellow-400 text-black"
                              : row.status === "Banned"
                              ? "bg-red-600 text-white"
                              : "bg-gray-600 text-white"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 relative group">
                        <span className="text-white text-lg cursor-pointer">
                          ✏️
                        </span>
                        <div className="absolute top-[-30px] right-0 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                          Quick edit
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
              <p>Rows per page: 5</p>
              <p>6–10 of 11</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
