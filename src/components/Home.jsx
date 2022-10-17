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
              I'm a Full stack developer with over four years of professional
              experience developing backend and frontend (Web and Mobile)
              applications using Javascript, Java, and Dart/Flutter. I can
              architect, and enhance highly scalable systems, by leveraging
              best-in-class tools. I also exercise judgment in determining and
              recommending software designs based on business objectives,
              timelines, and resource constraints.
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
