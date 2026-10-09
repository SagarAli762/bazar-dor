import { IProduct } from "@/types/allProducts.type";
import React from "react";

const PriceSummaryHeader = ({ product }: { product: IProduct }) => {
  const market: number[] = product.markets.map((market) => market.min);
  const lowestPrice = Math.min(...market);
  const highestPrice = Math.max(...market);
  const avgPrice = (lowestPrice + highestPrice) / 2;

  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {/* Lowest Price */}
      <div className="rounded-2xl border border-[#DFE8E1] bg-white px-5 py-4">
        <p className="text-[12px] md:text-[18px] text-[#26332A]">
          সর্বনিম্ন দাম
        </p>

        <h3 className="mt-1 text-xl md:text-2xl font-extrabold text-[#079447]">
          {lowestPrice} টাকা
        </h3>

        <p className="mt-1 text-[12px] md:text-[18px] text-[#26332A]">
          সবচেয়ে কম দামের বাজার
        </p>
      </div>

      {/* Highest Price */}
      <div className="rounded-2xl border border-[#DFE8E1] bg-white px-5 py-4">
        <p className="text-[12px] md:text-[18px] text-[#26332A]">
          সর্বোচ্চ দাম
        </p>

        <h3 className="mt-1 text-xl md:text-2xl font-extrabold text-red-500">
          {highestPrice} টাকা
        </h3>

        <p className="mt-1 text-[12px] md:text-[18px] text-[#26332A]">
          সবচেয়ে বেশি দামের বাজার
        </p>
      </div>

      {/* Average Price */}
      <div className="rounded-2xl border border-[#DFE8E1] bg-white px-5 py-4 sm:col-span-2 lg:col-span-1">
        <p className="text-[12px] md:text-[18px] text-[#26332A]">গড় দাম</p>

        <h3 className="mt-1 text-xl md:text-2xl font-extrabold text-[#079447]">
          {avgPrice} টাকা
        </h3>

        <p className="mt-1 text-[12px] md:text-[18px] text-[#26332A]">
          প্রতি কেজি-এর হিসাবে
        </p>
      </div>
    </section>
  );
};

export default PriceSummaryHeader;
