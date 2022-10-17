import "./card.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/actions";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function Card() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartItems);
  let history = useHistory();
  const { id } = useParams();
  const [item, setItem] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await axios.get(
      "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
    );
    setItem(result.data[id - 1]);
  };

  const addItem = () => {
    const exist = items.find((x) => x.id === item.id);
    const new_contact = {
      name: item.name,
      preview: item.preview,
      price: item.price,
      id: item.id,
      qty: 1,
    };
    if (exist) {
      toast.warn("product already added to cart");
    } else {
      dispatch(addToCart(new_contact));
      toast.success("product added to cart");
      history.push("/");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <img className="mainImage" src={item.preview} alt="" />
      </div>
      <div className="right">
        <h1>{item.name}</h1>
        <h4>{item.brand}</h4>
        <h3>Price: Rs {item.price}</h3>
        <h3>Description</h3>
        <p>{item.description}</p>
        <button onClick={addItem}>Add to Cart</button>
      </div>
    </div>
  );
}
export default Card;
