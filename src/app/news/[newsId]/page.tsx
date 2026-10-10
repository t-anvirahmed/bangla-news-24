// import React from "react";

// const NewsDetails = async ({ params }: { param: { newsId: string } }) => {
//   const { newsId } = await params;
//   //   console.log(newsId);
//   const res = await fetch(
//     `https://news-api-v2.vercel.app/api/article/${newsId}`,
//   );
//   const data = await res.json();
//   //   console.log(data);
//   const news = data.data;
//   console.log(news);
//   return <div></div>;
// };

// export default NewsDetails;

import Image from "next/image";
import Link from "next/link";

interface ArticleBlock {
  type: "text" | "image" | "subheading";
  text?: string;
  url?: string;
  width?: number;
  height?: number;
  caption?: string;
  altText?: string;
  copyrightHolder?: string;
}

interface NewsArticle {
  id: string;
  title: string;
  description: {
    blocks?: Array<{
      type: string;
      model?: {
        blocks?: Array<{
          type: string;
          model?: {
            text?: string;
          };
        }>;
      };
    }>;
  };
  imageUrl: string;
  link: string;
  firstPublished: string;
  lastPublished: string;
  byline?: {
    name: string;
    role?: string;
  }[];
  topics?: {
    id: string;
    name: string;
  }[];
  tags?: string[];
  body?: ArticleBlock[];
  text?: string;
  source?: string;
  sourceUrl?: string;
}

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news article");
  }

  const result = await res.json();
  const news: NewsArticle = result.data;

  if (!news) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">News article not found</h1>
        <Link href="/" className="btn mt-6 bg-red-700 text-white">
          Back to Home
        </Link>
      </div>
    );
  }

  const publishedDate = new Date(news.firstPublished);

  const formattedDate = publishedDate.toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const descriptionText =
    news.description?.blocks
      ?.flatMap(
        (block) =>
          block.model?.blocks?.map((item) => item.model?.text ?? "") ?? [],
      )
      .filter(Boolean)
      .join(" ") ?? "";

  return (
    <main className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      {/* Article Header */}
      <article className="mx-auto max-w-4xl">
        {/* Category / Topics */}
        <div className="mb-4 flex flex-wrap gap-2">
          {news.topics?.map((topic) => (
            <span
              key={topic.id}
              className="rounded bg-red-700 px-3 py-1 text-xs font-bold text-white sm:text-sm"
            >
              {topic.name}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
          {news.title}
        </h1>

        {/* Description */}
        {descriptionText && (
          <p className="mt-4 text-base leading-7 text-base-content/70 sm:text-lg sm:leading-8">
            {descriptionText}
          </p>
        )}

        {/* Author and Date */}
        <div className="mt-6 flex flex-col gap-2 border-y border-base-300 py-4 text-sm text-base-content/70 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {news.byline?.map((author, index) => (
              <p key={`${author.name}-${index}`}>
                <span className="font-semibold text-base-content">
                  {author.name}
                </span>
                {author.role && <span className="ml-1">— {author.role}</span>}
              </p>
            ))}
            {news.source && <p className="mt-1">Source: {news.source}</p>}
          </div>

          <time dateTime={news.firstPublished}>{formattedDate}</time>
        </div>

        {/* Main Image */}
        <figure className="mt-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-base-200">
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          <figcaption className="mt-2 text-xs leading-5 text-base-content/60 sm:text-sm">
            {news.title}
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="mt-8 space-y-6 sm:mt-10">
          {news.body?.map((block, index) => {
            if (block.type === "subheading") {
              return (
                <h2
                  key={index}
                  className="border-l-4 border-red-700 pl-3 text-xl font-bold leading-snug sm:text-2xl"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "image" && block.url) {
              return (
                <figure key={index} className="space-y-2">
                  <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-lg bg-base-200">
                    <Image
                      src={block.url}
                      alt={block.altText ?? block.caption ?? news.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 896px"
                      className="object-cover"
                    />
                  </div>

                  {block.caption && (
                    <figcaption className="text-sm leading-6 text-base-content/60">
                      {block.caption}
                    </figcaption>
                  )}

                  {block.copyrightHolder && (
                    <p className="text-xs text-base-content/50">
                      Image credit: {block.copyrightHolder}
                    </p>
                  )}
                </figure>
              );
            }

            if (block.type === "text" && block.text) {
              return (
                <p
                  key={index}
                  className="whitespace-pre-line text-base leading-8 text-base-content/90 sm:text-lg sm:leading-9"
                >
                  {block.text}
                </p>
              );
            }

            return null;
          })}
        </div>

        {/* Tags */}
        {news.tags && news.tags.length > 0 && (
          <div className="mt-10 border-t border-base-300 pt-6">
            <h2 className="mb-3 text-lg font-bold">Tags</h2>

            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-base-300 px-3 py-1.5 text-sm transition-colors hover:border-red-700 hover:text-red-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Original Article */}
        {news.link && (
          <div className="mt-8">
            <Link
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-none bg-red-700 text-white hover:bg-red-800"
            >
              Read Original Article ↗
            </Link>
          </div>
        )}
      </article>
    </main>
  );
};

export default NewsDetails;
