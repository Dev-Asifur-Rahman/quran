"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  if (
    pathname.startsWith("/surahs") ||
    pathname.startsWith("/search-ayah") ||
    pathname.startsWith("/surah")
  ) {
    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div> */}

          <div
            onClick={() => router.push("/surahs")}
            className="hover:cursor-pointer"
          >
            <Image
              src="/logos/quran-logo.svg"
              alt="Quran Logo"
              width={120}
              height={40}
            />
          </div>
        </div>
        <SearchBar></SearchBar>
        <div className="navbar-end">
          <div>
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    );
  }
};

export default NavBar;
