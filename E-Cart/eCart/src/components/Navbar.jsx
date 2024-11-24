import React, { useState } from "react";
import { FaBeer } from 'react-icons/fa';
import { FaCartArrowDown } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";


const Navbar = ({ setdata, cart }) => {
  const location = useLocation()
  const navigate = useNavigate();
  const [searchItem, setsearchItem] = useState("");
  const filterBycCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setdata(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setdata(element);
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchItem}`);
    setsearchItem("");
  };
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            Happy Shopping
          </Link>
          <form onSubmit={handlSubmit} className="search-bar">
            <input
              value={searchItem}
              onChange={(e) => setsearchItem(e.target.value)}
              type="text"
              placeholder="Search Item "
            />
          </form>
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
            <FaCartArrowDown style={{fontSize:"1.5rem"}}/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        {location.pathname == '/' && (<div className="nav-bar-wrapper">
          <div className="item">Filter By {"->"}</div>
          <div onClick={() => setdata(items)} className="item">
            No Filter
          </div>
          <div onClick={() => filterBycCategory("mobiles")} className="item">
            Mobiles
          </div>
          <div onClick={() => filterBycCategory("laptops")} className="item">
            Laptops
          </div>
          <div onClick={() => filterBycCategory("tablets")} className="item">
            Tablets
          </div>
          <div onClick={() => filterByPrice(49999)} className="item">
            {">="}49999
          </div>
          <div onClick={() => filterByPrice(69999)} className="item">
            {">="}69999
          </div>
          <div onClick={() => filterByPrice(29999)} className="item">
            {">="}29999
          </div>
          <div onClick={() => filterByPrice(89999)} className="item">
            {">="}89999
          </div>
        </div>)}
        
      </header>
    </>
  );
};

export default Navbar;
