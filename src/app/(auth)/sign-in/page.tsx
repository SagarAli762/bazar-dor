"use client";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignInPage = () => {
  const route = useRouter();
  const handleSignInWithEmail = async (
    e: React.SubmitEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };
    console.log(data);
    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
    });
    if (error) {
      toast.error("লগইন ব্যর্থ হয়েছে। ইমেইল ও পাসওয়ার্ড যাচাই করুন।");
      return;
    }
    toast.success("সফলভাবে লগইন হয়েছে!");
    route.push("/");
  };
  //sign in with google
  const handleSignInWithGoogle = async () => {
    await signIn.social({
      provider: "google",
    });
  };

  //sign in with github
  const handleSignInWithGithub = async () => {
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
            সাইন ইন
          </h1>
          <p className="mt-1 text-[14px] md:text-[20px] text-gray-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        {/* Signup Form */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
          <form className="space-y-4" onSubmit={handleSignInWithEmail}>
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
                required
              />
            </div>
            <button
              type="submit"
              className="btn text-[14px] md:text-[21px] h-11 min-h-0 w-full border-none bg-green-700 text-white hover:bg-green-800"
            >
              সাইন ইন
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-5 text-[12px] md:text-[16px] text-gray-500">
            অথবা
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              onClick={handleSignInWithGoogle}
              className="flex items-center btn btn-outline h-14 min-h-0 gap-2 border-gray-200 bg-white text-[14px] md:text-[21px] text-gray-800 transition-all duration-200 ease-in-out hover:bg-gray-100 hover:border-gray-400 hover:shadow-md hover:-translate-y-0.5  active:scale-95 active:translate-y-0"
            >
              <FcGoogle />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              onClick={handleSignInWithGithub}
              className="flex items-center btn btn-outline h-14 min-h-0 gap-2 border-gray-200 bg-white text-[14px] md:text-[21px] text-gray-800 transition-all duration-200 ease-in-out hover:bg-gray-100 hover:border-gray-400 hover:shadow-md hover:-translate-y-0.5  active:scale-95 active:translate-y-0"
            >
              <FaGithub className="text-base" />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          {/* Login Link */}
          <p className="mt-5 text-center text-[14px] md:text-[20px] text-gray-600">
            অ্যাকাউন্ট নেই?
            <Link
              href="/sign-up"
              className="ml-1 font-medium text-green-700 hover:underline"
            >
              সাইন আপ করুন
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
};

export default SignInPage;
