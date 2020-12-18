import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function MainMenu() {
  // Menu DropDown
  const [mainMenu, setMainMenu] = useState(false);
  const handleMainMenu = () => {
    setMainMenu(!mainMenu);
  };

  // Fetching menuitems data
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch(`./menu.json`)
      .then((response) => response.json())
      .then(setMenuItems);
  }, []);
  return (
    <>
      <div className="nb-main-menu nb-pl-2 xl:nb-pl-8 nb-pr-2 xl:nb-pr-0 xl:nb-block nb-hidden nb-shadow">
        <ul className="nb-flex nb-flex-col lg:nb-flex-row lg:nb-items-center lg:nb-justify-between nb-text-gray-800">
          <Router>
            {menuItems.map((menuItem) => (
              <li
                key={menuItem.text}
                className="nb-border-b lg:nb-border-b-0 nb-border-gray-300"
                onClick={menuItem.children && handleMainMenu}
              >
                <div
                  className={`${
                    menuItem.children ? "nb-is-mega-menu " : null
                  }nb-pr-2 nb-py-2 nb-text-md nb-capitalize nb-font-bold nb-cursor-pointer`}
                >
                  {menuItem.text}
                  {menuItem.children ? (
                    <i
                      className={
                        menuItem.children && mainMenu
                          ? "las la-angle-up nb-ml-1"
                          : menuItem.children ?
                          "las la-angle-down nb-ml-1"
                          : null
                      }
                    ></i>
                  ) : (
                    ""
                  )}
                  {menuItem.children ? (
                    <div
                      className={`nb-mega-menu nb-bg-white nb-absolute nb-left-0 nb-right-0 nb-p-4 nb-pl-2 xl:nb-pl-8 nb-mt-2 ${
                        mainMenu ? "nb-block" : "nb-hidden"
                      }`}
                    >
                      <div className="nb-w-full nb-grid nb-grid-col-1 lg:nb-grid-cols-4 nb-h-full nb-normal-case">
                        <div className="lg:nb-col-span-1 nb-bg-gray-200 nb-px-4 nb-py-8">
                          <h2 className="nb-text-2xl nb-font-bold nb-mb-2">
                            Over 300 internet domains to choose from
                          </h2>
                          <p className="nb-text-lg nb-text-gray-800 nb-opacity-75 nb-mb-4 nb-font-medium">
                            Take advantage of the new domain promotion.
                          </p>
                          <Link
                            to="#"
                            className="nb-px-8 nb-py-4 nb-bg-blue-500 nb-text-white nb-uppercase nb-text-sm"
                            type="button"
                            title="Learn More"
                          >
                            Learn More
                          </Link>
                        </div>

                        <div className="lg:nb-col-span-3 nb-p-4">
                          <div className="nb-grid nb-grid-cols-3 nb-gap-4">
                          {menuItem.children.map((megaMenu) => (
                            <Link
                              key={megaMenu.name}
                              to="#"
                              title={megaMenu.title}
                              className="nb-flex nb-justify-center nb-text-left nb-items-center nb-text-gray-800 hover:nb-text-gray-900"
                            >
                              <div className="nb-w-1-4">
                                <i className={`${megaMenu.icon} la-3x`}></i>
                              </div>
                              <div className="nb-w-3/4 nb-pl-2">
                                <h2 className="nb-text-md nb-font-bold">
                                  {megaMenu.name}
                                </h2>
                                <p className="nb-text-sm nb-font-medium nb-opacity-75">
                                  {megaMenu.description}
                                </p>
                              </div>
                            </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    null
                  )}
                </div>
              </li>
            ))}
          </Router>
        </ul>
      </div>
    </>
  );
}

export default MainMenu;
