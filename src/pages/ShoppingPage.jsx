import React from "react";
import { Filter, ChevronLeft, ChevronRight } from "lucide-react";
import Page from "../components/common/Page";

// Product Images
import redShirt from "../assets/images/shops/red-shirt.svg";
import blackShirt from "../assets/images/shops/black-shirt.svg";
import constellation from "../assets/images/shops/constellation.svg";
import unifiedBober from "../assets/images/shops/unified-bober.svg";
import trailBlazing from "../assets/images/shops/trail-blazing.svg";
import ProductCard from "../components/common/ProductCard";

const ShoppingPage = ({ page }) => {
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

  return (
    <Page>
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Left Side: Filters and Pagination */}
          <div className="w-full sm:w-1/3 lg:w-1/4 px-4 lg:px-8">
            {/* Filters Section */}
            <div className="mb-8">
              <button className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 mb-6 flex items-center gap-3 transition duration-200">
                <Filter className="w-5 h-5 text-gray-700" />
                <span className="text-lg font-medium">Filters</span>
              </button>

              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm text-gray-700 font-semibold mb-2">
                    Category
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select Category</option>
                    <option value="shirts">Shirts</option>
                    <option value="jackets">Jackets</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm text-gray-700 font-semibold mb-2">
                    Price Range
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select Price Range</option>
                    <option value="low">Under $1000</option>
                    <option value="medium">$1000 - $5000</option>
                    <option value="high">Above $5000</option>
                  </select>
                </div>

                {/* Discount Filter */}
                <div>
                  <label className="block text-sm text-gray-700 font-semibold mb-2">
                    Discount
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">All Products</option>
                    <option value="discounted">Discounted Products</option>
                    <option value="new">New Products</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-6">
              {/* Pagination Navigation */}
              <div className="flex items-center gap-4">
                <button className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition duration-200">
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                <div className="flex items-center space-x-2">
                  {/* Page Number Controls */}
                  <button className="w-8 h-8 bg-gray-200 rounded-full text-gray-700 font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    1
                  </button>
                  <button className="w-8 h-8 bg-gray-200 rounded-full text-gray-700 font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    2
                  </button>

                  {/* Dots indicating more pages */}
                  <span className="text-gray-600 font-semibold">...</span>

                  <button className="w-8 h-8 bg-gray-200 rounded-full text-gray-700 font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    5
                  </button>
                </div>

                <button className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition duration-200">
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Products */}
          <div className="w-full sm:w-2/3 lg:w-3/4">
            {/* Showing Results and Items Per Page */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-gray-600">
                Showing <strong>1-16</strong> of <strong>32</strong> results
              </span>
              <div className="flex items-center gap-4">
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="16">16 Items</option>
                  <option value="32">32 Items</option>
                  <option value="48">48 Items</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Product Cards */}
              {products.map((product, index) => (
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
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ShoppingPage;
