import React from "react";

const PricingDetails = () => {
  const originalPrice = 6592.0;
  const savings = 299.0;
  const storePickup = 99.0;
  const discount = 200.0; // New discount value

  // Calculate the total price after applying discount
  const total = originalPrice - savings + storePickup - discount;

  return (
    <div className="space-y-4 bg-gray-50 p-6 dark:bg-gray-800">
      {/* Price Section */}
      <div className="space-y-2">
        {/* Original Price */}
        <dl className="flex items-center justify-between gap-4">
          <dt className="font-normal text-gray-500 dark:text-gray-400">
            Original Price
          </dt>
          <dd className="font-medium text-gray-900 dark:text-white">
            ₱{originalPrice.toFixed(2)}
          </dd>
        </dl>

        {/* Discount */}
        <dl className="flex items-center justify-between gap-4">
          <dt className="font-normal text-gray-500 dark:text-gray-400">
            Discount
          </dt>
          <dd className="text-base font-medium text-red-500">
            -₱{discount.toFixed(2)}
          </dd>
        </dl>
      </div>

      {/* Total Section */}
      <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
        <dt className="text-lg font-bold text-gray-900 dark:text-white">
          Total
        </dt>
        <dd className="text-lg font-bold text-gray-900 dark:text-white">
          ₱{total.toFixed(2)}
        </dd>
      </dl>
    </div>
  );
};

export default PricingDetails;
