import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsFood } from "../actions/foodActions";

function FoodScreen(props) {
  const [quantity, setQuantity] = useState(1);

  // const { id } = useParams();

  const foodDetails = useSelector((state) => state.foodDetails);
  const { food, loading, error } = foodDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsFood(props.match.params.id));
    return () => {
      //
    };
  }, []);

  // Add To Cart Handle 
  const handleAddToCart = () => {
   props.history.push("/cart/" + props.match.params.id + "?quantity=" + quantity);
  }

  return (
    <div>
      <div className="back-to-result">
        <Link to="/" className="back-to-result-text">
          <i className="fas fa-caret-left"></i>
          Back to result
        </Link>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={food.imgSource} alt="food"></img>
          </div>

          <div className="details-wrap">
            <div className="details-info">
              <ul>
                <li className="details-info-title">
                  <h4>{food.title}</h4>
                </li>

                <li className="details-info-rating">
                  {food.rating}
                  <i className="fas fa-star"></i>
                </li>

                <li className="details-info-price">
                  <h4>
                    Price: <span>${food.price}</span>
                  </h4>
                </li>
              </ul>
            </div>

            <div className="details-action">
              <ul>
                <li className="details-action-price">
                  Price: <span>${food.price}</span>
                </li>
                <li className="details-action-quantity">
                  Quantity: 
                  <select value={quantity} onChange={(e) => {setQuantity(e.target.value)}}>
                      {[...Array(food.countInTheKitchen).keys()].map(x => 
                          <option key={x+1} value={x+1}>{x+1}</option>    
                      )}
                  </select>
                </li>
                <li>
                  {food.countInTheKitchen>0 && <button onClick={handleAddToCart} className="btn details-action-add-cart-btn">Add to cart</button>} 
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodScreen;
