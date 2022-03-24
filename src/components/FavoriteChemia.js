import React, { useState } from "react";

const FavoriteChemia = ({ chemia, addItemImage }) => {
  const [selectCategoryChemia, setSelectCategoryChemia] = useState(chemia);

  const allCategoryChemia = [
    "wszystko",
    ...new Set(chemia.map((item) => item.category)),
  ];

  const handleSelectChemia = (e) => {
    const category = e.target.value;
    const menuCategory = chemia.filter(
      (menuItem) => menuItem.category === category
    );
    if (category === "wszystko") {
      setSelectCategoryChemia(chemia);
    } else {
      setSelectCategoryChemia(menuCategory);
    }
  };

  return (
    <>
      <form className="favorite-container-buttons">
        <select
          name="kategorie"
          id="kategorie"
          className="favorite-select"
          onChange={(e) => handleSelectChemia(e)}
        >
          {allCategoryChemia.map((category, index) => {
            return (
              <option key={index} className="btn-category" data-id={category}>
                {category}
              </option>
            );
          })}
        </select>
      </form>
      <div className="favorite-container-products">
        {selectCategoryChemia.map((produkt, index) => (
          <img
            key={index}
            className={`${produkt.category}Bgc`}
            src={produkt.src}
            alt={produkt.alt}
            onClick={() => addItemImage(produkt)}
          />
        ))}
      </div>
    </>
  );
};

export default FavoriteChemia;
