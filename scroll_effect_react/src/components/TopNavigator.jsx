import "./TopNavigator.css";
import { Link, Element, scrollSpy } from "react-scroll";

const TopNavigator = ({ groups }) => {
  return (
    <div className="top-navigator">
      <div className="tabs-container">
        {groups.map((group) => (
          <Link
            key={group}
            id={group}
            className="tab"
            activeClass="active"
            to={group}
            spy={true} // Tracks which section is in view
            smooth={true}
            duration={500}
            containerId="items-list"
          >
            {group}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNavigator;
