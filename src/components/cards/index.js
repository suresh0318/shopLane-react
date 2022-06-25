import "./index.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cards() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await axios.get(
      "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
    );
    setList(result.data);
  };
  return (
    <div className="card">
      {list.length > 0 &&
        list.map(({ preview, id, name, brand }) => (
          <div className="wrapper" key={id}>
            <Link to={`/card/${id}`}>
              <img className="img" src={preview} alt="name" />
            </Link>
            <h3>{name}</h3>
            <h4>{brand}</h4>
          </div>
        ))}
    </div>
  );
}

export default Cards;
