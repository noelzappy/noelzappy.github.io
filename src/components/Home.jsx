import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Emmanuel Yeboah</h3>
            <p className="job">
              Full Stack developer with 4+ years of experience, strong in
              Javascript and Java. Proficient in React Native and ReactJS,
              skilled in building efficient mobile and web applications. Solid
              understanding of REST APIs, experienced in Node.js for backend API
              development. Able to architect, enhance and recommend software
              designs, deliver high-quality work, and stay current with industry
              tools and technologies. Strong problem-solving skills and ability
              to understand and develop software for organizations.
            </p>
            <p
              onClick={() => {
                const link = document.createElement("a");
                link.href = "mailto:noelzappy@gmail.com";
                link.target = "_blank";
                link.click();
              }}
              className="job"
              style={{ cursor: "pointer" }}
            >
              noelzappy@gmail.com
            </p>

            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
