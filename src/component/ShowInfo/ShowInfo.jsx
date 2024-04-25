import { React, useEffect } from "react";
import "./ShowInfo.css";
import GetImage from "../GetImage/GetImage";
const ShowInfo = (props) => {
  useEffect(() => {
    setTimeout(() => {
      const body = document.querySelector(".parents");
      body.classList.toggle("show-info-visible", props.showDivInfo);

      return () => {
        body.classList.remove("show-info-visible");
      };
    }, 1);
  }, [props.showDivInfo]);

  const handleButtonClick = () => {
    props.onClose();
  };

  return (
    <div className="background">
      <div className="parents d-flex position-fixed bg-white p-2 show-info">
        <div className="left">
          <GetImage image={props.url} className=" h-100" />
        </div>
        <div className="right mx-4 position-relative">
          <h3 className="mb-0 mt-3">{props.title}</h3>
          <span className="text-black-50">{props.tools.join(", ")}</span>
          <div className="info ">
            <p className="text-black-50">{props.descrption}</p>
          </div>
          <div className="mt-3">
            {" "}
            <button className="btn btn-primary position-absolute">
              Show Project
            </button>
            <button
              className="btn btn-danger position-absolute"
              onClick={() => {
                handleButtonClick();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;
