import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Config from "../config";

const HomeLight = () => {
  const [isDark, setIsDark] = useState(false);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "light");
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "dark");
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("-light");
      setIsDark(true);
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme-color");
    if (theme === "dark") {
      document.querySelector("body").classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return (
    <>
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}
      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" to="/">
                  <img src="/assets/img/logo/dark.png" alt="brand" />
                </Link>
              </div>
              {/* END LOGO */}

              <div className="menu">
                <ul>
                  {Config.menu.map((item, index) => {
                    return (
                      <Tab key={index.toString()}>
                        <img
                          className="svg"
                          src={`/assets/img/svg/${item.icon}.svg`}
                          alt={item.icon}
                        />
                        <span className="menu_content">{item.name}</span>
                      </Tab>
                    );
                  })}
                </ul>
              </div>
              {/* END MENU */}

              <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Emmanuel</p>
              </div>
              {/* END COPYRIGHT */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div className="container">
                {Config.pages.map((item, index) => {
                  return (
                    <TabPanel key={index.toString()}>
                      <div data-aos="fade-right" data-aos-duration="1200">
                        <item.component />
                      </div>
                    </TabPanel>
                  );
                })}

                {/* END CONTACT MENU TAB CONTENT */}
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
