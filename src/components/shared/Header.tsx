import Image from "next/image";
import NavLinks from "./NavLinks";
import { Navs } from "@/types/nav.type";
import { getNavs } from "@/api/nav.api";
import MobileMenu from "./MobileMenu";

const Header = async () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  const navs: Navs[] = await getNavs();

  return (
    <header className="relative  py-3 md:py-4">
      <div className="flex items-center justify-between mx-auto w-10/12 max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/Stack.png"
            width={40}
            height={40}
            alt="বাজার দর"
          />

          <div className="flex flex-col">
            <span className="text-lg font-extrabold sm:text-xl md:text-2xl">
              বাজার দর
            </span>

            <span className="text-[10px] text-gray-500 sm:text-xs md:text-sm">
              {date}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Sign In - Desktop */}
          <button className="btn btn-ghost btn-sm hidden md:inline-flex">
            সাইন ইন
          </button>

          {/* Sign Up - All Devices */}
          <button className="rounded-lg bg-[#05493E] px-3 py-2 text-xs text-white transition hover:bg-[#067c14] sm:px-4 sm:text-sm">
            সাইন আপ
          </button>

          {/* Mobile Menu */}
          <MobileMenu navs={navs} />
        </div>
      </div>

      {/* Desktop Navigation */}
      <NavLinks />
    </header>
  );
};

export default Header;
