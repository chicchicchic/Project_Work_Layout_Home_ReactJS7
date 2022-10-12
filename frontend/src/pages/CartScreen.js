import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen(props) {
  // const { foodId } = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const qty = Number(searchParams.get('quantity')) ?? 1;

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const foodId = props.match.params.id;
  const quantity = props.location.search? Number(props.location.search.split("=")[1]):1;

  const dispatch = useDispatch();

  const removeFromCartHandler = (foodId) => {
    dispatch(removeFromCart(foodId));
  }

  useEffect(() => {
    if(foodId) {
      dispatch(addToCart(foodId, quantity));
    }
  }, []);

// Handle checkout handler   
  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }

  return (
    <div className="cart">

        <div className="cart-list">
            <ul className="cart-list-container">
                {
                    cartItems.length === 0 ? 
                    <div className="cart-empty">
                        Your cart is empty
                    </div>
                    :
                    cartItems.map(item => 
                        <li key={item.food} className="cart-item-wrap">

                            <div className="cart-item-image">
                                <img className="cart-item-image-img" src={item.imgSource} alt="food" />
                            </div>

                            <div className="cart-item-info-wrap">

                                <div className="cart-item-info-title">
                                    <Link className="cart-item-info-title-text" to={"/food/" + item.food }>
                                        {item.title}
                                    </Link>
                                </div>

                                <div className="cart-item-info-quantity-delete">
                                    Quantity:
                                    <select value={item.quantity} onChange={(e) => dispatch(addToCart(item.food, e.target.value))}>
                                        {[...Array(item.countInTheKitchen).keys()].map(x => 
                                            <option key={x+1} value={x+1}>{x+1}</option>    
                                        )}
                                    </select>

                                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.food)} >
                                        Delete
                                    </button>

                                </div>

                            </div>

                            <div className="cart-item-info-price">
                                ${item.price * item.quantity}
                            </div>

                        </li>    
                    )
                }
            </ul>
        </div>

        <div className="cart-action">

            <h3 className="cart-action-sub-total">
                Subtotal ( {cartItems.reduce((a, c) => a + c.quantity, 0)} items )
                :
                $ {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
            </h3>

            <button onClick={checkoutHandler} className="btn primary" disabled={cartItems.length === 0}>
                Proceed to Checkout
            </button>
        </div>


    </div>
  );
}

export default CartScreen;
