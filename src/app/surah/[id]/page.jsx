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

import AyahDivContainer from "@/components/AyahDivContainer";
import ScrollToTop from "@/components/ScrollToTop";
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

        <AyahDivContainer
          arabic={arabic}
          translation={translation}
        ></AyahDivContainer>
      </div>
      <ScrollToTop></ScrollToTop>
    </section>
  );
};

export default page;
