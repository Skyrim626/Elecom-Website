import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import Page from "../../components/common/Page";
import { motion } from "framer-motion"; // Import motion from framer-motion

import usgLogo from "../../assets/images/organizations/usg.svg";
import csoImage from "../../assets/images/organizations/curricular-student-organizations.svg";
import ncsoImage from "../../assets/images/organizations/non-curricular-student-orgnaizations.svg";

import { Button } from "@headlessui/react";

import ProductCard from "../../components/common/ProductCard";

// Product Images
import redShirt from "../../assets/images/shops/red-shirt.svg";
import blackShirt from "../../assets/images/shops/black-shirt.svg";
import constellation from "../../assets/images/shops/constellation.svg";
import unifiedBober from "../../assets/images/shops/unified-bober.svg";
import trailBlazing from "../../assets/images/shops/trail-blazing.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomePage = () => {
  // Product Array (Duplicated for Testing)
  const products = [
    {
      id: 1,
      image: redShirt,
      productName: "Red Shirt",
      organization: "CEA",
      price: 700000,
      isDiscount: true,
      discountPercentage: 30,
    },
    {
      id: 2,
      image: blackShirt,
      productName: "Black Shirt",
      organization: "CITC",
      price: 1000000,
      isDiscount: false,
    },
    {
      id: 3,
      image: constellation,
      productName: "Constellation",
      organization: "USDP - DOST",
      price: 1000000,
      isDiscount: true,
      discountPercentage: 50,
    },
    {
      id: 4,
      image: unifiedBober,
      productName: "Unified Bomber J-",
      organization: "USTP SITE",
      price: 10000000,
      isDiscount: false,
      isNew: true,
    },
    {
      id: 5,
      image: trailBlazing,
      productName: "Trail Blazing J-",
      organization: "CITC",
      price: 20000000,
      isDiscount: false,
      isNew: true,
    },
    {
      id: 6,
      image: redShirt,
      productName: "Red Shirt V2",
      organization: "CEA",
      price: 800000,
      isDiscount: false,
    },
    {
      id: 7,
      image: blackShirt,
      productName: "Black Shirt V2",
      organization: "CITC",
      price: 1200000,
      isDiscount: true,
      discountPercentage: 20,
    },
    {
      id: 8,
      image: constellation,
      productName: "Constellation V2",
      organization: "USDP - DOST",
      price: 1100000,
      isDiscount: false,
    },
    {
      id: 9,
      image: unifiedBober,
      productName: "Unified Bomber V2",
      organization: "USTP SITE",
      price: 9500000,
      isNew: true,
    },
    {
      id: 10,
      image: trailBlazing,
      productName: "Trail Blazing V2",
      organization: "CITC",
      price: 19000000,
      isDiscount: true,
      discountPercentage: 15,
    },
  ];

  const PRODUCTS_PER_PAGE = 5; // Number of products displayed per view
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Left Chevron Click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - PRODUCTS_PER_PAGE, 0));
  };

  // Handle Right Chevron Click
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(
        prevIndex + PRODUCTS_PER_PAGE,
        products.length - PRODUCTS_PER_PAGE
      )
    );
  };

  // Get the current visible products
  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + PRODUCTS_PER_PAGE
  );

  return (
    <>
      <Page>
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center">
              <img src={usgLogo} alt="hero image" />
            </div>

            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl dark:text-white">
                The University Student Government
              </h1>
              <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-md dark:text-gray-400 text-justify">
                The highest student governing body of the University of Science
                and Technology of Southern Philippines- CDO Campus. The student
                government promotes holistic growth and development- an ability
                which is vitally important in order for its constituents to be
                capable in facing the demands and challenges of everyday lives.
                It also practices sustainable change which helps the
                organization move from making conscious efforts, thus, providing
                benefits and continuous improvement to the organization.
                Moreover, the student government provides students’ involvement
                and leadership development by implementing and organizing
                programs and events that could contribute significantly for
                their well-being.
              </p>

              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-sm text-white py-3 px-7">
                  Visit Page
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-10 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl dark:text-white">
                Curricular Student Organizations
              </h1>
              <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-md dark:text-gray-400 text-justify">
                These organizations are concerned with the enhancement of
                students’ learning in a certain academic discipline through the
                conduct of special lecture series, symposia, seminar-workshops,
                exhibits and other learning activities.
              </p>

              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-sm text-white py-3 px-7">
                  Visit Page
                </Button>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center">
              <img src={csoImage} alt="hero image" />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-10 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center">
              <img src={ncsoImage} alt="hero image" />
            </div>

            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl dark:text-white">
                Non-Curricular Student Organizations
              </h1>
              <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-md dark:text-gray-400 text-justify">
                Non-curricular student organization seeks to promote and develop
                student leadership, community awareness, social responsibility
                and wholesome fellowship for constructive purposes through
                campus activities concerning community service, sports/culture,
                and advocacies on sociocultural political – economic affairs.
              </p>

              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-sm text-white py-3 px-7">
                  Visit Page
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Merchandise Section */}
        <section>
          <div className="px-4 py-8 mx-auto lg:py-24 lg:px-6">
            {/* Title */}
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Merchandise
              </h2>
            </div>

            {/* Navigation and Products */}
            <div className="relative flex items-center justify-center">
              {/* Chevron Left */}
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`absolute left-0 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-200 ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              {/* Product Grid with Slide Animation */}
              <motion.div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 25,
                  mass: 1,
                  duration: 0.6, // Adjust the duration for smoother animation
                }}
              >
                {visibleProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    page="landing"
                    productID={product.id}
                    productImage={product.image}
                    productName={product.productName}
                    productOrganization={product.organization}
                    productDescription={product.productDescription}
                    productPrice={product.price}
                    productIsDiscount={product.isDiscount}
                    productDiscountPercentage={product.discountPercentage}
                    productIsNew={product.isNew}
                  />
                ))}
              </motion.div>

              {/* Chevron Right */}
              <button
                onClick={handleNext}
                disabled={currentIndex + PRODUCTS_PER_PAGE >= products.length}
                className={`absolute right-0 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-200 ${
                  currentIndex + PRODUCTS_PER_PAGE >= products.length
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* See More Button */}
            <div className="flex justify-center mt-8">
              <button className="border border-black text-black px-6 py-2 rounded-sm hover:bg-gray-100">
                See More
              </button>
            </div>
          </div>
        </section>
      </Page>
    </>
  );
};

export default HomePage;
