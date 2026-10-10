import NewsCard from "@/components/NewsCard";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const CategoryNews = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  //   console.log(data);

  const categoryNews: News[] = data.data;
  return (
    <div className="container mx-auto px-3 py-6 sm:px-5 sm:py-8 lg:px-6">
      {/* Category Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
          {data.title}
        </h1>

        <div className="mt-3 flex items-center gap-2">
          <div className="h-1 w-12 rounded-full bg-red-700 sm:w-16" />
          <div className="h-1 w-5 rounded-full bg-red-200" />
        </div>
      </div>

      {/* Category News Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

      {/* Empty State */}
      {categoryNews.length === 0 && (
        <div className="rounded-xl border border-base-200 bg-base-100 px-4 py-12 text-center sm:py-16">
          <h2 className="text-lg font-bold sm:text-xl">
            কোনো সংবাদ পাওয়া যায়নি
          </h2>
          <p className="mt-2 text-sm text-base-content/60">
            এই বিভাগে বর্তমানে কোনো সংবাদ নেই। পরে আবার দেখুন।
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryNews;
