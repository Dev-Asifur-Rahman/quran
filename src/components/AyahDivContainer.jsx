"use client";

import { useEffect, useState } from "react";

const AyahDivContainer = ({ arabic, translation, targetAyah, time }) => {
  const [fontStyle, setFontStyle] = useState("amiri");
  const [fontSize, setFontSize] = useState("md");

  useEffect(() => {
    const savedFont = localStorage.getItem("quran-font-style");
    const savedSize = localStorage.getItem("quran-font-size");

    if (savedFont) setFontStyle(savedFont);
    if (savedSize) setFontSize(savedSize);
  }, []);

  useEffect(() => {
    const updateSettings = () => {
      const savedFont = localStorage.getItem("quran-font-style");
      const savedSize = localStorage.getItem("quran-font-size");

      if (savedFont) setFontStyle(savedFont);
      if (savedSize) setFontSize(savedSize);
    };

    window.addEventListener("settings-change", updateSettings);

    return () => {
      window.removeEventListener("settings-change", updateSettings);
    };
  }, []);

  useEffect(() => {
    if (!targetAyah) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(`ayah-${targetAyah}`);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [targetAyah, time, arabic]);

  const fontClass = {
    amiri: "Amiri",
    scheherazade: "Scheherazade New",
  };

  const sizeClass = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

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
            <p
              style={{ fontFamily: fontClass[fontStyle] }}
              className={`text-right leading-loose ${sizeClass[fontSize]}`}
            >
              {ayah.text}
            </p>

            <p className={`mt-3 text-gray-600 ${sizeClass[fontSize]}`}>
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