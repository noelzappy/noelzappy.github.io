import Image from "next/image";
import Social from "../../Social";

const ModalOne = ({ project }) => {
  return (
    <div className="box_inner">
      <div className="description_wrap scrollable">
        <div className="image">
          <div
            className="main"
            style={{
              backgroundImage: `url(${project?.mainImage})`,
            }}
          ></div>
        </div>
        {/* END IMAGE */}
        <div className="portfolio_main_title">
          <h3>{project?.title}</h3>
          <span>{project?.category}</span>
        </div>
        {/* END portfolio_main_title */}
        <div className="main_details">
          <div className="textbox">{project?.descriptions}</div>

          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span>
                <span>{project?.client}</span>
              </li>

              <li>
                <span className="first">Links</span>
                {project?.links?.map((link) => (
                  <span style={{ display: "block" }}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "blue",
                        textDecoration: "underline",
                      }}
                    >
                      {link.name}
                    </a>
                  </span>
                ))}
              </li>

              <li>
                <span className="first">Tech. Stack</span>
                {project?.stack?.map((item) => (
                  <span>{item}, </span>
                ))}
              </li>

              <li>
                <span className="first">Share</span>
                <Social />
                {/* END SOCIAL SHARE */}
              </li>
            </ul>
          </div>
        </div>
        {/* main_details */}

        <div className="additional_images">
          <ul className="gallery_zoom">
            {project?.images?.map((img) => (
              <li key={img}>
                <div className="list_inner">
                  <div className="my_image">
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "contain",
                      }}
                    ></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalOne;
