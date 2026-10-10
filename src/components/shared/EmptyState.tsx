import Link from "next/link";
import { FaHouse, FaBoxOpen } from "react-icons/fa6";

export default function EmptyState() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-base-200">
          <FaBoxOpen className="text-4xl text-base-content/50" />
        </div>

        <h1 className="mt-6 text-2xl font-bold sm:text-3xl">
          দুঃখিত! পণ্য পাওয়া যায়নি
        </h1>

        <p className="mt-3 text-sm text-base-content/70 sm:text-base">
          এই ক্যাটাগরিতে কোনো পণ্য নেই অথবা আপনি যে ক্যাটাগরিটি খুঁজছেন সেটি
          পাওয়া যায়নি।
        </p>

        <Link href="/" className="btn btn-warning mt-6 gap-2">
          <FaHouse />
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </section>
  );
}
