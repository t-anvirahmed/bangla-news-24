import Image from "next/image";
import Link from "next/link";
import React from "react";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;
  //   const otherNews = news.slice(1);
  //   console.log(otherNews);
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-4">
      {/* Main News */}
      <Link
        href={`/news/${firstNews.id}`}
        className="card overflow-hidden border border-base-200 bg-base-100 shadow-md transition-shadow duration-300 hover:shadow-xl md:col-span-2"
      >
        <div>
          <figure className="h-56 overflow-hidden sm:h-72 lg:h-96">
            <Image
              height={600}
              width={900}
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </figure>

          <div className="card-body gap-3 p-4 sm:p-6">
            <span className="w-fit rounded bg-red-700 px-3 py-1 text-xs font-bold text-white">
              {firstNews.category}
            </span>

            <h2 className="card-title text-xl font-bold leading-snug transition-colors hover:text-red-700 sm:text-2xl lg:text-3xl">
              {firstNews.title}
            </h2>

            <p className="text-sm leading-7 text-base-content/70 sm:text-base">
              {firstNews.description}
            </p>

            {/* <div className="card-actions mt-2 justify-end">
            <button className="btn btn-sm border-none bg-red-700 text-white hover:bg-red-800">
              বিস্তারিত পড়ুন →
            </button>
          </div> */}
          </div>
        </div>
      </Link>

      {/* Other News */}
      <Link href={`/news/${firstNews.id}`}>
        <div className="flex flex-col gap-4">
          <h2 className="border-b-2 border-red-700 pb-2 text-lg font-bold sm:text-xl">
            {firstNews.category}
          </h2>

          {otherNews.slice(0, 4).map((on) => (
            <div
              key={on.id}
              className="group rounded-lg border border-base-200 bg-base-100 p-4 shadow-sm transition-all duration-200 hover:border-red-200 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold leading-6 transition-colors group-hover:text-red-700 sm:text-base">
                {on.title}
              </h3>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-red-600">
                  {on.category}
                </span>
                {/* <span className="text-xs text-base-content/50">{on.source}</span> */}
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default MainNews;
