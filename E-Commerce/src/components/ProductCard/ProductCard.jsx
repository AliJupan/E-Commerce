import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { products,favProducts } from "../../class/Product";

import "./ProductCard.css";

function ProductCard({ product, addToFav }) {
  const { img, name, price } = product;

  return (
    <div className="Product-Container">
      <img src={img} alt={name} className="" />
      <p className="Product-Name">{name}</p>
      <p className="Product-Price">{price} DEN</p>
      <div className="Product-Button-Container">
        <div onClick={() => addToFav(product)}>
          <FavoriteBorderIcon fontSize="medium" />
        </div>
        <div>
          <ShoppingCartIcon fontSize="medium" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
