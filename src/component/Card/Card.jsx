import "./Card.css";
import GetImage from "../GetImage/GetImage";
const Card = (props) => {
  return (
    <div className="col-lg-4 justify-content-center mb-3">
      <div className="box position-relative px-5 pb-3 pt-5">
        <GetImage image={props.url} className={""} />
        <h4 className="fw-bold mt-4">{props.title}</h4>
        <span className="d-block fw-bold fs-1">__ __ __</span>
        <p className="mt-2 mb-5">{props.description}</p>
        <a href="#s" className="btn btn-primary">
          Knowe More
        </a>
      </div>
    </div>
  );
};

export default Card;
