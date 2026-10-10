"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { HiMiniArrowTurnDownLeft } from "react-icons/hi2";

import { IoMdArrowDropdown } from "react-icons/io";

const NavbarButton = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user, "user after sign up");
  return (
    <>
      {user ? (
        <div className="dropdown dropdown-bottom dropdown-end ">
          <div tabIndex={0} role="button" className="btn m-1 flex gap-10">
            {user?.name}
            <IoMdArrowDropdown />
          </div>
          <ul
            tabIndex={-1}
            className="w-[250px] dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li className="ps-6 text-gray-300 text-[14px] md:text-[20px] disabled">
              {user?.name}
            </li>
            <li>
              <Link href="/sign-in">
                <button className="text-[14px] md:text-[20px] btn btn-ghost btn-sm hidden md:inline-flex">
                  <FaUser /> আমার প্রোফাইল
                </button>
              </Link>
            </li>
            <li>
              <Link href="/sign-in">
                <button className="text-red-600 text-[14px] md:text-[20px] btn btn-ghost btn-sm hidden md:inline-flex">
                  <HiMiniArrowTurnDownLeft /> সাইন আউট
                </button>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <>
          {" "}
          <Link href="/sign-in">
            <button className="btn btn-ghost btn-sm hidden md:inline-flex">
              সাইন ইন
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="rounded-lg bg-[#05493E] px-3 py-2 text-xs text-white transition hover:bg-[#067c14] sm:px-4 sm:text-sm">
              সাইন আপ
            </button>
          </Link>
        </>
      )}
    </>
  );
};

export default NavbarButton;
