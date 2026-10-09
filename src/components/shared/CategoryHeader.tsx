import { IProduct } from "@/types/allProducts.type";
interface ICategoryHeaderProps {
  categories: IProduct[];
}
const CategoryHeader = ({ categories }: ICategoryHeaderProps) => {
  const category = categories.find((category) => category);
  return (
    <div className="bg-white shadow rounded-2xl p-4 md:p-8">
      <div className="flex gap-3 items-center">
        <div>
          <span className="text-[36px] md:text-[44px]">{category?.image}</span>
        </div>
        <div>
          {" "}
          <h2 className="text-[24px] md:text-[32px] font-bold">
            {category?.categoryNameBn}
          </h2>
          <p className="text-[14px] md:text-[20px]">
            {categories.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
