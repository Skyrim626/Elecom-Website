import { useState, useEffect } from "react";
import axiosClient from "../api/axiosClient";
import { useNavigate } from "react-router-dom";

const useFetch = ({ url, params = {}, type = "object" }) => {
  // State to store data, loading, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API when the URL changes
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.get(url, { params });

      // Check if type is array
      if (type === "array") {
        setData(response.data.data);
      }

      // Else for object
      else {
        setData(response.data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Use Effect for fetching data
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, setData, fetchData, loading, error };
};

export default useFetch;
