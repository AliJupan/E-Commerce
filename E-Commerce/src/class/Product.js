const products = [];
const favProducts = [];

class Product {
  constructor(img, name, price) {
    this.img = img;
    this.name = name;
    this.price = price;
  }
  addProduct(product) {
    this.products.push(product);
  }
  getAllProducts() {
    return this.products;
  }
}

export { Product, products,favProducts };