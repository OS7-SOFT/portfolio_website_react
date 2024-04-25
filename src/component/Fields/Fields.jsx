import "./Fields.css";
const Fields = (props) => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-12 mb-4">
      <div className="box-stat mx-auto">
        <div className="content d-flex justify-content-center align-items-center flex-column">
          <h4 className=" fw-bold">{props.rate}%</h4>
          <span className="text-uppercase">{props.field}</span>
        </div>
      </div>
    </div>
  );
};

export default Fields;
