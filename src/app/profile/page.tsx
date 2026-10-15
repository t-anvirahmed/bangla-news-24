"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });
  };
  return (
    <div>
      <div className="mx-auto mt-8 w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
        {/* Profile information */}
        <div className="px-6 pb-6">
          {/* Avatar */}
          <div className="mt-12 mb-4">
            <div className="avatar">
              <div className="w-24 rounded-full border-4 border-white bg-gray-100 shadow-md">
                <img src={user?.image as string} alt="Profile image" />
              </div>
            </div>
          </div>

          {/* Name and email */}
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-gray-900">{user?.name}</h2>

            <p className="break-all text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleUpdateProfile}
          className="mx-auto mt-4 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900">
              প্রোফাইল এডিট করুন
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              আপনার নাম ও প্রোফাইল ছবি আপডেট করুন।
            </p>
          </div>

          {/* Name */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              নাম
            </label>
            <input
              name="name"
              id="name"
              type="text"
              defaultValue={user?.name ?? ""}
              placeholder="আপনার নাম লিখুন"
              className="input input-bordered w-full rounded-lg focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Profile Image URL */}
          <div className="mb-6">
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              প্রোফাইল ছবির URL
            </label>
            <input
              name="image"
              id="image"
              type="url"
              defaultValue={user?.image ?? ""}
              placeholder="https://example.com/profile.jpg"
              className="input input-bordered w-full rounded-lg focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-100"
            />
            <p className="mt-2 text-xs text-gray-400">
              আপনার নতুন প্রোফাইল ছবির লিংক দিন।
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn w-full border-red-700 bg-red-700 text-white transition hover:border-red-800 hover:bg-red-800"
          >
            পরিবর্তন সংরক্ষণ করুন
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
