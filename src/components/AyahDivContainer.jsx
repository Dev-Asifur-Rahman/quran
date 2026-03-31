"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const AyahDivContainer = ({ arabic, translation }) => {
  const searchParams = useSearchParams();
  const targetAyah = searchParams.get("ayah");

  useEffect(() => {
    if (targetAyah) {
      const element = document.getElementById(`ayah-${targetAyah}`);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [targetAyah]);

  return (
    <div className="space-y-6">
      {arabic?.ayahs?.map((ayah, index) => {
        const isTarget = targetAyah == ayah.numberInSurah;

        return (
          <div
            id={`ayah-${ayah.numberInSurah}`}
            key={ayah.number}
            className={`p-4 rounded-xl transition-all duration-300 ${
              isTarget
                ? "bg-amber-50 border border-amber-200 shadow-sm"
                : "bg-base-200"
            }`}
          >
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
        );
      })}
    </div>
  );
};

export default AyahDivContainer;