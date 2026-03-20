import SurahTBody from "@/components/SurahTBody";

async function getSurahList() {
  const res = await fetch("https://api.alquran.cloud/v1/surah", {
    cache: "force-cache",
  });

  return res.json();
}

export default async function Page() {
  const surahList = await getSurahList();

  return (
    <section className="py-10 px-4 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#1F6F5F]">
        All Surah List
      </h1>

      <div className="lg:w-4/5 mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead className="bg-base-300">
              <tr>
                <th className="text-center">#</th>
                <th>Name</th>
                <th className="text-center">English Name</th>
                <th className="text-center">Meaning</th>
                <th className="text-center">Ayahs</th>
                <th className="text-center">Type</th>
              </tr>
            </thead>

            

            <tbody>
              {surahList?.data?.map((surah, index) => (
                <SurahTBody key={index} surah={surah} index={index}></SurahTBody>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}