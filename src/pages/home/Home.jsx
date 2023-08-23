import React, { useEffect } from "react";
import "./homeStyle.css";
import Nav from "../../comps/nav/Nav";
import { gsap } from "gsap";

const Home = () => {
  //
  const fName = "Mayank";
  const lName = "Bisht";
  const fNameArr = fName.split("");
  const lNameArr = lName.split("");
  //
  const heroMouseMove = (e) => {
    gsap.to(".bgColorCircle", {
      top: `${e.pageY}px`,
      left: `${e.pageX}px`,
      duration: 0.1,
    });
  };
  //
  const heroMouseLeave = () => {
    if (window.innerWidth < 551) {
      gsap.to(".bgColorCircle", {
        top: "-5%",
        left: "50%",
        duration: 0.2,
      });
    } else {
      gsap.to(".bgColorCircle", {
        top: "50%",
        left: "50%",
        duration: 0.2,
      });
    }
  };

  useEffect(() => {
    let h1Media = gsap.matchMedia();
    h1Media.add("(min-width:550px)", () => {
      gsap.from(".fNameSpan, .lNameSpan", {
        top: 160,
        duration: 0.5,
        stagger: 0.1,
      });
    });
    h1Media.add("(width < 550px)", () => {
      let tl = gsap
        .timeline()
        .from(".fNameSpan", {
          top: -160,
          duration: 0.5,
          stagger: 0.1,
        })
        .from(
          ".lNameSpan",
          {
            top: 160,
            duration: 0.5,
            stagger: 0.1,
          },
          "0.3"
        );
    });
  }, []);

  return (
    <div
      className="homeContainer"
      onMouseMove={heroMouseMove}
      onMouseLeave={heroMouseLeave}
    >
      <Nav />

      <h1>
        <div className="fName">
          {fNameArr.map((span, index) => {
            return (
              <span className="fNameSpan" key={index}>
                {span}
              </span>
            );
          })}
        </div>
        <div className="lName">
          {lNameArr.map((span, index) => {
            return (
              <span className="lNameSpan" key={index}>
                {span}
              </span>
            );
          })}
        </div>
      </h1>

      <div className="bgColorCircle"></div>
    </div>
  );
};

export default Home;
