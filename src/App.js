import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./components/resumeData";
import GameDemo from "./components/Game";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Header resumeData={resumeData} /> */}
        {/* <About resumeData={resumeData} /> */}
        {/* <Resume resumeData={resumeData} /> */}
        {/* <Portfolio resumeData={resumeData} /> */}
        {/* <ContactUs resumeData={resumeData} /> */}
        {/* <Footer resumeData={resumeData} /> */}
        <GameDemo />
      </div>
    );
  }
}
export default App;
