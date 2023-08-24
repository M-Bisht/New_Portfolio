import React from "react";
import "./contactStyle.css";
import Nav from "../../comps/nav/Nav";
import { gsap } from "gsap";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
const Contact = () => {
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
  return (
    <div
      className="contactContainer"
      onMouseMove={heroMouseMove}
      onMouseLeave={heroMouseLeave}
    >
      <Nav />
      <div className="formContainer">
        <ContactForm />
        <ContactInfo />
      </div>
      <div className="bgColorCircle"></div>
    </div>
  );
};

export default Contact;
