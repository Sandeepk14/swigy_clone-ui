import React from "react";
import Header from "./header";
import Category from "./components/Category";
import TopRest from "./components/TopRest";
import FoodDelivery from "./components/FoodDelivery";
import BestPlaces from "./components/BestPlaces";
import Cuisins from "./components/BestCuisins";
import ExploreRest from "./components/ExploreRest";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Category />
      <TopRest />
      <FoodDelivery />
      <BestPlaces />
      <Cuisins />
      <ExploreRest />
      <Footer />
    </>
  );
};

export default App;
