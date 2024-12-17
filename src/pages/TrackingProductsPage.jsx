import React, { useState } from "react";
import Page from "../components/common/Page";
import { Button, Input } from "@headlessui/react";
import PricingDetails from "../components/shops/PricingDetails";

// Product Images
import redShirt from "../assets/images/shops/red-shirt.svg";
import blackShirt from "../assets/images/shops/black-shirt.svg";
import constellation from "../assets/images/shops/constellation.svg";
import unifiedBober from "../assets/images/shops/unified-bober.svg";
import trailBlazing from "../assets/images/shops/trail-blazing.svg";
import ProductCard from "../components/common/ProductCard";
import OrderedProductCard from "../components/shops/OrderedProductCard";

const TrackingProductsPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  // ! Testing Purposes
  const [isOpenTrackingSection, setIsOpenTrackingSection] = useState(false);

  // Functions that handle the tracking the product
  const handleTrack = () => {
    if (trackingNumber) {
      // Implement tracking logic here
      console.log(`Tracking product with number: ${trackingNumber}`);

      // Set Open Tracking Section State
      setIsOpenTrackingSection(true);
    } else {
      // Set Open Tracking Section State
      setIsOpenTrackingSection(false);

      alert("Please enter a tracking number.");
    }
  };

  // Ordered Products Array (Duplicated for Testing)
  const orderedProducts = [
    {
      id: "BJ8364850",
      image: redShirt,
      productName: "Red Shirt",
      price: 700000,
      quantity: 1,
    },
    {
      id: "BJ8364850",
      image: blackShirt,
      productName: "Black Shirt",
      price: 1000000,
      quantity: 2,
    },
    {
      id: "BJ8364850",
      image: constellation,
      productName: "Constellation",
      price: 1000000,
      quantity: 1,
    },
    {
      id: "BJ8364850",
      image: unifiedBober,
      productName: "Unified Bomber J-",
      price: 10000000,
      quantity: 3,
    },
  ];

  return (
    <Page>
      {/* Tracking Input */}
      <div className="flex flex-col items-center px-6 sm:px-8 lg:px-10 ">
        <div className="max-w-3xl w-full rounded-lg">
          <div className="mb-6">
            <label
              htmlFor="tracking-number"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Tracking Number
            </label>
            <Input
              id="tracking-number"
              type="number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Tracking Number"
            />
          </div>
          <Button
            onClick={handleTrack}
            className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition duration-300"
          >
            Track Order
          </Button>
        </div>
      </div>

      {isOpenTrackingSection && (
        <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
          <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Track the delivery of order #{trackingNumber}
            </h2>

            <div class="mt-6 sm:mt-8 lg:flex lg:gap-8">
              <div class="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 lg:max-w-xl xl:max-w-2xl">
                {orderedProducts.map((orderedProduct, index) => (
                  <OrderedProductCard
                    key={index}
                    productID={orderedProduct.id}
                    productImage={orderedProduct.image}
                    productName={orderedProduct.productName}
                    productPrice={orderedProduct.price}
                    productQuantity={orderedProduct.quantity}
                  />
                ))}

                {/* Pricing Details */}
                <PricingDetails />
              </div>

              <div class="mt-6 grow sm:mt-8 lg:mt-0">
                <div class="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Order history
                  </h3>

                  <ol class="relative ms-3 border-s border-gray-200 dark:border-gray-700">
                    <li class="mb-10 ms-6">
                      <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                        <svg
                          class="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                          />
                        </svg>
                      </span>
                      <h4 class="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">
                        Estimated delivery in 24 Nov 2023
                      </h4>
                      <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Products delivered
                      </p>
                    </li>

                    <li class="mb-10 ms-6">
                      <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                        <svg
                          class="h-4 w-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                          />
                        </svg>
                      </span>
                      <h4 class="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">
                        Today
                      </h4>
                      <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Products being delivered
                      </p>
                    </li>

                    <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                      <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                        <svg
                          class="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 11.917 9.724 16.5 19 7.5"
                          />
                        </svg>
                      </span>
                      <h4 class="mb-0.5 font-semibold">23 Nov 2023, 15:15</h4>
                      <p class="text-sm">Products in the courier's warehouse</p>
                    </li>

                    <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                      <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                        <svg
                          class="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 11.917 9.724 16.5 19 7.5"
                          />
                        </svg>
                      </span>
                      <h4 class="mb-0.5 text-base font-semibold">
                        22 Nov 2023, 12:27
                      </h4>
                      <p class="text-sm">
                        Products delivered to the courier - DHL Express
                      </p>
                    </li>

                    <li class="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                      <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                        <svg
                          class="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 11.917 9.724 16.5 19 7.5"
                          />
                        </svg>
                      </span>
                      <h4 class="mb-0.5 font-semibold">19 Nov 2023, 10:47</h4>
                      <p class="text-sm">Payment accepted - VISA Credit Card</p>
                    </li>

                    <li class="ms-6 text-primary-700 dark:text-primary-500">
                      <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-800">
                        <svg
                          class="h-4 w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 11.917 9.724 16.5 19 7.5"
                          />
                        </svg>
                      </span>
                      <div>
                        <h4 class="mb-0.5 font-semibold">19 Nov 2023, 10:45</h4>
                        <a href="#" class="text-sm font-medium hover:underline">
                          Order placed - Receipt #647563
                        </a>
                      </div>
                    </li>
                  </ol>

                  <div class="gap-4 sm:flex sm:items-center">
                    <button
                      type="button"
                      class="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    >
                      Cancel the order
                    </button>

                    <a
                      href="#"
                      class="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0"
                    >
                      Order details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Page>
  );
};

export default TrackingProductsPage;
