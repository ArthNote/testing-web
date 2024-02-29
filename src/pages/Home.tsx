import { Link } from "react-router-dom"
import "../styles/Home.css"
import ItemImage from "../assets/background.svg";
import PizzaCard from "../components/PizzaCard";

function Home() {

  const pizzas: Pizza[] = [
    {
      name: "Margherita",
      price: 10.99,
      image: ItemImage,
    },
    {
      name: "Pepperoni",
      price: 12.99,
      image: ItemImage,
    },
    {
      name: "Mushroom",
      price: 9.99,
      image: ItemImage,
    },
    {
      name: "Veggie",
      price: 11.99,
      image: ItemImage,
    },
  ];


  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Pedro's Pizzeria</h1>
          <h4>PIZZA TO FIT ANY TASTE</h4>
          <Link to="/menu"> ORDER </Link>
        </div>
      </section>

      <section className="menu">
        <h1>Top Menu Items</h1>
        <div className="menu-items">
          {pizzas.map((pizza) => (
            <PizzaCard
              pizza ={pizza}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home