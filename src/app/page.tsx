import Hero from "@/components/homepage/Hero";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <div className="bg-[#F0F5F0]">
      <Hero></Hero>
      <ProductsPage></ProductsPage>
    </div>
  );
}
