import "./Landing.css";
import imgPerson from "../../../images/personImg.png";
import MainTitle from "../../MainTitle/MainTitle";
import { motion } from "framer-motion";

const Landing = () => {
  console.log("Rendered Landing section");
  return (
    <div className="landing  position-relative">
      <div className="container position-relative text-center text-lg-start d-flex flex-wrap-reverse flex-lg-nowrap align-items-center justify-content-center justify-content-lg-between ">
        <div className="landing-text">
          <MainTitle title="Welcome! I'm" className="m-lg-0" />
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: "tween" }}
            className="Name fw-bold my-3"
          >
            Osama Yeslam
          </motion.h1>
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: "tween", delay: 0.2 }}
            className="jop-title d-block"
          >
            Software Developer
          </motion.span>
          <motion.p
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, type: "tween" }}
            className="description lh-lg my-5 fs-6 text-black-50"
          >
            Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea
            takimata sanctus est is thelorem ipsum dolor sit amet. sed diam
            nonumy eirmod tempor invidunt ut labore et dolore is the magna
            aliquyam.
          </motion.p>
          <div>
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, type: "spring", delay: 1 }}
              className="btn btn-outline-primary fs-5 me-3"
            >
              Hire Me
            </motion.button>
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                delay: 1.2,
              }}
              className="btn btn-outline-primary fs-5"
            >
              Explore
            </motion.button>
          </div>
        </div>
        <motion.img
          initial={{ y: 40 }}
          animate={{ y: 20 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          src={imgPerson}
          alt="personal"
          className="my-5 my-lg-0"
        />
      </div>
    </div>
  );
};

export default Landing;
