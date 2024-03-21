import React from "react";

const Skills = () => {
  const skillsContent = [
    {
      id: 1,
      colClass: "left",
      title: "Programming Languages",
      progress: [
        {
          id: 1,
          skillName: "JavaScript/TypeScript",
          skillValue: "98",
        },
        {
          id: 2,
          skillName: "Java",
          skillValue: "75",
        },
        {
          id: 3,
          skillName: "Golang",
          skillValue: "60",
        },
        {
          id: 4,
          skillName: "Python",
          skillValue: "70",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Frontend & Backend",
      progress: [
        {
          id: 1,
          skillName: "ReactJS",
          skillValue: "95",
        },
        {
          id: 2,
          skillName: "React Native",
          skillValue: "99",
        },
        {
          id: 3,
          skillName: "NodeJS",
          skillValue: "90",
        },
        {
          id: 4,
          skillName: "Express",
          skillValue: "90",
        },
      ],
    },
  ];
  return (
    <>
      {skillsContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>

          <div className="tokyo_progress">
            {item?.progress?.map((skill) => (
              <div
                className="progress_inner"
                data-value={item.skillValue}
                key={skill.id}
              >
                <span>
                  <span className="label">{skill?.skillName}</span>
                  <span className="number">{skill?.skillValue}%</span>
                </span>
                <div className="background">
                  <div className="bar">
                    <div
                      className="bar_in"
                      style={{ width: skill?.skillValue + "%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
