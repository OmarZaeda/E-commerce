import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, [api_url, params.productId]);

  return (
    <div className="card-details">
      <Product product={product} showButton={false} showDesc={true} />
    </div>
  );
}

export default ProductDetails;
