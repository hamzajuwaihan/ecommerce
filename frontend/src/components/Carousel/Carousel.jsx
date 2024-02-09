import { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
import { PropTypes } from "prop-types";
import { ArrowBack, ArrowForward, ShoppingBag } from "@mui/icons-material";

function CarouselComponent(props) {
  const { products } = props;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [numVisibleProducts, setNumVisibleProducts] = useState(3);

  const nextSlide = () => {
    const totalSlides = Math.ceil(products.length / numVisibleProducts);
    const nextIndex = (currentSlide + 1) % totalSlides;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const totalSlides = Math.ceil(products.length / numVisibleProducts);
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(prevIndex);
  };

  // Update the number of visible products based on window width
  useEffect(() => {
    const updateNumVisibleProducts = () => {
      if (window.innerWidth <= 600) {
        setCurrentSlide(0);
        setNumVisibleProducts(1);
      } else if (window.innerWidth > 600 && window.innerWidth <= 960) {
        setCurrentSlide(0);
        setNumVisibleProducts(2);
      } else {
        setCurrentSlide(0);
        setNumVisibleProducts(3);
      }
    };

    updateNumVisibleProducts();

    const handleResize = () => {
      updateNumVisibleProducts();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate the range of products to display for the current slide
  const startIdx = currentSlide * numVisibleProducts;
  const endIdx = Math.min(startIdx + numVisibleProducts, products.length);
  const displayedProducts = products.slice(startIdx, endIdx);

  return (
    <>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          style={{ marginRight: "10px" }}
        >
          <ArrowBack
            sx={{
              size: { xs: "20px", lg: "30px" },
            }}
          />
        </Button>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "center",
              lg: "space-between",
            },
            gap: "10px",
          }}
        >
          {displayedProducts.map((product) => (
            <Card
              key={product.id}
              style={{
                padding: "10px",
                minWidth: "150px",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <img
                  src={product.image_url}
                  alt={product.product_name}
                  style={{ width: "100%", height: "200px" }}
                  loading="lazy"
                />
                <Typography gutterBottom variant="h5" component="div">
                  {product.product_name}
                </Typography>
              
                <Chip
                  label={product.category_name}
                  sx={{
                    margin: "5px 0",
                    backgroundColor: "#c69810",
                    color: "white",
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ fontWeight: "bold" }}
                >
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{
                    backgroundColor: "#00acc1",
                    color: "white",
                    width: "100%",
                    "&:hover": {
                      backgroundColor: "#007c91",
                    },
                  }}
                  endIcon={<ShoppingBag />}
                >
                  Buy
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
        <Button
          onClick={nextSlide}
          disabled={
            currentSlide === Math.ceil(products.length / numVisibleProducts) - 1
          }
          style={{ marginLeft: "10px" }}
        >
          <ArrowForward
            sx={{
              size: { xs: "20px", lg: "150px" },
            }}
          />
        </Button>
      </Box>
    </>
  );
}

CarouselComponent.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CarouselComponent;
