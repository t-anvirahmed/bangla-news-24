import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: IOtherSection[] = sections.slice(1);
  // console.log(otherSections);
  return (
    <div>
      <div className="container mx-auto mt-6 grid grid-cols-1 gap-6 px-3 sm:px-5 md:mt-8 md:grid-cols-3 lg:gap-8 lg:px-6">
        {/* News Section */}
        <div className="min-w-0 md:col-span-2">
          <MainNews news={mainNews} />

          <div className="mt-6 grid gap-8 sm:mt-8">
            {otherSections.map((os) => (
              <div key={os.curationId} className="min-w-0">
                {/* Section Heading */}
                <h2 className="mb-4 border-b-2 border-red-700 pb-2 text-lg font-bold sm:text-xl">
                  {os.title}
                </h2>

                {/* News Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5">
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Read Section */}
        <aside className="min-w-0 md:col-span-1">
          <MostRead />
        </aside>
      </div>
    </div>
  );
}
