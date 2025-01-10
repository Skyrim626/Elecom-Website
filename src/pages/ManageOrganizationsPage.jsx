import React, { useState } from "react";
import Page from "../components/common/Page";

import scitcImage from "../assets/images/organizations/scitc.svg";
import usoImage from "../assets/images/organizations/uso.svg";
import { useLocation } from "react-router-dom";
import Card from "..//components/common/Card";
import { Button, Dialog, DialogPanel, Select } from "@headlessui/react";
import Modal from "../components/common/Modal";

import { UploadCloud, X } from "lucide-react";
import FormField from "../components/common/FormField";
import PaginatedList from "../components/common/PaginatedList";
import SuccessModal from "../components/modals/SuccessModal";
import useSubmit from "../hooks/useSubmit";
import useForm from "../hooks/useForm";
import LogoField from "../components/fields/LogoField";
import PrimaryModal from "../components/modals/PrimaryModal";

const ManageOrganizationsPage = ({ role }) => {
  // Open Location
  const location = useLocation();

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Container State
  const [data, setData] = useState([]);

  // Form state
  const { formData, handleInputChange, handleFileChange } = useForm({
    logo: null, // To handle file upload
    curricular_id: "19eb8184-ebed-42c8-90c9-016ac27e8aca",
    name: "",
    address: "",
    phone_number: "",
    email: "",
  });

  const {
    loading,
    error,
    successModalOpen,
    setSuccessModalOpen,
    handleSubmit,
  } = useSubmit({
    url: "/organizations", // API endpoint to create organization
    formData,
    setData,
  });

  return (
    <Page>
      <h1 className="font-bold uppercase">Organizations</h1>

      <div>
        <div className="flex justify-end mb-4">
          <Button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="text-sm duration-150 bg-blue-950 hover:bg-black text-white px-4 py-2 rounded-md"
          >
            Create Organization
          </Button>
        </div>

        <hr className="my-3" />

        <PaginatedList
          data={data}
          setData={setData}
          url={"/organizations"}
          requestedBy={role}
          paginationType={"organizations"}
        />
      </div>

      {/* Modals */}
      {successModalOpen && (
        <SuccessModal
          open={successModalOpen}
          setOpen={setSuccessModalOpen}
          title="Organization Created"
          description="A new organization is created"
        />
      )}

      <PrimaryModal
        header="Create Organization"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      >
        {/* Upload Organization Logo */}
        <LogoField
          title="Upload Organization Logo"
          type="file"
          name="logo"
          onChange={handleFileChange}
          accept="image/png, image/jpeg"
        />

        {/* Category Dropdown */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <Select
            id="category"
            name="category"
            value={formData.category}
            onChange={(e) => handleInputChange(e)}
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="19eb8184-ebed-42c8-90c9-016ac27e8aca">
              Curricular
            </option>
            <option value="899c1205-6ae7-4096-bd01-273059e91ed4">
              Non-curricular
            </option>
          </Select>
        </div>

        {/* Name */}
        <FormField
          htmlFor={"name"}
          label={"Name"}
          type={"text"}
          placeholder={"Enter organization name"}
          required={true}
          value={formData.name}
          onChange={handleInputChange}
          name={"name"}
        />

        {/* Email */}
        <FormField
          htmlFor={"email"}
          label={"Email"}
          type={"email"}
          placeholder={"Enter email address"}
          required={true}
          value={formData.email}
          onChange={handleInputChange}
          name={"email"}
        />

        {/* Address */}
        <FormField
          htmlFor={"address"}
          label={"Address"}
          type={"text"}
          placeholder={"Enter address"}
          value={formData.address}
          onChange={handleInputChange}
          name={"address"}
        />

        {/* Contact */}
        <FormField
          htmlFor={"contact"}
          label={"Contact"}
          type={"text"}
          placeholder={"Enter contact number"}
          value={formData.phone_number}
          onChange={handleInputChange}
          name={"phone_number"}
        />

        {/* Create Organization Button */}
        <div>
          <Button
            type="button"
            onClick={() => handleSubmit({ setIsModalOpen })}
            className="w-full px-4 py-2 text-white text-sm bg-blue-500 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Organization
          </Button>
        </div>
      </PrimaryModal>
    </Page>
  );
};

export default ManageOrganizationsPage;
