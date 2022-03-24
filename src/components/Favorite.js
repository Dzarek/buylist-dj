import React from "react";
import { useGlobalContext } from "../context";
import { jedzenie, chemia } from "../data";
import FavoriteJedzenie from "./FavoriteJedzenie";
import FavoriteChemia from "./FavoriteChemia";

const Favorite = () => {
  const {
    displayAlert,
    setProducts,
    products,
    postProducts,
    activeProducts,
    setActiveProducts,
    setLoading,
  } = useGlobalContext();

  const handleFood = () => {
    setActiveProducts("food");
  };

  const handleChemic = () => {
    setActiveProducts("chemic");
  };
  const addItemImage = (produkt) => {
    setLoading(false);
    const id = new Date().getTime().toString().slice(3, -1);
    const newProduct = {
      id: id,
      name: produkt.alt,
    };
    setProducts([...products, newProduct]);
    postProducts(id, produkt.alt);
    displayAlert("dodano do listy", "success");
  };

  return (
    <div className="favorite">
      <h4 className="favorite-title">Ulubione Produkty</h4>
      <div className="favorite-choose">
        <button
          onClick={handleFood}
          className={
            activeProducts === "food"
              ? "favorite-choose-btn food favorite-choose-active newStyleButton"
              : activeProducts
              ? "favorite-choose-btn food newStyleButton"
              : "favorite-choose-btn food"
          }
        >
          spożywcze
        </button>
        <button
          onClick={handleChemic}
          className={
            activeProducts === "chemic"
              ? "favorite-choose-btn chemic favorite-choose-active newStyleButton"
              : activeProducts
              ? "favorite-choose-btn chemic newStyleButton"
              : "favorite-choose-btn chemic"
          }
        >
          chemia
        </button>
      </div>
      <div
        className={
          activeProducts === "food"
            ? "favorite-container"
            : "favorite-container none"
        }
      >
        <FavoriteJedzenie jedzenie={jedzenie} addItemImage={addItemImage} />
      </div>
      <div
        className={
          activeProducts === "chemic"
            ? "favorite-container"
            : "favorite-container none"
        }
      >
        <FavoriteChemia chemia={chemia} addItemImage={addItemImage} />
      </div>
    </div>
  );
};

export default Favorite;
