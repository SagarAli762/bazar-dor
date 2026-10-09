import { IProduct } from "@/types/allProducts.type";
import Image from "next/image";

interface ProductDetailHeaderProps {
  product: IProduct;
}

const ProductDetailHeader = ({ product }: ProductDetailHeaderProps) => {
  const isUp = product.change.dir === "up";

  return (
    <div className="flex  flex-col gap-4 rounded-2xl border border-[#DFE8E1] bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5 md:p-6 lg:px-7 lg:py-5">
      {/* Product Information */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        {/* Product Image */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F0F5F0] text-3xl sm:h-[72px] sm:w-[72px] md:h-[80px] md:w-[80px]">
          {product.image}
        </div>

        {/* Product Name and Details */}
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-extrabold leading-tight text-[#26332A] sm:text-xl md:text-[30px] lg:text-[36px]">
            {product.nameBn}
          </h1>

          <p className="mt-1 text-[14px] text-gray-500 sm:text-sm md:text-[20px]">
            প্রতি {product.unit} · {product.categoryNameBn}
          </p>

          <p className="mt-2 text-[14px] leading-5 text-gray-600 sm:text-xs md:text-[20px]">
            গতকালের তুলনায় আজ দাম{" "}
            <span className="font-semibold text-[#26332A]">
              {isUp ? "বেড়েছে" : "কমেছে"}
            </span>{" "}
            · {Math.abs(product.today - product.yesterday)} টাকা
          </p>
        </div>
      </div>

      {/* Today's Price */}
      <div className="flex items-center justify-between gap-4 rounded-xl bg-[#F0F5F0] px-4 py-3 sm:min-w-[105px] sm:flex-col sm:justify-center sm:gap-1 sm:px-4 sm:py-3 md:min-w-[120px] md:px-5 md:py-4">
        <div className="sm:text-center">
          <p className="text-xs text-gray-500 sm:text-[14px] md:text-[20px]">
            আজকের দাম
          </p>

          <p className=" text-xs sm:text-xl md:text-[30px] font-extrabold leading-tight text-[#26332A] lg:text-[36px]">
            {product.today}
          </p>

          <p className="mt-0.5 text-xs sm:text-[14px] md:text-[20px] text-gray-500">
            টাকা / {product.unit}
          </p>
        </div>

        {/* Percentage Change */}
        <div
          className={`flex shrink-0 items-center gap-1 text-xs sm:text-[14px] md:text-[20px] font-semibold ${
            isUp ? "text-red-500" : "text-green-600"
          } sm:justify-center`}
        >
          {isUp ? (
            <Image
              className="pr-1"
              src="/images/up.png"
              width={16}
              height={16}
              alt="up price image"
            />
          ) : (
            <Image
              className="pr-1"
              src="/images/down.png"
              width={16}
              height={16}
              alt="up price image"
            />
          )}

          <span>{Math.abs(product.change.pct).toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHeader;
