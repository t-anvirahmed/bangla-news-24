import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const NewsCard = ({ news }: { news: News }) => {
  //   console.log(news);
  return (
    <Link href={`/news/${news.id}`}>
      <div className="card h-full min-w-0 overflow-hidden border border-base-200 bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-lg">
        {/* News Image */}
        <figure className="h-44 w-full overflow-hidden sm:h-40 lg:h-44 xl:h-48">
          <Image
            height={600}
            width={900}
            src={news.imageUrl}
            alt={news.imageAlt}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 400px"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </figure>

        {/* News Content */}
        <div className="card-body gap-2 p-3 sm:p-4 lg:p-4">
          {/* Category */}
          <span className="w-fit max-w-full truncate rounded bg-red-700 px-2.5 py-1 text-xs font-bold text-white">
            {news.category}
          </span>

          {/* Title */}
          <h2 className="text-base font-bold leading-snug transition-colors hover:text-red-700 sm:text-lg">
            {news.title}
          </h2>

          {/* Description */}
          <p className="line-clamp-3 text-sm leading-6 text-base-content/70">
            {news.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
