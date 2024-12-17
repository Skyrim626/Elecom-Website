import React from "react";

const OrderedProductCard = ({
  productID,
  productImage,
  productName,
  productPrice,
  productQuantity,
}) => {
  const formattedPrice = productPrice.toLocaleString();

  return (
    <div class="space-y-4 p-6">
      <div class="flex items-center gap-6">
        <a href="#" class="h-14 w-14 shrink-0">
          <img
            class="h-full w-full"
            src={productImage}
            alt={`${productName} product image`}
          />
        </a>

        <a
          href="#"
          class="min-w-0 flex-1 font-medium text-gray-900 hover:underline dark:text-white"
        >
          {productName}
        </a>
      </div>

      <div class="flex items-center justify-between gap-4">
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
          <span class="font-medium text-gray-900 dark:text-white">
            Product ID:
          </span>{" "}
          {productID}
        </p>

        <div class="flex items-center justify-end gap-4">
          <p class="text-base font-normal text-gray-900 dark:text-white">
            x{productQuantity}
          </p>

          <p class="text-xl font-bold leading-tight text-gray-900 dark:text-white">
            ₱{formattedPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderedProductCard;
