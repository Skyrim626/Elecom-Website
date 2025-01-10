import { useState } from "react";
import axiosClient from "../api/axiosClient";

/**
 * Custom hook for handling form submission.
 * @param {Object} config - The configuration object for form submission.
 * @param {string} config.url - The URL to send the form data to.
 * @param {Object} config.formData - The form data to be sent.
 * @param {Object} [config.headers] - The headers for the request (default is multipart/form-data).
 * @returns {Object} - Contains the loading state, error message, and success response.
 */
const useSubmit = ({ url, formData, setData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const handleSubmit = async ({
    url: submitUrl,
    method = "post",
    setIsModalOpen,
    // headers = { "Content-Type": "multipart/form-data" },
    bodyType = "formData",
  }) => {
    // Header Selection
    let headers = null;

    // Fallback to the hook's url if submitUrl is not provided
    const requestUrl = submitUrl || url;

    if (!requestUrl) {
      console.error("No URL provided for form submission.");
      setError("No URL provided. Please check your configuration.");
      return;
    }

    // Initialize Payload
    let payload = null;

    /**
     * Header Selections
     * - Default: formData
     */
    if (bodyType === "formData") {
      headers = { "Content-Type": "multipart/form-data" };

      payload = new FormData();

      for (const key in formData) {
        // console.log("Key: ", key, "FormData: ", formData[key]);
        // payload.append(key, formData[key]);

        // If the value is a file or an array of files, append them separately
        if (Array.isArray(formData[key])) {
          formData[key].forEach((fileOrItem, index) => {
            // Check if the item is a file and append it accordingly
            if (fileOrItem.file) {
              payload.append(`${key}[${index}][file]`, fileOrItem.file);
            }
            // Append the rest of the object values (like id, isMain)
            if (fileOrItem.id) {
              payload.append(`${key}[${index}][id]`, fileOrItem.id);
            }
            if (fileOrItem.isMain !== undefined) {
              payload.append(`${key}[${index}][isMain]`, fileOrItem.isMain);
            }
          });

          // console.log("Key: ", key, "FormData: ", formData[key]);
        } else {
          // If it's a regular field, append it directly
          payload.append(key, formData[key]);
        }
      }
    }

    // Else, JSON
    else {
      headers = { Accept: "application/json" };

      // Add json value
      payload = formData;
    }

    try {
      setLoading(true);

      // console.log(payload);

      // Initialize variable
      let res = null;

      // POST
      switch (method) {
        case "put":
          res = await axiosClient.put(requestUrl, payload, { headers });
          break;

        // Default POST
        default:
          res = await axiosClient.post(requestUrl, payload, { headers });
      }

      if (res.status === 201) {
        setData((prev) => [...prev, res.data.data]); // Update the data list with the new organization
      }

      if (setIsModalOpen) {
        setIsModalOpen(false); // Close the modal on success
      }

      setSuccessModalOpen(true);
    } catch (err) {
      setError("Failed to create organization. Please try again.");

      console.error("Error creating organization:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    successModalOpen,
    handleSubmit,
    setSuccessModalOpen,
  };
};

export default useSubmit;
