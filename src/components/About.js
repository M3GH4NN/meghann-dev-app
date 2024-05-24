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
                src="images/IMG_20220410_183500.jpg"
                alt="Meghann Cunningham"
              />
<<<<<<< HEAD
=======
              {/* <img
                className="dog-pic"
                src="images/dogs2.jpg"
                alt="Tan mini poodle and black cockapoo"
              /> */}
>>>>>>> 8eb99403181eef0d0214374bec9b3619cdb23b5e
            </div>

            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{resumeData.aboutme}</p>
              <div className="row">
                <div className="columns contact-details">
<<<<<<< HEAD
                  <br />
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{resumeData.name}</span>
                    {/* <br></br> */}
                    {/* <span>{resumeData.address}</span> */}
=======
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{resumeData.name}</span>
                    <br></br>
                    <span>{resumeData.address}</span>
>>>>>>> 8eb99403181eef0d0214374bec9b3619cdb23b5e
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
