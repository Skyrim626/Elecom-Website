import React, { useState } from "react";
import Page from "../../components/common/Page";

import scitcImage from "../../assets/images/organizations/scitc.svg";
import usoImage from "../../assets/images/organizations/uso.svg";
import { useLocation } from "react-router-dom";
import Card from "../../components/common/Card";
import { Button, Dialog, Select } from "@headlessui/react";
import Modal from "../../components/common/Modal";

import { UploadCloud, X } from "lucide-react";
import FormField from "../../components/common/FormField";

const AdminOrganizationsPage = () => {
  // Open Location
  const location = useLocation();

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Organizations Data
  const organizations = [
    {
      id: 1,
      name: "University Student Organizations",
      image: usoImage,
      path: `${location.pathname}/organizations/1`,
    },
    {
      id: 2,
      name: "STUDENT COUNCIL OF INFORMATION TECHNOLOGY AND COMPUTING",
      image: scitcImage,
      path: `${location.pathname}/organizations/2`,
    },
  ];

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

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {organizations.map((organization) => (
            <Card
              key={organization.id}
              organizationName={organization.name}
              organizationImage={organization.image}
              link={organization.path}
            />
          ))}
        </section>
      </div>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <Dialog.Panel className="w-full max-w-4xl rounded-sm bg-white shadow-lg max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="border-b px-4 py-3 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Create Organization
              </h2>
              <Button
                onClick={() => setIsModalOpen(false)}
                className="text-red-500 hover:text-red-600"
              >
                <X size={25} />
              </Button>
            </div>

            {/* Modal Body */}
            <div className="p-4 space-y-4">
              {/* Upload Organization Logo */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload Organization Logo
                </label>
                <div className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                  <UploadCloud size={24} className="text-gray-500" />
                  <span className="ml-2 text-gray-500">
                    Select a file or drag and drop here
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  JPG, JPEG, or PNG, file size no more than 10MB.
                </p>
              </div>

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
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="curricular">Curricular</option>
                  <option value="non-curricular">Non-curricular</option>
                </Select>
              </div>

              {/* Name */}
              <FormField
                htmlFor={"name"}
                label={"Name"}
                type={"text"}
                placeholder={"Enter organization name"}
                required={true}
              />

              {/* Email */}
              <FormField
                htmlFor={"email"}
                label={"Email"}
                type={"email"}
                placeholder={"Enter email address"}
                required={true}
              />

              {/* Password */}
              <FormField
                htmlFor={"password"}
                label={"Password"}
                type={"password"}
                placeholder={"Enter password"}
                required={true}
              />

              {/* Address */}
              <FormField
                htmlFor={"address"}
                label={"Address"}
                type={"text"}
                placeholder={"Enter address"}
              />

              {/* Contact */}
              <FormField
                htmlFor={"contact"}
                label={"Contact"}
                type={"text"}
                placeholder={"Enter contact number"}
              />

              {/* Create Organization Button */}
              <div>
                <Button
                  type="button"
                  className="w-full px-4 py-2 text-white text-sm bg-blue-500 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Create Organization
                </Button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Modal>
    </Page>
  );
};

export default AdminOrganizationsPage;
