"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="ml-auto flex items-center gap-1 sm:gap-2">
      {user ? (
        <div className="flex items-center gap-3">
          {/* Profile card */}
          <Link href={"/profile"}>
            <div className="group flex min-w-0 items-center gap-3 rounded-xl border border-transparent bg-gray-50 p-2.5 transition-all duration-200 hover:border-red-200 hover:bg-red-50">
              {/* Profile image */}
              <div className="avatar shrink-0">
                <div className="w-11 rounded-full ring-2 ring-red-700 ring-offset-2 ring-offset-gray-50 transition group-hover:ring-red-800">
                  <img alt="Profile image" src={user?.image as string} />
                </div>
              </div>

              {/* User information */}
              <div className="min-w-0">
                <h2 className="max-w-36 truncate text-sm font-bold text-gray-900 transition group-hover:text-red-700">
                  {user?.name}
                </h2>
                <p className="max-w-36 truncate text-xs text-gray-500">
                  {user?.email}
                </p>
              </div>
            </div>
          </Link>

          {/* Sign-out button */}
          <button
            onClick={handleSignOut}
            className="btn btn-sm border-red-700 bg-red-700 text-white shadow-sm transition-all duration-200 hover:border-red-800 hover:bg-red-800 sm:btn-md"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
        <div>
          <Link href={"/signin"}>
            <button className="btn btn-xs border-none sm:btn-md">
              সাইন ইন
            </button>
          </Link>

          <Link href={"/signup"}>
            <button className="btn btn-xs btn-error bg-red-700 text-white sm:btn-md">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
