import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import FeaturedProductsContainer from "./components/FeaturedProducts/FeaturedProductsContainer";
import CategoriesListGridContainer from "./components/Categories/CategoriesListGridContainer";
import LoginFormContainer from "./components/Login/LoginFormContainer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <FeaturedProductsContainer />
              <CategoriesListGridContainer />
            </>
          }
        />
        <Route path="/login" element={<LoginFormContainer />} />{" "}
        {/* Route for login page */}
      </Routes>
    </Router>
  );
}

export default App;
