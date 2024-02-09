import { PropTypes } from "prop-types";
import { Box, Typography } from "@mui/material";
import CarouselComponent from "../Carousel/Carousel";

const FeaturedProducts = ({ products }) => {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        mt={2}
        textAlign={"center"}
        sx={{
          fontStyle: "italic",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Featured Products
      </Typography>
      <Typography
        variant="body1"
        textAlign={"center"}
        mb={2}
        sx={{
          fontStyle: "italic",
        }}
      >
        Check out our featured products
      </Typography>
      <Box>
        <CarouselComponent products={products} />
      </Box>
    </>
  );
};
//props validation
FeaturedProducts.propTypes = {
  products: PropTypes.array.isRequired,
};
export default FeaturedProducts;
