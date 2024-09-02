import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Cards/Card";

function Main() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
    });
  }, []);
  return (
    <main className="main__section">
      {products &&
        products.map((item) => {
          return <Card item={item} />;
        })}
    </main>
  );
}
export default Main;
