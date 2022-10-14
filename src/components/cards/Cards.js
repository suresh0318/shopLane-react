import "./cards.css";
import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { data } from "../../actions/actions";

function Cards() {
  const list = useSelector((state) => state.searchItems);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await axios.get(
      "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
    );
    dispatch(data(result.data));
  };

  return (
    <div className="cards">
      {list &&
        list.map(({ preview, id, name, brand }) => (
          <div className="wrapper" key={id}>
            <Link to={`/card/${id}`}>
              <img className="img" src={preview} alt="name" />
            </Link>
            <div className="details">
              <h3>{name}</h3>
              <h4>{brand}</h4>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cards;
