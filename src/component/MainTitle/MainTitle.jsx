import "./MainTitle.css";

const MainTitle = (props) => {
  let classes = "subtitle d-block w-fit-content text-primary mx-auto ";
  classes += props.className;
  return <span className={classes}>{props.title}</span>;
};

export default MainTitle;
