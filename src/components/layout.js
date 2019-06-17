import React from "react"
import Header from "./header"
import logo from "../assets/logo.jpg"
import './layout.css'
import Footer from '../components/footer'

export default ({ children }) => (
  <div style={{ margin: `1rem auto`, maxWidth: 650, maxHeight:50, padding: `0.1rem` }}>
    <div className="header">
      {/* <img src={logo} style={{ width: 42, height: 42, marginTop: `0.1rem` }} /> */}
      <Header />
    </div>
    <div className="layoutBody">
      {children}      
    </div>
    <div>
      <Footer/>
    </div>
  </div>
)