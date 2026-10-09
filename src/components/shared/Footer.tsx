import React from "react";

const Footer = () => {
  return (
    <div className="w-10/12 mx-auto max-w-7xl ">
      {" "}
      <div className="flex flex-col sm:flex-row justify-between items-center py-8 sm:py-12">
        <p className="text-[14px] md:text-[20px] ">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
        <p className="text-[14px] md:text-[20px] ">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </div>
  );
};

export default Footer;
