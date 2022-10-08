import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import List from "./List";
import "./home.css";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <List />
      <Footer/>
    </div>
  );
};

export default Home;
