import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, increaseQty } from "../../actions/actions";
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
  const items = useSelector((state) => state.cartItems);
  const result = items.reduce(function (acc, obj) {
    return acc + obj.price * obj.qty;
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
            <div className="col-md-2">
              <img src={item.preview} alt="img" className="preview" />
            </div>
            <div className="col-md-2">
              <h3>{item.name}</h3>
            </div>
            <div className="col-md-2">
              <select
                defaultValue={item.qty}
                onChange={(e) => {
                  dispatch(
                    increaseQty({ incQty: e.target.value, itemId: item.id })
                  );
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div className="col-md-2">
              <h4 className="mt-0">Price : {item.price * item.qty}</h4>
            </div>
            <div className="col-md-2">
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
