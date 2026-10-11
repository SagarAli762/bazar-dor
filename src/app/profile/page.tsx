import { FaUser } from "react-icons/fa";
import { HiMiniArrowTurnDownLeft } from "react-icons/hi2";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-8 sm:py-10">
      <div className="mx-auto w-full max-w-3xl">
        {/* Heading */}
        <div className="mb-5">
          <h1 className="text-xl font-bold text-[#26352b] sm:text-2xl lg:text-[32px]">
            আমার প্রোফাইল
          </h1>

          <p className="mt-1 text-[14px] md:text-[20px] text-gray-500 sm:text-sm">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* Profile Card */}
        <section className="flex flex-col gap-4 rounded-xl border border-[#e1e9e2] bg-white/75 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100">
              <FaUser className="text-2xl text-gray-500" />
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-[20px] md:text-[26px] font-semibold text-[#29352c]">
                Rezwan Ahmed
              </h2>

              <p className="break-all text-[16px] md:text-[18px] text-gray-500 sm:text-sm">
                rezwanahmed@gmail.com
              </p>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-1.5 self-start rounded-lg border
             border-red-300 px-3 py-2 text-[14px] md:text-[21px]  text-red-500 transition hover:bg-red-50 sm:self-center"
          >
            <HiMiniArrowTurnDownLeft />
            সাইন আউট
          </button>
        </section>

        {/* Information Form */}
        <section className="mt-4 rounded-xl border border-[#e1e9e2] bg-white/75 p-4 sm:mt-5 sm:p-6">
          <h2 className="mb-6 text-[18px] md:text-[28px] font-bold text-[#29352c] sm:text-base">
            তথ্য
          </h2>

          <div className="px-0 sm:px-2">
            <label
              htmlFor="name"
              className="mb-2 block text-[18px] md:text-[28px]  text-gray-700 sm:text-sm"
            >
              নাম
            </label>

            <input
              id="name"
              type="text"
              placeholder=""
              className="h-9 w-full rounded-md border border-[#e0e9e1] bg-transparent px-3 text-sm outline-none transition focus:border-green-600"
            />

            <button
              type="button"
              className="mt-3 h-9 w-full rounded-md bg-[#07883f] text-xs font-medium text-white shadow-sm transition hover:bg-[#067536]"
            >
              আপডেট
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
