import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/2.jpg",
    name: "Emmanuel Yeboah",
    designation: "Fullstack Developer",
    text: (
      <>
        <p>
        Hi, I'm Emmanuel Yeboah a seasoned Full Stack developer with over four years of experience. I'm skilled in JavaScript, TypeScript, and GoLang.
        </p>
        <p>
        I excel in building efficient and user-friendly mobile and web applications using React Native and ReactJS. With a strong grasp of REST APIs, I seamlessly integrate frontend and backend technologies. I am adept at architecting software designs aligned with business goals, delivering high-quality work, and staying updated with industry trends. I thrive on problem-solving and have a proven track record of developing complex software for organizations.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
