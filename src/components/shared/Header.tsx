import Image from "next/image";
import NavLinks from "./NavLinks";
import { Navs } from "@/types/nav.type";
import { getNavs } from "@/api/nav.api";
import MobileMenu from "./MobileMenu";
import Marquee from "./Marquee";
import NavbarButton from "./NavbarButton";

const Header = async () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  const navs: Navs[] = await getNavs();

  return (
    <header className="relative  pt-3 md:pt-4">
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
          {/**Nav button */}
          <NavbarButton></NavbarButton>
          {/* Mobile Menu */}
          <MobileMenu navs={navs} />
        </div>
      </div>

      {/* Desktop Navigation */}
      <NavLinks />
      <Marquee></Marquee>
    </header>
  );
};

export default Header;
