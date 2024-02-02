import FeaturedProducts from "./FeaturedProducts";
import { useState } from "react";
function FeaturedProductsContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <FeaturedProducts />
    </>
  );
}

export default FeaturedProductsContainer;
