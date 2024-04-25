import "./aboutMe.css";
import myImage from "../../../images/16602146306723.png";
import squair from "../../../images/Group 224.png";
import Ellipse from "../../../images/Ellipse 17.png";

import Imageaboutme from "../../imageAboutMe/imageAboutMe";
import MainTitle from "../../MainTitle/MainTitle";

const aboutMe = () => {
  return (
    <div id="About Me" className="about-me">
      <div className="container d-flex justify-content-around">
        <div className="image position-relative ms-5 d-none d-lg-block">
          <Imageaboutme url={myImage} className="me" />
          <Imageaboutme url={squair} className="squair position-absolute" />
          <Imageaboutme url={Ellipse} className="ellipse position-absolute" />
        </div>
        <div className="about-me-text text-center text-lg-start">
          <MainTitle title="ABOUT ME" className="m-lg-0" />
          <h2 className="my-4 fw-bold">
            Why hire me for your
            <br /> next project ?
          </h2>
          <p>
            I'm Creative Director and UI/UX Designer from New York, working in
            web development and print media. I enjoy turning complex problems
            into simple, beautiful and intuitive designs.
          </p>
          <p>
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add a
            personal touch to your product and make sure that it is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way.
          </p>
          <button className="btn btn-primary mt-5">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default aboutMe;
