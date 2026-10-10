import { getAllProducts } from "@/api/allProducts.api";
import ProductsCard from "@/components/shared/ProductsCard";
import { IProduct } from "@/types/allProducts.type";
import Image from "next/image";

const ProductsPage = async () => {
  const products: IProduct[] = await getAllProducts();
  {
    /**up products */
  }
  const filterdUpProducts = products.filter(
    (product) => product.change.dir === "up",
  );
  const upProducts = filterdUpProducts.sort(
    (a, b) => b.change.pct - a.change.pct,
  );
  {
    /**down products */
  }
  const filterdDownProducts = products.filter(
    (product) => product.change.dir === "down",
  );
  const downProducts = filterdDownProducts.sort(
    (a, b) => a.change.pct - b.change.pct,
  );
  return (
    <section className="mx-auto w-10/12 max-w-7xl pt-8 pb-8 md:pb-20">
      {/**up products */}
      <div className="flex gap-1 sm:gap-2">
        {" "}
        <Image
          src="/images/up.png"
          width={16}
          height={2}
          style={{ width: "auto", height: "auto" }}
          alt="price-up-icon"
        ></Image>
        <h2 className="text-[20px] md:text-[28x] font-bold">আজ দাম বেড়েছে</h2>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:rid-cols-4 gap-4 sm:gap-8">
        {" "}
        {upProducts.slice(0, 6).map((product: IProduct) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
      {/**down products */}
      <div className="flex gap-1 sm:gap-2 mt-8 md:mt-14">
        {" "}
        <Image
          src="/images/down.png"
          width={16}
          height={2}
          style={{ width: "auto", height: "auto" }}
          alt="price-up-icon"
        ></Image>
        <h2 className="text-[20px] md:text-[28x] font-bold">আজ দাম কমেছে</h2>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:rid-cols-4 gap-4 sm:gap-8">
        {" "}
        {downProducts.slice(0, 6).map((product: IProduct) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
      {/**all products */}
      <div id="all-products" className="pb-2 sm:gap-2 mt-8 md:mt-14">
        <h2 className="text-[20px] md:text-[28x] font-bold">সব পণ্য</h2>
        <p className="text-[#26332D] text-[12px] md:text-[16px]">
          মোট ৩৩টি পণ্য দেখানো হচ্ছে
        </p>
      </div>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:rid-cols-4 gap-4 sm:gap-8">
        {products.map((product: IProduct) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
