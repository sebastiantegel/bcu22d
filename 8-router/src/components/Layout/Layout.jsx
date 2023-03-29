import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { CartSmall } from "../CartSmall/CartSmall";
import "./Layout.css";

export const Layout = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (movie) => {
    setCart([...cart, movie]);
  };

  return (
    <>
      <header className="wrapper">
        <CartSmall cart={cart} />
        <Navigation></Navigation>
      </header>
      <main className="wrapper">
        <Outlet context={{ addToCart, cart }} />
      </main>
      <footer className="wrapper">FOOTER</footer>
    </>
  );
};
