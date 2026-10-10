"use client";

import { useState } from "react";
import CategoryProductCard from "./CategoryProductCard";
import { IProduct } from "@/types/allProducts.type";
import { FiChevronDown } from "react-icons/fi";
interface ISortByProductsProps {
  categories: IProduct[];
}
const SortByProducts = ({ categories }: ISortByProductsProps) => {
  const [sortBy, setSortBy] = useState<
    "low to high" | "high to low" | "default"
  >("default");
  const getSortedByProducts = (categories: IProduct[]) => {
    const sortedProducts = [...categories];
    if (sortBy === "low to high") {
      sortedProducts.sort((a, b) => a.today - b.today);
    } else if (sortBy === "high to low") {
      sortedProducts.sort((a, b) => b.today - a.today);
    }
    return sortedProducts;
  };
  const sortedByProducts = getSortedByProducts(categories);
  return (
    <section>
      <div className="bg-white shadow rounded-2xl mt-8 p-4 md:p-8">
        <div className="flex justify-end gap-4">
          <span className="text-[14px] md:text-[20px]">সাজান</span>
          <select
            onChange={(e) =>
              setSortBy(
                e.target.value as "low to high" | "high to low" | "default",
              )
            }
            defaultValue={sortBy}
            className="shadow border-l-base-300 text-[12px] md:text-[18px] w-[200px] select select-sm"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low to high">দাম: কম থেকে বেশি</option>
            <option value="high to low">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>
      {/**products */}
      <div className="my-8">
        <p className="text-[14px] md:text-[20px]">
          মোট {categories.length}টি পণ্য দেখানো হচ্ছে
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {" "}
          {sortedByProducts.map((product) => (
            <CategoryProductCard
              key={product.id}
              product={product}
            ></CategoryProductCard>
          ))}
        </div>
      </div>{" "}
    </section>
  );
};

export default SortByProducts;
