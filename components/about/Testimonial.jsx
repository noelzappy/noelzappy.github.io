"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      id: 1,
      text: `His ability to build seamless mobile and web applications using React Native and ReactJS is exceptional!`,
      avatar: "url(/img/testimonials/user.png)",
      name: "Edward Neequaye",
      designation: "CEO, Built Financial Technologies",
    },
    {
      id: 2,
      text: `Emmanuel's ability to understand our idea and develop the software accordingly is commendable.`,
      avatar: "url(/img/testimonials/user.png)",
      name: "Vadim Pilipenko",
      designation: "CEO, Leonardo Inventions",
    },
    {
      id: 3,
      text: `He excels in recommending software designs that aligned well with our business objectives, and his dedication to delivering efficient and user-friendly applications sets him apart.`,
      avatar: "url(/img/testimonials/user.png)",
      name: "Yura Lysyshak",
      designation: "Product Manager, Alvi Beauty Services",
    },
  ];

  return (
    <ul className="testimonila-slider-wrapper">
      <Slider {...settings} arrows={false}>
        {testimonialContent.map((item) => (
          <li key={item.id}>
            <div className="list_inner">
              <div className="text">
                <p>{item.text}</p>
              </div>
              <div className="details">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: item.avatar,
                    }}
                  />
                </div>
                <div className="info">
                  <h3>{item.name}</h3>
                  <span>{item.designation}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  );
};

export default Testimonial;
