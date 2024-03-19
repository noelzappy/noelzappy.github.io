"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Emmanuel Yeboah</h3>
            <h4 className="typer">
              <ReactTyped
                strings={[
                  "Software Developer",
                  "Web Developer",
                  "Mobile App Developer",
                  "Fullstack Developer",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
              Experienced Full Stack developer proficient in JavaScript, Java,
              React Native, and ReactJS. Skilled in building efficient mobile
              and web applications, with a strong understanding of REST APIs.
              Excels in software design, problem-solving, and staying current
              with industry technologies.
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
