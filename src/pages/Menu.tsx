import "../styles/Menu.css";
import PizzaCard from "../components/PizzaCard";
import { pizzas } from "../Models/Pizza";

function Menu() {
  return (
    <>
      <section className="menu-section">
        <h1>Our Menu</h1>
        <div className="menu-item-list">
          {pizzas.map((pizza) => (
            <PizzaCard pizza={pizza} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Menu;
