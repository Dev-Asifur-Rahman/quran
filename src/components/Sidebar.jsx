const Sidebar = () => {
  return (
    <>
      {" "}
      <div className="drawer drawer-end">
        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-5" className="drawer-button btn ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{" "}
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-5"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-60 md:w-80 p-4">
            {/* Sidebar content here */}
            {/* <ul className="menu menu-horizontal px-1"> */}
            <li>
              <details>
                <summary>Choose Font Style</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Amiri</a>
                  </li>
                  <li>
                    <a>Scheherazade</a>
                  </li>
                </ul>
              </details>
            </li>
            {/* </ul> */}
            <li>
              <details>
                <summary>Choose Font Size</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Small</a>
                  </li>
                  <li>
                    <a>Medium</a>
                  </li>
                  <li>
                    <a>Large</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>{" "}
    </>
  );
};

export default Sidebar;
