import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Certification",
      resume: [
        {
          id: 1,
          year: "2023",
          institute: "University of the People - USA",
          degree: "Bachelors Degree",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "2024 - NOW",
          institute: "Hubtel",
          degree: "Software Engineer",
        },
        {
          id: 2,
          year: "2022 - NOW",
          institute: "Built Financial Technologies",
          degree: "Senior Mobile Developer",
        },
        {
          id: 3,
          year: "2020 - 2022",
          institute: "Wordnox Technologies LTD",
          degree: "Web Developer",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
