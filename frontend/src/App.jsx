import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/header/Header";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import FeaturedProductsContainer from "./components/FeaturedProducts/FeaturedProductsContainer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <HeroBanner />
          <FeaturedProductsContainer />
        </>
      }
    ></Route>
  )
);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
