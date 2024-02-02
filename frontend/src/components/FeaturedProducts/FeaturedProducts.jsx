import { PropTypes } from "prop-types";

const FeaturedProducts = ({ products }) => {
  return (
    <>
      <h1>Featured Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};
//props validation
FeaturedProducts.propTypes = {
  products: PropTypes.array.isRequired,
};
export default FeaturedProducts;
