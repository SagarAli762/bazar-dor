import { IMarket, IProduct } from "@/types/allProducts.type";

interface MarketPriceTableProps {
  product: IProduct;
}

export default function MarketPriceTable({ product }: MarketPriceTableProps) {
  const market: IMarket[] = product.markets.map((market) => market);
  console.log(market);

  return (
    <section className="w-full mt-4 md:mt-8">
      <h2 className="mb-3 text-[18px] md:text-[28px] font-bold text-gray-800">
        বাজারভিত্তিক আজকের দাম
      </h2>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="table table-sm w-full">
          <thead>
            <tr className="border-b border-gray-200 text-[14px] md:text-[21px] text-gray-500">
              <th className="font-medium">বাজার</th>
              <th className="font-medium">বিভাগ</th>
              <th className="text-right font-medium">সর্বনিম্ন</th>
              <th className="text-right font-medium">সর্বোচ্চ</th>
              <th className="text-right font-medium">গড়</th>
            </tr>
          </thead>

          <tbody>
            {product.markets.map((market: IMarket, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 text-[14px] md:text-[21px] text-gray-800 ${
                  index % 2 === 1 ? "bg-[#F0F5F0]" : "bg-base-100"
                }`}
              >
                <td className="whitespace-nowrap">{market.market}</td>

                <td className="whitespace-nowrap">{market.division}</td>

                <td className="whitespace-nowrap text-right">
                  {market.min} টাকা
                </td>

                <td className="whitespace-nowrap text-right">
                  {market.max} টাকা
                </td>

                <td className="whitespace-nowrap text-right font-semibold">
                  {(market.min + market.max) / 2}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
