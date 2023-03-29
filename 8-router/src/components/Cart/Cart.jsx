import "./Cart.css";
import { useOutletContext } from "react-router-dom";

export const Cart = () => {
  const { cart } = useOutletContext();

  const html = cart.map((cartItem) => {
    return (
      <div key={cartItem.imdbID}>
        <h3>{cartItem.Title}</h3>
      </div>
    );
  });

  return <div className="cart">{html}</div>;
};
