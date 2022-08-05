import React from "react";

const CheckOut = () => {
  return (
    <div>
      <div id="main-wrapper">
        <div id="tick-wrapper">
          <img
            src="https://test-hosting-8f9bf.web.app/assets/white-tick.png"
            alt="checkOut"
          ></img>
        </div>
        <h1 className="main-heading">Order Placed Successfully!!</h1>
        <p className="section-heading">
          We have sent you an email with the order details
        </p>
      </div>
    </div>
  );
};

export default CheckOut;
