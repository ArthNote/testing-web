
import "../styles/Home.css";

function PizzaCard({pizza}: any) {
  return (
    <div className="item">
      <div className="item-img">
        <img src={pizza.image} alt="item image" />
      </div>
      <div className="item-content">
        <h3>{pizza.name}</h3>
        <p>${pizza.price}</p>
      </div>
    </div>
  );
}

export default PizzaCard