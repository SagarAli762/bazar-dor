"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { HiMiniArrowTurnDownLeft } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";

const NavbarButton = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut({ callbackURL: "/sign-in" });
    redirect("/");
  };

  return (
    <>
      {user ? (
        <div className="dropdown dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 flex w-[110px] md:w-auto  items-center gap-2 overflow-hidden px-2 sm:gap-10 sm:px-4"
          >
            <div className="flex w-6 h-6 sm:h-9 sm:w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#07883F] sm:h-auto sm:w-14">
              {user.image ? (
                <Image
                  src={user.image}
                  width={40}
                  height={40}
                  alt="user photo"
                  className="h-full w-full object-cover sm:h-10 sm:w-10"
                />
              ) : (
                <span className="text-[12px] text-white md:text-[18px]">
                  {user?.name.slice(0, 1)}
                </span>
              )}
            </div>

            <span className="max-w-[120px] truncate text-sm sm:max-w-none sm:text-base">
              {user?.name}
            </span>

            <IoMdArrowDropdown className="shrink-0" />
          </div>

          <ul
            tabIndex={-1}
            className="dropdown-content menu z-50 mt-1 w-52 md:w-72 space-y-4 p-4 rounded-box bg-base-100 p-2 shadow-sm sm:w-[250px]"
          >
            <li className="pointer-events-none break-words  text-sm text-gray-400  md:text-[20px]">
              <span>{user?.name}</span>
            </li>

            <li>
              <Link
                href="/profile"
                className="btn btn-ghost btn-sm justify-start text-sm md:text-[20px]"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#07883F]">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      width={40}
                      height={40}
                      alt="user photo"
                    ></Image>
                  ) : (
                    <span className="text-white text-[26px] md:text-[36px]">
                      {user?.name.slice(0, 1)}
                    </span>
                  )}
                </div>
                আমার প্রোফাইল
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={handleSignOut}
                className="btn btn-ghost btn-sm justify-start text-sm text-red-600 md:text-[20px]"
              >
                <HiMiniArrowTurnDownLeft />
                সাইন আউট
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <Link
            href="/sign-in"
            className="text-[14px] sm:text-[18px] btn btn-ghost btn-sm hidden md:inline-flex"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-[#05493E] px-3 py-2 text-[14px] sm:text-[18px] text-white transition hover:bg-[#067c14] sm:px-4 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </>
      )}
    </>
  );
};

export default NavbarButton;
