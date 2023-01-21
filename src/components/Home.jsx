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
              As a Full Stack developer with over four years of professional
              experience, I have a strong skillset in Javascript and Java. I am
              proficient in using React Native and ReactJS to build efficient
              and user-friendly mobile and web applications and have a solid
              understanding of REST APIs for seamless and dynamic user
              experiences. My experience in building backend APIs using Node.js
              allows me to efficiently handle data flow and interactions between
              the front end and the back end of a project. I am able to
              architect, enhance, and recommend software designs based on
              business objectives, timelines, and resource constraints, and
              strive to deliver high-quality work while staying up-to-date with
              the latest tools and technologies in the industry.
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
