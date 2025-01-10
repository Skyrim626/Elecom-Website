import React, { useState } from "react";
import { User, Lock, Eye, EyeOff, Mail } from "lucide-react"; // Import the Lucide icons
import { Button, Input } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import { useStateContext } from "../contexts/ContextProvider";

const LoginPage = ({ role }) => {
  // Open Navigation
  const navigate = useNavigate();

  const { setCurrentUser, setUserToken, setCurrentRole } = useStateContext();

  // Input State
  const [username, setUsername] = useState("");

  // ! FOR ELECOM
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ __html: "" });

  // Password View State
  const [toggleViewPassword, setToggleViewPassword] = useState(false);

  // Submit info
  const onSubmit = (ev) => {
    // Resources
    const resource = `/auth/login?requestedBy=${role}`;

    ev.preventDefault();
    setError({ __html: "" });

    switch (role) {
      case "elecom":
        axiosClient
          .post(resource, {
            email,
            password,
          })
          .then(({ data }) => {
            setCurrentUser(data.user);
            setUserToken(data.token);
            setCurrentRole(data.role);

            localStorage.setItem("TOKEN", JSON.stringify(data.token));
            localStorage.setItem("role", JSON.stringify(data.role));
          });
        break;
      default:
        axiosClient
          .post(resource, {
            username,
            password,
          })
          .then(({ data }) => {
            // console.log(data);

            setCurrentUser(data.user);
            setUserToken(data.token);
            setCurrentRole(data.role);

            localStorage.setItem("TOKEN", JSON.stringify(data.token));
            localStorage.setItem("role", JSON.stringify(data.role));
          })
          .catch((error) => {
            if (error.response) {
              const finalErrors = Object.values(
                error.response.data.errors
              ).reduce((accum, next) => [...accum, ...next], []);
              setError({ __html: finalErrors.join("<br>") });
            }
            console.error(error);
          });
        break;
    }
  };

  return (
    <div className="bg-gray-50 h-screen flex items-center justify-center text-sm">
      <div className="bg-white p-8 rounded-lg shadow-lg min-w-[430px]">
        {role === "elecom" && (
          <h2 className="text-2xl font-bold text-center mb-6 uppercase">
            Elecom
          </h2>
        )}

        <p className="text-gray-500 text-center my-16">Login to your account</p>

        <form method="post">
          <div className="space-y-5">
            {role === "elecom" ? (
              // Email Input Field
              <div className="border-gray-300  rounded-lg focus:ring-2 flex items-center py-5 px-3 space-x-3 bg-gray-50">
                <Mail size={20} className="text-gray-500" />{" "}
                {/* Use the Lucide Mail icon */}
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full focus:outline-none bg-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            ) : (
              // Username Input Field

              <div className="border-gray-300  rounded-lg focus:ring-2 flex items-center py-5 px-3 space-x-3 bg-gray-50">
                <User size={20} className="text-gray-500" />
                {/* Use the Lucide Mail icon */}
                <Input
                  type="text"
                  placeholder="Username"
                  className="w-full focus:outline-none bg-transparent"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            )}

            {/* Password Input Field */}
            <div className="border-gray-300 rounded-lg focus:ring-2 flex items-center py-5 px-3 space-x-3 bg-gray-50 relative">
              <Lock size={20} className="text-gray-500" />
              <Input
                type={`${toggleViewPassword ? "text" : "password"}`}
                placeholder="Password"
                className="w-full focus:outline-none bg-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Visible/Close icon on the right */}
              <Button
                onClick={() => setToggleViewPassword(!toggleViewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {toggleViewPassword ? (
                  <Eye size={20} className="text-gray-500" />
                ) : (
                  <EyeOff size={20} className="text-gray-500" />
                )}
              </Button>
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <Link className="text-blue-500 text-sm hover:underline">
              Forget Password?
            </Link>
          </div>

          {role === "elecom" && (
            <p className="text-gray-500 text-center mt-16">
              Don't have an account?{" "}
              <Link className="hover:underline text-blue-500">Sign Up</Link>
            </p>
          )}

          <Button
            type="button"
            onClick={onSubmit}
            className="mt-16 w-full text-md bg-customBlue text-white py-3 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
          >
            Login
          </Button>
        </form>

        {/* Go Back Button */}
        <Button
          onClick={() => navigate(-1)}
          type="button"
          className="mt-4 w-full text-md bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
