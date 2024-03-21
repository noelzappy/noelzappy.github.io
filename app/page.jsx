import Home from "@/components/home/Home";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export const metadata = {
  title: "Emmanuel Yeboah (Zappy) - A skilled fullstack software developer.",
  description:
    "Explore the portfolio of Emmanuel Yeboah (Zappy), a skilled fullstack software developer.",
};

const MainRoot = () => {
  return (
    <>
      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <Home />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainRoot;
