import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Pagination } from "@mui/material";
import OrganizationLists from "../lists/OrganizationLists";
import Loading from "./Loading";

const PaginatedList = ({
  data,
  setData,
  url,
  pageSizeOptions = [5, 10, 15],
  paginationType,
  requestedBy,
}) => {
  const [totalCount, setTotalCount] = useState(0); // Total count of records
  const [loading, setLoading] = useState(true); // Loading state
  const [paginationModel, setPaginationModel] = useState({
    page: 0, // Current page
    pageSize: 5, // Items per page
  });

  useEffect(() => {
    // Fetch data whenever page, pageSize, or searchTerm changes
    const fetchData = async () => {
      setLoading(true);
      const response = await axiosClient.get(url, {
        params: {
          page: paginationModel.page + 1, // Convert zero-based index to one-based
          perPage: paginationModel.pageSize, // Items per page
          requestedBy: requestedBy, // Additional parameter
        },
      });

      // Assuming the response structure contains 'data' and 'meta'
      if (response && response.data) {
        setData(response.data.data);
        setTotalCount(response.data.meta.total); // Update the total count for pagination
      }
      setLoading(false);
    };

    fetchData();
  }, [paginationModel, url]);

  // Handle pagination model change
  const handlePaginationModelChange = (newPaginationModel) => {
    setPaginationModel(newPaginationModel); // Update pagination model (page and pageSize)
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        {/* Pagination */}
        <div className="flex items-center space-x-3">
          <p className="font-semibold text-[18px]">Page</p>
          <Pagination
            count={Math.ceil(totalCount / paginationModel.pageSize)} // Calculate number of pages
            page={paginationModel.page + 1} // Pagination uses 1-based index
            onChange={(event, page) =>
              handlePaginationModelChange({
                ...paginationModel,
                page: page - 1,
              })
            } // Handle page change
            shape="rounded"
            variant="outlined"
          />
        </div>
        <div className="flex items-center space-x-3">
          <label className="font-semibold text-[18px]">Items per page:</label>
          <select
            value={paginationModel.pageSize}
            onChange={(e) =>
              handlePaginationModelChange({
                ...paginationModel,
                page: 0, // Reset to the first page
                pageSize: parseInt(e.target.value, 10),
              })
            }
            className="border rounded px-2 py-1 text-[18px]"
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      {paginationType === "organizations" && (
        <OrganizationLists organizations={data} />
      )}
    </div>
  );
};

export default PaginatedList;
