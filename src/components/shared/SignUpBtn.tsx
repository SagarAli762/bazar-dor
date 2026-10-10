"use client";
import Link from "next/link";

const SignUpBtn = () => {
  return (
    <Link href="/sign-up">
      <button className="rounded-lg bg-[#05493E] px-3 py-2 text-xs text-white transition hover:bg-[#067c14] sm:px-4 sm:text-sm">
        সাইন আপ
      </button>
    </Link>
  );
};

export default SignUpBtn;
