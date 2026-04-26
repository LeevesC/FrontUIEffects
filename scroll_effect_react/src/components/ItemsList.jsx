import "./ItemsList.css";
import FoodItem from "./FoodItem";
import { Link, Element, scrollSpy } from "react-scroll";

const ItemsList = ({ groups, items }) => {
  return (
    <div className="items-list" id="items-list">
      {groups.map((group) => (
        <Element key={group} name={group}>
          <div className="group-section" id={group}>
            <h2 className="group-title">{group}</h2>
            <div className="group-items">
              <FoodItem key={group} group={group} items={items} />
            </div>
          </div>
        </Element>
      ))}
    </div>
  );
};

export default ItemsList;
