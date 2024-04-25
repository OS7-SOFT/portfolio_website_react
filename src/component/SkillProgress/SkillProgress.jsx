import "./SkillProgress.css";

const SkillProgress = (props) => {
  return (
    <div className="skill-prog col-lg-4 my-5">
      <div className="prog">
        <span
          style={{ width: props.rate + "%" }}
          data-progress={props.rate + "%"}
          className="bg-primary position-relative  d-block h-100"
        ></span>
      </div>
      <h4 className="skill-name mt-3 mb-1">{props.name}</h4>
      <span className="text-black-50">{props.tools.join(", ")}</span>
    </div>
  );
};

export default SkillProgress;
