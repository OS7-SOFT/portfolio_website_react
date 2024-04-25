import "./imageAboutMe.css";

const imageAboutMe = (props) => {
  return (
    <>
      <img src={props.url} alt="" className={props.className} />
    </>
  );
};

export default imageAboutMe;
