import "./Header.css";
import NavItem from "../../NavItem/NavItem";
import Logo from "../../../images/Logo.png";

const Header = () => {
  var links = [
    { id: 2, href: "aboutMe", name: "About Me" },
    { id: 1, href: "services", name: "Services" },
    { id: 3, href: "portfolio", name: "Portfolio" },
    { id: 4, href: "contactMe", name: "Contact Me" },
  ];

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className={"logo navbar-brand "} href={"/"}>
          <img src={Logo} alt={"Logo"} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <NavItem key={link.id} name={link.name} url={link.href} />
            ))}
          </ul>
          <button className="btn btn-outline-primary" type="submit">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
