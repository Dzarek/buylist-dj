import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useGlobalContext } from "../context";

const GroceryItem = ({ id, name }) => {
  const { deleteItem, handleEditItem } = useGlobalContext();
  const [newClass, setNewClass] = useState(false);
  const handleDelete = (id) => {
    deleteItem(id);
    setNewClass(true);
  };
  return (
    <article
      data-id={id}
      className={newClass ? "grocery-item toLeftSide" : "grocery-item"}
      // className="grocery-item"
    >
      <div className="ok">
        <button
          type="button"
          className="edit-btn"
          onClick={() => handleEditItem(id)}
        >
          <FaEdit />
        </button>
        <p className="title">{name}</p>
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={() => {
          handleDelete(id);
        }}
      >
        <FaTrash />
      </button>
    </article>
  );
};

export default GroceryItem;
