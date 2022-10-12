import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listFoods } from "../actions/foodActions";

function HomeScreen(props) {
  const foodList = useSelector((state) => state.foodList);
  const { foods, loading, error } = foodList;
  const dispatch = useDispatch();

  // Dispatch show all foods
  useEffect(() => {
    dispatch(listFoods());

    return () => {
      //
    };
  }, []);

  return (
    <div>
      <h3 className="sub-heading">our dishes</h3>
      <h1 className="heading">popular dishes</h1>
      {loading ? (<div>Loading...</div>) : error ? (<div>{error}</div>) : (
      <ul className="dishes-container">
        {foods.map((food) => (
          <li key={food._id} className="box">
            <Link to={"/food/" + food._id} className="box-title">
              <img className="box-img" src={food.imgSource} alt="product img" />
            </Link>

            <Link to={"/food/" + food._id} className="box-title">
              {food.title}
            </Link>

            <div className="stars">
              {food.rating}
              <i className="fas fa-star"></i>
            </div>

            <span className="box-price">${food.price}</span>

            <Link to={"/food/" + food._id} className="btn">
              Detail
            </Link>
          </li>
        ))}
      </ul>
      )};
    </div>
  );
}

export default HomeScreen;
