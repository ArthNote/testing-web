import { Link } from "react-router-dom"
import "../styles/Home.css"
import PizzaCard from "../components/PizzaCard";
import {pizzas} from "../Models/Pizza"

function Home() {

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Pedro's <span>Pizzeria</span>
          </h1>
          <h4>A PIZZA TO FIT ANY TASTE</h4>
          <Link to="/menu"> ORDER </Link>
        </div>
      </section>

      <section className="menu">
        <h1>Customer Favorite</h1>
        <div className="menu-items">
          {pizzas.slice(0, 4).map((pizza) => (
            <PizzaCard pizza={pizza} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home