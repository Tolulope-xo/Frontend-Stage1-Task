import React from "react";
import profile__img from "../assets/profile__img.png";
import arrow from "../assets/Icon (1).png";
import share_button from "../assets/_Avatar share button.png";
import "../Header/header.scss";
const header = () => {
  return (
    <div className="header">
      <div className="profile">
        <img className="profile_img" id="profile__img" src={profile__img} alt="profile__image" />
        <p>Annette Black</p>
      </div>
      <div className="icons">
        <img className="arrow" src={arrow} alt="arrow" />
        <img className="share" src={share_button} alt="share" />
      </div>
    </div>
  );
};

export default header;
