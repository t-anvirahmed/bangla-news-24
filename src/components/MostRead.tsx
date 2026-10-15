import Link from "next/link";

interface MostReadNews {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  //   console.log(data);
  const news: MostReadNews[] = data.data;
  // console.log(news);
  return (
    <div>
      <div>
        <h2 className="border-b-2 border-red-700 pb-2 text-lg font-bold sm:text-xl">
          সর্বাধিক পঠিত
        </h2>
      </div>
      <Link href={`/news/${news[0].id}`} className="divide-y divide-base-200">
        {news.map((n, index: number) => (
          <div
            key={n.id}
            className="group flex min-w-0 items-start gap-3 p-2 transition-colors duration-200 hover:bg-base-200/50 sm:gap-4 "
          >
            {/* Number */}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-base-200 text-xs font-bold text-base-content/60 transition-colors group-hover:bg-red-700 group-hover:text-white sm:h-8 sm:w-8 sm:text-sm">
              {index + 1}
            </span>

            {/* Title */}
            <h3 className="min-w-0 flex-1 text-sm font-medium leading-6 transition-colors group-hover:text-red-700 sm:text-base sm:leading-7">
              {n.title}
            </h3>

            {/* Arrow */}
            <span className="shrink-0 pt-1 text-base-content/40 transition-transform group-hover:translate-x-1 group-hover:text-red-700">
              →
            </span>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default MostRead;
