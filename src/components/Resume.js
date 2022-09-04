import React from "react";

function Resume() {
  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Resume</span>
              <h3>View My Resume</h3>
            </div>
          </div>
        </div>

        <iframe
          src="assets/My_Resume.pdf"
          title="Resume"
          style={{
            width: "100%",
            height: "100vh",
          }}
        />
      </div>
    </>
  );
}

export default Resume;
