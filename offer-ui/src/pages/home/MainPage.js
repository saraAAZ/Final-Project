import React from "react";
import FavProduct from "../../components/favProducts/FavProduct.jsx";
import Slider from "../../components/slider/Slider.jsx";

export default function MainPage() {
  return (
    <div>
      <Slider />
      <FavProduct />
    </div>
  );
}