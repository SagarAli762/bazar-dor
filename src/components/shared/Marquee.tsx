import { getAllProducts } from "@/api/allProducts.api";
import { IProduct } from "@/types/allProducts.type";
import Image from "next/image";
import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import MarqueeText from "react-marquee-text";

const Marquee = async () => {
  const products: IProduct[] = await getAllProducts();
  return (
    <div>
      <MarqueeText direction="right" duration={20}>
        {" "}
        {products.map((product) => (
          <span
            key={product.id}
            className="flex items-center px-4  text-[14px] md:text-[20px] border-r border-gray-400"
          >
            <span className="pr-1">{product.categoryIcon}</span>
            <span>{product.nameBn}</span>
            <span className="px-2">{product.today}</span>
            <span>টাকা/কেজি</span>
            <span>
              {product.change.dir === "up" ? (
                <span className="flex items-center">
                  <Image
                    className=" mx-2"
                    src="/images/up.png"
                    height={14}
                    width={14}
                    alt="up-png"
                  ></Image>
                  {product.change.pct}%
                </span>
              ) : (
                <span className="flex items-center">
                  <Image
                    className=" mx-2"
                    src="/images/down.png"
                    height={14}
                    width={14}
                    alt="up-png"
                  ></Image>
                  {product.change.pct}%
                </span>
              )}
            </span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
