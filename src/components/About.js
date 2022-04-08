import React, { Component } from "react";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    // TODO: fix picture scaling
    // Update pictures
    return (
      <div>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="images/Snapchat-435441263.jpg"
                alt="Meghann Cunningham"
              />
              <img
                className="dog-pic"
                src="images/dogs.jpeg"
                alt="Tan mini poodle and black cockapoo puppy"
              />
            </div>

            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{resumeData.aboutme}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{resumeData.name}</span>
                    <br></br>
                    <span>{resumeData.address}</span>
                    <br></br>
                    <a href={"mailto:" + resumeData.email}>
                      {resumeData.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
