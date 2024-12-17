import React, { useState } from "react";
import Page from "../../components/common/Page";
import { Button } from "@headlessui/react";
import { ChevronLeft, ChevronRight, Edit2 } from "lucide-react";
import { formatDateOnly } from "../../utilities/formatDate";
import { Link } from "react-router-dom";

const ElecomVotesPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page
  const [currentPage, setCurrentPage] = useState(1); // Default page
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [filter, setFilter] = useState("all"); // Dropdown filter

  const organizations = [
    { id: 1, name: "University Student Government:", date: "2024-12-01" },
    { id: 2, name: "SCITC Election:", date: "2024-12-05" },
    { id: 3, name: "SITE  Election:", date: "2024-12-10" },
    { id: 4, name: "SCEA Election:", date: "2024-12-15" },
    { id: 5, name: "SCOT Election:", date: "2024-12-20" },
  ];

  const totalOrganizations = organizations.length;
  const totalPages = Math.ceil(totalOrganizations / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const displayedOrganizations = organizations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Page>
      <h1 className="font-bold uppercase">Election</h1>

      <div>
        <hr className="my-3" />

        {/* Dropdown Filter, Search Input, and Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          {/* Dropdown Filter */}
          <div className="flex items-center gap-2">
            <label htmlFor="filter" className="text-sm">
              Filter:
            </label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 text-sm p-2 rounded-md"
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-2">
            <label htmlFor="search" className="text-sm">
              Search:
            </label>
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search organizations"
              className="border border-gray-300 text-sm p-2 rounded-md"
            />
          </div>

          {/* Dropdown for items per page */}
          <div className="flex items-center gap-2">
            <label htmlFor="itemsPerPage" className="text-sm">
              Show:
            </label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="border border-gray-300 text-sm p-2 rounded-md"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>

            <span className="text-sm">
              {totalOrganizations} organizations found
            </span>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center gap-4">
            <Button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`p-1 rounded-md ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-950 text-white hover:bg-black"
              }`}
            >
              <ChevronLeft size={20} />
            </Button>
            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`p-1 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-950 text-white hover:bg-black"
              }`}
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        {/* Organization Cards */}
        <div className="grid gap-4">
          {displayedOrganizations.map((org) => (
            <Link
              key={org.id}
              to={`/e/votes/${org.id}`}
              className="flex justify-between items-center border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md bg-blue-900 hover:bg-blue-950 cursor-pointer text-gray-100"
            >
              <div>
                <h2 className="font-semibold text-lg">{org.name}</h2>
                <p className="text-sm text-gray-300">
                  Date: {formatDateOnly(org.date)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default ElecomVotesPage;
