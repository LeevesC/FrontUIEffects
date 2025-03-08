import React from "react";
import "./FoodItem.css";

const FoodItem = ({ group, items }) => {
  const foods = items.filter((item) => item.group === group);
  return (
    <>
      {foods.map((food) => (
        <Item key={food.id} item={food} />
      ))}
    </>
  );
};

const Item = ({ item }) => {
  return (
    <div className="food-item">
      <div className="item-details">
        <h3 className="item-title">{item.title}</h3>
        <div className="item-price-rating">
          <span className="price">${item.price.toFixed(2)}</span>
        </div>
        <p className="item-description">{item.description}</p>
      </div>
      <div className="item-image-container">
        <img src={item.image} alt={item.title} className="item-image" />
        <button className="add-button">+</button>
      </div>
    </div>
  );
};

export default FoodItem;
