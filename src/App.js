import "./App.css";
import GroceryForm from "./components/GroceryForm";
import GroceryContainer from "./components/GroceryContainer";
import Favorite from "./components/Favorite";
import { useGlobalContext } from "./context";

function App() {
  const { activeProducts } = useGlobalContext();
  return (
    <div className="app">
      <div className="bg"></div>
      <section className="center">
        <GroceryForm />
        <GroceryContainer />
        <Favorite />
        {activeProducts && (
          <footer>
            <a href="https://icons8.com">
              Icony produktów: <span>https://icons8.com</span>{" "}
            </a>
          </footer>
        )}
      </section>
    </div>
  );
}

export default App;
