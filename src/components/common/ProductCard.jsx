import React, { useState } from "react";
import {
  Share2,
  Heart,
  GitCompare,
  Facebook,
  Twitter,
  Copy,
} from "lucide-react";
import { Button } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({
  page,
  productID,
  productImage,
  productName,
  productOrganization,
  productDescription,
  productPrice,
  productIsDiscount,
  productDiscountPercentage,
  productIsNew,
}) => {
  const formattedPrice = productPrice.toLocaleString();

  // State to toggle the share menu
  const [showShareOptions, setShowShareOptions] = useState(false);

  // Toggle function
  const handleShareClick = () => {
    setShowShareOptions((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
      {/* Product Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={productImage}
          alt={productName}
        />

        {/* Floating Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col items-center gap-2">
          {/* Share Button */}
          <div className="relative">
            <Button
              onClick={handleShareClick}
              title="Share"
              className="p-2 bg-white rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 shadow-md transition-all"
            >
              <Share2 size={18} />
            </Button>

            {/* Share Options (Toggle Visibility) */}
            {showShareOptions && (
              <div className="absolute top-12 right-0 flex flex-col bg-white shadow-2xl rounded-lg py-2 w-36 border border-gray-200">
                <Button
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                  onClick={() => alert("Shared to Facebook!")}
                >
                  <Facebook />
                  <span className="text-sm font-medium">Facebook</span>
                </Button>
                <Button
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                  onClick={() => alert("Shared to Twitter!")}
                >
                  <Twitter />
                  <span className="text-sm font-medium">Twitter</span>
                </Button>
                <Button
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                  onClick={() => alert("Link Copied!")}
                >
                  <Copy />
                  <span className="text-sm font-medium">Copy Link</span>
                </Button>
              </div>
            )}
          </div>

          {/* Compare Button */}
          <Button
            title="Compare"
            className="p-2 bg-white rounded-full text-gray-600 hover:bg-green-100 hover:text-green-600 shadow-md transition-all"
          >
            <GitCompare size={18} />
          </Button>

          {/* Like Button */}
          <Button
            title="Like"
            className="p-2 bg-white rounded-full text-gray-600 hover:bg-red-100 hover:text-red-600 shadow-md transition-all"
          >
            <Heart size={18} />
          </Button>
        </div>

        {/* Discount Badge */}
        {productIsDiscount && (
          <div className="absolute bottom-3 right-3 flex items-center justify-center bg-red-600 text-white text-xs font-bold rounded-full w-12 h-12 shadow-md">
            -{productDiscountPercentage}%
          </div>
        )}

        {/* New Badge */}
        {productIsNew && (
          <div className="absolute bottom-3 right-3 flex items-center justify-center bg-blue-500 text-white text-xs font-bold rounded-full w-12 h-12 shadow-md">
            New
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 flex-1 flex flex-col">
        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate">
          {productName}
        </h5>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">
          Organization: {productOrganization}
        </p>

        {/* Price and Action Button */}
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex items-center justify-between">
            {/* Display formatted price */}
            <p className="text-md font-bold">₱{formattedPrice}</p>
            {productIsDiscount && (
              <p className="text-md font-bold text-gray-400 line-through">
                ₱{productPrice.toLocaleString()}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Link
              to={`/products/${productID}`}
              state={{
                productName: productName,
                productImage: productImage,
                productDescription: productDescription,
                productPrice: productPrice,
              }}
            >
              <Button className="w-full text-sm bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-md px-4 py-2 transition-all duration-300">
                More Info
              </Button>
            </Link>

            {page !== "landing" && (
              <Button className="w-full text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-4 py-2 transition-all duration-300">
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
