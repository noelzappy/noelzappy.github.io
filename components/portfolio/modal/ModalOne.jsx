import Social from "../../Social";

const ModalOne = ({ project }) => {
  return (
    <div className="box_inner">
      <div className="description_wrap scrollable">
        <div className="image">
          <img src="/img/thumbs/4-3.jpg" alt="tumb" />
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
                <span className="first">Date</span>
                <span>{project?.date}</span>
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
