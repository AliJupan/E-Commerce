import React, { useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import ProductCard from "../components/ProductCard/ProductCard";

import image1 from "../assets/galaxy.jpg";
import image2 from "../assets/visionpro.jpg";
import image3 from "../assets/iphone15.jpg";
import image4 from "../assets/iphone15pro.jpg";
import image5 from "../assets/iphones.jpg";
import image6 from "../assets/watchultra2.jpg";
import image7 from "../assets/watchseries9.jpg";
import iphone from "../assets/iphone15promax.png";
import { Product, products } from "../class/Product";

import "./Home.css";

function Home({ addToFav }) {
  const img = [image1, image2, image3, image4, image5, image6, image7];

  const productData = [
    { img: iphone, name: "Product 1", price: 10 },
    { img: iphone, name: "Product 2", price: 20 },
    { img: iphone, name: "Product 3", price: 20 },
    { img: iphone, name: "Product 4", price: 20 },
    { img: iphone, name: "Product 5", price: 20 },
    { img: iphone, name: "Product 6", price: 20 },
  ];

  productData.forEach((data) => {
    const { img, name, price } = data;
    const product = new Product(img, name, price);
    products.push(product);
  });

  return (
    <div className="Home-Container">
      <div className="Carousel-Container">
        <Carousel imgs={img} />
      </div>
      <div className="Items-Container">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} addToFav={addToFav} />
        ))}
      </div>
    </div>
  );
}

export default Home;
