import React, { useState } from "react";

const FavoriteJedzenie = ({ jedzenie, addItemImage }) => {
  const [selectCategoryJedzenie, setSelectCategoryJedzenie] =
    useState(jedzenie);

  const allCategoryJedzenie = [
    "wszystko",
    ...new Set(jedzenie.map((item) => item.category)),
  ];

  const handleSelectJedzenie = (e) => {
    const category = e.target.value;
    const menuCategory = jedzenie.filter(
      (menuItem) => menuItem.category === category
    );
    if (category === "wszystko") {
      setSelectCategoryJedzenie(jedzenie);
    } else {
      setSelectCategoryJedzenie(menuCategory);
    }
  };

  return (
    <>
      <form className="favorite-container-buttons">
        <select
          name="kategorie"
          id="kategorie"
          className="favorite-select"
          onChange={(e) => handleSelectJedzenie(e)}
        >
          {allCategoryJedzenie.map((category, index) => {
            return (
              <option key={index} className="btn-category" data-id={category}>
                {category}
              </option>
            );
          })}
        </select>
      </form>
      <div className="favorite-container-products">
        {selectCategoryJedzenie.map((produkt, index) => (
          <img
            key={index}
            className={`${produkt.category}Bgc`}
            src={produkt.src}
            alt={produkt.alt}
            onClick={() => {
              addItemImage(produkt);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default FavoriteJedzenie;
