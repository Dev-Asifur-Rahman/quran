import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1F6F5F] to-[#2FA084] text-white flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Read & Explore the Holy Quran
        </h2>

        <p className="mt-4 max-w-xl text-sm md:text-lg text-white/80">
          A simple, fast and beautiful Quran reading experience with Surah list,
          search, and verse-by-verse navigation.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Link
            className="px-6 py-3 rounded-xl bg-white text-black font-medium"
            href={"/surahs"}
          >
            Start Reading
          </Link>

        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-white/10 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold">All Surahs</h3>
          <p className="text-sm text-white/80 mt-2">
            Browse all 114 Surahs with easy navigation.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold">Fast Search</h3>
          <p className="text-sm text-white/80 mt-2">
            Search any ayah instantly with optimized API.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold">Clean Reading</h3>
          <p className="text-sm text-white/80 mt-2">
            Minimal UI focused on reading experience.
          </p>
        </div>
      </div>
    </section>
  );
}
