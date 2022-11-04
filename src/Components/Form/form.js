import React from "react";
import "./form.scss";
const form = () => {
    const myName = "Tolulope";
  return (
    <div className="form">
      <div className="name_container">
        <form className="name">
          <label>First Name</label>
          <br />
          <input
            id="first_name"
            className="container_box"
            type="text"
            placeholder="Enter your first name"
            required
          />
        </form>
        <form className="name">
          <label>Last Name</label>
          <br />
          <input
            id="last_name"
            className="container_box"
            type="text"
            placeholder="Enter your last name"
            required
          />
        </form>
      </div>
      <div className="email">
        <form>
          <label>Email</label>
          <br />
          <input
            id="email"
            className="container_mail"
            type="email"
            placeholder="yourname@email.com"
            required
          />
        </form>
        <div className="message">
          <label>Message</label>
          <br />
          <textarea
            id="message"
            className="container_message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            required
          ></textarea>
        </div>
        <div className="checkbox">
          <label>
            <input className="container_checkbox" type="checkbox" />
            You agree to providing your data to {myName} who may contact
            you.{" "}
          </label>
        </div>
      </div>
    </div>
  );
};

export default form;
