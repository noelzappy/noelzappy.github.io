"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "react-tooltip/dist/react-tooltip.css";
import Modal from "react-modal";
import Image from "next/image";
import ModalOne from "./modal/ModalOne";
import { Tooltip as ReactTooltip } from "react-tooltip";
import portfolioData from "@/data/portfolioData";

const renderTab = (category, setSelectedProject) => {
  const data = portfolioData.filter((item) => item.cat.includes(category));
  return (
    <TabPanel>
      <ul
        className="portfolio_list"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        {data.map((item) => (
          <li key={item.id}>
            <div className="inner">
              <div className="entry tokyo_tm_portfolio_animation_wrap">
                <Image
                  width={300}
                  height={300}
                  src={item.img}
                  alt={item.title}
                  data-tip
                  data-for={item.title}
                  data-tooltip-id={item.title}
                  onClick={() => setSelectedProject(item)}
                />

                <ReactTooltip
                  id={item.title}
                  place="bottom"
                  variant="light"
                  float
                  render={() => (
                    <div className="tooltip-wrapper">
                      <h5>{item.title}</h5>
                      <span>{item.category}</span>
                    </div>
                  )}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </TabPanel>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Gallery>
        <Tabs>
          {/* START FILTER TABLIST */}
          <TabList>
            <Tab>All</Tab>
            <Tab>Web Apps</Tab>
            <Tab>Mobile Apps</Tab>
            <Tab>Fullstack</Tab>
            <Tab>Wordpress</Tab>
          </TabList>
          {/* END FILTER TABLIST */}

          <div className="list_wrapper">
            {/* START ALL PORTFOLIO */}
            <TabPanel>
              <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                {portfolioData.map((item) => (
                  <li key={item.id}>
                    <div className="inner">
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <Image
                          width={300}
                          height={300}
                          src={item.img}
                          alt={item.title}
                          data-tip
                          data-for={item.title}
                          data-tooltip-id={item.title}
                          onClick={() => setSelectedProject(item)}
                        />

                        <ReactTooltip
                          id={item.title}
                          place="bottom"
                          variant="light"
                          float
                          render={() => (
                            <div className="tooltip-wrapper">
                              <h5>{item.title}</h5>
                              <span>{item.category}</span>
                            </div>
                          )}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </TabPanel>
            {renderTab("web", setSelectedProject)}
            {renderTab("mobile", setSelectedProject)}
            {renderTab("fullstack", setSelectedProject)}
            {renderTab("wordpress", setSelectedProject)}
            {/* END ALL PORTFOLIO */}
          </div>
          {/* END LIST WRAPPER */}
        </Tabs>
      </Gallery>

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        ariaHideApp={false}
        isOpen={!!selectedProject}
        onRequestClose={() => {
          setSelectedProject(null);
        }}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button
            className="close-modal"
            onClick={() => {
              setSelectedProject(null);
            }}
          >
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          {selectedProject && <ModalOne project={selectedProject} />}
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
