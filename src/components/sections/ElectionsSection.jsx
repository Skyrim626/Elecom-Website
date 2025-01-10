import React, { useState } from "react";
import Page from "../common/Page";
import { Button } from "@headlessui/react";
import { ChevronLeft, ChevronRight, Edit2 } from "lucide-react";
import { formatDateOnly } from "../../utilities/formatDate";
import ElectionLists from "../lists/ElectionLists";

const ElectionsSection = ({ role }) => {
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
    <div>
      <div className="flex justify-end mb-4">
        <Button className="text-sm duration-150 bg-blue-950 hover:bg-black text-white px-4 py-2 rounded-md">
          Create Election
        </Button>
      </div>

      <hr className="my-3" />

      {/* Elections Lists */}
      <ElectionLists elections={displayedOrganizations} />
    </div>
  );
};

export default ElectionsSection;
