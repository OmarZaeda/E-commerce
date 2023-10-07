import Product from "./Product";
import { useEffect } from "react";
import { useState } from "react";

function ProductList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <>
      <h1 className="p-3">Our Product</h1>
      <div className="btn-container">
        <button
          className="btn btn-info"
          onClick={() => {
            getProducts();
          }}>
          <span>All</span>
        </button>
        {categories.map((cat) => {
          return (
            <button
              className="btn btn-info"
              key={cat}
              onClick={() => {
                getProductInCategory(cat);
              }}>
              <span>{cat}</span>
            </button>
          );
        })}
      </div>
      <div className="container py-5">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} showDesc={false} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
