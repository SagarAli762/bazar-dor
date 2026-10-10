"use client";
import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function SignupPage() {
  const handleSignUpWithEmail = async (
    e: React.SubmitEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };
    console.log(data);
    const { data: resData, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    console.log("aftersignup", resData, error);
    if (error) {
      toast.error(
        error.message === "User already exists. Use another email."
          ? "এই ইমেইল দিয়ে ইতিমধ্যে অ্যাকাউন্ট তৈরি করা হয়েছে।"
          : "অ্যাকাউন্ট তৈরি করা যায়নি। তথ্যগুলো যাচাই করে আবার চেষ্টা করুন।",
      );
      return;
    }

    toast.success("অ্যাকাউন্ট তৈরি সফল হয়েছে!");
  };
  //signup with google
  const handleSignUpWithGoogle = async () => {
    const data = await signIn.social({
      provider: "google",
    });
    console.log("after sign up with google", data);
  };
  //sign up with github
  const handleSignUpWithGithub = async () => {
    await signIn.social({
      provider: "github",
    });
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f0f5f0] px-4 py-8">
      <div className="w-full max-w-[660px]">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-[24px] md:text-[32px] font-bold text-gray-900">
            অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="mt-1 text-[14px] md:text-[20px] text-gray-500">
            নিচে আপনার সঠিক তথ্য দিয়ে ফর্মটি পূরণ করুন।
          </p>
        </div>

        {/* Signup Form */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
          <form className="space-y-4" onSubmit={handleSignUpWithEmail}>
            <div>
              <label className="mb-1 block text-[14px] md:text-[21px] font-medium text-gray-700">
                নাম
              </label>
              <input
                name="name"
                type="text"
                placeholder="আপনার সম্পূর্ণ নাম"
                className="input input-bordered h-10 w-full bg-white text-[14px] md:text-[21px]"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-[14px] md:text-[21px] font-medium text-gray-700">
                ইমেইল
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="input input-bordered h-10 w-full bg-white text-[14px] md:text-[21px]"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-[14px] md:text-[21px] font-medium text-gray-700">
                পাসওয়ার্ড
              </label>
              <input
                name="password"
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষরের"
                className="input input-bordered h-10 w-full bg-white text-[14px] md:text-[21px]"
                minLength={8}
                pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&amp;*]).{8,}"
                title="কমপক্ষে ৮ অক্ষর, একটি uppercase, একটি lowercase, একটি number এবং ! @ # $ % ^ &amp; * এর যেকোনো একটি দিতে হবে।"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-[14px] md:text-[21px] font-medium text-gray-700">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <input
                type="password"
                placeholder="আবার লিখুন"
                className="input input-bordered h-10 w-full bg-white text-[14px] md:text-[21px]"
                required
              />
            </div>

            <button
              type="submit"
              className="btn text-[14px] md:text-[21px] h-11 min-h-0 w-full border-none bg-green-700 text-white hover:bg-green-800"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-5 text-[12px] md:text-[16px] text-gray-500">
            অথবা
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              onClick={handleSignUpWithGoogle}
              className="flex items-center btn btn-outline h-14 min-h-0 gap-2 border-gray-200 bg-white text-[14px] md:text-[21px] text-gray-800
              transition-all duration-200 ease-in-out
  hover:bg-gray-100 hover:border-gray-400 hover:shadow-md hover:-translate-y-0.5  active:scale-95 active:translate-y-0"
            >
              <FcGoogle />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              onClick={handleSignUpWithGithub}
              className="flex items-center btn btn-outline h-14 min-h-0 gap-2 border-gray-200 bg-white text-[14px] md:text-[21px] text-gray-800
              transition-all duration-200 ease-in-out
  hover:bg-gray-100 hover:border-gray-400 hover:shadow-md hover:-translate-y-0.5  active:scale-95 active:translate-y-0"
            >
              <FaGithub className="text-base" />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          {/* Login Link */}
          <p className="mt-5 text-center text-[14px] md:text-[20px] text-gray-600">
            অ্যাকাউন্ট আছে?
            <Link
              href="/login"
              className="ml-1 font-medium text-green-700 hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        {/* Back Home */}
        <div className="mt-5 text-center">
          <Link
            href="/"
            className="text-[14px] md:text-[20px] text-gray-500 hover:text-green-700"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}
