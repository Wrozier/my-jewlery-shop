import React, { createContext, useEffect, useState, ReactNode } from "react";
import { backend_url } from "../App";

interface Product {
  id: number;
  image: string;
  name: string;
  old_price: number;
  new_price: number;
  description: string;
  category: string;
}

interface CartItems {
  [key: number]: number;
}

export interface ShopContextType {
  products: Product[];
  getTotalCartItems: () => number;
  cartItems: CartItems;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
}

export const ShopContext = createContext<ShopContextType | null>(null);

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItems>(getDefaultCart());

  function getDefaultCart(): CartItems {
    let cart: CartItems = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }
    return cart;
  }

  useEffect(() => {
    fetch(`${backend_url}/allproducts`)
      .then((res) => res.json())
      .then((data) => setProducts(data));

    if (localStorage.getItem("auth-token")) {
      fetch(`${backend_url}/getcart`, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem("auth-token")}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
        .then((resp) => resp.json())
        .then((data) => { setCartItems(data); });
    }
  }, []);

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        try {
          let itemInfo = products.find((product) => product.id === Number(item));
          if (itemInfo) {
            totalAmount += cartItems[item] * itemInfo.new_price;
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = (): number => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        try {
          let itemInfo = products.find((product) => product.id === Number(item));
          if (itemInfo) {
            totalItem += cartItems[item];
          }
        } catch (error) {}
      }
    }
    return totalItem;
  };

  const addToCart = (itemId: number): void => {
    if (!localStorage.getItem("auth-token")) {
      alert("Please Login");
      return;
    }
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch(`${backend_url}/addtocart`, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem("auth-token")}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      });
    }
  };

  const removeFromCart = (itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch(`${backend_url}/removefromcart`, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem("auth-token")}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      });
    }
  };

  const contextValue: ShopContextType = {
    products,
    getTotalCartItems,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
