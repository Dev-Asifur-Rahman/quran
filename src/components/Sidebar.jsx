"use client";

import { useEffect, useState } from "react";

const Sidebar = () => {
  const [fontStyle, setFontStyle] = useState("amiri");
  const [fontSize, setFontSize] = useState("md");

  useEffect(() => {
    const savedFont = localStorage.getItem("quran-font-style");
    const savedSize = localStorage.getItem("quran-font-size");

    if (savedFont) setFontStyle(savedFont);
    if (savedSize) setFontSize(savedSize);
  }, []);

  const changeFontStyle = (style) => {
    setFontStyle(style);
    localStorage.setItem("quran-font-style", style);
  };

  const changeFontSize = (size) => {
    setFontSize(size);
    localStorage.setItem("quran-font-size", size);
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <label htmlFor="my-drawer-5" className="drawer-button btn">
          ☰
        </label>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-5" className="drawer-overlay"></label>

        <ul className="menu bg-base-200 min-h-full w-60 md:w-80 p-4">
          <li>
            <details>
              <summary>Choose Font Style</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a onClick={() => changeFontStyle("amiri")}>Amiri</a>
                </li>
                <li>
                  <a onClick={() => changeFontStyle("scheherazade")}>
                    Scheherazade
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Choose Font Size</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a onClick={() => changeFontSize("sm")}>Small</a>
                </li>
                <li>
                  <a onClick={() => changeFontSize("md")}>Medium</a>
                </li>
                <li>
                  <a onClick={() => changeFontSize("lg")}>Large</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
