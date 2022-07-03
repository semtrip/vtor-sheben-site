import React from "react";

import Header from "./components/header/header";
import Main from "./components/main/main";
import Advantages from "./components/advantages/advantages";
import Products from "./components/products/products";
import About from "./components/about/about";
import Partners from "./components/about/modules/partners/partners";
import BlockForm from "./components/forms/block-form";
import Links from "./components/links/links";
import Footer from "./components/footer/footer";

import './assets/scss/global.scss'

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Advantages/>
      <Products/>
      <About/>
      <Partners/>
      <BlockForm/>
      <Links/>
      <Footer/>
    </>
  );
}

export default App;
