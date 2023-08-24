import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <div className="contactInfoDivs contactInfoDiv1">
        <span>Contact Info</span>
      </div>
      <div className="contactInfoDivs contactInfoDiv2">
        <i className="fa-solid fa-envelope"></i>
        <span>mbisht8368@gmail.com</span>
      </div>
      <div className="contactInfoDivs contactInfoDiv3">
        <i className="fa-solid fa-phone"></i>
        <span>Soon</span>
      </div>
      <div className="contactInfoDivs contactInfoDiv4">
        <a href="https://www.linkedin.com/in/mayankbishtmb/" target="_main">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/mayank__bisht__mb/" target="_main">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
