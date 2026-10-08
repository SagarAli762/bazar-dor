import { Navs } from "@/types/nav.type";

export const getNavs = async (): Promise<Navs[]> => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch navigation data");
  }

  return res.json();
};
