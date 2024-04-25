import "./PortfolioItem.css";
import GetImage from "../GetImage/GetImage";
import ShowInfo from "../ShowInfo/ShowInfo";
import React, { useState } from "react";

const PortfolioItem = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleClicked = (itemId) => {
    setShowInfo(true);
    setSelectedItemId(itemId);
  };
  const handleClose = () => {
    setShowInfo(false);
    setSelectedItemId(null);
  };

  return (
    <div className={" col-lg-4 col-md-6 col-sm-12 mb-3"}>
      <div className="box position-relative overflow-hidden">
        <GetImage image={props.url} className="img-fluid" />
        <div className="info position-absolute text-white ">
          <h4 className="fw-bold">{props.title}</h4>
          <span className="d-block">{props.tools.join(", ")}</span>
          <p className="my-4">{props.shortDesc}</p>
          <button
            onClick={() => {
              handleClicked(props.id);
            }}
            className="btn btn-light"
          >
            Know More
          </button>
        </div>
      </div>
      {selectedItemId === props.id && (
        <ShowInfo
          showDivInfo={showInfo}
          title={props.title}
          tools={props.tools}
          url={props.url}
          shortDes={props.shortDesc}
          descrption={props.descreption}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default PortfolioItem;
