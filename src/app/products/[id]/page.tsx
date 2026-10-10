import MarketPriceTable from "@/components/MarketPriceTable";
import PriceSummaryHeader from "@/components/PriceSummaryHeader";
import ProductDetailHeader from "@/components/ProductDetailHeader";
import React from "react";
interface IProductDetailPageProps {
  params: Promise<{
    id: number;
  }>;
}
const ProductDetailPage = async ({ params }: IProductDetailPageProps) => {
  const { id } = await params;
  console.log(id, "id");
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${id}`,
  );
  const product = await res.json();

  return (
    <section className="bg-[#F0F5F0]">
      <div className="mx-auto w-11/12 max-w-7xl py-12 md:py-16">
        <ProductDetailHeader product={product}></ProductDetailHeader>
        <div className="flex mt-8  flex-col gap-4 rounded-2xl border border-[#DFE8E1] bg-white p-4 sm:p-5 md:p-6 lg:px-7 lg:py-5">
          <h2 className="text-[18px] md:text-[28px] font-semibold pt-4 ">
            দামের সারসংক্ষেপ
          </h2>
          <PriceSummaryHeader product={product}></PriceSummaryHeader>
          <MarketPriceTable product={product}></MarketPriceTable>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
