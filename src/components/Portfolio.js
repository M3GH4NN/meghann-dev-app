import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Personal Projects</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-halves s-bgrid-thirds cf"
            >
              {resumeData.portfolio && resumeData.portfolio.length > 0 ? (
                resumeData.portfolio.map((item, index) => (
                  <div key={index} className="columns portfolio-item">
                    <div className="item-wrap">
                      <a
                        href={item.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={item.imgurl}
                          alt={item.name || "Project Image"}
                        />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p>No personal projects to display.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
