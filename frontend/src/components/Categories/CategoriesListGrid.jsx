import { Grid, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CategoriesListGrid = (props) => {
  const { categories } = props;
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        textAlign={"center"}
        sx={{
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        Categories
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {categories.map((category) => (
          <Grid item key={category.id} xs={12} sm={6} md={4} lg={3}>
            <Paper
              elevation={2}
              sx={{
                padding: 2,
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: "#e1341e",
                minHeight: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "#ff4d2e",
                },
                transition: "background-color 0.7s ease",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "white",
                }}
              >
                {category.category_name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

CategoriesListGrid.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoriesListGrid;
