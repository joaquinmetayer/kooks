import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import NotFound from "../NotFound/NotFound";
import "./Cart.css";

const Cart = () => {
  const { cartList, cleanCart, deleteItem, qtyItem, totalPrice } =
    useCartContext();

  return (
    <>
      {!cartList.length > 0 ? (
        <NotFound />
      ) : (
        <div className="cartContainer">
          <p className="cartTitle">Cart</p>
          {cartList.map((product) => (
            <div key={product.id} className="itemContainer">
              <Link to={`/details/${product.id}`}>
                <img src={product.img} className="imgCart" alt={product.id} />
              </Link>
              <div className="textCart">
                <div>
                  <p>#0{product.id}</p>
                  <p>Date of collection - {product.date}</p>
                  <p>Stock available - {product.stock}</p>
                  <p>Contract - {product.contract}</p>
                  <p>Price - {product.price} ETH</p>
                </div>
                <p
                  className="btnDelete"
                  key={product.id}
                  onClick={() => deleteItem(product.id)}
                >
                  Detele item
                </p>
              </div>
            </div>
          ))}
          <div className="totalCart">
            <p className="totalCartTitle">Total</p>
            <div className="totalCartData">
              <p>Total items</p>
              <p>{qtyItem()}</p>
            </div>
            <div className="totalCartData">
              <p>Total price</p>
              <p>ETH {totalPrice()}</p>
            </div>
            <div className="buttonsCart">
              <p onClick={() => cleanCart()}>Clean cart</p>
              <p>Checkout</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
