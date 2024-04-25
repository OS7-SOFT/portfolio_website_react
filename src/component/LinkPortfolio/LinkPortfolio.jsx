import "./LinkPortfolio.css";

const LinkPortfolio = (props) => {
  const getActiveLink = () => {
    var classes = "position-relative m-3 text-secondary ";
    return classes;
  };

  return (
    <li>
      <span
        href={props.item.url}
        className={`${getActiveLink()} ${props.item.id === 1 && "active"}`}
      >
        {props.item.name}
      </span>
    </li>
  );
};

export default LinkPortfolio;
