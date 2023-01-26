import { useState } from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Products from "../component/Products";
const Homepage = () => {
  const [cart, setCart] = useState([]);
  const MenuConfiguration = [
    {
      menuText: "Products",
      menuLink: "https://twitter.com/neghani",
      isActive: true,
    },
    {
      menuText: "Support",
      menuLink: "https://twitter.com/neghani",
      isActive: false,
    },

    {
      menuText: "Profile",
      menuLink: "https://twitter.com/neghani",
      isActive: false,
    },
    {
      menuText: "Cart",
      menuLink: "https://twitter.com/neghani",
      isActive: false,
    },
  ];

  const handleCartItems = (newItem) => {
    console.log("...click");
    setCart([...cart, newItem]);
  };
  return (
    <main className="container">
      <Header cartItem={cart} menuConfiguration={MenuConfiguration} />
      <Hero />
      <Products handleCartItems = {handleCartItems}/>
    </main>
  );
};

export default Homepage;
