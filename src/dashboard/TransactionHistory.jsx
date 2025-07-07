import { useState } from "react";
import { FaSearch, FaDownload, FaEllipsisV } from "react-icons/fa";
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
    id: 4568,
    name: "Lucien Obrien",
    email: "ashlynn.ohara62@gmail.com",
    amount: "$1900",
    method: "904-986-2836",
    created: "$1900",
    action: "Gleichner, Mueller and Tromp",
    status: "Pending",
  },
  {
    id: 4569,
    name: "Deja Brady",
    email: "milo.farrell@hotmail.com",
    amount: "$1200",
    method: "399-757-9909",
    created: "$1200",
    action: "Nikolaus – Leuschke",
    status: "Banned",
  },
  {
    id: 4570,
    name: "Harrison Stein",
    email: "violet.strake86@yahoo.com",
    amount: "$500",
    method: "692-767-2903",
    created: "$500",
    action: "Hegmann, Kreiger and Bayer",
    status: "Rejected",
  },
  {
    id: 4571,
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
  const [activeFilter, setActiveFilter] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const filtered = dummyData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === "All" || item.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const statusFilters = ["All", "Active", "Pending", "Banned", "Rejected"];

  return (
    <div className="flex min-h-screen bg-[#0D0F1C] text-white overflow-hidden">
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          onClick={() => setSidebarOpen(false)}
        />
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
        <div className={`flex flex-col ${isCollapsed ? "w-20" : "w-50"}`}>
          <Sidebar
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            mobileOpen={sidebarOpen}
            setMobileOpen={setSidebarOpen}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 bg-black">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Transaction History
              </h2>
              <button className="bg-[#121117] hover:bg-[#ffffff1f] text-white text-sm font-medium px-4 py-2 rounded border border-[#ffffff22] w-full sm:w-auto">
                + Add Payment
              </button>
            </div>

            {/* Filters */}
            <div className="bg-[#121117] rounded-xl shadow-md p-4 sm:p-6 border border-[#1c1c24]">
              <div className="flex flex-wrap gap-2 mb-4 text-xs sm:text-sm">
                {statusFilters.map((label) => (
                  <button
                    key={label}
                    onClick={() => setActiveFilter(label)}
                    className={`px-4 py-1 rounded ${
                      activeFilter === label
                        ? "bg-[#d1bf5a] text-black"
                        : "bg-[#1E1D24] text-gray-300"
                    }`}
                  >
                    {label}
                    <span className="ml-1 bg-[#26242f] px-2 py-0.5 rounded-full text-xs">
                      {dummyData.filter((item) => label === "All" || item.status === label).length}
                    </span>
                  </button>
                ))}
              </div>

              {/* Search & Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
                <div className="relative w-full sm:max-w-sm">
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by Name"
                    className="bg-[#1e1d24] text-white text-sm pl-9 pr-4 py-2 rounded w-full border border-[#2c2a33]"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                </div>
                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                  <button className="bg-[#1e1d24] px-4 py-2 rounded border border-[#2c2a33] text-white text-xs sm:text-sm flex items-center gap-2 w-full sm:w-auto">
                    <FaDownload />
                    <span className="hidden sm:inline">Download Excel</span>
                  </button>
                  <select className="bg-[#1e1d24] px-4 py-2 rounded border border-[#2c2a33] text-xs sm:text-sm text-white w-full sm:w-auto">
                    <option>Show 10</option>
                    <option>Show 20</option>
                  </select>
                </div>
              </div>

              <p className="text-gray-500 text-xs mb-4">{filtered.length} results found</p>

              {/* Table */}
              <div className="overflow-x-auto hide-scrollbar">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-[#1E1D24] text-gray-400">
                    <tr>
                      <th className="px-4 py-2"><input type="checkbox" /></th>
                      <th className="px-4 py-2">#</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2 hidden sm:table-cell">Amount</th>
                      <th className="px-4 py-2 hidden md:table-cell">Method</th>
                      <th className="px-4 py-2 hidden lg:table-cell">Date</th>
                      <th className="px-4 py-2 hidden xl:table-cell">Action</th>
                      <th className="px-4 py-2">Status</th>
                      <th className="px-4 py-2">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((row, i) => (
                      <tr key={row.id} className="border-b border-[#26242f] hover:bg-[#1a1a20]">
                        <td className="px-4 py-2"><input type="checkbox" /></td>
                        <td className="px-4 py-2">#{row.id}</td>
                        <td className="px-4 py-2">
                          <div className="flex items-center gap-2">
                            <img
                              src={`https://i.pravatar.cc/32?img=${i + 1}`}
                              alt="avatar"
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                            />
                            <div>
                              <p className="line-clamp-1">{row.name}</p>
                              <p className="text-xs text-gray-500 hidden sm:block">{row.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2 hidden sm:table-cell">{row.amount}</td>
                        <td className="px-4 py-2 hidden md:table-cell">{row.method}</td>
                        <td className="px-4 py-2 hidden lg:table-cell">{row.created}</td>
                        <td className="px-4 py-2 hidden xl:table-cell">{row.action}</td>
                        <td className="px-4 py-2">
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
                        <td className="px-4 py-2 relative group">
                          <button className="text-white"><FaEllipsisV /></button>
                          <div className="absolute right-0 top-full mt-1 z-10 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition shadow-lg">
                            Quick edit
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-xs text-gray-500">
                <p>Rows per page: 5</p>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 border border-[#2c2a33] rounded">Previous</button>
                  <span className="px-3 py-1 bg-[#1e1d24] rounded">1</span>
                  <button className="px-3 py-1 border border-[#2c2a33] rounded">Next</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
