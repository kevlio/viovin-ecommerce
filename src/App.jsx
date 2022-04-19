import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductContainer from "./components/Product/ProductContainer";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viner" element={<ProductsPage/>} />
        <Route path="/product/:productId" element={<ProductContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
