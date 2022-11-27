import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product) => {
    const index = cartList.findIndex((i) => i.id == product.id);
    if (index > -1) {
      const oldQty = cartList[index].toCart;
      cartList.splice(index, 1);
      setCartList([
        ...cartList,
        { ...product, toCart: product.toCart + oldQty },
      ]);
    } else {
      setCartList([...cartList, { ...product, toCart: product.toCart }]);
    }
  };

  const cleanCart = () => {
    setCartList([]);
  };
  const deteleItem = (id) => {
    setCartList(cartList.filter((product) => product.id !== id));
  };
  const qtyItem = (product) => {
    return cartList.reduce( (acum, product) => acum = acum + product.toCart , 0 )
  };
  const totalPrice = () => {
    // view this
  };

  console.log(cartList);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        cleanCart,
        deteleItem,
        qtyItem,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
