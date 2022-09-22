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
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {/* {resumeData.work &&
              resumeData.work.map((item) => {
                console.log(item.Achievements[0]);
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>
                        <ul>
                          <li>
                            <span>&bull;</span> {item.Achievements[0]}
                          </li>
                          <li>
                            <span>&bull;</span> {item.Achievements[1]}
                          </li>
                          <li>
                            <span>&bull;</span> {item.Achievements[2]}
                          </li><li>
                            <span>&bull;</span> {item.Achievements[3]}
                          </li>
                        </ul>
                        <ul></ul>
                      </p>
                    </div>
                  </div>
                );
              })} */}
            {/* {resumeData.work[0] && */}
            {/* resumeData.work.map((item) => { */}
            {/* // console.log(item.Achievements[0]); */}
            {/* return ( */}
            <div className="row item">
              <div className="twelve columns">
                <h3>{resumeData.work[0].CompanyName}</h3>
                <p className="info">
                  {resumeData.work[0].specialization}
                  <span>&bull;</span>{" "}
                  <em className="date">
                    {resumeData.work[0].MonthOfLeaving}{" "}
                    {resumeData.work[0].YearOfLeaving}
                  </em>
                </p>
                <p>
                  <ul>
                    <li>
                      <span>&bull;</span> {resumeData.work[0].Achievements[0]}
                    </li>
                    <li>
                      <span>&bull;</span> {resumeData.work[0].Achievements[1]}
                    </li>
                    <ul>
                      <li>
                        <span>&bull;</span> {resumeData.work[0].Achievements[2]}
                        <ul>
                          <li>
                            <span>&bull;</span>{" "}
                            {resumeData.work[0].Achievements[3]}
                          </li>
                          <li>
                            <span>&bull;</span>{" "}
                            {resumeData.work[0].Achievements[4]}
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>&bull;</span> {resumeData.work[0].Achievements[5]}
                      </li>
                      <li>
                        <span>&bull;</span> {resumeData.work[0].Achievements[6]}
                      </li>
                      <li>
                        <span>&bull;</span> {resumeData.work[0].Achievements[7]}
                      </li>
                    </ul>

                    <li>
                      <span>&bull;</span> {resumeData.work[0].Achievements[8]}
                      <ul>
                        <li>
                          <span>&bull;</span>{" "}
                          {resumeData.work[0].Achievements[9]}
                          <ul>
                            <li>
                              <span>&bull;</span>{" "}
                              {resumeData.work[0].Achievements[10]}
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="row item">
              <div className="twelve columns">
                <h3>{resumeData.work[1].CompanyName}</h3>
                <p className="info">
                  {resumeData.work[1].specialization}
                  <span>&bull;</span>{" "}
                  <em className="date">
                    {resumeData.work[1].MonthOfLeaving}{" "}
                    {resumeData.work[1].YearOfLeaving}
                  </em>
                </p>
                <p>
                  <ul>
                    <li>
                      <span>&bull;</span> {resumeData.work[1].Achievements[0]}
                      <ul>
                        <li>
                          <span>&bull;</span>{" "}
                          {resumeData.work[1].Achievements[1]}
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>&bull;</span> {resumeData.work[1].Achievements[2]}
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="row item">
              <div className="twelve columns">
                <h3>{resumeData.work[2].CompanyName}</h3>
                <p className="info">
                  {resumeData.work[2].specialization}
                  <span>&bull;</span>{" "}
                  <em className="date">
                    {resumeData.work[2].MonthOfLeaving}{" "}
                    {resumeData.work[2].YearOfLeaving}
                  </em>
                </p>
                <p>
                  <ul>
                    <li>
                      <span>&bull;</span> {resumeData.work[2].Achievements[0]}
                    </li>
                    <li>
                      <span>&bull;</span> {resumeData.work[2].Achievements[1]}
                    </li>
                    <li>
                      <span>&bull;</span> {resumeData.work[2].Achievements[2]}
                    </li>
                    <li>
                      <span>&bull;</span> {resumeData.work[2].Achievements[3]}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>
            {/* <div className='bars'> */}
            <ul className="skills">
              {resumeData.skills &&
                resumeData.skills.map((item) => {
                  return (
                    <li>
                      {/* <span className={`bar-expand ${item.skillname.toLowerCase()}`}> */}
                      {/* </span> */}
                      <em>{item.skillname}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        {/* </div> */}
      </section>
    );
  }
}
