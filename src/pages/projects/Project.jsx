import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./projectStyle.css";
import DataApi from "./DataApi";
import ClickDataApi from "./ClickDataApi";
import { gsap } from "gsap";

const Project = () => {
  const styleNone = { display: "none" };
  const styleDisplay = { display: "" };
  const [style, setStyle] = useState(styleNone);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(null);

  const closeBtn = () => {
    setSelectedSlideIndex(null);
    setStyle(styleNone);
  };

  const swiper = (index) => {
    setSelectedSlideIndex(index);
    setStyle(styleDisplay);
  };

  useEffect(() => {
    gsap.from(".projectTextContainer", {
      scale: 0.95,
      opacity: 0,
      delay: 0.5,
      duration: 2,
    });
    gsap.from(".clickDiv", {
      opacity: 0,
      duration: 5,
    });
  }, []);

  return (
    <div className="projectContainer">
      <div className="navBgColor" style={style}></div>
      <div className="projectTextContainer">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {DataApi.map((elem, index) => {
            return (
              <SwiperSlide
                key={index}
                className={elem.class}
                onClick={() => swiper(index)}
              >
                <img src={elem.img} alt={elem.hoverText} />
                <h2>{elem.hoverText}</h2>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {selectedSlideIndex !== null && (
          <div className="clickDiv">
            <i onClick={closeBtn} className="fa-solid fa-circle-xmark"></i>
            <video
              src={ClickDataApi[selectedSlideIndex].video}
              autoPlay
              muted
              loop
            ></video>
            <h2>{ClickDataApi[selectedSlideIndex].text}</h2>
            <p>{ClickDataApi[selectedSlideIndex].info}</p>
            <ul>
              <span>Technologies Used</span>
              <div className="lists">
                {ClickDataApi[selectedSlideIndex].tech.li1 && (
                  <li>{ClickDataApi[selectedSlideIndex].tech.li1}</li>
                )}
                {ClickDataApi[selectedSlideIndex].tech.li2 && (
                  <li>{ClickDataApi[selectedSlideIndex].tech.li2}</li>
                )}
                {ClickDataApi[selectedSlideIndex].tech.li3 && (
                  <li>{ClickDataApi[selectedSlideIndex].tech.li3}</li>
                )}
                {ClickDataApi[selectedSlideIndex].tech.li4 && (
                  <li>{ClickDataApi[selectedSlideIndex].tech.li4}</li>
                )}
              </div>
            </ul>
            <div className="liveLink">
              <span>Live Link</span>
              <a href={ClickDataApi[selectedSlideIndex].link}>Click Here</a>
            </div>
            <div className="githubRepo">
              <span>Github Repo</span>
              <a href={ClickDataApi[selectedSlideIndex].githubRepo}>
                Click Here
              </a>
            </div>
          </div>
        )}

        {selectedSlideIndex !== null && <div className="clickDivBg"></div>}
      </div>
    </div>
  );
};

export default Project;
