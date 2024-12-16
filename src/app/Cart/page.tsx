"use client";
import Link from 'next/link';
import React from 'react';
import { RiDeleteBin7Fill } from "react-icons/ri";
import Shipping from "@/components/Shipping";

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cart image */}
        <img
          src="/images/cart.jpg"
          alt="cart"
          className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover"
        />

        <div className="flex flex-wrap justify-between mt-10 gap-8">
          {/* Cart products list */}
          <div className="flex flex-col bg-white px-6 py-6 w-full lg:w-[800px] rounded shadow-sm">
            {/* Table headers */}
            <div className="sm:flex justify-between font-bold mb-4 bg-pink-100 px-4 py-4 rounded grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <h1>Products</h1>
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>Subtotal</h1>
            </div>

            {/* Product row */}
            <div className="flex flex-wrap sm:flex-nowrap justify-between items-center bg-white mb-4 border-b pb-4">
              {/* Product Name and Image */}
              <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto mb-4 sm:mb-0">
                <img
                  src="/images/cart1.png"
                  alt="Asgaard Sofa"
                  className="w-20 h-20 sm:w-24 sm:h-24 mr-4"
                />
                <h3 className="text-sm sm:text-base">Asgaard Sofa</h3>
              </div>

              {/* Price */}
              <div className="flex flex-col items-start sm:items-center mb-4 sm:mb-0">
                <h3 className="text-sm sm:text-base">Rs. 250,000.00</h3>
              </div>

              {/* Quantity */}
              <div className="flex flex-col items-start sm:items-center mb-4 sm:mb-0">
                <button className="px-3 py-1 bg-white text-black rounded border border-black hover:bg-yellow-100">
                  1
                </button>
              </div>

              {/* Subtotal */}
              <div className="flex flex-col items-start sm:items-center mb-4 sm:mb-0">
                <h3 className="text-sm sm:text-base mt-2 sm:mt-0">Rs. 250,000.00</h3>
              </div>

              {/* Delete icon */}
              <RiDeleteBin7Fill className="cursor-pointer text-yellow-700 text-2xl ml-4" />
            </div>

            {/* Add more product rows here if needed */}
          </div>

          {/* Cart Totals Section */}
          <div className="bg-pink-100 border border-gray-300 rounded shadow-lg w-full md:w-1/2 lg:w-[300px] px-6 py-8 mt-4 md:mt-20">
            <h1 className="font-bold text-xl mb-4 text-center">Cart Totals</h1>
            <div className="flex justify-between mb-2">
              <h2 className="text-sm sm:text-base mt-5">Subtotal</h2>
              <h3 className="text-gray-400 mt-5">Rs. 250,000.00</h3>
            </div>
            <div className="flex justify-between mb-4">
              <h2 className="text-sm sm:text-base mt-5">Total</h2>
              <h3 className="text-yellow-700 mt-5">Rs. 250,000.00</h3>
            </div>
            <Link
              href={"/CheckOut"}
              className="block w-full text-center py-2 px-3 bg-white text-black rounded hover:bg-yellow-100 mt-20"
            >
              Check Out
            </Link>
          </div>
        </div>
      </div>

      <Shipping />
    </>
  );
}
