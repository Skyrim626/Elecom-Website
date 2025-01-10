import React, { useState, useEffect } from "react";
import {
  Button,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { TextField, IconButton, Paper } from "@mui/material";
import { Edit } from "lucide-react";
import { DataGrid } from "@mui/x-data-grid";
import axiosClient from "../../api/axiosClient";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const MembersTable = ({ role, organizationID }) => {
  // Open Location
  const location = useLocation();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [activeStatus, setActiveStatus] = useState("Approved");
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [members, setMembers] = useState([]);

  const {
    data: members,
    fetchData: fetchMembers,
    loading,
    error,
  } = useFetch({
    url: `/organizations/${organizationID}/members/status`,
    params: {
      searchTerm: searchTerm,
      status: activeStatus,
    },
    type: "array",
  });

  // Tabs array
  const tabs = ["Approved", "Pending", "Kicked"];

  // Fetch members from the backend
  useEffect(() => {
    // Fetch members when searchTerm is empty or changes
    if (searchTerm === "") {
      fetchMembers(); // Fetch all members if searchTerm is empty
    } else {
      fetchMembers(); // Fetch filtered members
    }
  }, [activeStatus, searchTerm, organizationID]);

  // Filter members based on search term and active status
  useEffect(() => {
    if (members) {
      // console.log(members);

      setFilteredMembers(
        members.filter(
          (member) =>
            member.status === activeStatus &&
            (member.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              member.course?.name
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase()))
        )
      );
    }
  }, [searchTerm, activeStatus, members]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "#f39c12"; // Yellow for Pending
      case "Approved":
        return "#2ecc71"; // Green for Approved
      case "Kicked":
        return "#e74c3c"; // Red for Kicked
      default:
        return "#95a5a6"; // Gray for unknown
    }
  };

  // Columns
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 220 },
    { field: "course", headerName: "Course", width: 220 },
    {
      field: "status",
      headerName: "Status",
      width: 180,
      renderCell: (params) => (
        <div
          style={{
            backgroundColor: getStatusColor(params.value),
            color: "white",
            padding: "4px 8px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          {params.value}
        </div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        // console.log(params.row);

        return (
          <div className="flex items-center justify-center">
            <Button
              onClick={() =>
                navigate(`${location.pathname}/members/${params.row.id}`)
              }
            >
              <IconButton
                color="primary"
                sx={{ marginRight: 2 }}
                aria-label="edit"
              >
                <Edit />
              </IconButton>
            </Button>
          </div>
        );
      },
    },
  ];

  // Handle the Enter key press to trigger search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(e.target.value); // Update the searchTerm when Enter is pressed
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <TextField
        label="Search by name or course"
        variant="outlined"
        fullWidth
        className="mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress} // Trigger search when Enter key is pressed
        InputProps={{
          style: {
            padding: "8px 12px",
            borderRadius: "8px",
            borderColor: "#ccc",
          },
        }}
      />

      {/* Tabs for Pending, Approved, and Kicked */}
      <TabGroup
        selectedIndex={selectedIndex}
        onChange={(index) => {
          setSelectedIndex(index);
          setActiveStatus(tabs[index]);
        }}
      >
        <TabList className="flex space-x-4 mb-4 mt-4">
          {tabs.map((status) => (
            <Tab
              key={status}
              className={({ selected }) =>
                `px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  selected
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-800"
                }`
              }
            >
              {status}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map((status) => (
            <TabPanel key={status}>
              {/* DataGrid of Members */}
              <Paper sx={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={filteredMembers.filter(
                    (member) => member.status === status
                  )}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                  loading={loading}
                />
              </Paper>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default MembersTable;
