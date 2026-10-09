import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <section className="mx-auto w-10/12 max-w-7xl pt-8 pb-8">
      <div
        className=" flex-col-reverse
          flex sm:flex-row
          min-h-[200px]
          items-center
          justify-between
          overflow-hidden
          rounded-2xl
          border border-gray-200
          bg-[#F8FAF8]
          px-5 py-6
          sm:px-7 sm:py-7
          md:min-h-[215px]
          md:px-10
          lg:min-h-[225px]
          lg:px-12
        "
      >
        {/* Content */}
        <div className="pt-6 sm:pt-0 max-w-full sm:max-w-[65%] md:max-w-[65%] lg:max-w-[650px]">
          {/* Date */}
          <div
            className="
              mb-2
              inline-flex
              rounded-full
              bg-[#DDF2E7]
              px-3 py-1
              text-[10px]
              font-medium
              text-[#087443]
              sm:text-xs
            "
          >
            {date}
          </div>

          {/* Heading */}
          <h1
            className="
              text-2xl
              font-extrabold
              leading-tight
              text-[#202D27]
              sm:text-3xl
              md:text-3xl
              lg:text-[40px]
            "
          >
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Description */}
          <p
            className="
              mt-2
              max-w-xl
              text-[11px]
              leading-5
              text-gray-600
              sm:mt-3
              sm:text-xs
              md:text-sm
              lg:text-[15px]
            "
          >
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-মধ্য এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          {/* Button */}
          <Link href="#all-products">
            {" "}
            <button
              className="
              btn
              mt-3
              min-h-0
              h-auto
              rounded-lg
              border-0
              bg-[#008C45]
              px-3 py-2
              text-[11px]
              font-semibold
              text-white
              shadow-sm
              hover:bg-[#006F37]
              sm:mt-4
              sm:px-4
              sm:text-xs
              md:text-sm
            "
            >
              সব পণ্য দেখুন
              <FiArrowRight className="text-xs sm:text-sm" />
            </button>
          </Link>
        </div>

        {/* Hero image */}
        <div>
          <Image
            src="/images/bazar-hero.png"
            width={315}
            height={265}
            style={{ width: 315, height: 265 }}
            alt="hero png"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
