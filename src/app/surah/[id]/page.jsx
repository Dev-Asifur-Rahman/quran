async function getSurah(id) {
  const res = await fetch(
    `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.sahih`,
    {
      cache: "force-cache",
    },
  );
  const data = await res.json();
  return data;
}

import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const surah = await getSurah(id);

  const arabic = surah?.data?.[0];
  const translation = surah?.data?.[1];

  return (
    <section className="min-h-screen bg-base-200 py-6 px-4">
      <div className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl text-[#1F6F5F] font-bold text-center mb-6">
          {arabic?.englishName}
        </h1>

        <div className="space-y-6">
          {arabic?.ayahs?.map((ayah, index) => (
            <div id={ayah?.number} key={ayah?.number} className="p-4 rounded-xl bg-base-200">
              <p className="text-right text-2xl leading-loose font-serif">
                {ayah.text}
              </p>

              <p className="mt-3 text-gray-600 text-base">
                {translation?.ayahs?.[index]?.text}
              </p>

              <div className="flex justify-center mt-3">
                <span className="badge badge-outline">
                  {ayah.numberInSurah}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
