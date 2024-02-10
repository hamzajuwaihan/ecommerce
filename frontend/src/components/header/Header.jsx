import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#00acc1",
        justifyContent: "space-between",
      }}
    >
      <Toolbar>
        <IconButton size="small">
          <Avatar src="/ecommerce.png" alt="Our Logo" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, ml: 1, color: "#FFF" }}
          >
            E-Pern
          </Typography>
        </IconButton>

        <TextField
          variant="outlined"
          size="small"
          sx={{
            flexGrow: 1,
            color: "white",
            backgroundColor: "white",
            ml: 2,
            mr: 2,
          }}
          placeholder="Search for products"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="h6"
          sx={{ ml: 1 }}
          startIcon={
            <LoginIcon
              sx={{
                color: "white",
              }}
            />
          }
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
        <IconButton size="small" sx={{ ml: 2 }}>
          <ShoppingCartIcon
            sx={{
              color: "white",
            }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
