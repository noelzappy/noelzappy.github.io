import React from "react";

const SocialShare = [
  {
    iconName: "github",
    link: "https://www.github.com/noelzappy",
  },
  { iconName: "twitter", link: "https://twitter.com/noelzappy" },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/noelzappy",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={val.link}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
