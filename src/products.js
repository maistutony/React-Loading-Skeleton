import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSkeleton from "./LoadingSkeleton";
import ProductCard from "./ProductCard";
import { Row } from "react-bootstrap";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=8"
      );
      const data = await response.data;
      setProducts(data.products);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [products]);

  return (
  <div>
    {loading? <LoadingSkeleton/>: 
    (
      <Row>
        {products.map((item)=>
            <ProductCard key={item.id} product={item} />
        )}
      </Row>
    )}
  </div>
  )
}

export default Products;
