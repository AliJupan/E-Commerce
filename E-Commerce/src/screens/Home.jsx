import Carousel from "../components/Carousel/Carousel";
import ProductCard from "../components/ProductCard/ProductCard";

import image1 from "../assets/galaxy.jpg";
import image2 from "../assets/visionpro.jpg";
import image3 from "../assets/iphone15.jpg";
import image4 from "../assets/iphone15pro.jpg";
import image5 from "../assets/iphones.jpg";
import image6 from "../assets/watchultra2.jpg";
import image7 from "../assets/watchseries9.jpg";
import iphone from "../assets/iphone15promax.png"

import "./Home.css";

function Home() {
  const img = [image1, image2, image3, image4, image5, image6, image7];

  const products = [
    {
      img: iphone,
      name: "Product 1",
      price: 1000 
    },
    {
      img: iphone,
      name: "Product 2",
      price: 1500
    },
    {
      img: iphone,
      name: "Product 3",
      price: 1200
    },
    {
      img: iphone,
      name: "Product 3",
      price: 1200
    },
    {
      img: iphone,
      name: "Product 3",
      price: 1200
    },
    {
      img: iphone,
      name: "Product 3",
      price: 1200
    },
    {
      img: iphone,
      name: "Product 3",
      price: 1200
    },
    {
      img: iphone,
      name: "Product 3",
      price: 1200
    },
  ]
  return (
    <div className="Home-Container">
      <div className="Carousel-Container">
        <Carousel imgs={img} />
      </div>
      <div className="Items-Container">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      </div>
    </div>
  );
}

export default Home;
