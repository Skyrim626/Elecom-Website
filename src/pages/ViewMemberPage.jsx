import React from "react";
import { useParams } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import { Edit } from "lucide-react";
import useFetch from "../hooks/useFetch";
import Loading from "../components/common/Loading";

const ViewMemberPage = ({ role }) => {
  // Open params
  const { id, memberID } = useParams();

  // Use Fetch
  const { data, loading, error } = useFetch({
    url: `/organizations/${id}/members/${memberID}`,
  });

  // Check Loading
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-2xl font-semibold text-gray-900">
          Member Information
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          View and manage member details.
        </p>
      </div>

      <div className="mt-6 bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h4 className="text-lg font-medium text-gray-900">
            Personal Details
          </h4>
        </div>
        <div className="border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            {/* Name */}
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">Full Name</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                {data.name}
              </dd>
            </div>

            {/* Address */}
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">Address</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                {data.address}
              </dd>
            </div>

            {/* Course */}
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">Course</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                {data.course}
              </dd>
            </div>

            {/* Phone Number */}
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">
                Phone Number
              </dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                {data.phone_number}
              </dd>
            </div>

            {/* Facebook Profile Link */}
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">
                Facebook Profile
              </dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                <a
                  href="https://facebook.com/johndoe"
                  className="text-indigo-600 hover:text-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.facebook_link_url}
                </a>
              </dd>
            </div>

            {/* Actions */}
            {role === "admin" && (
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">Actions</dt>
                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                  <IconButton
                    color="primary"
                    sx={{ marginRight: 2 }}
                    aria-label="edit"
                    href={`/edit-member/${id}`}
                  >
                    <Edit />
                  </IconButton>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ViewMemberPage;
