import Axios from "axios";

// Axios Client Service
const axiosClient = Axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
  timeout: 60000,
  withCredentials: true,
  withXSRFToken: true,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  headers: {
    Accept: "application/json",
  },
});

// Get CSRF Token - Ensure this is called before login
export const getCsrfToken = async () => {
  try {
    await Axios.get(`${import.meta.env.VITE_API_BASE_URL}/sanctum/csrf-cookie`, {
      withCredentials: true, // Make sure cookies are sent with the request
    });
  } catch (error) {
    console.error("Error getting CSRF token:", error);
  }
};

// Request Interceptors
axiosClient.interceptors.request.use((config) => {

  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("TOKEN"))}`,
  };

  // console.log(config);
  return config;
});

// Response Interceptors
axiosClient.interceptors.response.use(
  (response) => {
    // Return response
    return response;
  },
  error => {
    // Removed `useNavigate` here
    if (error.response) {
      const status = error.response.status;
      // Handle different HTTP status codes here
      switch (status) {
        case 401:
          // Unauthorized
          localStorage.removeItem("TOKEN");
          localStorage.removeItem("role");
          break;
        case 403:
          break;
        case 404:
          break;
        case 500:
          alert("Something went wrong on the server. Please try again later.");
          break;
        default:
          alert(`An error occurred: ${error.response.status}`);
      }
    } else {
      alert("Network error. Please check your internet connection.");
    }
    throw error;
  }
);

// Export axiosClient service
export default axiosClient;


getCsrfToken();
