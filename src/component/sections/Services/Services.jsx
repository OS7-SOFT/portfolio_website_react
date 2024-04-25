import "./Services.css";
import services from "../../../Data/ServicesData.json";
import abstract from "../../../images/Group 224.png";
import MainTitle from "../../MainTitle/MainTitle";
import Card from "../../Card/Card";
const Services = () => {
  return (
    <div id="Services" className="serv text-center position-relative">
      <img src={abstract} alt="" className="position-absolute" />
      <MainTitle title="MY SERVICES" className="" />
      <h2 className="mt-3 mb-5">My Provided Features</h2>
      <div className="container mt-4">
        <div className="row text-start">
          {services.services.map((serv) => (
            <Card
              key={serv.id}
              title={serv.title}
              url={serv.url}
              description={serv.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
