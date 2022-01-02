import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ImgProfile from "../../../images/person1.jpg";

const Profile = () => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img className="activator" src={ImgProfile} alt="Akash" />
          <Link className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons activator">more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Gajulapalli Akash
          </span>
          <p>Full Stack Web Developer</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Follow Me
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
            <a href="https://www.facebook.com/akash.gajulapalli/">
              <i className="fab fa-facebook-f grey-text text-darken-4 social_style"></i>
            </a>
            <a href="https://github.com/akashgajulapalli">
              <i className="fab fa-github grey-text text-darken-4 social_style"></i>
            </a>
            <a href="https://www.linkedin.com/in/gajualpalliakash/">
              <i className="fab fa-linkedin grey-text text-darken-4 social_style"></i>
            </a>
            <a href="https://www.instagram.com/its_me__akash/">
              <i className="fab fa-instagram grey-text text-darken-4 social_style"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
