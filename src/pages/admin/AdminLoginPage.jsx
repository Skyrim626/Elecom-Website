import React, { useState } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react"; // Import the Lucide icons
import { Button, Input } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  // Open Navigation
  const navigate = useNavigate();

  // Password View State
  const [toggleViewPassword, setToggleViewPassword] = useState(false);

  return (
    <div className="bg-gray-50 h-screen flex items-center justify-center text-sm">
      <div className="bg-white p-8 rounded-lg shadow-lg min-w-[430px]">
        <p className="text-gray-500 text-center my-16">Login to your account</p>

        <form method="post">
          <div className="space-y-5">
            {/* Email Input Field */}

            <div className="border-gray-300  rounded-lg focus:ring-2 flex items-center py-5 px-3 space-x-3 bg-gray-50">
              <User size={20} className="text-gray-500" />
              {/* Use the Lucide Mail icon */}
              <Input
                type="text"
                placeholder="Username"
                className="w-full focus:outline-none bg-transparent"
                required
              />
            </div>

            {/* Password Input Field */}
            <div className="border-gray-300 rounded-lg focus:ring-2 flex items-center py-5 px-3 space-x-3 bg-gray-50 relative">
              <Lock size={20} className="text-gray-500" />
              <Input
                type={`${toggleViewPassword ? "text" : "password"}`}
                placeholder="Password"
                className="w-full focus:outline-none bg-transparent"
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

          <Button
            onClick={() => navigate(`/ad`)}
            type="button"
            className="mt-16 w-full text-md bg-customBlue text-white py-3 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
