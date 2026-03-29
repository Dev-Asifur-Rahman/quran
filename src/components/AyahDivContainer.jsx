"use client";

const AyahDivContainer = ({ ayah, index, translation }) => {
  return (
    <div
      id={ayah?.number}
      key={ayah?.number}
      className="p-4 rounded-xl bg-base-200"
    >
      <p className="text-right text-2xl leading-loose font-serif">
        {ayah.text}
      </p>

      <p className="mt-3 text-gray-600 text-base">
        {translation?.ayahs?.[index]?.text}
      </p>

      <div className="flex justify-center mt-3">
        <span className="badge badge-outline">{ayah.numberInSurah}</span>
      </div>
    </div>
  );
};

export default AyahDivContainer;
