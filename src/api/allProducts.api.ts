import { IProduct } from "@/types/allProducts.type";

export const getAllProducts = async (): Promise<IProduct[]> => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      cache: "no-store",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetched headline data");
  }
  return await res.json();
};
