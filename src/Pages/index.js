import React, { useState } from "react";
import Navbar from "../Components/NaviBar";
import Product from "../Components/Product";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Main />
      <Navbar toggle={toggle} />
      <Product />
    </>
  );
};

export default Home;
