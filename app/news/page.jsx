import News from "@/components/news/News";
import Sidebar from "@/components/sidebar/Sidebar";
export const metadata = {
  title:
    "Blog Posts || Emmanuel Yeboah (Zappy) - A skilled fullstack software developer.",
};
const index = () => {
  return (
    <>
      {/* End page title for seo */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <div className="container">
                <div className="tokyo_tm_news">
                  <div className="tokyo_tm_title">
                    <div className="title_flex">
                      <div className="left">
                        <span>Blog</span>
                        <h3>Latest Posts</h3>
                      </div>
                    </div>
                  </div>
                  {/* END TITLE */}
                  <News />
                </div>
              </div>
              {/* End .container */}
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
