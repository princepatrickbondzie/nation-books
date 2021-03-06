import { useEffect, useState } from "react";
import React from "react";
import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header/Header";
import ProductCart from "./Components/ProductCard";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setProducts(data.products);
    };
    fetchData();
  }, []);

  console.log(products);

  return (
    <div>
      <div>
        <Nav />
        <Header />
      </div>
      {products.map((product) => (
        <ProductCart product={product} />
      ))}
      {/* <ProductCart/> */}
    </div>
  );
};

export default ProductPage;
