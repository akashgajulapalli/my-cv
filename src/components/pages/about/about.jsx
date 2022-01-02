import React from "react";

const About = () => {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            I am Akash. I am studying M.Tech(Integrated software Engineering) in VIT vellore campus. 
          </p> 
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Flat no: 511, Vasavi appartments, Habbibullah street, Kadapa
              </p>
              <p>
                <strong>Email:</strong> gajulapalliaksh23@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 9440042842
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - Telugu
              </p>
              <p>
                <strong>Second Language</strong> - English
              </p>
              <p>
                <strong>Third Language</strong> - Hindi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
