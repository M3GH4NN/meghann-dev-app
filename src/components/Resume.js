import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item, index) => (
                <div className="row item" key={index}>
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.work.map((item, index) => (
              <div className="row item" key={index}>
                <div className="twelve columns">
                  <h3>{item.CompanyName}</h3>
                  <p className="info">
                    {item.specialization}
                    <span>&bull;</span>{" "}
                    <em className="date">
                      {item.MonthOfLeaving} {item.YearOfLeaving}
                    </em>
                  </p>
                  <ul>
                    {item.Achievements &&
                      item.Achievements.filter((a) => a && a.trim() !== "").map(
                        (achievement, i) => (
                          <li key={i}>
                            <span>&bull;</span> {achievement}
                          </li>
                        )
                      )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <ul className="skills">
              {resumeData.skills &&
                resumeData.skills.map((item, index) => (
                  <li key={index}>
                    <em>{item.skillname}</em>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
