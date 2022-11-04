import React from "react";
import "./contact.scss";
import Form from "../../Components/Form/form";
import Button from "../../Components/Button/button";
import Footer from "../../Components/Footer/footer";
const contact = () => {
  return (
    <div className="contact_page">
      <div className="contact">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <Form />
      <Button />
      <Footer />
    </div>
  );
};

export default contact;
