import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./projectStyle.css";
import Nav from "../../comps/nav/Nav";
import DataApi from "./DataApi";

const Project = () => {
  const width = window.innerWidth;
  const customHtml = () => {
    if (width > 900) {
      return (
        <Swiper
          className="swiperContainer"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {DataApi.map((elem, ind) => {
            return (
              <SwiperSlide className="swiperSlide" key={ind}>
                <img className="slideImg" src={elem.img} alt={elem.hoverText} />
                <h2 className="slideHoverH2">{elem.hoverText}</h2>
              </SwiperSlide>
            );
          })}
        </Swiper>
      );
    } else {
      return DataApi.map((elem, ind) => {
        return (
          <div className="imgContainerMobile" key={ind}>
            <img className="slideImg" src={elem.img} alt={elem.hoverText} />
            <h2 className="slideHoverH2">{elem.hoverText}</h2>
          </div>
        );
      });
    }
  };
  return (
    <div className="projectContainer">
      <Nav />
      {customHtml()}
    </div>
  );
};

export default Project;
