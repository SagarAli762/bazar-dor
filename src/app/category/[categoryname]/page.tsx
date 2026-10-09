import CategoryHeader from "@/components/shared/CategoryHeader";
import CategoryProductCard from "@/components/shared/CategoryProductCard";
import { IProduct } from "@/types/allProducts.type";
import Image from "next/image";

interface CategoryPageProps {
  params: Promise<{
    categoryname: string;
  }>;
}
const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { categoryname } = await params;
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryname}`,
  );
  const categories: IProduct[] = await res.json();
  console.log(categories);

  return (
    <section className="bg-[#F0F5F0]">
      <div className="w-10/12 mx-auto max-w-7xl py-6 md:py-8 ">
        <CategoryHeader categories={categories}></CategoryHeader>
        {/**sort */}
        <div className="bg-white shadow rounded-2xl mt-8 p-4 md:p-8">
          <div className="flex justify-end gap-4">
            <span className="text-[14px] md:text-[20px]">সাজান</span>
            <select
              defaultValue={`ডিফল্ট`}
              className="shadow border-l-base-300 text-[12px] md:text-[18px] w-[200px] select select-sm"
            >
              <option disabled={true}>ডিফল্ট</option>
              <option>দাম: কম থেকে বেশি</option>
              <option>দাম: বেশি থেকে কম</option>
            </select>
          </div>
        </div>
        {/**products */}
        <div className="my-8">
          <p className="text-[14px] md:text-[20px]">
            মোট {categories.length}টি পণ্য দেখানো হচ্ছে
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap--4 md:gap-6">
            {" "}
            {categories.map((product) => (
              <CategoryProductCard
                key={product.id}
                product={product}
              ></CategoryProductCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
