import Link from "next/link";

export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Loading Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 animate-pulse items-center justify-center rounded-lg bg-red-700 text-xl font-black text-white">
              ব
            </div>
            <span className="text-lg font-extrabold text-gray-900 sm:text-xl">
              বাংলা নিউজ <span className="text-red-700">২৪</span>
            </span>
          </Link>

          <div className="hidden h-9 w-24 animate-pulse rounded-lg bg-gray-100 sm:block" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-10">
        {/* Loading Status */}
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <div className="relative mb-5 flex h-16 w-16 items-center justify-center">
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-red-100 border-t-red-700" />
            <span className="text-xl font-black text-red-700">ব</span>
          </div>

          <h1 className="text-xl font-bold text-gray-900">খবর লোড হচ্ছে...</h1>
          <p className="mt-2 text-sm text-gray-500">
            সর্বশেষ খবর পেতে একটু অপেক্ষা করুন।
          </p>

          {/* Progress indicator */}
          <div className="mt-5 h-1.5 w-48 overflow-hidden rounded-full bg-red-100">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-red-700" />
          </div>
        </div>

        {/* Featured News Skeleton */}
        <section className="mb-10">
          <div className="mb-5 h-7 w-40 animate-pulse rounded-md bg-gray-200" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white md:col-span-2">
              <div className="aspect-video animate-pulse bg-gray-200" />
              <div className="space-y-4 p-5">
                <div className="h-5 w-24 animate-pulse rounded bg-red-100" />
                <div className="h-6 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-gray-100" />
              </div>
            </div>

            {/* Sidebar Skeleton */}
            <div className="space-y-4">
              <div className="mb-4 h-7 w-32 animate-pulse rounded-md bg-gray-200" />

              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-xl border border-gray-100 bg-white p-3"
                >
                  <div className="h-20 w-20 shrink-0 animate-pulse rounded-lg bg-gray-200" />
                  <div className="flex flex-1 flex-col justify-center gap-3">
                    <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />
                    <div className="h-3 w-1/2 animate-pulse rounded bg-gray-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Skeleton */}
        <section>
          <div className="mb-5 h-7 w-36 animate-pulse rounded-md bg-gray-200" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white"
              >
                <div className="aspect-video animate-pulse bg-gray-200" />

                <div className="space-y-4 p-5">
                  <div className="h-4 w-20 animate-pulse rounded bg-red-100" />
                  <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200" />
                  <div className="h-3 w-2/3 animate-pulse rounded bg-gray-100" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer loading indicator */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-700" />
          সংবাদ প্রস্তুত করা হচ্ছে
        </div>
      </div>
    </main>
  );
}
