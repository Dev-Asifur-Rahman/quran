"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SurahTBody = ({ surah, index }) => {
  const router = useRouter();
  const handleRoute = (id) => {
    router.push(`/surah/${id}`);
  };
  return (
    <tr
      onClick={() => handleRoute(surah?.number)}
      className="hover:underline hover:cursor-pointer"
    >
      <th className="text-center">{index + 1}</th>
      <td className="font-medium">{surah?.name}</td>
      <td className="text-center">{surah?.englishName}</td>
      <td className="text-center">{surah?.englishNameTranslation}</td>
      <td className="text-center">{surah?.numberOfAyahs}</td>
      <td className="text-center">{surah?.revelationType}</td>
    </tr>
  );
};

export default SurahTBody;
