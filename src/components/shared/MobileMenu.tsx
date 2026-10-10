"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

interface Navs {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

interface MobileMenuProps {
  navs: Navs[];
}

const MobileMenu = ({ navs }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="btn btn-square btn-ghost"
      >
        {isOpen ? (
          <FiX className="text-2xl" />
        ) : (
          <FiMenu className="text-2xl" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute left-0 right-0 z-50 mt-3 border-t border-gray-200 bg-white shadow-lg">
          <div className="mx-auto w-10/12 py-3">
            <div className="grid grid-cols-2 gap-2">
              {navs.map((nav) => (
                <Link
                  key={nav.id}
                  href={`/category/${nav.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-[#05493E]"
                >
                  <span className="text-[#05493E]">{nav.icon}</span>

                  <span>{nav.nameBn}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
