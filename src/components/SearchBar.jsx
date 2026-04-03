"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const trimmedValue = searchValue.trim().toLowerCase();

      if (trimmedValue.length !== 0) {
        try {
          const res = await fetch(
            `https://api.alquran.cloud/v1/search/${trimmedValue}/all/en.sahih`,
          );
          const data = await res.json();

          setSearchResult(data?.data?.matches?.slice(0, 6) || []);
        } catch (err) {
          console.error(err);
        }
      } else {
        setSearchResult([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleRoute = (result) =>{
    router.push(`/surah/${result?.surah?.number}?ayah=${result?.numberInSurah}&time=${Date.now()}`)
    setSearchResult([])
  }

  return (
    <div className="navbar-center flex w-[45%] justify-center relative">
      <label className="input w-full">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          onChange={handleSearch}
          type="search"
          className=""
          required
          placeholder="Search Ayah"
        />
      </label>
      {searchResult?.length !== 0 && (
        <ul className="menu z-10 bg-base-200 rounded-box w-full absolute top-full mt-1">
          {searchResult?.map((result, index) => {
            return (
              <li key={index}>
                <a onClick={()=>handleRoute(result)}>{`${result?.surah?.englishName} : Ayah - ${result?.numberInSurah}`}</a>
              </li>
            );
          })}
        </ul>
      )}
      {/* <ul className="menu menu-horizontal px-1"> <li> <a>Item 1</a> </li> <li> <details> <summary>Parent</summary> <ul className="p-2 bg-base-100 w-40 z-1"> <li> <a>Submenu 1</a> </li> <li> <a>Submenu 2</a> </li> </ul> </details> </li> <li> <a>Item 3</a> </li> </ul> */}
    </div>
  );
};

export default SearchBar;
