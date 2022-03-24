import React from "react";
import { useGlobalContext } from "../context";
import VoiceForm from "./VoiceForm";

const GroceryForm = () => {
  const { handleChange, productName, addItem, edit } = useGlobalContext();

  return (
    <form className="grocery-form" onSubmit={addItem}>
      <p className="alert"></p>
      <h3>Lista Zakupów</h3>
      <div className="form-control">
        <section className="btnSubmit-container">
          <input
            type="text"
            id="grocery"
            placeholder="wpisz nazwę produktu"
            value={productName}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="submit-btn">
            {!edit ? "dodaj" : "zmień"}
          </button>
        </section>
        <VoiceForm />
      </div>
    </form>
  );
};

export default GroceryForm;
