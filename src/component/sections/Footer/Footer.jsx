import "./Footer.css";

import logo from "../../../images/Logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 mb-3">
            <img src={logo} alt="" className="logo mb-2 " />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Debitis
              perspiciatis vero eligendi nemo magni.
            </p>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 mb-3">
            <span className="d-block text-primary mb-2">SENT MAIL</span>
            <span className="d-block">os7softfreelancer@gmail.com</span>
            <span className="d-block">osamayeslam7@gmail.com</span>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 mb-3">
            <span className="d-block text-primary mb-2">MACK CALL</span>
            <span className="d-block">+967775284298</span>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 mb-3">
            <span className="d-block text-primary mb-2">GET IN TOUCH</span>
            <span className="d-block">Yemen-Hadramout-mukkalla</span>
          </div>
        </div>
      </div>
      <span className="copyright text-center d-block py-3 text-black-50">
        Copyright OS7SOFT
      </span>
    </div>
  );
};

export default Footer;
