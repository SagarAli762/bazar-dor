import CategoryHeader from "@/components/shared/CategoryHeader";
import SortByProducts from "@/components/shared/SortByProducts";
import { IProduct } from "@/types/allProducts.type";
import Link from "next/link";

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

  return (
    <section className="bg-[#F0F5F0]">
      <div className="w-10/12 mx-auto max-w-7xl py-6 md:py-8 ">
        {categories.length > 0 ? (
          <>
            <CategoryHeader categories={categories}></CategoryHeader>
            {/**sort */}
            <SortByProducts categories={categories}></SortByProducts>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl font-bold">কোনো পণ্য পাওয়া যায়নি!</h2>

            <p className="mt-2 text-gray-500">
              এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য নেই।
            </p>

            <Link href="/" className="btn mt-5 bg-[#05493E] text-white">
              হোম পেজে ফিরে যান
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
