import React from "react";

const ContactForm = () => {

  return (
    <form action="https://formspree.io/f/mwkdpnal" method="POST">
      <div className="formDivs formDiv1">
        <span>Send a Message</span>
        <i className="fa-solid fa-envelope"></i>
      </div>
      <div className="formDivs formDiv2">
        <input
          type="text"
          autocomplete="off"
          name="First Name"
          required
          placeholder="First Name"
        />
        <input
          type="text"
          autocomplete="off"
          name="Last Name"
          placeholder="Last Name"
        />
      </div>
      <div className="formDivs formDiv3">
        <input
          type="email"
          autocomplete="off"
          name="Email"
          required
          placeholder="Email"
        />
        <input
          type="number"
          autocomplete="off"
          name="Number"
          required
          placeholder="Number"
        />
      </div>
      <div className="formDivs formDiv4">
        <input
          type="text"
          autocomplete="off"
          name="Subject"
          required
          placeholder="Subject"
        />
        <input
          type="text"
          autocomplete="off"
          name="Message"
          required
          placeholder="Message..."
        />
      </div>
      <div className="formDivs formDiv5">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
