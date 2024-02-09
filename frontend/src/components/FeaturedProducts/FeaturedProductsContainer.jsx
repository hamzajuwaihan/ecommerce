import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedProducts from "./FeaturedProducts"; // Adjust the path based on your actual file structure
import { fetchFeaturedProducts } from "../../features/featuredProductsSlice"; // Adjust the path based on your actual file structure

function FeaturedProductsContainer() {
  const dispatch = useDispatch();
  const { featuredProducts, loading, error } = useSelector(
    (state) => state.featuredProducts
  );

  useEffect(() => {
    // Dispatch the fetchFeaturedProducts action when the component mounts
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <FeaturedProducts products={featuredProducts} />}
    </>
  );
}

export default FeaturedProductsContainer;
