import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import resumeData from "./resumeData";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
