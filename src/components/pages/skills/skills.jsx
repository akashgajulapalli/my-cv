import React from "react";
const skillsData = [
  { technology: "HTML", knowledge: "89%" },
  { technology: "CSS", knowledge: "100%" },
  { technology: "JavaScript", knowledge: "90%" },
  { technology: "React JS", knowledge: "95%" },
  { technology: "Java", knowledge: "90%" },
  { technology: "Node JS", knowledge: "70%" },
];

const Skills = () => {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROFESSIONAL SKILLS</strong>
          </h6>
          {skillsData.length > 0
            ? skillsData.map((item) => {
                return (
                  <div className="row mt-top">
                    <div className="col s6">
                      <p>{item.technology}</p>
                      <div className="progress grey lighten-1">
                        <div
                          className="determinate blue"
                          style={{ width: item.knowledge }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
          {/* <div className="row mt-top">
            <div className="col s6">
              <p>HTML</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "89%" }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>CSS</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>JAVASCRIPT</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>React JS</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>Java</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>Node JS</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
