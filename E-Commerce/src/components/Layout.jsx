import Navbar from "./Navbar/Navbar";
import Home from "../screens/Home";
import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";

function Layout() {
  const [favProducts, setFavProducts] = useState([]);

  const addToFav = (product) => {
    setFavProducts((prevFavProducts) => [...prevFavProducts, product]);
  };

  const removeFromFav = (productToRemove) => {
    setFavProducts((prevFavProducts) =>
      prevFavProducts.filter((product) => product !== productToRemove)
    );
  };

  return (
    <div>
      <Navbar favProducts={favProducts} removeFromFav={removeFromFav} />
      <Home addToFav={addToFav} />
    </div>
  );
}

export default Layout;
