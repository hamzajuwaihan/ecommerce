import { Box, Button, Typography } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
export const HeroBanner = () => {
  return (
    <Box
      sx={{
        height: "800px",
        backgroundImage: "url(/hero-banner.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          pl: 2,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        
      >
        <Typography variant="h1" sx={{ color: "white", textAlign: "center" }}>
          Welcome to E-Pern
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "white", textAlign: "center", mt: 2 }}
        >
            Your one-stop shop for all your needs
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#00acc1",
            color: "white",
            "&:hover": {
              backgroundColor: "#007c91",
            },
          }}
          startIcon={<ShoppingBagIcon />}
          size="large"
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};
