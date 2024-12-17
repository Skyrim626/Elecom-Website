import React, { useState } from "react";
import Page from "../../components/common/Page";
import { Button, Dialog, Input, Select } from "@headlessui/react";
import { ChevronLeft, ChevronRight, Trash2, X } from "lucide-react";
import Modal from "../../components/common/Modal";

const ElecomCandidatePage = () => {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page
  const [currentPage, setCurrentPage] = useState(1); // Default page
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [filter, setFilter] = useState("all"); // Dropdown filter
  const [selectedCandidates, setSelectedCandidates] = useState([]); // Selected rows

  const candidates = [
    {
      id: 1,
      idNumber: "2022012345",
      name: "John Doe",
      year: "4th Year",
      course: "BSIT",
      position: "President",
      organization: "SCITC",
    },
    {
      id: 2,
      idNumber: "2022012346",
      name: "Jane Smith",
      year: "3rd Year",
      course: "BSCS",
      position: "Vice President",
      organization: "USG",
    },
    {
      id: 3,
      idNumber: "2022012347",
      name: "Alice Johnson",
      year: "2nd Year",
      course: "BSIS",
      position: "Secretary",
      organization: "SITE",
    },
    {
      id: 4,
      idNumber: "2022012348",
      name: "Bob Brown",
      year: "1st Year",
      course: "BSIT",
      position: "Treasurer",
      organization: "SCEA",
    },
    {
      id: 5,
      idNumber: "2022012349",
      name: "Charlie White",
      year: "4th Year",
      course: "BSIT",
      position: "Auditor",
      organization: "SCOT",
    },
  ];

  const totalCandidates = candidates.length;
  const totalPages = Math.ceil(totalCandidates / itemsPerPage);

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

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedCandidates(candidates.map((candidate) => candidate.id));
    } else {
      setSelectedCandidates([]);
    }
  };

  const handleSelect = (id) => {
    setSelectedCandidates((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const displayedCandidates = candidates
    .filter((candidate) =>
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Page>
      <h1 className="font-bold uppercase">Candidates</h1>

      <div>
        <div className="flex items-center justify-end space-x-1 mb-4">
          <Button
            onClick={() => setIsModalOpen(!isModalOpen)}
            disabled={selectedCandidates.length === 0}
            className={`p-2 rounded-md  ${
              selectedCandidates.length > 0
                ? "text-red-500 hover:text-red-600"
                : "cursor-not-allowed text-gray-500"
            }`}
          >
            <Trash2 />
          </Button>
          <Button className="text-sm duration-150 bg-blue-950 hover:bg-black text-white px-4 py-2 rounded-md">
            Add Candidate
          </Button>
        </div>

        <hr className="my-3" />

        {/* Dropdown Filter, Search Input, and Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          {/* Search Input */}
          <div className="flex items-center gap-2">
            <label htmlFor="search" className="text-sm">
              Search:
            </label>
            <Input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search candidates"
              className="border border-gray-300 text-sm p-2 rounded-md"
            />
          </div>

          {/* Dropdown for items per page */}
          <div className="flex items-center gap-2">
            <label htmlFor="itemsPerPage" className="text-sm">
              Show:
            </label>
            <Select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="border border-gray-300 text-sm p-2 rounded-md"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </Select>

            <span className="text-sm">{totalCandidates} candidates found</span>
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

        {/* Table for candidates */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">
                  <Input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={
                      selectedCandidates.length === candidates.length &&
                      candidates.length > 0
                    }
                  />
                </th>
                <th className="border border-gray-300 px-4 py-2">ID Number</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Year and Course
                </th>
                <th className="border border-gray-300 px-4 py-2">Position</th>
                <th className="border border-gray-300 px-4 py-2">
                  Organization
                </th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedCandidates.map((candidate) => (
                <tr key={candidate.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <Input
                      type="checkbox"
                      checked={selectedCandidates.includes(candidate.id)}
                      onChange={() => handleSelect(candidate.id)}
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {candidate.idNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {candidate.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {candidate.year} - {candidate.course}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {candidate.position}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {candidate.organization}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <Button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-600">
                      Approve
                    </Button>
                    <Button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                      Decline
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-4">
              <Dialog.Title className="text-lg font-medium text-gray-900">
                Confirm Deletion
              </Dialog.Title>
              <Button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Body */}
            <div className="px-6 py-4">
              <p className="text-gray-700">
                {selectedCandidates.length > 1
                  ? "Are you sure you want to delete these candidates? This action cannot be undone."
                  : "Are you sure you want to delete this candidate? This action cannot be undone."}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end space-x-4 border-t px-6 py-4">
              <Button
                onClick={() => setIsModalOpen(false)}
                className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setIsModalOpen(false);
                  console.log("Candidate deleted");
                }}
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Delete
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </Modal>
    </Page>
  );
};

export default ElecomCandidatePage;
