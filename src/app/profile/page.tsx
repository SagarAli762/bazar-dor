"use client";
import { authClient } from "@/lib/auth-client";
import { signOut } from "better-auth/api";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { HiMiniArrowTurnDownLeft } from "react-icons/hi2";
import { toast } from "react-toastify";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleUpdatedUser = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as { name: string };
    const result = await authClient.updateUser({
      name: user.name,
    });
    if (result.error) {
      toast.error("তথ্য আপডেট করা যায়নি। আবার চেষ্টা করুন।");
      return;
    }
    toast.success("আপনার তথ্য সফলভাবে আপডেট হয়েছে!");
    console.log("updateUser result", result);
  };
  //user sign out
  const handleUserSignOut = async () => {
    await authClient.signOut({ callbackURL: "/" });
    redirect("/");
  };
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
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#07883F]">
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

            <div className="min-w-0">
              <h2 className="truncate text-[20px] md:text-[26px] font-semibold text-[#29352c]">
                {user?.name}
              </h2>

              <p className="break-all text-[16px] md:text-[18px] text-gray-500 sm:text-sm">
                {user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={handleUserSignOut}
            type="button"
            className="inline-flex items-center justify-center gap-1.5 self-start rounded-lg border border-red-300 px-3 py-2 text-[14px] md:text-[21px]  text-red-500 transition hover:bg-red-50 sm:self-center"
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

          <form className="px-0 sm:px-2" onSubmit={handleUpdatedUser}>
            <label
              htmlFor="name"
              className="mb-2 block text-[18px] md:text-[28px]  text-gray-700 sm:text-sm"
            >
              নাম
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder=""
              className="h-9 w-full rounded-md border border-[#e0e9e1] bg-transparent px-3 text-sm outline-none transition focus:border-green-600"
            />

            <button
              type="submit"
              className="mt-3 h-9 w-full rounded-md bg-[#07883f] text-[14px] md:text-[21px] font-medium text-white shadow-sm transition hover:bg-[#067536]"
            >
              আপডেট
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
