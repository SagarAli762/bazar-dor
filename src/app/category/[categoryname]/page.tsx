import CategoryHeader from "@/components/shared/CategoryHeader";
import SortByProducts from "@/components/shared/SortByProducts";
import { IProduct } from "@/types/allProducts.type";

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
        <CategoryHeader categories={categories}></CategoryHeader>
        {/**sort */}
        <SortByProducts categories={categories}></SortByProducts>
      </div>
    </section>
  );
};

export default CategoryPage;
