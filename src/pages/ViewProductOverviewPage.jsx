import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Page from "../components/common/Page";
import { Copy, Facebook, StarIcon, Twitter, X } from "lucide-react";

import { Minus, Plus } from "lucide-react"; // Import Lucide icons
import { Button, Dialog } from "@headlessui/react";

const ViewProductOverviewPage = () => {
  // Open Params
  const { id } = useParams();

  // Open Location
  const location = useLocation();

  // Access the passed product object
  const {
    productImage,
    productName,
    productDescription,
    productPrice,
    productOrganization,
  } = location.state;

  // Quantity State
  const [quantity, setQuantity] = useState(1);

  // Modal and Select State
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(Math.max(1, quantity - 1));

  // Open the modal with the selected image
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <Page>
        {/* Images */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            alt="Image 1"
            src={productImage}
            onClick={() => openModal(productImage)}
            className="hidden aspect-[3/4] size-full rounded-lg object-cover lg:block cursor-pointer"
          />
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img
              alt="Image 2"
              src={productImage}
              onClick={() => openModal(productImage)}
              className="aspect-[3/2] size-full rounded-lg object-cover cursor-pointer"
            />
            <img
              alt="Image 3"
              src={productImage}
              onClick={() => openModal(productImage)}
              className="aspect-[3/2] size-full rounded-lg object-cover cursor-pointer"
            />
          </div>
          <img
            alt="Image 4"
            src={productImage}
            onClick={() => openModal(productImage)}
            className="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-[3/4] cursor-pointer"
          />
        </div>

        {/* Product Info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {productName || "Awesome Product"}
            </h1>

            <p className="text-md font-semibold mt-3 text-gray-500">
              Organization: {productOrganization}
            </p>

            <p className="mt-3 text-sm font-semibold text-gray-400">
              Category: Clothes
            </p>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ₱{productPrice}
            </p>

            <form className="mt-10">
              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <fieldset aria-label="Choose a color" className="mt-4">
                  <div className="flex items-center gap-x-3">
                    {["Red", "Blue", "Green"].map((color) => (
                      <div
                        key={color}
                        aria-label={color}
                        className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5"
                      >
                        <span
                          aria-hidden="true"
                          className={`w-8 h-8 rounded-full border border-black/10 ${color.toLowerCase()}`}
                        />
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* Size Selection */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </a>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {/* Dummy sizes */}
                    {["S", "M", "L", "XL"].map((size) => (
                      <div
                        key={size}
                        className="group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase cursor-pointer bg-white text-gray-900 shadow-sm"
                      >
                        <span>{size}</span>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* Quantity Selector */}
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="flex items-center gap-x-3 mt-4">
                  {/* Decrease Quantity Button */}
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                    className="flex items-center justify-center p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
                  >
                    <Minus className="w-5 h-5 text-gray-700" />
                  </button>

                  {/* Quantity Input Field */}
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value)))
                    }
                    className="w-16 text-center border border-gray-300 rounded-md py-2 px-3 text-lg font-medium text-gray-900"
                    min="1"
                  />

                  {/* Increase Quantity Button */}
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex items-center justify-center p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
                  >
                    <Plus className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {productDescription ||
                    "This is an amazing product that does everything you need. It's great for all kinds of users and provides excellent value."}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {["Feature 1", "Feature 2", "Feature 3"].map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  Product details go here. It includes the manufacturing
                  process, materials used, and other important specifications.
                </p>
              </div>
            </div>

            <hr className="my-5" />

            <div>
              <h2 className="text-sm font-medium text-gray-900">Share</h2>
              <div className="flex gap-3 bg-white rounded-lg">
                <Button
                  className="flex items-center gap-2 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200"
                  onClick={() => alert("Shared to Facebook!")}
                >
                  <Facebook />
                  <span className="text-sm font-medium">Facebook</span>
                </Button>
                <Button
                  className="flex items-center gap-2 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200"
                  onClick={() => alert("Shared to Twitter!")}
                >
                  <Twitter />
                  <span className="text-sm font-medium">Twitter</span>
                </Button>
                <Button
                  className="flex items-center gap-2 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200"
                  onClick={() => alert("Link Copied!")}
                >
                  <Copy />
                  <span className="text-sm font-medium">Copy Link</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal with Backdrop */}
        {isOpen && (
          <Dialog open={isOpen} onClose={closeModal}>
            {/* Backdrop with click-to-close functionality */}
            <div
              className="fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300"
              onClick={closeModal}
            ></div>

            {/* Modal Content */}
            <Dialog.Panel className="fixed inset-0 flex items-center justify-center p-6 z-50">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform scale-95 duration-300 ease-in-out hover:scale-100 relative max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl">
                {/* Close Button (X) */}
                <button
                  className="absolute top-4 right-4 text-white text-xl font-bold bg-black rounded-full p-2 hover:bg-gray-700"
                  onClick={closeModal}
                >
                  <X />
                </button>

                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </Page>
    </>
  );
};

export default ViewProductOverviewPage;
