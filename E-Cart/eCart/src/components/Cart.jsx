import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

const Cart = ({ cart, setcart }) => {
  return (
    <>
      <div className="container my-5" style={{ width: "54%" }}>
        {cart.length === 0 ? (
          <div className="text-center">
            <h1>Cart Is Empty</h1>
            <Link to={"/"} className="btn btn-warning">
              Continue Shopping...
            </Link>
          </div>
        ) : (
          cart.map((item) => {
            return (
              <div className="card mb-3 my-5" style={{ width: "700px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.imgSrc}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <h5 className="card-title"> {item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <button className="btn btn-primary mx-3">
                        {item.price} ₹
                      </button>
                      <button className="btn btn-warning">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {cart.length !== 0 && (
        <div
        className="container text-center my-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button className="btn btn-warning mx-5">CheckOut</button>
        <button onClick={() => setcart([])} className="btn btn-danger">
          Clear Cart
        </button>
      </div>
      )}
      
    </>
  );
};

export default Cart;
