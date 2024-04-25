import "./Portfolio.css";
import portfolioData from "../../../Data/PortfolioData.json";
import MainTitle from "../../MainTitle/MainTitle";
import LinkPortfolio from "../../LinkPortfolio/LinkPortfolio";
import PortfolioItem from "../../ProtfolioItem/PortfolioItem";

const Portfolio = () => {
  const links = [
    { id: 1, name: "ALL", url: "" },
    { id: 2, name: "Game", url: "" },
    { id: 3, name: "Web", url: "" },
    { id: 4, name: "Design", url: "" },
    { id: 5, name: "Desktop", url: "" },
  ];

  return (
    <div id="Portfolio" className="portfolio">
      <div className="container">
        <MainTitle title="Portfolio" className="" />
        <h2 className="mt-3 mb-5 text-center">My Work Example</h2>
        <ul className="sections d-flex justify-content-center list-unstyled  mb-5">
          {links.map((link) => (
            <LinkPortfolio key={link.id} item={link} />
          ))}
        </ul>
        <div className="row my-5">
          {portfolioData.items.map((item) => (
            <PortfolioItem
              key={item.id}
              title={item.title}
              shortDesc={item.ShortDescreption}
              descreption={item.Descreption}
              url={item.url}
              tools={item.tools}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
