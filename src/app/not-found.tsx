import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gray-50 px-4 py-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-red-100/60 blur-3xl" />

      <div className="relative w-full max-w-lg text-center">
        {/* Brand */}
        <Link href="/" className="mb-10 inline-flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-gray-900">
            বাংলা নিউজ <span className="text-red-700">২৪</span>
          </span>
        </Link>

        {/* 404 illustration */}
        <div className="relative mx-auto mb-6 flex h-40 items-center justify-center">
          <span className="select-none text-[150px] font-black leading-none tracking-tighter text-red-100">
            404
          </span>

          <div className="absolute flex h-20 w-20 -rotate-6 items-center justify-center rounded-2xl border border-red-100 bg-white shadow-xl shadow-red-900/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="h-10 w-10 text-red-700"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 4.5h.008v.008H12V16.5Z"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-700">
            Page Not Found
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
          </h1>

          <p className="mx-auto max-w-md text-sm leading-7 text-gray-500 sm:text-base">
            আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, এর ঠিকানা পরিবর্তন করা হয়েছে
            অথবা পেজটি বর্তমানে উপলব্ধ নেই।
          </p>
        </div>

        {/* Home button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-700/20 transition duration-200 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.44 1.152-.44 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"
              />
            </svg>
            হোমপেজে ফিরে যান
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-gray-200 pt-5">
          <p className="text-xs text-gray-400">
            © 2026 বাংলা নিউজ ২৪ — সব খবর, সবার আগে।
          </p>
        </div>
      </div>
    </main>
  );
}
