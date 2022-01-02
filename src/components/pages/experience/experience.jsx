import React from "react";

const experienceData = [
  {
    fromDate: "April 2020",
    toDate: "May 2020",
    title: "Intern",
    description:
      "Worked as summer intern at IRUS infotech pvt ltd. Worked on a project on recognizing facial expresssions of people and a review system based on their expressions.",
  },
  {
    fromDate: "July 2021",
    toDate: "Present",
    title: "Intern",
    description:
      "It is a full stack developer program by PROGRAD. We have been training in HTML, CSS, Java Script, React JS, Node JS, Mongo DB.",
  },
];

const Experience = () => {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          {experienceData.length > 0
            ? experienceData.map((item) => {
                return (
                  <div className="row mt-top">
                    <div className="col xl4 l4 m6 s12">
                      <p className="teal year_exp white-text">
                        {item.fromDate} - {item.toDate}
                      </p>
                    </div>
                    <div className="col xl8 l8 m6 s12">
                      <blockquote className="no-pad">
                        <h6 className="no-pad mt-bottom">
                          <strong>{item.title}</strong>
                        </h6>
                        <p>{item.description}</p>
                      </blockquote>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Experience;
