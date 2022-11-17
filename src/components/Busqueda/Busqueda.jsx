import {useEffect, useState} from "react";
import "./styles.css"

import api from "./api.ts";

function Busqueda() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    api.search(query).then(setProducts);
  }, [query]);

  return (
    <main>
      <h1>Tienda digitaloncy</h1>
      <input name="text" placeholder="tv" type="text" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        { products.length > 0 ? products.map((product) => (
          <li key={product.id} className={product.price <= 100 ? "sale" : ""}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <span>$ {product.price}</span>
          </li>
        )): <span>Loading...</span>}
      </ul>
    </main>
  );
}

export default Busqueda;
