import "./NavItem.css";
import { Link } from "react-scroll";
const NavItem = (props) => {
  return (
    <>
      <Link
        spy={true}
        to={props.name}
        smooth={true}
        activeClass={"activeClass"}
      >
        <li className="nav-item">
          <span className={" m-4  position-relative"} aria-current="page">
            {props.name}
          </span>
        </li>
      </Link>
    </>
  );
};

export default NavItem;
