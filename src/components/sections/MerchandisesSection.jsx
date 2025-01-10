import React, { useCallback, useState } from "react";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import useSubmit from "../../hooks/useSubmit";
import { TextField } from "@mui/material";
import { debounce } from "lodash";
import {
  Button,
  Input,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { Plus } from "lucide-react";
import PrimaryModal from "../modals/PrimaryModal";
import CategoryField from "../fields/CategoryField";
import { SketchPicker } from "react-color";
import MerchandisesTable from "../tables/MerchandisesTable";

// Tabs
const tabs = [
  {
    name: "Inventories",
    url: "/inventories",
  },
  {
    name: "Orders",
    url: "/orders",
  },
];

const MerchandisesSection = ({ role, organizationID }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name); // Initially set to the first tab's name
  const [selectedIndex, setSelectedIndex] = useState(0); // Initially select the first tab
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Color State
  const [color, setColor] = useState("#000000"); // Default color
  // Form state
  const { formData, setFormData, handleInputChange, handleFilesChange } =
    useForm({
      images: [],
      organization_id: organizationID,
      category_id: "",
      name: "",
      description: "",
      size: "",
      color: "",
      quantity: "",
    });

  // Use fetch
  const {
    data: products,
    setData: setProducts,
    loading,
    error,
  } = useFetch({
    url: `/organizations/${organizationID}/inventories`,
    type: "array",
  });

  // Use Submit
  const {
    loading: submitLoading,
    error: submitError,
    successModalOpen,
    setSuccessModalOpen,
    handleSubmit,
  } = useSubmit({
    url: `/merchandises`, // API endpoint to create organization
    formData,
    setData: setProducts,
  });

  // Handle the Enter key press to trigger search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(e.target.value); // Update the searchTerm when Enter is pressed
    }
  };

  const handleColorChange = useCallback(
    debounce((color) => {
      setColor(color.hex);
      handleInputChange({
        target: { name: "color", value: color.hex },
      });
    }, 300),
    []
  );

  return (
    <div>
      {/* Search Bar */}
      {/* <TextField
        label="Search by merchandise"
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
      /> */}

      {/* Tabs for Inventories, and Orders */}
      <TabGroup
        selectedIndex={selectedIndex}
        onChange={(index) => {
          setSelectedIndex(index);
          setActiveTab(tabs[index].name); // Set the active tab to the name
        }}
      >
        <div className="flex items-center justify-between">
          <TabList className="flex space-x-4 mb-4 mt-4">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  `px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    selected
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-800"
                  }`
                }
              >
                {tab.name}
              </Tab>
            ))}
          </TabList>

          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm px-2 py-2 flex items-center gap-1 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white"
          >
            <Plus size={18} />
            Add new product
          </Button>
        </div>

        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel key={index}>
              {/* Table */}
              <MerchandisesTable rows={products} loading={loading} />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>

      {/* Modals */}
      <PrimaryModal
        header="Create Merchandise"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {/* Category ID */}
        <CategoryField
          label="Category"
          name={"category_id"}
          value={formData.category_id}
          onChange={handleInputChange}
        />

        {/* Name */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleInputChange}
          name="name"
        />
        {/* Description */}
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={formData.description}
          onChange={handleInputChange}
          name="description"
        />
        {/* Size */}
        <TextField
          label="Size"
          variant="outlined"
          fullWidth
          value={formData.size}
          onChange={handleInputChange}
          name="size"
        />

        {/* Color Picker */}
        <TextField
          label="Color"
          variant="outlined"
          fullWidth
          value={formData.color || color} // Display selected color
          onChange={handleInputChange}
          name="color"
        />
        <div className="mt-2">
          <SketchPicker
            color={color} // Set the current color
            onChangeComplete={handleColorChange} // Handle color selection
          />
        </div>
        {/* Quantity */}
        <TextField
          label="Quantity"
          variant="outlined"
          fullWidth
          type="number"
          value={formData.quantity}
          onChange={handleInputChange}
          name="quantity"
        />

        {/* Price */}
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          type="number"
          value={formData.price || ""}
          onChange={handleInputChange}
          name="price"
        />

        {/* Image Upload */}
        <Input
          type="file"
          accept="image/*"
          name="images"
          onChange={handleFilesChange}
          multiple // Allow multiple files
        />

        {formData.images &&
          formData.images.length > 0 &&
          formData.images.map((image) => {
            return (
              <li key={image.id}>
                <div className="flex items-center justify-between">
                  {/* Display the image name */}
                  <span>{image.file.name}</span>
                  <div>
                    <Input
                      type="radio"
                      name="mainImage"
                      value={image.id}
                      checked={image.isMain}
                      onChange={(e) => {
                        // Update the isMain field when a radio button is selected
                        setFormData((prev) => {
                          const updatedImages = prev.images.map((img) =>
                            img.id === image.id
                              ? { ...img, isMain: true }
                              : { ...img, isMain: false }
                          );
                          return { ...prev, images: updatedImages };
                        });
                      }}
                      required // Make it a required selection
                    />
                    <label>Select as Main Image</label>
                  </div>
                </div>
              </li>
            );
          })}

        {/* Submit Button */}
        <Button
          className="bg-indigo-500 hover:bg-indigo-600 text-white w-full py-2 text-sm"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </PrimaryModal>
    </div>
  );
};

export default MerchandisesSection;
