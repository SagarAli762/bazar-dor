import Link from "next/link";
import { FaHouse, FaMagnifyingGlass } from "react-icons/fa6";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-7xl font-bold text-warning sm:text-9xl">404</h1>

        <h2 className="mt-4 text-xl font-bold sm:text-2xl">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="mt-3 text-sm text-base-content/70 sm:text-base">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না। URL পরীক্ষা করে
          আবার চেষ্টা করুন।
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-warning gap-2">
            <FaHouse />
            হোম পেজে ফিরে যান
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn btn-outline gap-2"
          >
            <FaMagnifyingGlass />
            আগের পেজে ফিরুন
          </button>
        </div>
      </div>
    </main>
  );
}
