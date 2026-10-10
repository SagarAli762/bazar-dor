import { getNavs } from "@/api/nav.api";
import { Navs } from "@/types/nav.type";
import Link from "next/link";

const NavLinks = async () => {
  const navs: Navs[] = await getNavs();

  return (
    <nav className="hidden md:block border-y border-gray-200 mt-4">
      <div className="flex items-center justify-start gap-6 mx-auto w-10/12 max-w-7xl overflow-x-auto py-3">
        {navs.map((n, i) => {
          return (
            <Link
              key={i}
              href={`/category/${n.slug}`}
              className="flex  items-center gap-2  text-sm font-medium  transition hover:text-primary"
            >
              <span className="text-[12px] md:text-[17px]">{n.icon}</span>

              <span className="text-[12px] md:text-[17px]">{n.nameBn}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavLinks;
