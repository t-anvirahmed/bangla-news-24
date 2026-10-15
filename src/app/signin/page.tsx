"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { use } from "react";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data);
  };

  return (
    <div>
      <main className="flex items-center justify-center bg-gray-50 px-4 py-12">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div className="mb-8 mt-8 text-center">
            <h1 className="text-2xl font-bold text-red-700">সাইন ইন</h1>
            <p className="mt-2 text-sm text-gray-500">
              সর্বশেষ খবর জানতে আপনার অ্যাকাউন্টে প্রবেশ করুন।
            </p>
          </div>
          <div className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                ইমেইল ঠিকানা
              </label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-700"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-2">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-700"
                >
                  পাসওয়ার্ড
                </label>
                {/* <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-red-700 hover:underline"
                >
                  পাসওয়ার্ড ভুলে গেছেন?
                </Link> */}
              </div>

              <input
                name="password"
                id="password"
                type="password"
                placeholder="আপনার পাসওয়ার্ড লিখুন"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-700"
              />
            </div>

            {/* <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 accent-red-700"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                আমাকে মনে রাখুন
              </label>
            </div> */}

            <button
              type="submit"
              className="w-full rounded-lg bg-red-700 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
            >
              সাইন ইন করুন
            </button>
          </div>

          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex mt-2 w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.92 46.98 31.8 46.98 24.55Z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.9 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
              />
            </svg>
            Google দিয়ে সাইন ইন করুন
          </button>

          {/* GitHub Sign In */}
          <button
            onClick={handleGithubSignIn}
            type="button"
            className="mt-3 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.78 2.01 3.07 1.5.1-.71.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.25-5.11 5.53.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            GitHub দিয়ে সাইন ইন করুন
          </button>

          {/* অ্যাকাউন্ট তৈরি */}
          <p className="mt-7 text-center text-sm text-gray-600">
            আপনার কি অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/signup"
              className="font-semibold text-red-700 hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>

          {/* হোমপেজে ফিরে যান */}
          <div className="mt-8 border-t border-gray-100 pt-5 text-center">
            <Link href="/" className="text-sm text-gray-500 hover:text-red-700">
              ← হোমপেজে ফিরে যান
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignInPage;
