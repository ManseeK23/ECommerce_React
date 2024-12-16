import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({cart, setcart}) => {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const [relatedProducts, setrelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => {
      return product.id == id;
    });
    setproduct(filterProduct[0]);

  }, [id]);

  useEffect(() => {
    if (product.category) {
      const filterRelatedProducts = items.filter(
        (item) => item.category === product.category && item.id !== product.id
      );
      setrelatedProducts(filterRelatedProducts);
    }
  }, [product.category]);

  const addToCart = (id, price, title, description, imgSrc) => {
    const cartObject = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setcart([...cart, cartObject]);
    toast.success('Item Added To Cart!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  };

  return (
    <>
    <Navbar cart={cart} setdata={setdata}/>
    <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc}></img>
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button
                        onClick={() => {
                          addToCart(
                            product.id,
                            product.price,
                            product.title,
                            product.description,
                            product.imgSrc
                          );
                        }}
                        className="btn btn-warning"
                      >
                        Add To Cart
                      </button>
        </div>
      </div>
      <h1 className="text-center">similar item you might want to buy</h1>
      <Product cart={cart} setcart={setcart} items={relatedProducts}></Product>
    </>
  );
};

export default ProductDetails;
