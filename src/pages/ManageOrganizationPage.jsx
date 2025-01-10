import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react"; // Importing Tab from Headless UI
import useFetch from "../hooks/useFetch";
import Loading from "../components/common/Loading";
import Page from "../components/common/Page";
import MembersTable from "../components/tables/MembersTable";
import { IconButton, Modal } from "@mui/material";
import { Edit, Upload } from "lucide-react";
import PrimaryModal from "../components/modals/PrimaryModal";
import LogoField from "../components/fields/LogoField";
import useForm from "../hooks/useForm";
import SuccessModal from "../components/modals/SuccessModal";
import useSubmit from "../hooks/useSubmit";
import MerchandisesSection from "../components/sections/MerchandisesSection";
import FormField from "../components/common/FormField";
import { method } from "lodash";
import ElectionsSection from "../components/sections/ElectionsSection";

const ManageOrganizationPage = ({ role }) => {
  // Open Params
  const { id } = useParams();

  // Use Form
  const { formData, setFormValues, handleInputChange, handleFileChange } =
    useForm({
      logo: null, // To handle file upload
      name: "",
    });

  // Use Fetch
  const { data, loading, error } = useFetch({
    url: `/organizations/${id}`,
  });

  // Use Submit
  const {
    loading: submitLoading,
    error: submitError,
    successModalOpen,
    setSuccessModalOpen,
    handleSubmit,
  } = useSubmit({
    url: `/organizations/${id}/upload-logo`, // API endpoint to create organization
    formData,
  });

  // Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);

  // Check Loading
  if (loading || submitLoading) {
    return <Loading />;
  }

  // Handle the active tab
  const tabs = ["Member", "Shop", "Election"];

  // Open Edit Modal
  const openEditModal = () => {
    setFormValues({
      name: data.name,
    });

    // Set Modal State
    setIsEditModalOpen(!isEditModalOpen);
  };

  return (
    <Page>
      <div className="mb-4">
        {/* Title */}
        <h1 className="text-3xl font-bold">{data?.name}</h1>
      </div>

      <div className="w-full py-6 px-4 sm:px-0">
        {/* Tabs for Member, Shop, and Election */}
        <TabGroup>
          <TabList className="flex justify-between items-center">
            <div className="space-x-4">
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    `px-4 py-2 text-sm font-semibold rounded-md ${
                      selected
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`
                  }
                >
                  {tab}
                </Tab>
              ))}
            </div>

            <div>
              {/* Edit Button */}
              <IconButton
                onClick={openEditModal}
                color="primary"
                sx={{
                  marginLeft: "auto",
                  borderRadius: "8px",
                }}
              >
                <Edit />
              </IconButton>

              {/* Change Logo Button */}
              <IconButton
                color="secondary"
                sx={{
                  marginLeft: "8px",
                  borderRadius: "8px",
                }}
                onClick={() => setIsLogoModalOpen(!isLogoModalOpen)}
              >
                <Upload />
              </IconButton>
            </div>
          </TabList>

          <TabPanels className="mt-4">
            <TabPanel>
              {/* Member Tab Content */}
              <MembersTable role={role} organizationID={id} />
            </TabPanel>
            <TabPanel>
              {/* Merchandise Tab Content */}
              <MerchandisesSection role={role} organizationID={id} />
            </TabPanel>
            <TabPanel>
              {/* Election Tab Content */}
              <ElectionsSection role={role} />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>

      {/* Modals */}
      {successModalOpen && (
        <SuccessModal
          open={successModalOpen}
          setOpen={setSuccessModalOpen}
          title="Organization Details Changed"
          description="An Organization details are changed."
        />
      )}

      <PrimaryModal
        header="Upload Organization Logo"
        isOpen={isLogoModalOpen}
        setIsOpen={setIsLogoModalOpen}
      >
        {/* Upload Organization Logo */}
        <LogoField
          title="Upload Organization Logo"
          type="file"
          name="logo"
          onChange={handleFileChange}
          accept="image/png, image/jpeg"
        />

        <div>
          <Button
            type="button"
            onClick={() =>
              handleSubmit({
                setIsModalOpen: setIsLogoModalOpen,
              })
            }
            className="w-full px-4 py-2 text-white text-sm bg-blue-500 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Upload Logo
          </Button>
        </div>
      </PrimaryModal>

      <PrimaryModal
        header="Edit Organization"
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
      >
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

        <div>
          <Button
            type="button"
            onClick={() =>
              handleSubmit({
                url: `/organizations/${id}/update-name`,
                method: "put",
                setIsModalOpen: setIsEditModalOpen,
                bodyType: "json",
              })
            }
            className="w-full px-4 py-2 text-white text-sm bg-blue-500 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Confirm
          </Button>
        </div>
      </PrimaryModal>
    </Page>
  );
};

export default ManageOrganizationPage;
