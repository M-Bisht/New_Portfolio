import React from "react";
import Nav from "../../comps/nav/Nav";
import "./aboutStyle.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCube, EffectCoverflow, Pagination } from "swiper/modules";
import ImgDataApi from "./ImgDataApi";

const About = () => {
  const span =
    "Hi, I'm Mayank Bisht, a 19-year-old front-end web developer from Delhi, India. I finished my 10th and 12th grades at Sarvodaya Bal Vidyalaya, CBSE. Right now, I'm studying various technologies to boost my career in the tech field. I love creating cool websites, and I'm always learning new things. My goal is to make websites that people enjoy using.";
  const spanArr = span.split("");
  //

  useEffect(() => {
    gsap.to(".aboutDivSpans", {
      opacity: 1,
      duration: 0.03,
      stagger: 0.01,
    });
  });
  //
  const imgCall = (className) => {
    return ImgDataApi.map((elem, ind) => {
      return (
        <SwiperSlide key={ind} className={className}>
          <img src={elem.img} alt="Technologies I am Familiar With" />
        </SwiperSlide>
      );
    });
  };
  //
  const width = window.innerWidth;
  const customHtml = () => {
    if (width > 900) {
      return (
        <Swiper
          className="aboutCube"
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 1,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
        >
          {imgCall()}
        </Swiper>
      );
    } else {
      return (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          // pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="slideshowEffect"
        >
          {imgCall("slideShowSlides")}
        </Swiper>
      );
    }
  };
  //
  return (
    <div className="aboutContainer">
      <Nav />
      <div className="aboutDiv1">
        <p>
          {spanArr.map((span, ind) => {
            return (
              <span key={ind} className="aboutDivSpans">
                {span}
              </span>
            );
          })}
        </p>
      </div>
      <div className="aboutDiv2">{customHtml()}</div>
    </div>
  );
};

export default About;
