import Link from "next/link";

interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: Navs[] = data.data;
  //   console.log(navs);
  const filterdNavs = navs.filter((n) => n.scrapable);
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-3 sm:gap-4 md:gap-6">
      <Link
        className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-red-50 hover:text-red-700 sm:text-base"
        href={"/"}
      >
        হোম
      </Link>
      {filterdNavs.map((n, i: number) => (
        <Link
          key={i}
          href={`/category/${n.slug}`}
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-red-50 hover:text-red-700 sm:text-base"
        >
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
