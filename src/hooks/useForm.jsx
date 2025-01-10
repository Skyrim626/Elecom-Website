import { useState } from "react";

/**
 * Custom hook to handle form state and input changes.
 * @param {Object} initialState - The initial state of the form.
 * @returns {Object} - Contains the form data, input change handlers, and file input handler.
 */
const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  // Handle form input changes (text, number, etc.)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to set the form values manually
  const setFormValues = (newValues) => {
    setFormData(newValues);
  };

  // Handle file input changes dynamically
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    // Assuming a single file is uploaded for each file input
    if (files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0], // Dynamically update the specific file input field
      }));
    }
  };

  // Handle file input changes dynamically (multiple files)
  const handleFilesChange = (e) => {
    const { name, files } = e.target;
    // Convert files to an array and add them to the formData
    if (files.length > 0) {
      const fileArray = Array.from(files).map((file) => ({
        id: Date.now(), // Unique ID based on the current timestamp
        file,
        isMain: false, // Default to false, can be changed later
      }));
      setFormData((prev) => ({
        ...prev,
        [name]: [...prev[name], ...fileArray], // Append new files to the existing array
      }));
    }
  };

  return {
    formData,
    setFormData, // Return setFormData so it can be used outside the hook
    setFormValues,
    handleInputChange,
    handleFileChange,
    handleFilesChange,
  };
};

export default useForm;
