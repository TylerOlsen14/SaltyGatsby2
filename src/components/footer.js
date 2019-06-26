// import React, { Component } from "react"
import React from "react"
import finn from "../assets/Finn.jpg"
import "./footer.css"

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
      <p>Contact:
        <br/>
        <i class="fas fa-phone-square"> | (801) 661-9191</i>
        <br/>
        <i class="fas fa-envelope"> | Tyler.Olsen1@gmail.com</i>
        <br/>
        <i class="fab fa-github">
          <strong> |
            https://github.com/TylerOlsen14
          </strong>
        </i>
        <br/>
      </p>
    </div>
  </div>
)

export default Footer
