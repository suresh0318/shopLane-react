import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../actions/actions";
import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const cartButton = () => {
    if (isAuthenticated) {
      dispatch(clearCart());
      history.push("/checkout");
    } else {
      loginWithRedirect();
    }
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const items = useSelector((state) => state.items);
  const result = items.reduce(function (acc, obj) {
    return acc + obj.price;
  }, 0);
  return (
    <div className="outer fluid">
      {items.length < 1 ? (
        <img
          alt="empty"
          className="cart-empty"
          src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
        ></img>
      ) : (
        items.map((item) => (
          <div className="row my-5 d-flex align-items-center" key={item.id}>
            <div className="col-md-3">
              <img src={item.preview} alt="img" className="preview" />
            </div>
            <div className="col-md-3">
              <h3>{item.name}</h3>
            </div>
            <div className="col-md-3">
              <h4 className="mt-0">Price : {item.price}</h4>
            </div>
            <div className="col-md-3">
              <button
                onClick={() => {
                  dispatch(removeFromCart(item.id));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {items.length > 0 && (
        <h3 className="totalPrice">
          Total Amount :<span className="price">{result}</span>
        </h3>
      )}

      {items.length > 0 && (
        <button onClick={cartButton} className="buy mt-2">
          Buy now
        </button>
      )}
    </div>
  );
};

export default Cart;
