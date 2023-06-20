import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ListOfCustomers from "./Components/ListOfCustomers";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Body />
      <ListOfCustomers />
      <Footer />
    </>
  );
}

export default App;
