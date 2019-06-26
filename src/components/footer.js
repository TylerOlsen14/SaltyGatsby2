// import React, { Component } from "react"
import React from "react";
import finn from "../assets/Finn.jpg";
import {
  FaPhoneSquare,
  FaGithubSquare,
  FaEnvelope,
} from 'react-icons/fa';
import "./footer.css";

const Footer = () => (
  <div className="footer">
    <div className="CaptainFinnContainer">
      <img src={finn} className="logoFooter" alt="Captain Finn Web Design" />
      <h3 className="CaptainFinn">
        <p>
          Tucker & co.
          <br/>
          Web Design
        </p>
      </h3>
    </div>
    <div className="contactContainer">
      <strong>
        <p>Contact:
        <br/>
        <FaPhoneSquare /> | (801) 661-9191 AHHHHHH
        <br/>
        <FaEnvelope />
        | Tyler.Olsen1@gmail.com
        <br/>
        <FaGithubSquare /> | https://github.com/TylerOlsen14
        <br/>
        </p>
      </strong>
    </div>
  </div>
)

export default Footer
