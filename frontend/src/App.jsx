import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/header/Header";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <HeroBanner />
          
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
