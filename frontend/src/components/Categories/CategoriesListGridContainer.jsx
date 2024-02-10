import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categoriesSlice";
import { useEffect } from "react";
import CategoriesListGrid from "./CategoriesListGrid";

function CategoriesListGridContainer() {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <CategoriesListGrid categories={categories} />}
    </>
  );
}

export default CategoriesListGridContainer;
