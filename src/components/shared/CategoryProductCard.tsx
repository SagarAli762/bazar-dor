import { IProduct } from "@/types/allProducts.type";
import Image from "next/image";

const CategoryProductCard = ({ product }: { product: IProduct }) => {
  const isUp = product.change.dir === "up";
  return (
    <div className="  w-full rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition  duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-3.5  md:p-4">
      {/* Product Info */}
      <div className="flex  items-center gap-2.5  sm:gap-3 md:gap-3.5">
        {/* Product Image */}
        <div className=" flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F3F7F2] text-xl sm:h-11 sm:w-11 sm:text-2xl md:h-12 md:w-12 md:text-2xl">
          {product.image}
        </div>

        {/* Product Name */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-xs font-bold text-[#26332D] sm:text-sm md:text-base">
            {product.nameBn}
          </h3>

          <p className="mt-0 text-[10px] text-gray-500 sm:text-[11px] md:text-xs">
            প্রতি {product.unit}
          </p>
        </div>
      </div>

      {/* Price + Change */}
      <div className="mt-3 flex items-end justify-between sm:mt-3.5 md:mt-4">
        {/* Today's Price */}
        <div>
          <p className=" text-[9px] text-gray-500 sm:text-[10px] md:text-[11px]">
            আজকের দাম
          </p>

          <p className="mt-0.5 text-sm font-bold text-[#26332D] sm:text-base md:text-lg">
            ৳{product.today}
          </p>
        </div>

        {/* Price Change */}
        <div
          className={`flex items-center gap-0.5 rounded-full px-2 py-1 text-[8px] font-medium  sm:px-2.5 sm:text-[9px] md:px-3 md:py-1.5 md:text-[10px]
            ${isUp ? "bg-red-50 text-red-500" : "bg-green-50 text-green-600"}`}
        >
          {isUp ? (
            <Image
              src="/images/up.png"
              width={13}
              height={12}
              alt="Price up icon"
              style={{ width: "auto", height: "auto" }}
            />
          ) : (
            <Image
              src="/images/down.png"
              width={13}
              height={12}
              alt="Price down icon"
              style={{ width: "auto", height: "auto" }}
            />
          )}
          <span className="text-[12px] md:text-[16px] ps-1">
            {product.change.pct.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductCard;
