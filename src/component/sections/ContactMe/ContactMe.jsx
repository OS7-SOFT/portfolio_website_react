import "./ContactMe.css";
import MainTitle from "../../MainTitle/MainTitle";
import mapImage from "../../../images/map-55e32ae4c19a85738ebb72d3172e3ab7.png";
import abstract from "../../../images/Group 224.png";

const ContactMe = () => {
  return (
    <div id="Contact Me" className="contact-me position-relative">
      <img src={mapImage} alt="" className="position-absolute" />
      <MainTitle title="Contact Me" className="" />
      <h2 className="mt-3 mb-5 text-center fw-bold">Send Me a Message</h2>
      <div className="container mt-5">
        <form action="" className="row gap-4 justify-content-center">
          <input
            type="text"
            className=" col-md-12 col-sm-12 col-lg-4 p-2"
            placeholder="Name"
          />
          <input
            type="email"
            className="col-md-12 col-sm-12 col-lg-4 p-2"
            placeholder="Email"
          />
          <input
            type="text"
            className="col-md-12 col-sm-12 col-lg-4 p-2"
            placeholder="Phone"
          />
          <input
            type="text"
            className=" col-md-12 col-sm-12 col-lg-4 p-2"
            placeholder="Subject"
          />
          <textarea
            className="col-sm-12 col-lg-8 col-md-12"
            placeholder="Message"
          ></textarea>
        </form>
        <form action="">
          <input
            type="submit"
            className="d-block mt-5 mx-auto btn btn-primary w-full"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
