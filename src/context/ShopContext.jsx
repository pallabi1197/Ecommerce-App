import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivey_fee = 10;
  const [search, setSearch] = useState(""); // to search inside on input field
  const [showSearch, setShowSearch] = useState(false); // to hide and show entire input field
  
  const value = {
    products,
    currency,
    delivey_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
